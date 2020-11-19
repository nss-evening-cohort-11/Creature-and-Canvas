using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Creature_and_Canvas.Models
{
    public class AnimalPaintingCount
    {
        public string AnimalName { get; set; }
        public int PaintingsCount { get; set; }
        public int AnimalId { get; set; }

        public int ItemID { get; set; }

        public List<Painting> TopThreePaintings { get; set; } = new List<Painting>();
    }
}
