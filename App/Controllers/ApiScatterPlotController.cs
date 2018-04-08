using App.Models;
using App.Models.DomainModels;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Filters;
using System.Web.Script.Serialization;

namespace App.Controllers
{
    public class ApiScatterPlotController : ApiController
    {
        private readonly iApiRepository dataAccess = new ApiRepository();

        public HttpResponseMessage Get(string cristinID, CancellationToken cancellationToken)
        {
            ScatterPlot searchResults = new ScatterPlot();
            try
            {
                searchResults = dataAccess.GetScatterData(cristinID, cancellationToken);
                if (searchResults == null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, "No data found for user");
                }

            }
            catch (OperationCanceledException e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, e.Message.ToString());
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