using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace App.Models.DomainModels
{
    public class ResearcherRelevance : Researcher
    {
        public double similarities { get; set; }
        public bool neutral { get; set; }
    }
}