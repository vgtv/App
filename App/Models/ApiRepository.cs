﻿using App.Models.DomainModels;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Threading;
using App.Models.DomainModels.ScatterPlot;
using System.Text;
using System.Globalization;
using System.IO;
using CsvHelper;

namespace App.Models
{
    public class ApiRepository : iApiRepository
    {
        public List<User> GetUsers(string searchQuery)
        {
            using (var db = new dbEntities())
            {
                var results = db.person.AsNoTracking()
                              .Where(p => p.firstname.StartsWith(searchQuery)

                || p.lastname.StartsWith(searchQuery)).Select(p => new User
                {
                    cristinID = p.cristinID,
                    firstName = p.firstname,
                    lastName = p.lastname
                }).Take(10).ToList();

                if (results.Count() < 10)
                {
                    int limit = 10 - results.Count();

                    results.AddRange(db.person.AsNoTracking().Where(p =>

                    (p.firstname + " " + p.lastname).Contains(searchQuery))

                    .Select(p => new User
                    {
                        cristinID = p.cristinID,
                        firstName = p.firstname,
                        lastName = p.lastname
                    }).Take(limit).ToList());
                    results = results.DistinctBy(i => i.cristinID).ToList();
                }


                var filter = GetFilter();
                foreach (var user in results)
                {
                    var assosciation = db.tilhorighet.AsNoTracking().Where(e => e.cristinID == user.cristinID)
                        .Select(e => new { pos = e.posisjon, ins = e.institusjon })
                        .ToList().OrderByDescending(x => filter.IndexOf(x.pos)).FirstOrDefault();

                    if (assosciation != null)
                    {
                        user.position = assosciation.pos;
                        user.institution = assosciation.ins;
                    }

                }
                return results;
            }
        }


        public List<Results> GetSearchResults(string searchQuery)
        {
            using (var db = new dbEntities())
            {
                var results = db.person.AsNoTracking().Where(p => p.firstname.StartsWith(searchQuery)
                  || p.lastname.StartsWith(searchQuery)).Select(p => new Results
                  {
                      cristinID = p.cristinID,
                      firstName = p.firstname,
                      lastName = p.lastname
                  }).Take(100).ToList();


                if (results.Count() < 10)
                {
                    int limit = 10 - results.Count();
                    results.AddRange(db.person.AsNoTracking().Where(p =>
                    (p.firstname + " " + p.lastname).Contains(searchQuery))
                    .Select(p => new Results
                    {
                        cristinID = p.cristinID,
                        firstName = p.firstname,
                        lastName = p.lastname
                    }).Take(limit).ToList());
                    results = results.DistinctBy(i => i.cristinID).ToList();
                }

                var filter = GetFilter();
                foreach (var user in results)
                {
                    var assosciation = db.tilhorighet.AsNoTracking().Where(e => e.cristinID == user.cristinID)
                        .Select(e => new { position = e.posisjon, institution = e.institusjon, institute = e.institutt })
                        .ToList().OrderByDescending(x => filter.IndexOf(x.position)).FirstOrDefault();

                    if (assosciation != null)
                    {
                        user.affiliation = new Affiliation
                        {
                            position = assosciation.position,
                            institute = assosciation.institute,
                            institution = assosciation.institution
                        };
                    }
                }
                return results;
            }
        }

        public Researcher GetResearcherInfo(string cristinID)
        {
            using (var db = new dbEntities())
            {
                Researcher researcher = db.person.Where(p => p.cristinID == cristinID)
                    .Select(r => new Researcher
                    {
                        firstName = r.firstname,
                        lastName = r.lastname
                    }).FirstOrDefault();

                if (researcher == null) { return null; }

                var filter = GetFilter();
                var assosciations = db.tilhorighet.Where(e => e.cristinID == cristinID)
                    .ToList().OrderByDescending(x => filter.IndexOf(x.posisjon)).FirstOrDefault();

                if (assosciations == null) { return null; }

                researcher.institution = assosciations.institusjon ?? "Ukjent";
                researcher.institute = assosciations.institutt ?? "Ukjent";
                researcher.position = assosciations.posisjon ?? "Ukjent";
                return researcher;
            }
        }


        public List<Cloud> GetWordCloud(string cristinID)
        {
            using (var db = new dbEntities())
            {
                string[] colorArray = new string[3] { "#42a5f5", "#80d6ff", "#0077c2" };

                Random rnd = new Random();

                var cloud = db.ordsky.Where(os => os.cristinID == cristinID)
                    .Select(os => new Cloud
                    {
                        weight = (int)os.forekomster,
                        text = db.oppslagsord.Where(oo => oo.oppslagsordID == os.rotformID)
                               .Select(oo => oo.oppslagsord).FirstOrDefault() ?? db.rotform.Where(oo => oo.rotformID == os.rotformID)
                               .Select(oo => oo.rotform).FirstOrDefault()

                    }).ToList();

                if (cloud.Count() <= 0)
                {
                    return null;
                }

                int max = cloud.Max(c => c.weight);
                int min = cloud.Min(c => c.weight);

                foreach (var word in cloud)
                {
                    double numerator = word.weight - min;
                    double denomiator = max - min;
                    double fraction = (numerator / denomiator * 9) + 1;
                    word.weight = (int)fraction;
                }
                cloud.ForEach(c => c.color = colorArray[rnd.Next(0, 2)]);
                return cloud;
            }
        }

        public List<SimilarResearcher> GetUserData(string cristinID, CancellationToken cancellationToken)
        {
            using (var db = new dbEntities())
            {
                var matchedUsers = new List<SimilarResearcher>();

                var currentUser = db.ordsky.AsNoTracking().Where(e => e.cristinID == cristinID)
                    .GroupBy(item => item.cristinID)
                    .Select(group => new
                    {
                        group.Key,
                        Items = group.OrderByDescending(e => e.forekomster).ThenBy(e => e.rotformID).Select(g => g.rotformID).ToList()
                    }).FirstOrDefault();

                if (currentUser == null) { return null; }

                var comparedUsers = db.ordsky.AsNoTracking()
                    .GroupBy(item => item.cristinID)
                    .Select(group => new
                    {
                        group.Key,
                        Items = group.OrderByDescending(e => e.forekomster).ThenBy(e => e.rotformID).Select(g => g.rotformID).ToList()
                    }).ToList();

                int index;
                double x, y;
                var filter = GetFilter();
                foreach (var compared in comparedUsers)
                {
                    cancellationToken.ThrowIfCancellationRequested();

                    x = 0;
                    y = 0;

                    foreach (var comparedWord in compared.Items)
                    {
                        if (currentUser.Key == compared.Key) { continue; }
                        index = currentUser.Items.FindIndex(currentWords => currentWords == comparedWord);

                        switch (index)
                        {
                            case -1:
                                break;
                            case 1:
                                index = compared.Items.FindIndex(comparedWords => comparedWords == comparedWord);
                                switch (index)
                                {
                                    case 1: y = 10; break;
                                    case 2: y = 9; break;
                                    case 3: y = 8; break;
                                    case 4: y = 7; break;
                                    case 5: y = 6; break;
                                    case 6: y = 5; break;
                                    case 7: y = 4; break;
                                    case 8: y = 3; break;
                                    case 9: y = 2; break;
                                    default: y = 1; break;
                                }
                                x += (10 + y) / 2;
                                break;
                            case 2:
                                index = compared.Items.FindIndex(comparedWords => comparedWords == comparedWord);
                                switch (index)
                                {
                                    case 1: y = 10; break;
                                    case 2: y = 9; break;
                                    case 3: y = 8; break;
                                    case 4: y = 7; break;
                                    case 5: y = 6; break;
                                    case 6: y = 5; break;
                                    case 7: y = 4; break;
                                    case 8: y = 3; break;
                                    case 9: y = 2; break;
                                    default: y = 1; break;
                                }
                                x += (9 + y) / 2;
                                break;
                            case 3:
                                index = compared.Items.FindIndex(comparedWords => comparedWords == comparedWord);
                                switch (index)
                                {
                                    case 1: y = 10; break;
                                    case 2: y = 9; break;
                                    case 3: y = 8; break;
                                    case 4: y = 7; break;
                                    case 5: y = 6; break;
                                    case 6: y = 5; break;
                                    case 7: y = 4; break;
                                    case 8: y = 3; break;
                                    case 9: y = 2; break;
                                    default: y = 1; break;
                                }
                                x += (8 + y) / 2;
                                break;
                            case 4:
                                index = compared.Items.FindIndex(comparedWords => comparedWords == comparedWord);
                                switch (index)
                                {
                                    case 1: y = 10; break;
                                    case 2: y = 9; break;
                                    case 3: y = 8; break;
                                    case 4: y = 7; break;
                                    case 5: y = 6; break;
                                    case 6: y = 5; break;
                                    case 7: y = 4; break;
                                    case 8: y = 3; break;
                                    case 9: y = 2; break;
                                    default: y = 1; break;
                                }
                                x += (7 + y) / 2;
                                break;
                            case 5:
                                index = compared.Items.FindIndex(comparedWords => comparedWords == comparedWord);
                                switch (index)
                                {
                                    case 1: y = 10; break;
                                    case 2: y = 9; break;
                                    case 3: y = 8; break;
                                    case 4: y = 7; break;
                                    case 5: y = 6; break;
                                    case 6: y = 5; break;
                                    case 7: y = 4; break;
                                    case 8: y = 3; break;
                                    case 9: y = 2; break;
                                    default: y = 1; break;
                                }
                                x += (6 + y) / 2;
                                break;
                            case 6:
                                index = compared.Items.FindIndex(comparedWords => comparedWords == comparedWord);
                                switch (index)
                                {
                                    case 1: y = 10; break;
                                    case 2: y = 9; break;
                                    case 3: y = 8; break;
                                    case 4: y = 7; break;
                                    case 5: y = 6; break;
                                    case 6: y = 5; break;
                                    case 7: y = 4; break;
                                    case 8: y = 3; break;
                                    case 9: y = 2; break;
                                    default: y = 1; break;
                                }
                                x += (5 + y) / 2;
                                break;
                            case 7:
                                index = compared.Items.FindIndex(comparedWords => comparedWords == comparedWord);
                                switch (index)
                                {
                                    case 1: y = 10; break;
                                    case 2: y = 9; break;
                                    case 3: y = 8; break;
                                    case 4: y = 7; break;
                                    case 5: y = 6; break;
                                    case 6: y = 5; break;
                                    case 7: y = 4; break;
                                    case 8: y = 3; break;
                                    case 9: y = 2; break;
                                    default: y = 1; break;
                                }
                                x += (4 + y) / 2;

                                break;
                            case 8:
                                index = compared.Items.FindIndex(comparedWords => comparedWords == comparedWord);
                                switch (index)
                                {
                                    case 1: y = 10; break;
                                    case 2: y = 9; break;
                                    case 3: y = 8; break;
                                    case 4: y = 7; break;
                                    case 5: y = 6; break;
                                    case 6: y = 5; break;
                                    case 7: y = 4; break;
                                    case 8: y = 3; break;
                                    case 9: y = 2; break;
                                    default: y = 1; break;
                                }
                                x += (3 + y) / 2;
                                break;
                            case 9:
                                index = compared.Items.FindIndex(comparedWords => comparedWords == comparedWord);
                                switch (index)
                                {
                                    case 1: y = 10; break;
                                    case 2: y = 9; break;
                                    case 3: y = 8; break;
                                    case 4: y = 7; break;
                                    case 5: y = 6; break;
                                    case 6: y = 5; break;
                                    case 7: y = 4; break;
                                    case 8: y = 3; break;
                                    case 9: y = 2; break;
                                    default: y = 1; break;
                                }
                                x += (2 + y) / 2;
                                break;
                            default: ++x; break;
                        }
                    }
                    matchedUsers.Add(new SimilarResearcher { similarities = x, cristinID = compared.Key });
                }


                // tar ut de mest relevante i fagmiljøet
                var communityList = matchedUsers.OrderByDescending(e => e.similarities).Take(100).ToList();
                foreach (var researcher in communityList)
                {
                    var person = db.person.AsNoTracking().Where(p => p.cristinID == researcher.cristinID)
                                  .Select(p => new
                                  {
                                      firstName = p.firstname,
                                      lastName = p.lastname
                                  }).FirstOrDefault();


                    researcher.firstName = person.firstName;
                    researcher.lastName = person.lastName;

                    if (researcher != null)
                    {
                        var assosciations = db.tilhorighet.AsNoTracking().Where(t => t.cristinID == researcher.cristinID)
                            .ToList().OrderByDescending(comp => filter.IndexOf(comp.posisjon)).FirstOrDefault();

                        if (assosciations != null)
                        {
                            researcher.institution = assosciations.institusjon ?? "Ukjent";
                            researcher.institute = assosciations.institutt ?? "Ukjent";
                            researcher.position = assosciations.posisjon ?? "Ukjent";
                        }
                    }
                }
                return communityList;
            }
        }

        public List<SimilarResearcher> GetResearcherRelevance(string cristinID, CancellationToken cancellationToken)
        {
            var similarResearchers = new List<SimilarResearcher>();
            try
            {
                similarResearchers = GetUserData(cristinID, cancellationToken);
            }
            catch
            {
                throw;
            }
            if (similarResearchers == null) { return null; }

            double MAX = similarResearchers.Max(e => e.similarities);
            double MIN = similarResearchers.Min(e => e.similarities);

            using (var db = new dbEntities())
            {

                var currentPapers = db.forfattere.AsNoTracking().Where(a => a.cristinID == cristinID).DistinctBy(d => d.forskningsID)
                    .Select(e => e.forskningsID).ToList();

                var compotentResearchers = db.forfattere.AsNoTracking().Where(f => currentPapers.Contains(f.forskningsID)).DistinctBy(d => d.cristinID)
                    .Select(e => e.cristinID).ToList();

                if (currentPapers == null) { return null; }

                var currentInstitutions = db.tilhorighet.AsNoTracking().Where(t => t.cristinID == cristinID)
                                          .Select(t => t.institusjon).ToList();

                foreach (var researcher in similarResearchers)
                {
                    cancellationToken.ThrowIfCancellationRequested();

                    researcher.neutrality = compotentResearchers.Contains(researcher.cristinID) == true ? true : false;

                    // sjekker om de har jobbet på samme institusjon
                    researcher.enviroment = db.tilhorighet.AsNoTracking().Where(a => a.cristinID == researcher.cristinID && currentInstitutions
                                        .Contains(a.institusjon) == true)
                                        .FirstOrDefault() != null ? true : false;

                    // normaliserer dataen til intervallet [1,5]
                    researcher.similarities = (4) * (researcher.similarities - MIN) / (MAX - MIN) + 1;
                }
                return similarResearchers;
            }
        }

        public ScatterPlot GetScatterData(string cristinID, CancellationToken cancellationToken)
        {
            var userData = new List<SimilarResearcher>();
            try
            {
                userData = GetUserData(cristinID, cancellationToken);
            }
            catch
            {
                throw;
            }
            if (userData == null) { return null; }

            var scatterPlotData = new ScatterPlot();
            var rowList = new List<rows>();

            using (var db = new dbEntities())
            {
                var filter = GetFilter();
                var mainPosition = db.tilhorighet.AsNoTracking().Where(e => e.cristinID == cristinID).Select(t => new { t.posisjon, t.institusjon })
                    .ToList().OrderByDescending(x => filter.IndexOf(x.posisjon)).FirstOrDefault();

                if (mainPosition == null) return null;

                string mainColor = "#ffbd45";

                User mainUser = db.person.AsNoTracking().Where(p => p.cristinID == cristinID)
                    .Select(e => new User { firstName = e.firstname, lastName = e.lastname })
                    .FirstOrDefault();

                var mainRank = db.rank.AsNoTracking().Where(r => r.cristinID == cristinID)
                    .Select(r => new { publications = r.publikasjoner, quality = r.kvalitet }).FirstOrDefault();

                if (mainRank.publications == null || mainRank.quality == null || mainUser == null) { return null; }

                foreach (var match in userData)
                {
                    cancellationToken.ThrowIfCancellationRequested();
                    var rank = db.rank.AsNoTracking().Where(r => r.cristinID == match.cristinID)
                        .Select(r => new { publications = r.publikasjoner, quality = r.kvalitet }).FirstOrDefault();

                    string color = match.position == "Professor" ||
                                   match.position == "Professor ii" ||
                                   match.position == "Dosent" ||
                                   match.position == "Forsker i" ||
                                   match.position == "Professor emeritus" ? "#0077c2" : "#80d6ff";

                    rowList.Add(new rows
                    {
                        c = new List<c>{
                            new c { v = rank.quality, f = match.firstName + " " + match.lastName },
                            new c { v = rank.publications+"", f = match.position + ", " + match.institution },
                            new c { v = color, f = null }
                        }
                    });
                }

                //main
                rowList.Add(new rows
                {
                    c = new List<c>{
                        new c { v = mainRank.quality , f = mainUser.firstName + " " + mainUser.lastName },
                        new c { v = mainRank.publications+"", f = mainPosition.posisjon + ", " + mainPosition.institusjon},
                        new c { v = mainColor, f = null }
                        }
                });

                cols colums1 = new cols { id = "", label = "", pattern = "", type = "number" };
                cols colums2 = new cols { id = "", label = "", pattern = "", type = "number" };
                cols colums3 = new cols { id = "", role = "style", type = "string" };
                List<cols> columList = new List<cols> { colums1, colums2, colums3 };

                scatterPlotData.cols = columList;
                scatterPlotData.rows = rowList;
            }
            return scatterPlotData;
        }

        public short? GetLegend(string cristinID)
        {
            using (var db = new dbEntities())
            {
                return db.titler.AsNoTracking().Where(e => e.cristinID == cristinID).Select(e => e.antall).FirstOrDefault();
            }
        }

        private List<string> GetFilter()
        {
            return new List<string>
            {
                "Vitenskapelig ass","Spesialistkandidat", "Stipendiat","Høgskolelektor",
                "Universitetslektor","Instituttleder", "Førsteamanuensis",
                "Forsker","Forsker iii", "Postdoktor","Førstelektor","Seniorforsker", "Forsker ii",
                "Dosent","Professor ii","Forsker i", "Professor", "Professor emeritus"
            };
        }
    }
}
