//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace App.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Ordsky
    {
        public string cristinID { get; set; }
        public int rotformID { get; set; }
        public Nullable<short> forekomster { get; set; }
    
        public virtual Person Person { get; set; }
        public virtual Rotform Rotord { get; set; }
    }
}