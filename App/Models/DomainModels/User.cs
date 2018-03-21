using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace App.Models.DomainModels
{
    public class User : iUser
    {
        public string firstName { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string lastName { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }
}