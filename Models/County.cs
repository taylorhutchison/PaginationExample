namespace PaginationExample.Models {
    public class County {
        public int Id {get; set;}
        public string Name {get; set;}
        public int Population {get; set;}
        public int Area { get; set; }

        public County(int id, string name, int population, int area) {
            Id = id;
            Name = name;
            Population = population;
            Area = area;
        }
    }
}