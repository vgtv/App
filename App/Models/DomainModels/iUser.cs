using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Models.DomainModels
{
    interface iUser
    {
        string firstName { get; set; }
        string lastName { get; set; }
    }
}
