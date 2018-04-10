using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using App.Controllers;
using App.Models;
using System.Web;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.Threading;

namespace WebAPI.UnitTest
{
    [TestClass]
    public class WebApiUnitTest
    {
        [TestMethod]
        public void GetLegendOK()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiLegendController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            var response = controller.Get("63573");
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic obj = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual(100, obj);
        }

        [TestMethod]
        public void GetLegendEmpty()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiLegendController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            var response = controller.Get("-1");
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic obj = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("No data found for user", obj);
        }

        [TestMethod]
        public void GetScatterPlotOK1()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiScatterPlotController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            CancellationToken cancellationToken;
            var response = controller.Get("10", cancellationToken);
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic scatterplot = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("10", (string)scatterplot.rows[0].c[0].v);
            Assert.AreEqual("Ivar Aasen", (string)scatterplot.rows[0].c[0].f);
            Assert.AreEqual("10", (string)scatterplot.rows[0].c[1].v);
            Assert.AreEqual("Professor ii", (string)scatterplot.rows[0].c[1].f);
            Assert.AreEqual("#0077c2", (string)scatterplot.rows[0].c[2].v);
            Assert.AreEqual(null, (string)scatterplot.rows[0].c[2].f);

            Assert.AreEqual("10", (string)scatterplot.rows[1].c[0].v);
            Assert.AreEqual("Ivar Aasen", (string)scatterplot.rows[1].c[0].f);
            Assert.AreEqual("10", (string)scatterplot.rows[1].c[1].v);
            Assert.AreEqual("Professor ii", (string)scatterplot.rows[1].c[1].f);
            Assert.AreEqual("#0077c2", (string)scatterplot.rows[1].c[2].v);
            Assert.AreEqual(null, (string)scatterplot.rows[1].c[2].f);


            Assert.AreEqual("10", (string)scatterplot.rows[2].c[0].v);
            Assert.AreEqual("Ola Normann", (string)scatterplot.rows[2].c[0].f);
            Assert.AreEqual("10", (string)scatterplot.rows[2].c[1].v);
            Assert.AreEqual("Professor", (string)scatterplot.rows[2].c[1].f);
            Assert.AreEqual("#ffbd45", (string)scatterplot.rows[2].c[2].v);
            Assert.AreEqual(null, (string)scatterplot.rows[2].c[2].f);
        }

        [TestMethod]
        public void GetScatterPlotOK2()
        {
            // En test dersom rollen ikke er professor

            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiScatterPlotController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            CancellationToken cancellationToken;
            var response = controller.Get("20", cancellationToken);
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic scatterplot = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("10", (string)scatterplot.rows[0].c[0].v);
            Assert.AreEqual("Ivar Aasen", (string)scatterplot.rows[0].c[0].f);
            Assert.AreEqual("10", (string)scatterplot.rows[0].c[1].v);
            Assert.AreEqual("Overlege", (string)scatterplot.rows[0].c[1].f);
            Assert.AreEqual("#80d6ff", (string)scatterplot.rows[0].c[2].v);
            Assert.AreEqual(null, (string)scatterplot.rows[0].c[2].f);

            Assert.AreEqual("10", (string)scatterplot.rows[1].c[0].v);
            Assert.AreEqual("Ivar Aasen", (string)scatterplot.rows[1].c[0].f);
            Assert.AreEqual("10", (string)scatterplot.rows[1].c[1].v);
            Assert.AreEqual("Overlege", (string)scatterplot.rows[1].c[1].f);
            Assert.AreEqual("#80d6ff", (string)scatterplot.rows[1].c[2].v);
            Assert.AreEqual(null, (string)scatterplot.rows[1].c[2].f);


            Assert.AreEqual("10", (string)scatterplot.rows[2].c[0].v);
            Assert.AreEqual("Ola Normann", (string)scatterplot.rows[2].c[0].f);
            Assert.AreEqual("10", (string)scatterplot.rows[2].c[1].v);
            Assert.AreEqual("Professor", (string)scatterplot.rows[2].c[1].f);
            Assert.AreEqual("#ffbd45", (string)scatterplot.rows[2].c[2].v);
            Assert.AreEqual(null, (string)scatterplot.rows[2].c[2].f);
        }

        [TestMethod]
        public void GetScatterPlotEmpty()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiScatterPlotController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            CancellationToken cancellationToken;
            var response = controller.Get("-1", cancellationToken);
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic obj = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("No data found for user", obj);
        }


        [TestMethod]
        public void GetResearcherRelevanceOK1()
        {
            // Gått på samme skole, og er ikke nøytral

            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiRelevanceController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            CancellationToken cancellationToken;
            var response = controller.Get("10", cancellationToken);
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("99", (string)results[0].cristinID);
            Assert.AreEqual(5, (int)results[0].similarities);
            Assert.AreEqual(false, (bool)results[0].neutrality);
            Assert.AreEqual(true, (bool)results[0].enviroment);
            Assert.AreEqual("Ivar", (string)results[0].firstName);
            Assert.AreEqual("Aasen", (string)results[0].lastName);
            Assert.AreEqual("Oslo Met", (string)results[0].institution);
            Assert.AreEqual("Informasjonsteknologi", (string)results[0].institute);
            Assert.AreEqual("Professor", (string)results[0].position);
        }

        [TestMethod]
        public void GetResearcherRelevanceOK2()
        {
            // Gått på samme skole, og er nøytral

            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiRelevanceController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            CancellationToken cancellationToken;
            var response = controller.Get("100", cancellationToken);
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("99", (string)results[0].cristinID);
            Assert.AreEqual(5, (int)results[0].similarities);
            Assert.AreEqual(true, (bool)results[0].neutrality);
            Assert.AreEqual(true, (bool)results[0].enviroment);
            Assert.AreEqual("Ivar", (string)results[0].firstName);
            Assert.AreEqual("Aasen", (string)results[0].lastName);
            Assert.AreEqual("Oslo Met", (string)results[0].institution);
            Assert.AreEqual("Informasjonsteknologi", (string)results[0].institute);
            Assert.AreEqual("Professor", (string)results[0].position);
        }

        [TestMethod]
        public void GetResearcherRelevanceOK3()
        {
            // Ikke gått på samme skole, og er ikke nøytral

            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiRelevanceController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            CancellationToken cancellationToken;
            var response = controller.Get("1000", cancellationToken);
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("99", (string)results[0].cristinID);
            Assert.AreEqual(5, (int)results[0].similarities);
            Assert.AreEqual(true, (bool)results[0].neutrality);
            Assert.AreEqual(false, (bool)results[0].enviroment);
            Assert.AreEqual("Ivar", (string)results[0].firstName);
            Assert.AreEqual("Aasen", (string)results[0].lastName);
            Assert.AreEqual("Oslo Met", (string)results[0].institution);
            Assert.AreEqual("Informasjonsteknologi", (string)results[0].institute);
            Assert.AreEqual("Professor", (string)results[0].position);
        }

        [TestMethod]
        public void GetResearcherRelevanceEmpty()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiRelevanceController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            CancellationToken cancellationToken;
            var response = controller.Get("-1", cancellationToken);
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("No data found for user", results);
        }


        [TestMethod]
        public void GetUserStartsWithOK()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiSearchController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            var response = controller.Get("Ol");
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("10", (string)results[0].cristinID);
            Assert.AreEqual("Ole", (string)results[0].firstName);
            Assert.AreEqual("Aasen", (string)results[0].lastName);
            Assert.AreEqual("OsloMet", (string)results[0].institution);
            Assert.AreEqual("Forskersjef", (string)results[0].position);

            Assert.AreEqual("100", (string)results[1].cristinID);
            Assert.AreEqual("Peder", (string)results[1].firstName);
            Assert.AreEqual("Olhilde", (string)results[1].lastName);
            Assert.AreEqual("UiO", (string)results[1].institution);
            Assert.AreEqual("Konsulent", (string)results[1].position);
        }

        [TestMethod]
        public void GetUsersStartsWithOK()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiSearchController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            var response = controller.Get("lga");
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("10", (string)results[0].cristinID);
            Assert.AreEqual("Helga", (string)results[0].firstName);
            Assert.AreEqual("Aasen", (string)results[0].lastName);
            Assert.AreEqual("OsloMet", (string)results[0].institution);
            Assert.AreEqual("Forskersjef", (string)results[0].position);

            Assert.AreEqual("100", (string)results[1].cristinID);
            Assert.AreEqual("Elgar", (string)results[1].firstName);
            Assert.AreEqual("Bihule", (string)results[1].lastName);
            Assert.AreEqual("UiO", (string)results[1].institution);
            Assert.AreEqual("Konsulent", (string)results[1].position);
        }

        [TestMethod]
        public void GetUsersEmpty()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiSearchController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            var response = controller.Get("dofsdiofisdj");
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("No user found", results);
        }

        [TestMethod]
        public void GetSearchResultsOK()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiSearchFullTextController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            var response = controller.Get("lga");
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("10", (string)results[0].cristinID);
            Assert.AreEqual("Helga", (string)results[0].firstName);
            Assert.AreEqual("Aasen", (string)results[0].lastName);
            Assert.AreEqual("MEK", (string)results[0].affiliation.institute);
            Assert.AreEqual("OsloMet", (string)results[0].affiliation.institution);
            Assert.AreEqual("Forskersjef", (string)results[0].affiliation.position);

            Assert.AreEqual("100", (string)results[1].cristinID);
            Assert.AreEqual("Elgar", (string)results[1].firstName);
            Assert.AreEqual("Bihule", (string)results[1].lastName);
            Assert.AreEqual("TEK", (string)results[1].affiliation.institute);
            Assert.AreEqual("OsloMet", (string)results[1].affiliation.institution);
            Assert.AreEqual("Forskersjef", (string)results[1].affiliation.position);

        }

        [TestMethod]
        public void GetSearchResultsEmpty()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiSearchFullTextController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            var response = controller.Get("sdfsdfspfs");
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("No user found", results);
        }

        [TestMethod]
        public void GetWordCloudOK()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiWordCloudController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            var response = controller.Get("10");
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("10", (string)results[0].weight);
            Assert.AreEqual("system", (string)results[0].text);
            Assert.AreEqual("#0077c2", (string)results[0].color);

            Assert.AreEqual("4", (string)results[1].weight);
            Assert.AreEqual("text", (string)results[1].text);
            Assert.AreEqual("#80d6ff", (string)results[1].color);

            Assert.AreEqual("1", (string)results[2].weight);
            Assert.AreEqual("cancer", (string)results[2].text);
            Assert.AreEqual("#42a5f5", (string)results[2].color);
        }

        [TestMethod]
        public void GetWordCloudEmpty()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiWordCloudController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            var response = controller.Get("-1");
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("No data found for user", results);
        }

        [TestMethod]
        public void GetResearcherInfoOK()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiUserController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            //  (cristinID == "10" || cristinID == "100" || cristinID == "1000")

            // Act
            var response = controller.Get("10");
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("Ola", (string)results.firstName);
            Assert.AreEqual("Normann", (string)results.lastName);
            Assert.AreEqual("Oslo Met", (string)results.institution);
            Assert.AreEqual("Informasjonsteknologi", (string)results.institute);
            Assert.AreEqual("Professor", (string)results.position);
        }

        [TestMethod]
        public void GetResearcherEmpty()
        {
            // Arrange
            iApiRepository stub = new ApiRepositoryStub();
            var controller = new ApiUserController(stub)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            //  (cristinID == "10" || cristinID == "100" || cristinID == "1000")

            // Act
            var response = controller.Get("-1");
            var responseString = response.Content.ReadAsStringAsync().Result;
            dynamic results = JsonConvert.DeserializeObject<dynamic>(responseString);

            // Assert
            Assert.AreEqual("No data found for user", results);
        }
    }
}
