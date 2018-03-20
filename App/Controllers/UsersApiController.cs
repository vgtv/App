using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;
using App.Models;

namespace App.Controllers
{
    public class UsersApiController : ApiController
    {
        private readonly DataRepository dataAccess = new DataRepository();

        // Kan prøve denne ngInit for autocomplete
        public HttpResponseMessage Get()
        {
            var searchResults = dataAccess.GetAllUsers();
            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(searchResults);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        public HttpResponseMessage Get(string searchQuery)
        {
            var searchResults = dataAccess.GetUsers(searchQuery);
            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(searchResults);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }        
    }   
}
