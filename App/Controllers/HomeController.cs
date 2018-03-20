using App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace App.Controllers
{
    public class HomeController : Controller
    {

        private readonly DataRepository dataAccess = new DataRepository();

        public ActionResult Index()
        {
            /*
            var searchResults = dataAccess.GetAllUsers();
            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(searchResults);


            var searchResults2 = dataAccess.GetWordCloud("63753");
            var Json2 = new JavaScriptSerializer();
            string JsonString2 = Json.Serialize(searchResults2);

            ScatterPlot sp = new ScatterPlot();

            cols colsObj1 = new cols { id = "", label = "Kvantitet", pattern = "", type = "number" };
            cols colsObj2 = new cols { id = "", label = "Kvalitet", pattern = "", type = "number" };
            cols colsObj3 = new cols { id = "", role = "style", type = "string"};
            List<cols> colobj = new List<cols> { colsObj1, colsObj2, colsObj3 };

            c cObj1 = new c { v = "123", f = "Førstegreie"};
            c cObj2 = new c { v = "39", f = "Julian" };
            c cObj3 = new c { v = "#80d6ff", f = null };
            List<c> cobjs1 = new List<c> { cObj1, cObj2, cObj3 };

            c cObj4 = new c { v = "159", f = "Professor" };
            c cObj5 = new c { v = "52", f = "Anders" };
            c cObj6 = new c { v = "#ffbd45", f = null };
            List<c> cobjs2 = new List<c> { cObj4, cObj5, cObj6};
            List<rows> rowobj = new List<rows>();

            rowobj.Add(new rows { c = cobjs1 });
            rowobj.Add(new rows { c = cobjs2 });
            sp.rows = rowobj;
            sp.cols = colobj;
            
            var Json3 = new JavaScriptSerializer();
            string JsonString3 = Json.Serialize(sp);

            var test = dataAccess.GetUserData("63753");

            var Json4 = new JavaScriptSerializer();
            string JsonString4 = Json.Serialize(test);


            ViewBag.Users = JsonString4;
            ViewBag.WordCloud = JsonString2;
            */

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
 