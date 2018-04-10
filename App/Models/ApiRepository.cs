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
        /*
         * ----------------------------------------------------------------------
         * Autocomplete
         * ----------------------------------------------------------------------
         * Json
         * [
         *      {"cristinID":"1","firstname":"Yvonne","lastname":"Andersson"},
         *      {"cristinID":"10","firstname":"Bedada Mergo","lastname":"Egne"}
         * ];
         */

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
                    var temp = db.tilhorighet.Where(e => e.cristinID == user.cristinID)
                        .Select(e => new { pos = e.position, ins = e.institusjon })
                        .ToList().OrderByDescending(x => filter.IndexOf(x.pos)).FirstOrDefault();

                    if (temp != null)
                    {
                        user.position = temp.pos;
                        user.institution = temp.ins;
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
                researcher.position = assosciations.position != "null" ? assosciations.position : "Ukjent";
                return researcher;
            }
        }

        public List<Results> GetSearchResults(string searchQuery)
        {
            if (searchQuery == "") { return null; }

            using (var db = new dbEntities())
            {
                var results = db.person.Where(p => p.firstname.StartsWith(searchQuery)
               || p.lastname.StartsWith(searchQuery)).Select(p => new Results
               {
                   cristinID = p.cristinID,
                   firstName = p.firstname,
                   lastName = p.lastname,
                   affiliation = db.tilhorighet.Where(t => t.cristinID == p.cristinID)
                   .Select(a => new Affiliation
                   {
                       institute = a.institutt,
                       institution = a.institusjon,
                       position = a.position
                   }
                   ).FirstOrDefault()
               }).ToList();

                if (results.Count() < 10)
                {
                    int limit = 10 - results.Count();
                    results.AddRange(db.person.Where(p =>
                    (p.firstname + " " + p.lastname).Contains(searchQuery))
                    .Select(p => new Results
                    {
                        cristinID = p.cristinID,
                        firstName = p.firstname,
                        lastName = p.lastname,
                        affiliation = db.tilhorighet.Where(t => t.cristinID == p.cristinID).Select(a => new Affiliation
                        {
                            institute = a.institutt,
                            institution = a.institusjon,
                            position = a.position
                        }).FirstOrDefault()
                    }).Take(limit).ToList());

                    results.DistinctBy(i => i.cristinID).ToList();
                    if (results.Count() <= 0)
                    {
                        return null;
                    }
                    return results;
                }
                return results;
            }
        }



        /*
         * ----------------------------------------------------------------------
         * Wordcloud
         * ----------------------------------------------------------------------
         * Json
         *       [
         *       {"wordCount":15,"word":"strategi"},
         *       {"wordCount":22,"word":"imag"},
         *       {"wordCount":5,"word":"task"},
         *       {"wordCount":13,"word":"student"},
         *       {"wordCount":6,"word":"tempor"},
         *       ];
         */
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

        /*
         * ----------------------------------------------------------------------
         * User Data
         * ----------------------------------------------------------------------
         * Json
         *       [
         *       {"cristinID":"1267","percentage":53},
         *       {"cristinID":"13159","percentage":71},
         *       {"cristinID":"13240","percentage":71},
         *       {"cristinID":"13371","percentage":59},
         *       {"cristinID":"17600","percentage":55},
         *       {"cristinID":"18817","percentage":58},
         *       {"cristinID":"25102","percentage":58},
         *       {"cristinID":"25444","percentage":54},
         *       {"cristinID":"26902","percentage":55},
         *       {"cristinID":"29530","percentage":53},
         *       {"cristinID":"645051","percentage":70}
         *       ]
         */
        public List<UserMatch> GetUserData(string cristinID, CancellationToken cancellationToken)
        {


            using (var db = new dbEntities())
            {
                var matchedUsers = new List<UserMatch>();

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
                    matchedUsers.Add(new UserMatch { cristinID = compared.Key, similarities = x });
                }
                return matchedUsers.OrderByDescending(e => e.similarities).Take(100).ToList();
            }
        }

        public List<ResearcherRelevance> GetResearcherRelevance(string cristinID, CancellationToken cancellationToken)
        {
            List<UserMatch> userData = new List<UserMatch>();
            try
            {
                userData = GetUserData(cristinID, cancellationToken);
            }
            catch
            {
                throw;
            }
            if (userData == null) { return null; }

            var researcherList = new List<ResearcherRelevance>();

            using (var db = new dbEntities())
            {
                var currentPapers = db.forfattere.Where(a => a.cristinID == cristinID).Select(e => e.forskningsID).ToList();
                if (currentPapers == null)
                {
                    return null;
                }
                var currentInstitutions = db.tilhorighet.Where(t => t.cristinID == cristinID)
                     .Select(t => t.institusjon).ToList();

                foreach (var user in userData)
                {
                    cancellationToken.ThrowIfCancellationRequested();

                    var researcher = GetResearcherInfo(user.cristinID);

                    if (researcher != null)
                    {
                        var comp = db.forfattere.Where(a => a.cristinID == user.cristinID)
                            .Select(e => e.forskningsID).ToList();


                        ResearcherRelevance newResearcher = null;
                        if (currentPapers.Where(a => comp.Contains(a)).FirstOrDefault() != null)
                        {

                            newResearcher = new ResearcherRelevance
                            {
                                cristinID = user.cristinID,
                                firstName = researcher.firstName,
                                lastName = researcher.lastName,
                                institute = researcher.institute ?? "Ukjent",
                                institution = researcher.institution ?? "Ukjent",
                                position = researcher.position ?? "Ukjent",
                                similarities = user.similarities,
                                neutrality = false
                            };
                        }
                        else
                        {
                            newResearcher = new ResearcherRelevance
                            {
                                cristinID = user.cristinID,
                                firstName = researcher.firstName,
                                lastName = researcher.lastName,
                                institute = researcher.institute ?? "Ukjent",
                                institution = researcher.institution ?? "Ukjent",
                                position = researcher.position ?? "Ukjent",
                                similarities = user.similarities,
                                neutrality = true
                            };
                        }

                        var comparedInstitutions = db.tilhorighet.Where(t => t.cristinID == user.cristinID).Select(t => t.institusjon).ToList();
                        newResearcher.enviroment = currentInstitutions.Where(cur => comparedInstitutions.Contains(cur)).FirstOrDefault() != null ? true : false;
                        researcherList.Add(newResearcher);
                    }
                }

                foreach (var researcher in researcherList)
                {
                    researcher.similarities = (5 - 1) * (researcher.similarities - userData.Min(e => e.similarities))
                                     / (userData.Max(e => e.similarities) - userData.Min(e => e.similarities)) + 1;
                }
                return researcherList;
            }
        }

        public ScatterPlot GetScatterData(string cristinID, CancellationToken cancellationToken)
        {
            List<UserMatch> userData = new List<UserMatch>();
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
            var random = new Random();

            using (var db = new dbEntities())
            {
                var filter = GetFilter();
                string mainPosition = db.tilhorighet.Where(e => e.cristinID == cristinID).Select(t => t.position)
                    .ToList().OrderByDescending(x => filter.IndexOf(x)).FirstOrDefault();

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
                    string position = db.tilhorighet.Where(e => e.cristinID == match.cristinID).Select(t => t.position)
                        .ToList().OrderByDescending(x => filter.IndexOf(x)).FirstOrDefault();
                    var rank = db.rank.Where(r => r.cristinID == match.cristinID)
                        .Select(r => new { publications = r.publikasjoner, quality = r.kvalitet }).FirstOrDefault();

                    if (position == null) { continue; }

                    string color = position == "Professor" || position == "Professor ii" ? "#0077c2" : "#80d6ff";

                    User user = db.person.Where(p => p.cristinID == match.cristinID)
                        .Select(e => new User { firstName = e.firstname, lastName = e.lastname })
                        .FirstOrDefault();

                    if (user == null) { continue; }

                    rowList.Add(new rows
                    {
                        c = new List<c>{
                            new c { v = rank.quality, f = user.firstName + " " + user.lastName },
                            new c { v = rank.publications+"", f = position },
                            new c { v = color, f = null }
                        }
                    });
                }

                //main
                rowList.Add(new rows
                {
                    c = new List<c>{
                        new c { v = mainRank.quality , f = mainUser.firstName + " " + mainUser.lastName },
                        new c { v = mainRank.publications+"", f = mainPosition },
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
