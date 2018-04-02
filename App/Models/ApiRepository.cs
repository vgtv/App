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

                var assosciations = await db.tilhorighet.Where(a => a.cristinID == cristinID).FirstOrDefaultAsync();
                researcher.institution = assosciations.institusjon;
                researcher.institute = assosciations.institutt;
                researcher.position = assosciations.position;
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

                    //text = db.words.Where(bw => bw.key == wc.key).Select(bw => bw.word).FirstOrDefault()
                }).ToListAsync();

                if (cloud.Count() <= 0)
                {
                    return null;
                }

                int max = cloud.Max(c => c.weight);
                int min = cloud.Min(c => c.weight);

                foreach (var word in cloud)
                {
                    double forste = word.weight - min;
                    double andre = max - min;
                    double resultat = (forste / andre * 9) + 1;
                    word.weight = (int)resultat;
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

                var currentUser = await db.wordcloud.Where(e => e.cristinID == cristinID).GroupBy(item => item.cristinID)
                      .Select(group => new { group.Key, Items = group.ToList() }).FirstOrDefaultAsync();

                if (currentUser == null) { return null; }
                var comparedUsers = await db.wordcloud.GroupBy(item => item.cristinID)
                      .Select(group => new { group.Key, Items = group.ToList() }).ToListAsync();

                double fraction;
                foreach (var comparedUser in comparedUsers)
                {
                    fraction = 0;
                    foreach (var compared in comparedUser.Items)
                    {
                        foreach (var current in currentUser.Items)
                        {
                            if (current.cristinID == compared.cristinID) { continue; }
                            if (current.key == compared.key)
                            {
                                if (current.count > 1 && current.count <= 5)
                                {
                                    ++fraction;
                                }
                                else if (current.count > 5 && current.count <= 10)
                                {
                                    fraction += 2;
                                }
                                else if (current.count > 10 && current.count <= 15)
                                {
                                    fraction += 3;
                                }
                                else if (current.count > 15 && current.count <= 20)
                                {
                                    fraction += 4;
                                }
                                else if (current.count > 20)
                                {
                                    fraction += 6;
                                }
                            }
                        }
                    }
                    var similarities = ((int)(0.5f + ((100f * fraction) / comparedUser.Items.Count())));
                    matchedUsers.Add(new UserMatch { cristinID = comparedUser.Key, similarities = similarities });
                }
                return matchedUsers.OrderByDescending(e => e.similarities).Take(100).ToList();
            }
        }

        public async Task<List<ResearcherRelevance>> GetResearcherRelevance(string cristinID)
        {
            List<UserMatch> matchedData = await GetUserData(cristinID);

            if (matchedData == null) { return null; }

            var researcherList = new List<ResearcherRelevance>();

            //posisjon kan være flere

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
                        relevance = user.similarities
                    });
                }
                return researcherList;
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
                // if (mainRank.publications == null || mainRank.quality ==null) { return null;  }


                if (mainUser == null) { return null; }

                rowList.Add(new rows
                {
                    c = new List<c>{
                        new c { v = mainRank.quality , f = mainUser.firstName + " " + mainUser.lastName },
                        new c { v = mainRank.publications+"", f = mainPosition },
                        new c { v = mainColor, f = null }
                        }
                });

                foreach (var match in userData)
                {
                    string position = await db.tilhorighet.
                        Where(t => t.cristinID == match.cristinID).Select(t => t.position)
                        .FirstOrDefaultAsync();

                    var rank = await db.rank.Where(r => r.cristinID == match.cristinID)
                        .Select(r => new { publications = r.publikasjoner, quality = r.kvalitet }).FirstOrDefaultAsync();

                    //if (mainRank.publications == null || mainRank.quality == null) { continue; }

                    if (position == null) { continue; }

                    string color = position == "Professor" ? "#0077c2" : "#80d6ff";

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