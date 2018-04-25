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
        public ActionResult Index()
        {
            /*ApiRepository i = new ApiRepository();

            i.Science();*/
            return View();
        }
    }
}