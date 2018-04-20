using App.Models.DomainModels;
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

namespace App.Models
{
    public class ApiRepository : iApiRepository
    {
        public List<User> GetUsers(string searchQuery)
        {
            using (var db = new dbEntities())
            {
                var results = db.person.Where(p => p.firstname.StartsWith(searchQuery)
                || p.lastname.StartsWith(searchQuery)).Select(p => new User
                {
                    cristinID = p.cristinID,
                    firstName = p.firstname,
                    lastName = p.lastname
                }).Take(10).ToList();

                if (results.Count() < 10)
                {
                    int limit = 10 - results.Count();

                    results.AddRange(db.person.Where(p =>

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
                    var assosciation = db.tilhorighet.Where(e => e.cristinID == user.cristinID)
                        .Select(e => new { pos = e.position, ins = e.institusjon })
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
                var results = db.person.Where(p => p.firstname.StartsWith(searchQuery)
                  || p.lastname.StartsWith(searchQuery)).Select(p => new Results
                  {
                      cristinID = p.cristinID,
                      firstName = p.firstname,
                      lastName = p.lastname
                  }).Take(100).ToList();


                if (results.Count() < 10)
                {
                    int limit = 10 - results.Count();
                    results.AddRange(db.person.Where(p =>
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
                    var assosciation = db.tilhorighet.Where(e => e.cristinID == user.cristinID)
                        .Select(e => new { position = e.position, institution = e.institusjon, institute = e.institutt })
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
                    .ToList().OrderByDescending(x => filter.IndexOf(x.position)).FirstOrDefault();

                if (assosciations == null) { return null; }

                researcher.institution = assosciations.institusjon ?? "Ukjent";
                researcher.institute = assosciations.institutt ?? "Ukjent";
                researcher.position = assosciations.position ?? "Ukjent";
                return researcher;
            }
        }


        public List<Cloud> GetWordCloud(string cristinID)
        {
            using (var db = new dbEntities())
            {
                string[] colorArray = new string[3] { "#42a5f5", "#80d6ff", "#0077c2" };

                Random rnd = new Random();

                var cloud = db.wordcloud.Where(wc => wc.cristinID == cristinID)
                    .Select(wc => new Cloud
                    {
                        weight = (int)wc.count,
                        text = db.basewords.Where(bw => bw.key == wc.key)
                               .Select(bw => bw.baseword).FirstOrDefault() ?? db.words.Where(bw => bw.key == wc.key)
                               .Select(bw => bw.word).FirstOrDefault()

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

                var currentUser = db.wordcloud.Where(e => e.cristinID == cristinID)
                    .GroupBy(item => item.cristinID)
                    .Select(group => new
                    {
                        group.Key,
                        Items = group.OrderByDescending(e => e.count).Select(g => new { g.key }).ToList()
                    }).FirstOrDefault();

                if (currentUser == null) { return null; }

                var comparedUsers = db.wordcloud.GroupBy(item => item.cristinID)
                      .Select(group => new
                      {
                          group.Key,
                          Items =
                          group.OrderByDescending(e => e.count).Select(g => new { g.key }).ToList()
                      }).ToList();

                double x, y;
                var filter = GetFilter();
                foreach (var compared in comparedUsers)
                {
                    cancellationToken.ThrowIfCancellationRequested();

                    x = 0;
                    y = 0;
                    foreach (var i in compared.Items)
                    {
                        if (currentUser.Key == compared.Key) { continue; }

                        switch (currentUser.Items.FindIndex(e => e.key == i.key))
                        {
                            case -1:
                                break;
                            case 1:
                                switch (compared.Items.FindIndex(e => e.key == i.key))
                                {
                                    case -1: x = 0; break;
                                    case 1: y = 1.0; break;
                                    case 2: y = 1.1; break;
                                    case 3: y = 1.2; break;
                                    case 4: y = 1.3; break;
                                    case 5: y = 1.4; break;
                                    case 6: y = 1.5; break;
                                    case 7: y = 1.6; break;
                                    case 8: y = 1.7; break;
                                    case 9: y = 1.8; break;
                                    default: y = 1.9; break;
                                }
                                x += 10 / y;
                                break;
                            case 2:
                                switch (compared.Items.FindIndex(e => e.key == i.key))
                                {
                                    case -1: x = 0; break;
                                    case 1: y = 1.0; break;
                                    case 2: y = 1.1; break;
                                    case 3: y = 1.2; break;
                                    case 4: y = 1.3; break;
                                    case 5: y = 1.4; break;
                                    case 6: y = 1.5; break;
                                    case 7: y = 1.6; break;
                                    case 8: y = 1.7; break;
                                    case 9: y = 1.8; break;
                                    default: y = 1.9; break;
                                }
                                x += 9 / y;
                                break;
                            case 3:
                                switch (compared.Items.FindIndex(e => e.key == i.key))
                                {
                                    case -1: x = 0; break;
                                    case 1: y = 1.0; break;
                                    case 2: y = 1.1; break;
                                    case 3: y = 1.2; break;
                                    case 4: y = 1.3; break;
                                    case 5: y = 1.4; break;
                                    case 6: y = 1.5; break;
                                    case 7: y = 1.6; break;
                                    case 8: y = 1.7; break;
                                    case 9: y = 1.8; break;
                                    default: y = 1.9; break;
                                }
                                x += 8 / y;
                                break;
                            case 4:
                                switch (compared.Items.FindIndex(e => e.key == i.key))
                                {
                                    case -1: x = 0; break;
                                    case 1: y = 1.0; break;
                                    case 2: y = 1.1; break;
                                    case 3: y = 1.2; break;
                                    case 4: y = 1.3; break;
                                    case 5: y = 1.4; break;
                                    case 6: y = 1.5; break;
                                    case 7: y = 1.6; break;
                                    case 8: y = 1.7; break;
                                    case 9: y = 1.8; break;
                                    default: y = 1.9; break;
                                }
                                x += 7 / y;
                                break;
                            case 5:
                                switch (compared.Items.FindIndex(e => e.key == i.key))
                                {
                                    case -1: x = 0; break;
                                    case 1: y = 1.0; break;
                                    case 2: y = 1.1; break;
                                    case 3: y = 1.2; break;
                                    case 4: y = 1.3; break;
                                    case 5: y = 1.4; break;
                                    case 6: y = 1.5; break;
                                    case 7: y = 1.6; break;
                                    case 8: y = 1.7; break;
                                    case 9: y = 1.8; break;
                                    default: y = 1.9; break;
                                }
                                x += 6 / y;
                                break;
                            case 6:
                                switch (compared.Items.FindIndex(e => e.key == i.key))
                                {
                                    case -1: x = 0; break;
                                    case 1: y = 1.0; break;
                                    case 2: y = 1.1; break;
                                    case 3: y = 1.2; break;
                                    case 4: y = 1.3; break;
                                    case 5: y = 1.4; break;
                                    case 6: y = 1.5; break;
                                    case 7: y = 1.6; break;
                                    case 8: y = 1.7; break;
                                    case 9: y = 1.8; break;
                                    default: y = 1.9; break;
                                }
                                x += 5 / y;
                                break;
                            case 7:
                                switch (compared.Items.FindIndex(e => e.key == i.key))
                                {
                                    case -1: x = 0; break;
                                    case 1: y = 1.0; break;
                                    case 2: y = 1.1; break;
                                    case 3: y = 1.2; break;
                                    case 4: y = 1.3; break;
                                    case 5: y = 1.4; break;
                                    case 6: y = 1.5; break;
                                    case 7: y = 1.6; break;
                                    case 8: y = 1.7; break;
                                    case 9: y = 1.8; break;
                                    default: y = 1.9; break;
                                }
                                x += 4 / y;

                                break;
                            case 8:
                                switch (compared.Items.FindIndex(e => e.key == i.key))
                                {
                                    case -1: x = 0; break;
                                    case 1: y = 1.0; break;
                                    case 2: y = 1.1; break;
                                    case 3: y = 1.2; break;
                                    case 4: y = 1.3; break;
                                    case 5: y = 1.4; break;
                                    case 6: y = 1.5; break;
                                    case 7: y = 1.6; break;
                                    case 8: y = 1.7; break;
                                    case 9: y = 1.8; break;
                                    default: y = 1.9; break;
                                }
                                x += 3 / y;
                                break;
                            case 9:
                                switch (compared.Items.FindIndex(e => e.key == i.key))
                                {
                                    case -1: x = 0; break;
                                    case 1: y = 1.0; break;
                                    case 2: y = 1.1; break;
                                    case 3: y = 1.2; break;
                                    case 4: y = 1.3; break;
                                    case 5: y = 1.4; break;
                                    case 6: y = 1.5; break;
                                    case 7: y = 1.6; break;
                                    case 8: y = 1.7; break;
                                    case 9: y = 1.8; break;
                                    default: y = 1.9; break;
                                }
                                x += 2 / y;
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
                    var person = db.person.Where(p => p.cristinID == researcher.cristinID)
                                  .Select(p => new
                                  {
                                      firstName = p.firstname,
                                      lastName = p.lastname
                                  }).FirstOrDefault();


                    researcher.firstName = person.firstName;

                    researcher.lastName = person.lastName;

                    if (researcher != null)
                    {
                        var assosciations = db.tilhorighet.Where(t => t.cristinID == researcher.cristinID)
                            .ToList().OrderByDescending(comp => filter.IndexOf(comp.position)).FirstOrDefault();

                        if (assosciations != null)
                        {
                            researcher.institution = assosciations.institusjon ?? "Ukjent";
                            researcher.institute = assosciations.institutt ?? "Ukjent";
                            researcher.position = assosciations.position ?? "Ukjent";
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
                var currentPapers = db.forfattere.Where(a => a.cristinID == cristinID)
                    .Select(e => e.forskningsID).ToList();

                if (currentPapers == null) { return null; }

                var currentInstitutions = db.tilhorighet.Where(t => t.cristinID == cristinID)
                                          .Select(t => t.institusjon).ToList();

                foreach (var similar in similarResearchers)
                {
                    cancellationToken.ThrowIfCancellationRequested();

                    // sjekker om de har jobbet sammen
                    similar.neutrality = db.forfattere.Where(a => a.cristinID == similar.cristinID && currentPapers.Contains(a.forskningsID) == true)
                        .FirstOrDefault() != null ? true : false;

                    // sjekker om de har jobbet på samme institusjon
                    similar.enviroment = db.tilhorighet.Where(a => a.cristinID == similar.cristinID && currentInstitutions.Contains(a.institusjon) == true)
                                         .FirstOrDefault() != null ? true : false;

                    // normaliserer dataen til intervallet [1,5]
                    similar.similarities = (4) * (similar.similarities - MIN) / (MAX - MIN) + 1;
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
                var mainPosition = db.tilhorighet.Where(e => e.cristinID == cristinID).Select(t => new { t.position, t.institusjon })
                    .ToList().OrderByDescending(x => filter.IndexOf(x.position)).FirstOrDefault();

                if (mainPosition == null) return null;

                string mainColor = "#ffbd45";

                User mainUser = db.person.Where(p => p.cristinID == cristinID)
                    .Select(e => new User { firstName = e.firstname, lastName = e.lastname })
                    .FirstOrDefault();

                var mainRank = db.rank.Where(r => r.cristinID == cristinID)
                    .Select(r => new { publications = r.publikasjoner, quality = r.kvalitet }).FirstOrDefault();

                if (mainRank.publications == null || mainRank.quality == null || mainUser == null) { return null; }

                foreach (var match in userData)
                {
                    cancellationToken.ThrowIfCancellationRequested();
                    var rank = db.rank.Where(r => r.cristinID == match.cristinID)
                        .Select(r => new { publications = r.publikasjoner, quality = r.kvalitet }).FirstOrDefault();

                    string color = match.position == "Professor" ||
                                   match.position == "Professor ii" ||
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
                        new c { v = mainRank.publications+"", f = mainPosition.position + ", " + mainPosition.institusjon},
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
                return db.titles.Where(e => e.cristinID == cristinID).Select(e => e.titlesCount).FirstOrDefault();
            }
        }

        private List<string> GetFilter()
        {
            return new List<string>
            {
                "Vitenskapelig ass","Spesialistkandidat", "Stipendiat","Høgskolelektor","Universitetslektor","Instituttleder",
                "Forsker","Forsker iii", "Postdoktor","Førstelektor","Seniorforsker", "Forsker ii",
                "Dosent","Professor ii","Forsker i","Forskningsjef", "Professor", "Professor emeritus"
            };
        }
    }
}
