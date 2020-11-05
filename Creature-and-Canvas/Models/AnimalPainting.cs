using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Creature_and_Canvas.Models
{
    public class AnimalPainting
    {
        public int ItemID { get; set; }
        public int Price { get; set; }
        public string CanvasSize { get; set; }
        public int AnimalId { get; set; }
        public string PaintingDescription { get; set; }
        public int ProductTypeID { get; set; }
        public string ImageURL { get; set; }
        public string Title { get; set; }
        public string AnimalName { get; set; }
       
    }
}
