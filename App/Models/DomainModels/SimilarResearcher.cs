using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace App.Models.DomainModels
{
    public class SimilarResearcher
    {
        public string cristinID { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string institution { get; set; }
        public string institute { get; set; }
        public string position { get; set; }
        public double similarities { get; set; }
        public bool neutrality { get; set; }
        public bool enviroment { get; set; }
    }
}