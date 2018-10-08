using System.Collections.Generic;
using System.Linq;
using PaginationExample.Interfaces;
using PaginationExample.Models;

namespace PaginationExample.Repositories {
    public class CountyRepository: ICountyRepository {
        private IEnumerable<County> counties = new List<County>() {
            new County(1, "Bedfordshire", 664600, 1235),
            new County(2, "Berkshire", 905800, 1262),
            new County(3, "Bristol", 459300, 110),
            new County(4, "Buckinghamshire", 803400, 1874),
            new County(5, "Cambridgeshire", 847200, 3390),
            new County(6, "Cheshire", 1054100, 2343),
            new County(7, "City of London", 7700, 2),
            new County(8, "Cornwall", 563600, 3562),
            new County(9, "County Durham", 862600, 2676),
            new County(10, "Cumbria", 498400, 6767),
            new County(11, "Derbyshire", 1049000, 2625),
            new County(12, "Devon", 1185500, 6707),
            new County(13, "Dorset", 770700, 2653),
            new County(14, "East Riding of Yorkshire", 598700, 2477),
            new County(15, "East Sussex", 840400, 1791),
            new County(16, "Essex", 1820400, 3670),
            new County(17, "Gloucestershire", 907200, 3150),
            new County(18, "Greater London", 8817300, 1569),
            new County(19, "Greater Manchester", 2798800, 1276),
            new County(20, "Hampshire", 1837800, 3769),
            new County(21, "Herefordshire", 191000, 2180),
            new County(22, "Hertfordshire", 1180900, 1643),
            new County(23, "Isle of Wight", 141000, 380),
            new County(24, "Kent", 1832300, 3738),
            new County(25, "Lancashire", 1490500, 3075),
            new County(26, "Leicestershire", 1043800, 2156),
            new County(27, "Lincolnshire", 1082300, 6975),
            new County(28, "Merseyside", 1416800, 647),
            new County(29, "Norfolk", 898400, 5380),
            new County(30, "North Yorkshire", 1153400, 8654),
            new County(31, "Northamptonshire", 741200, 2364),
            new County(32, "Northumberland", 319000, 5014),
            new County(33, "Nottinghamshire", 1147100, 2159),
            new County(34, "Oxfordshire", 682400, 2605),
            new County(35, "Rutland", 39500, 382),
            new County(36, "Shropshire", 493200, 3488),
            new County(37, "Somerset", 956700, 4170),
            new County(38, "South Yorkshire", 1393400, 1552),
            new County(39, "Staffordshire", 1126200, 2714),
            new County(40, "Suffolk", 757000, 3801),
            new County(41, "Surrey", 1185300, 1663),
            new County(42, "Tyne and Wear", 1129500, 540),
            new County(43, "Warwickshire", 564600, 1975),
            new County(44, "West Midlands", 2897300, 902),
            new County(45, "West Sussex", 852400, 1991),
            new County(46, "West Yorkshire", 2307000, 2029),
            new County(47, "Wiltshire", 716400, 3485),
            new County(48, "Worcestershire", 588400, 1741)
        };

        public IEnumerable<County> GetCounties(int skip, int take) {
            return counties.Skip(skip).Take(take);
        }

        public int TotalRecordCount() {
            return counties.Count();
        }
    }
}