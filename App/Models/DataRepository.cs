using NinjaNye.SearchExtensions;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace App.Models
{
    public class DataRepository
    {
        /*
         * ----------------------------------------------------------------------
         * Autocomplete
         * ----------------------------------------------------------------------
         * Json
         * [
         *      {"firstname":"Yvonne","lastname":"Andersson"},
         *      {"firstname":"Bedada Mergo","lastname":"Egne"}
         * ];
         */

        public List<User> GetUsers(string searchQuery)
        {
            using (var db = new dbEntities())
            {
                return db.person.Search(x => x.firstname, x => x.lastname).StartsWith(searchQuery)
                    .Select(x => new User { cristinID = x.cristinID, firstname = x.firstname, lastname = x.lastname }).ToList();

                //return db.person.Search(x => x.firstname, x => x.lastname).Containing(searchQuery)
                //    .Select(x => new User { firstname = x.firstname, lastname = x.lastname }).ToList();

                //return db.person.Select(p => new User { firstname = p.firstname, lastname = p.lastname}).ToList();
            }
        }

        public List<User> GetAllUsers()
        {
            using (var db = new dbEntities())
            {
                return db.person.Select(x => new User { cristinID = x.cristinID, firstname = x.firstname, lastname = x.lastname }).Take(100).ToList();
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
                return db.wordcloud.Where(wc => wc.cristinID == cristinID).Select(wc => new Cloud
                {
                    wordCount = wc.count,
                    word = db.words.Where(w => w.key == wc.key).Select(w => w.word).FirstOrDefault()
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
    }
}