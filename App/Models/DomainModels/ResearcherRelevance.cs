using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace App.Models.DomainModels
{
    public class ResearcherRelevance : Researcher
    {
        public string cristinID { get; set; }
        public double similarities { get; set; }
        public bool neutrality { get; set; }
        public bool enviroment { get; set; }
    }
}