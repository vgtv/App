using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using App.Models.DomainModels;

namespace App.Models
{
    public class ApiRepositoryStub : iApiRepository
    {
        public List<User> GetAllUsers()
        {
            throw new NotImplementedException();
        }

        public Researcher GetResearcherData(string cristinID)
        {
            throw new NotImplementedException();
        }

        public ScatterPlot GetScatterData(string cristinID)
        {
            throw new NotImplementedException();
        }

        public List<UserMatch> GetUserData(string cristinID)
        {
            throw new NotImplementedException();
        }

        public List<User> GetUsers(string searchQuery)
        {
            throw new NotImplementedException();
        }

        public List<Cloud> GetWordCloud(string cristinID)
        {
            throw new NotImplementedException();
        }
    }
}