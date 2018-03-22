using App.Models;
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
    public class ApiWordCloudController : ApiController
    {
        private readonly ApiRepository dataAccess = new ApiRepository();

        public HttpResponseMessage Get(string cristinID)
        {
            var searchResults = dataAccess.GetWordCloud(cristinID);
            if (searchResults == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "No data found for user");
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
