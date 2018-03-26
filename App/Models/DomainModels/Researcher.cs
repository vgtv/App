using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace App.Models.DomainModels
{
    public class Researcher : iUser
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string institution { get; set; }
        public string institute { get; set; }
        public string position { get; set; }
    }
}