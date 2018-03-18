using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace App.Controllers
{
    public class UsersApiController : ApiController
    {

        public HttpResponseMessage Get(string searchQuery)
        {

            // { firstname : "", lastname : "", "role", "instituion"}

            List<Personsearch> persons = new List<Personsearch>
            {
                new Personsearch { firstname = "Poo", lastname = "Doe", role = "Professor", institution = "UiO" },
                new Personsearch { firstname = "Foo", lastname = "Roe", role = "Firstemanuesi", institution = "NTNU" },
                new Personsearch { firstname = "Loo", lastname = "Soe", role = "Professor", institution = "OsloMet" }
            };

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(persons);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }
    }   
    public class Personsearch{
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string role { get; set; }
        public string institution { get; set; }
    }
}
