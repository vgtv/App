using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using App.Models.DomainModels;
using App.Models.DomainModels.ScatterPlot;

namespace App.Models
{

    public class ApiRepositoryStub : iApiRepository
    {

        public Researcher GetResearcherInfo(string cristinID)
        {
            if (cristinID == "10" || cristinID == "100" || cristinID == "1000")
            {
                return new Researcher
                {
                    firstName = "Ola",
                    lastName = "Normann",
                    institute = "Informasjonsteknologi",
                    institution = "Oslo Met",
                    position = "Professor"
                };
            }
            else if (cristinID == "20")
            {
                return new Researcher
                {
                    firstName = "Ivar",
                    lastName = "Aasen",
                    institute = "Informasjonsteknologi",
                    institution = "Oslo Met",
                    position = "Professor"
                };
            }
            else
            {
                return null;
            }
        }

        public List<ResearcherRelevance> GetResearcherRelevance(string cristinID, CancellationToken cancellationToken)
        {
            var userData = GetUserData(cristinID, cancellationToken);
            if (userData == null)
            {
                return null;
            }

            var researcherList = new List<ResearcherRelevance>();

            List<string> currentPapers;
            List<string> currentInstitutions;

            if (cristinID == "10")
            {
                currentPapers = new List<string> { "1", "2", "3" };
                currentInstitutions = new List<string> { "OsloMet", "Westerdals" };
            }
            else if (cristinID == "100")
            {
                currentPapers = new List<string> { "5", "10", "12" };
                currentInstitutions = new List<string> { "OsloMet", "Westerdals" };
            }
            else // cristinID 1000
            {
                currentPapers = new List<string> { "5", "10", "12" };
                currentInstitutions = new List<string> { "UiO", "NTNU" };
            }

            foreach (var user in userData)
            {
                var researcher = GetResearcherInfo("20");

                if (researcher != null)
                {
                    var comparedArticles = new List<string> { "3", "2", "1" };

                    ResearcherRelevance newResearcher;
                    if (currentPapers.Where(a => comparedArticles.Contains(a)).FirstOrDefault() != null)
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


                    var comparedInstitutions = new List<string> { "OsloMet", "Westerdals" };
                    newResearcher.enviroment = currentInstitutions.Where(cur => comparedInstitutions.Contains(cur)).FirstOrDefault() != null ? true : false;
                    researcherList.Add(newResearcher);
                }


                foreach (var r in researcherList)
                {
                    r.similarities = (5 - 1) * (r.similarities - userData.Min(e => e.similarities))
                                     / (userData.Max(e => e.similarities) - userData.Min(e => e.similarities)) + 1;
                }
            }
            return researcherList;
        }

        public ScatterPlot GetScatterData(string cristinID, CancellationToken cancellationToken)
        {
            var userData = GetUserData(cristinID, cancellationToken);
            if (userData == null)
            {
                return null;
            }
            else
            {
                var scatterPlotData = new ScatterPlot();
                var rowList = new List<rows>();
                var random = new Random();

                string mainPosition = "Professor";
                string mainColor = "#ffbd45";

                User mainUser = new User { firstName = "Ola", lastName = "Normann" };
                string mainPublications = "10";
                string mainQuality = "10";

                foreach (var match in userData)
                {

                    string position;
                    if (cristinID == "10")
                    {
                        position = "Professor ii";
                    }
                    else
                    {
                        position = "Overlege";
                    }

                    string publications = "10";
                    string quality = "10";

                    string color = position == "Professor" || position == "Professor ii" ? "#0077c2" : "#80d6ff";

                    User user = new User() { firstName = "Ivar", lastName = "Aasen" };

                    rowList.Add(new rows
                    {
                        c = new List<c>{
                            new c { v = quality, f = user.firstName + " " + user.lastName },
                            new c { v = publications+"", f = position },
                            new c { v = color, f = null }
                        }
                    });
                }

                //main
                rowList.Add(new rows
                {
                    c = new List<c>{
                        new c { v = mainQuality , f = mainUser.firstName + " " + mainUser.lastName },
                        new c { v = mainPublications+"", f = mainPosition },
                        new c { v = mainColor, f = null }
                        }
                });

                cols colums1 = new cols { id = "", label = "", pattern = "", type = "number" };
                cols colums2 = new cols { id = "", label = "", pattern = "", type = "number" };
                cols colums3 = new cols { id = "", role = "style", type = "string" };
                List<cols> columList = new List<cols> { colums1, colums2, colums3 };

                scatterPlotData.cols = columList;
                scatterPlotData.rows = rowList;

                return scatterPlotData;

            }
        }

        public List<Results> GetSearchResults(string searchQuery)
        {
            if (searchQuery == "lga")
            {
                var user1 = new Results
                {
                    cristinID = "10",
                    firstName = "Helga",
                    lastName = "Aasen",
                    affiliation = new Affiliation { institution = "OsloMet", institute = "MEK", position = "Forskersjef" }
                };
                var user2 = new Results
                {
                    cristinID = "100",
                    firstName = "Elgar",
                    lastName = "Bihule",
                    affiliation = new Affiliation { institution = "OsloMet", institute = "TEK", position = "Forskersjef" }
                };
                return new List<Results> { user1, user2 };
            }
            else
            {
                return null;
            }
        }

        public List<UserMatch> GetUserData(string cristinID, CancellationToken cancellationToken)
        {
            if (cristinID == "10" || cristinID == "20" || cristinID == "100" || cristinID == "1000")
            {
                UserMatch um = new UserMatch()
                {
                    cristinID = "99",
                    similarities = 5,
                    quality = "3",
                    publications = "100"
                };

                UserMatch um2 = new UserMatch()
                {
                    cristinID = "97",
                    similarities = 3,
                    quality = "2",
                    publications = "20"
                };

                return new List<UserMatch> { um, um2 };
            }
            else
            {
                return null;
            }
        }

        public List<User> GetUsers(string searchQuery)
        {
            {
                var list = new List<User>();
                if (searchQuery == "Ol")
                {
                    var user1 = new User { cristinID = "10", firstName = "Ole", lastName = "Aasen", institution = "OsloMet", position = "Forskersjef" };
                    var user2 = new User { cristinID = "100", firstName = "Peder", lastName = "Olhilde", institution = "UiO", position = "Konsulent" };

                    if (user1.firstName.StartsWith(searchQuery) || user1.lastName.StartsWith(searchQuery))
                    {
                        list.Add(user1);
                    }
                    if (user2.firstName.StartsWith(searchQuery) || user2.lastName.StartsWith(searchQuery))
                    {
                        list.Add(user2);
                    }
                }
                else if (searchQuery == "lga")
                {
                    var user1 = new User { cristinID = "10", firstName = "Helga", lastName = "Aasen", institution = "OsloMet", position = "Forskersjef" };
                    var user2 = new User { cristinID = "100", firstName = "Elgar", lastName = "Bihule", institution = "UiO", position = "Konsulent" };

                    if (user1.firstName.Contains(searchQuery) || user1.lastName.Contains(searchQuery))
                    {
                        list.Add(user1);
                    }
                    if (user2.firstName.Contains(searchQuery) || user2.lastName.Contains(searchQuery))
                    {
                        list.Add(user2);
                    }
                }
                return list.Count() > 0 ? list : null;

            }
        }

        public List<Cloud> GetWordCloud(string cristinID)
        {
            if (cristinID == "10")
            {
                string[] colorArray = new string[3] { "#42a5f5", "#80d6ff", "#0077c2" };
                Random rnd = new Random();
                var cloud1 = new Cloud { weight = 20, text = "system", color = colorArray[2] };
                var cloud2 = new Cloud { weight = 10, text = "text", color = colorArray[1] };
                var cloud3 = new Cloud { weight = 5, text = "cancer", color = colorArray[0] };

                var listCloud = new List<Cloud>() { cloud1, cloud2, cloud3 };

                int max = listCloud.Max(c => c.weight);
                int min = listCloud.Min(c => c.weight);

                foreach (var word in listCloud)
                {
                    double numerator = word.weight - min;
                    double denomiator = max - min;
                    double fraction = (numerator / denomiator * 9) + 1;
                    word.weight = (int)fraction;
                }

                return listCloud;
            }
            else
            {
                return null;
            }
        }

        public short? GetLegend(string cristinID)
        {
            if (cristinID == "-1")
            {
                return null;
            }
            else
            {
                return 100;
            }
        }
    }
}