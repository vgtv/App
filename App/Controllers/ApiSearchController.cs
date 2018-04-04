using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Script.Serialization;
using App.Models;

namespace App.Controllers
{
    public class ApiSearchController : ApiController
    {
        private readonly iApiRepository dataAccess = new ApiRepository();

        public async Task<HttpResponseMessage> Get(string searchQuery)
        {
            var searchResults = await dataAccess.GetUsersAsync(searchQuery);
            if (searchResults == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "No user found"); // ""
            }

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
