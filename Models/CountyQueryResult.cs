using System.Collections.Generic;
using PaginationExample.Models;

namespace PaginationExample {
    public class CountyQueryResult {
        public int TotalRecordCount { get; set; }
        public IEnumerable<County> Counties { get; set; }

    }
}