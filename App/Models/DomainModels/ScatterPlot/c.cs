﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace App.Models.DomainModels.ScatterPlot
{
    // {"v":112,"f":"Førsteemanuensis"}, {"v":39,"f":"Julian Hjallum"}, {"v":"#80d6ff","f":null}
    public class c
    {
        // kan både være streng eller float i json
        public object v { get; set; }
        public string f { get; set; }
    }
}