using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using App.Models.DomainModels;

namespace App.Models
{

    public class ApiRepositoryStub : iApiRepository
    {
        public short? GetLegend(string cristinID)
        {
            throw new NotImplementedException();
        }

        public Researcher GetResearcherInfo(string cristinID)
        {
            throw new NotImplementedException();
        }

        public List<ResearcherRelevance> GetResearcherRelevance(string cristinID, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public ScatterPlot GetScatterData(string cristinID, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<List<Results>> GetSearchResultsAsync(string searchQuery)
        {
            throw new NotImplementedException();
        }

        public List<UserMatch> GetUserData(string cristinID, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<List<User>> GetUsersAsync(string searchQuery)
        {
            throw new NotImplementedException();
        }

        public Task<List<Cloud>> GetWordCloudAsync(string cristinID)
        {
            throw new NotImplementedException();
        }
    }
}