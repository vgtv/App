using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace App.Models
{
    public static class TaskExtension
    {
        public static async Task<List<TItem>> ToListAsync<TItem>(this IEnumerable<Task<TItem>> items)
        {
            var tasks = items.Select(i => i).ToArray();
            await Task.WhenAll(tasks);
            return tasks.Select(t => t.Result).ToList();
        }
    }
}