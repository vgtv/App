using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace App.Models.DomainModels
{
    public class ResearcherRelevance : Researcher
    {
        public ResearcherRelevance(){}
        public int relevance { get; set; }
    }
}