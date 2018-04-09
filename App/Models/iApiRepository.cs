using App.Models.DomainModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
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
        List<UserMatch> GetUserData(string cristinID, CancellationToken cancellationToken);
        ScatterPlot GetScatterData(string cristinID, CancellationToken cancellationToken);
        List<ResearcherRelevance> GetResearcherRelevance(string cristinID, CancellationToken cancellationToken);
    }
}
