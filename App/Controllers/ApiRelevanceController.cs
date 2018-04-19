using App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Script.Serialization;
using System.Data.Entity;
using System.Threading;
using App.Models.DomainModels;
using System.Diagnostics;

namespace App.Controllers
{
    public class ApiRelevanceController : ApiController
    {

        private readonly iApiRepository dataAccess;

        ApiRelevanceController()
        {
            dataAccess = new ApiRepository();
        }

        public ApiRelevanceController(iApiRepository stub)
        {
            dataAccess = stub;
        }
        public HttpResponseMessage Get(string cristinID, CancellationToken cancellationToken)
        {
            var data = new List<SimilarResearcher>();
            try
            {
                data= dataAccess.GetResearcherRelevance(cristinID, cancellationToken);
                if (data== null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, "No data found for user");
                }

            }
            catch (OperationCanceledException e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, e.Message.ToString());
            }

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(data);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }
    }
}
