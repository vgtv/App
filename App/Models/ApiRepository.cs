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
                }).ToListAsync();

                if (results.Count() < 10)
                {
                    results.AddRange(await db.person.Where(p =>
                    (p.firstname + " " + p.lastname).Contains(searchQuery))
                    .Select(p => new User
                    {
                        cristinID = p.cristinID,
                        firstName = p.firstname,
                        lastName = p.lastname
                    }).ToListAsync());
                    //return results.ToList();

                    return results.DistinctBy(i => i.cristinID).ToList();
                }
                return results;
            }
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            using (var db = new dbEntities())
            {
                return await db.person.Select(u => new User
                { cristinID = u.cristinID, firstName = u.firstname, lastName = u.lastname }).ToListAsync();
            }
        }

        public async Task<Researcher> GetResearcherDataAsync(string cristinID)
        {
            using (var db = new dbEntities())
            {
                Researcher researcher = await db.person.Where(p => p.cristinID == cristinID)
                    .Select(r => new Researcher
                    {
                        firstName = r.firstname,
                        lastName = r.lastname
                    }).FirstOrDefaultAsync();

                var assosciation = await db.tilhorighet.Where(a => a.cristinID == cristinID).FirstOrDefaultAsync();
                researcher.institution = assosciation.institusjon;
                researcher.institute = assosciation.institutt;
                researcher.institute = assosciation.position;
                return researcher;
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
                    .Select(bw => bw.baseword).FirstOrDefault() != null ?
                   db.basewords.Where(bw => bw.key == wc.key)
                    .Select(bw => bw.baseword).FirstOrDefault() :
                    db.words.Where(bw => bw.key == wc.key)
                    .Select(bw => bw.word).FirstOrDefault()

                    //text = db.words.Where(bw => bw.key == wc.key).Select(bw => bw.word).FirstOrDefault()
                }).ToListAsync();



                int max = cloud.Max(c => c.weight);
                int min = cloud.Min(c => c.weight);

                foreach (var obj in cloud)
                {
                    double forste = obj.weight - min;
                    double andre = max - min;
                    double resultat = (forste / andre * 9) + 1;
                    obj.weight = (int)resultat;
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

                List<int> currentUser = await db.wordcloud.Where(e => e.cristinID == cristinID)
                    .Select(e => e.key).ToListAsync();
                if (currentUser.Count() <= 0)
                {
                    return null; // inactive
                }

                var person = await db.wordcloud.Where(e => e.cristinID == cristinID).GroupBy(item => item.cristinID)
                      .Select(group => new { group.Key, Items = group.ToList() }).FirstOrDefaultAsync();

                var cloud = await db.wordcloud.GroupBy(item => item.cristinID)
                      .Select(group => new { group.Key, Items = group.ToList() }).ToListAsync();


                int counter = 0;
                for (int i = 0; i < cloud.Count; ++i)
                {
                    counter = 0;
                    for (int j = 0; j < cloud[i].Items.Count; ++j)
                    {
                        if (person.Items.Contains(cloud[i].Items[j]))
                        {
                            ++counter;
                        }
                    }
                    if (counter > 10)
                    {
                        matchedUsers.Add(new UserMatch { cristinID = cloud[i].Key, percentage = 100 });
                    }
                }
                return matchedUsers;

                /*
                double matchBonus = 0;
                foreach (var user in cloud)
                {
                    matchBonus = 0;
                    foreach (var item in user.Items)
                    {
                        foreach (var w in person.Items)
                        {
                            if (w.cristinID == item.cristinID) { continue; }

                            if (w.key == item.key)
                            {
                                if (w.count > 1 && w.count <= 5)
                                {
                                    ++matchBonus;
                                }
                                else if (w.count > 5 && w.count <= 10)
                                {
                                    matchBonus += 2;
                                }
                                else if (w.count > 10 && w.count <= 15)
                                {
                                    matchBonus += 3;
                                }
                                else if (w.count > 15 && w.count <= 20)
                                {
                                    matchBonus += 4;
                                }
                                else if (w.count > 20)
                                {
                                    matchBonus += 6;
                                }
                            }
                        }
                    }
                    var percentage = ((int)(0.5f + ((100f * matchBonus) / user.Items.Count())));
                    if (percentage > 50)
                    {
                        matchedUsers.Add(new UserMatch { cristinID = user.Key, percentage = percentage });
                    }
                    */
            }
        }

        public async Task<List<ResearcherRelevance>> GetResearcherRelevance(string cristinID)
        {
            List<UserMatch> matchedData = await GetUserData(cristinID);
            if (matchedData == null) { return null; }

            var researcherList = new List<ResearcherRelevance>();

            using (var db = new dbEntities())
            {
                foreach (var user in matchedData)
                {
                    var researcher = await GetResearcherDataAsync(user.cristinID);
                    researcherList.Add(new ResearcherRelevance
                    {
                        firstName = researcher.firstName,
                        lastName = researcher.lastName,
                        institute = researcher.institute,
                        institution = researcher.institution,
                        position = researcher.position,
                        relevance = user.percentage
                    });
                }
                return researcherList;
            }
        }

        public async Task<ScatterPlot> GetScatterData(string cristinID)
        {
            List<UserMatch> matchedData = await GetUserData(cristinID);
            if (matchedData == null) { return null; }

            ScatterPlot scatterPlotData = new ScatterPlot();
            List<rows> rowList = new List<rows>();

            Random random = new Random();
            int randomNumber = random.Next(0, 100);

            using (var db = new dbEntities())
            {
                string mainPosition = await db.tilhorighet.Where(t => t.cristinID == cristinID)
                    .Select(t => t.position).FirstOrDefaultAsync();

                if (mainPosition == null) return null;

                string mainColor = "#fb8c00";

                User mainUser = await db.person.Where(p => p.cristinID == cristinID)
                    .Select(e => new User { firstName = e.firstname, lastName = e.lastname })
                    .FirstOrDefaultAsync();

                if (mainUser == null) { return null; }

                rowList.Add(new rows
                {
                    c = new List<c>{
                        new c { v = random.Next(30, 150) +"", f = mainUser.firstName + " " + mainUser.lastName },
                        new c { v = random.Next(10, 100)+"", f = mainPosition },
                        new c { v = mainColor, f = null }
                        }
                });

                foreach (var match in matchedData)
                {
                    string position = await db.tilhorighet.
                        Where(t => t.cristinID == match.cristinID).Select(t => t.position)
                        .FirstOrDefaultAsync();

                    if (position == null) { continue; }

                    string color = position == "Professor" ? "#ffbd45" : "#80d6ff";

                    User user = await db.person.Where(p => p.cristinID == match.cristinID)
                        .Select(e => new User { firstName = e.firstname, lastName = e.lastname })
                        .FirstOrDefaultAsync();

                    if (user == null) { continue; }

                    rowList.Add(new rows
                    {
                        c = new List<c>{
                            new c { v = random.Next(30, 150)+"", f = user.firstName + " " + user.lastName },
                            new c { v = random.Next(10, 100)+"", f = position },
                            new c { v = color, f = null }
                        }
                    });
                }

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