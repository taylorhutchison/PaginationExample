using System.Collections.Generic;
using PaginationExample.Models;

namespace PaginationExample.Interfaces {
    public interface ICountyRepository {
        IEnumerable<County> GetCounties(int skip, int take);
        int TotalRecordCount();
    }
}