using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Creature_and_Canvas.Models
{
    public class ProductOrderDetail
    {
        public int OrderID { get; set; }
        public DateTime Date { get; set; }
        public int OrderTotal { get; set; }
        public string Item { get; set; }
        public int Price { get; set; }
        public int ItemID { get; set; }
        

    }
}
