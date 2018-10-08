using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PaginationExample.Interfaces;
using PaginationExample.Models;

namespace PaginationExample {
    public class CountyController: Controller {

        ICountyRepository _countyRepository;
        public CountyController(ICountyRepository countyRepository) {
            _countyRepository = countyRepository;
        }

        [Route("api/county")]
        public ActionResult<IEnumerable<County>> Get([FromQuery]int page, [FromQuery]int count) {
            var skip = page * count;
            var take = count;

            var counties = _countyRepository.GetCounties(skip, take);
            var totalRecordCount = _countyRepository.TotalRecordCount();

            var countyQueryResult = new CountyQueryResult {
                Counties = counties,
                TotalRecordCount = totalRecordCount
            };

            return Ok(countyQueryResult);
        }

    }
}