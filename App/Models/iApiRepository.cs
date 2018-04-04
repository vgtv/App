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
        short? GetLegend(string cristinID);
        Task<List<Results>> GetSearchResultsAsync(string searchQuery);
        Task<List<User>> GetUsersAsync(string searchQuery);
        Researcher GetResearcherInfo(string cristinID);
        Task<List<Cloud>> GetWordCloudAsync(string cristinID);
        Task<List<UserMatch>> GetUserData(string cristinID);
        Task<ScatterPlot> GetScatterData(string cristinID);
        Task<List<ResearcherRelevance>> GetResearcherRelevance(string cristinID);
    }
}
