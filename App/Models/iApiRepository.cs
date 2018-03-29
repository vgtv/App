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
        Task<List<Results>> GetSearchResultsAsync(string searchQuery);
        Task<List<User>> GetUsersAsync(string searchQuery);
        Task<List<User>> GetAllUsersAsync();
        Task<Researcher> GetResearcherDataAsync(string cristinID);
        Task<List<Cloud>> GetWordCloudAsync(string cristinID);
        Task<List<UserMatch>> GetUserData(string cristinID);
        Task<ScatterPlot> GetScatterData(string cristinID);
    }
}
