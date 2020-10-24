using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Creature_and_Canvas.Models
{
    public class ProductOrder
    {
        public int ProductOrderID { get; set; }

        public int ProductID { get; set; }

        public int OrderID { get; set; }

        public int Quantity { get; set; }
    }
}
