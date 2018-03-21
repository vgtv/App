using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace App.Models.DomainModels
{
    public class User : iUser
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
    }
}