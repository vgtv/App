using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace App.Models.DomainModels
{
    public class UserMatch
    {
        public string cristinID { get; set; }
        public double similarities { get; set; }

        public string quality { get; set; }
        public string publications { get; set; }
    }
}