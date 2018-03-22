using App.Models.DomainModels;
using NinjaNye.SearchExtensions;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

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
                var searchResult = db.person.Search(x => x.firstname, x => x.lastname).StartsWith(searchQuery)
                    .Select(x => new User { cristinID = x.cristinID, firstName = x.firstname, lastName = x.lastname }).ToList();

                int counter = 0;
                int skip = 0;

                if (searchResult.Count() < 10 )
                {
                    counter = searchResult.Count();
                    while (counter <= 10)
                    {
                        var containResult = db.person.Search(x => x.firstname, x => x.lastname).Containing(searchQuery)
                        .Select(x => new User { cristinID = x.cristinID, firstName = x.firstname, lastName = x.lastname }).FirstOrDefault();

                        if (containResult == null)
                        {
                            Debug.WriteLine("1");
                            return searchResult;
                           
                        }
                        if(searchResult.Any(x => x.cristinID == containResult.cristinID))
                        {
                            Debug.WriteLine("2");
                            ++counter;
                            ++skip;
                            continue; }

                        searchResult.Add(containResult);
                        Debug.WriteLine("3");
                        ++counter;
                        ++skip;
                    }
                    return searchResult;
                }
                return searchResult;
                //return db.person.Search(x => x.firstname, x => x.lastname).Containing(searchQuery)
                //    .Select(x => new User { firstname = x.firstname, lastname = x.lastname }).ToList();

                //return db.person.Select(p => new User { firstname = p.firstname, lastname = p.lastname}).ToList();
            }
        }

        public List<User> GetAllUsers()
        {
            using (var db = new dbEntities())
            {
                return db.person.Select(u => new User { cristinID = u.cristinID, firstName = u.firstname, lastName = u.lastname }).Take(10).ToList();
            }
        }

        public Researcher GetResearcherData(string cristinID)
        {
            using (var db = new dbEntities())
            {
                Researcher researcher = db.person.Where(p => p.cristinID == cristinID)
                    .Select(r => new Researcher
                    {
                        firstName = r.firstname,
                        lastName = r.lastname
                    }).FirstOrDefault();

                var assosciation = db.association.Where(a => a.cristinID == cristinID).FirstOrDefault();
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
        public List<Cloud> GetWordCloud(string cristinID)
        {
            using (var db = new dbEntities())
            {
                string[] color = new string[3] { "#42a5f5", "#80d6ff", "#0077c2" };

                Random rnd = new Random();

                return db.wordcloud.Where(wc => wc.cristinID == cristinID).Select(wc => new Cloud
                {
                    weight = (int)wc.count,
                    word = db.words.Where(w => w.key == wc.key).Select(w => w.word).FirstOrDefault(),
                    color = color[rnd.Next(0, 3)]
                }).ToList();
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
        public List<UserMatch> GetUserData(string cristinID)
        {
            using (var db = new dbEntities())
            {
                List<UserMatch> matchedUsers = new List<UserMatch>();

                List<int> currentUser = db.wordcloud.Where(e => e.cristinID == cristinID).Select(e => e.key).ToList();
                if (currentUser.Count() <= 0)
                {
                    return null; // inactive
                }

                var person = db.wordcloud.Where(e => e.cristinID == cristinID).GroupBy(item => item.cristinID)
                      .Select(group => new { group.Key, Items = group.ToList() }).FirstOrDefault();

                var cloud = db.wordcloud.GroupBy(item => item.cristinID)
                      .Select(group => new { group.Key, Items = group.ToList() }).ToList();

                double matchBonus = 0;

                // Regler:
                // Dersom en bruker har en ord match med gitt person, blir man tildelt minst 1 bonus
                // Dersom ordet forekommer hyppig til den gitte brukeren kan man få ekstra bonuser
                // ! Resultatet er at vi får matchet mer relevante folk innenfor fagfeltet
                // Man er en match med gitt bruker dersom man får en 50% i bonus systemet

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
                }
                return matchedUsers;
            }
        }

        public List<ResearcherRelevance> GetResearcherRelevance(string cristinID)
        {
            List<UserMatch> matchedData = this.GetUserData(cristinID);
            if (matchedData == null) { return null; }

            var researcherList = new List<ResearcherRelevance>();

            using (var db = new dbEntities())
            {
                foreach (var user in matchedData)
                {
                    var researcher = GetResearcherData(user.cristinID);
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

        public ScatterPlot GetScatterData(string cristinID)
        {
            List<UserMatch> matchedData = this.GetUserData(cristinID);
            if (matchedData == null) { return null; }

            ScatterPlot scatterPlotData = new ScatterPlot();
            List<rows> rowList = new List<rows>();

            Random random = new Random();
            int randomNumber = random.Next(0, 100);

            using (var db = new dbEntities())
            {
                string mainPosition = db.association.Where(t => t.cristinID == cristinID)
                    .Select(t => t.position).FirstOrDefault();

                if (mainPosition == null) return null;

                string mainColor = "#fb8c00";

                User mainUser = db.person.Where(p => p.cristinID == cristinID)
                    .Select(e => new User { firstName = e.firstname, lastName = e.lastname })
                    .FirstOrDefault();

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
                    string position = db.association.
                        Where(t => t.cristinID == match.cristinID).Select(t => t.position)
                        .FirstOrDefault();

                    if (position == null) { continue; }

                    string color = position == "Professor" ? "#ffbd45" : "#80d6ff";

                    User user = db.person.Where(p => p.cristinID == match.cristinID)
                        .Select(e => new User { firstName = e.firstname, lastName = e.lastname })
                        .FirstOrDefault();

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