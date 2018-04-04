using App.Models.DomainModels;
using Microsoft.Ajax.Utilities;
using NinjaNye.SearchExtensions;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using System.Data.Entity;

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

        public async Task<List<User>> GetUsersAsync(string searchQuery)
        {
            using (var db = new dbEntities())
            {
                var results = await db.person.Where(p => p.firstname.StartsWith(searchQuery)
                || p.lastname.StartsWith(searchQuery)).Select(p => new User
                {
                    cristinID = p.cristinID,
                    firstName = p.firstname,
                    lastName = p.lastname
                }).Take(10).ToListAsync();

                if (results.Count() < 10)
                {
                    int limit = 10 - results.Count();
                    results.AddRange(await db.person.Where(p =>
                    (p.firstname + " " + p.lastname).Contains(searchQuery))
                    .Select(p => new User
                    {
                        cristinID = p.cristinID,
                        firstName = p.firstname,
                        lastName = p.lastname
                    }).Take(limit).ToListAsync());
                    return results.DistinctBy(i => i.cristinID).ToList();
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

                var assosciations = db.tilhorighet.Where(a => a.cristinID == cristinID).FirstOrDefault();

                if (assosciations == null) { return null; }
        
                researcher.institution = assosciations.institusjon ?? "Ukjent";
                researcher.institute = assosciations.institutt ?? "Ukjent";
                researcher.position = assosciations.position != "null" ? assosciations.position : "Ukjent";
                return researcher;
            }
        }

        public async Task<List<Results>> GetSearchResultsAsync(string searchQuery)
        {
            if (searchQuery == "") { return null; }

            using (var db = new dbEntities())
            {
                var results = await db.person.Where(p => p.firstname.StartsWith(searchQuery)
                || p.lastname.StartsWith(searchQuery)).Select(p => new Results
                {
                    cristinID = p.cristinID,
                    firstName = p.firstname,
                    lastName = p.lastname,
                    affiliation = db.tilhorighet.Where(t => t.cristinID == p.cristinID).Select(a => new Affiliation
                    {
                        institute = a.institutt,
                        institution = a.institusjon,
                        position = a.position
                    }
                    ).FirstOrDefault()
                }).ToListAsync();

                if (results.Count() < 10)
                {
                    int limit = 10 - results.Count();
                    results.AddRange(await db.person.Where(p =>
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
                    }).Take(limit).ToListAsync());

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
        public async Task<List<Cloud>> GetWordCloudAsync(string cristinID)
        {
            using (var db = new dbEntities())
            {
                string[] colorArray = new string[3] { "#42a5f5", "#80d6ff", "#0077c2" };

                Random rnd = new Random();

                var cloud = await db.wordcloud.Where(wc => wc.cristinID == cristinID).Select(wc => new Cloud
                {
                    weight = (int)wc.count,
                    text = db.basewords.Where(bw => bw.key == wc.key)
                    .Select(bw => bw.baseword).FirstOrDefault() != null ? db.basewords.Where(bw => bw.key == wc.key)
                                                                    .Select(bw => bw.baseword).FirstOrDefault() :
                                                                    db.words.Where(bw => bw.key == wc.key)
                                                                    .Select(bw => bw.word).FirstOrDefault()

                }).ToListAsync();

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
        public async Task<List<UserMatch>> GetUserData(string cristinID)
        {
            using (var db = new dbEntities())
            {
                var matchedUsers = new List<UserMatch>();

                var currentUser = await db.wordcloud.Where(e => e.cristinID == cristinID)
                    .GroupBy(item => item.cristinID)
                    .Select(group => new
                    {
                        group.Key,
                        Items = group.OrderByDescending(e => e.count).Select(g => new { g.key }).ToList()
                    }).FirstOrDefaultAsync();

                if (currentUser == null) { return null; }

                var comparedUsers = await db.wordcloud.GroupBy(item => item.cristinID)
                      .Select(group => new
                      {
                          group.Key,
                          Items =
                          group.OrderByDescending(e => e.count).Select(g => new { g.key }).ToList()
                      }).ToListAsync();

                double x, y;
                foreach (var compared in comparedUsers)
                {
                    x = 0;
                    y = 0;
                    foreach (var i in compared.Items)
                    {
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

        public async Task<List<ResearcherRelevance>> GetResearcherRelevance(string cristinID)
        {
            List<UserMatch> userData = await GetUserData(cristinID);
            if (userData == null) { return null; }

            var researcherList = new List<ResearcherRelevance>();

            int counter = 0;
            using (var db = new dbEntities())
            {
                var currentAuthor = db.forfattere.Where(a => a.cristinID == cristinID);
                if (currentAuthor == null)
                {
                    return null;
                }
                string currentInstitution = await db.tilhorighet.Where(t => t.cristinID == cristinID)
                    .Select(t => t.institusjon).FirstOrDefaultAsync();
                if (currentInstitution == null)
                {
                    currentInstitution = "";
                }
                foreach (var user in userData)
                {
                    if (counter > 10) {

                        double max1 = userData.Max(e => e.similarities);
                        double min1 = userData.Min(e => e.similarities);


                        Debug.WriteLine(max1);
                        Debug.WriteLine(min1);
                        foreach(var i in researcherList)
                        {
               
                            i.similarities = (5-1)*(i.similarities - min1) / (max1 - min1) + 1;
                        }
                        return researcherList;


                    }
                    if ((db.forfattere.Where(a => !currentAuthor.Contains(a)).FirstOrDefault()) != null)
                    {
                        var researcher = GetResearcherInfo(user.cristinID);

                        if (researcher != null)
                        {
                            if (currentInstitution != researcher.institution)
                            {
                                ++counter;
                                researcherList.Add(new ResearcherRelevance
                                {
                                    firstName = researcher.firstName,
                                    lastName = researcher.lastName,
                                    institute = researcher.institute ?? "Ukjent",
                                    institution = researcher.institution ?? "Ukjent",
                                    position = researcher.position ?? "Ukjent",

                                    similarities = user.similarities
                                });
                            }
                        }
                    }
                }
                double max = userData.Max(e => e.similarities);
                double min = userData.Min(e => e.similarities);
                foreach (var i in researcherList)
                {
                    i.similarities = ((i.similarities - min) / (max - min) * 5) + 4;
                }
                return researcherList;
            }
        }

        public short? GetLegend(string cristinID)
        {
            using(var db = new dbEntities())
            {
                return db.titles.Where(e => e.cristinID == cristinID).Select(e=> e.titlesCount).FirstOrDefault();
            }
        }

        public async Task<ScatterPlot> GetScatterData(string cristinID)
        {
            List<UserMatch> userData = await GetUserData(cristinID);
            if (userData == null) { return null; }

            ScatterPlot scatterPlotData = new ScatterPlot();
            List<rows> rowList = new List<rows>();

            Random random = new Random();

            using (var db = new dbEntities())
            {
                string mainPosition = await db.tilhorighet.Where(t => t.cristinID == cristinID)
                    .Select(t => t.position).FirstOrDefaultAsync();

                if (mainPosition == null) return null;

                string mainColor = "#ffbd45";

                User mainUser = await db.person.Where(p => p.cristinID == cristinID)
                    .Select(e => new User { firstName = e.firstname, lastName = e.lastname })
                    .FirstOrDefaultAsync();

                var mainRank = await db.rank.Where(r => r.cristinID == cristinID)
                    .Select(r => new { publications = r.publikasjoner, quality = r.kvalitet }).FirstOrDefaultAsync();

                if (mainRank.publications == null || mainRank.quality == null || mainUser == null) { return null; }

                foreach (var match in userData)
                {
                    string position = await db.tilhorighet.
                        Where(t => t.cristinID == match.cristinID).Select(t => t.position)
                        .FirstOrDefaultAsync();

                    var rank = await db.rank.Where(r => r.cristinID == match.cristinID)
                        .Select(r => new { publications = r.publikasjoner, quality = r.kvalitet }).FirstOrDefaultAsync();

                    if (position == null) { continue; }

                    string color = position == "Professor" || position == "Professor ii" ? "#0077c2" : "#80d6ff";

                    User user = await db.person.Where(p => p.cristinID == match.cristinID)
                        .Select(e => new User { firstName = e.firstname, lastName = e.lastname })
                        .FirstOrDefaultAsync();

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
    }
}