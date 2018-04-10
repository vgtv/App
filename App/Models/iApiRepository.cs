using App.Models.DomainModels;
using App.Models.DomainModels.ScatterPlot;
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
        List<Results> GetSearchResults(string searchQuery);
        List<User> GetUsers(string searchQuery);
        Researcher GetResearcherInfo(string cristinID);
        List<Cloud> GetWordCloud(string cristinID);
        List<UserMatch> GetUserData(string cristinID, CancellationToken cancellationToken);
        ScatterPlot GetScatterData(string cristinID, CancellationToken cancellationToken);
        List<ResearcherRelevance> GetResearcherRelevance(string cristinID, CancellationToken cancellationToken);
    }
}
