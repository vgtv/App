using App.Models.DomainModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Models
{
    public interface iApiRepository
    {
        List<User> GetUsers(string searchQuery);
        List<User> GetAllUsers();
        Researcher GetResearcherData(string cristinID);
        List<Cloud> GetWordCloud(string cristinID);
        List<UserMatch> GetUserData(string cristinID);
        ScatterPlot GetScatterData(string cristinID);
    }
}
