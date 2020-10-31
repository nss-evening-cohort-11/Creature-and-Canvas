using System.Net.NetworkInformation;

namespace Creature_and_Canvas.Models
{
    public class Painting
    {
        public int ItemID { get; set; }
        public int Price { get; set; }
        public string CanvasSize { get; set; }
        public int AnimalId { get; set; }
        public string PaintingDescription { get; set; }
        public int ProductTypeID { get; set; }
        public string ImageURL { get; set; }
        public string Title { get; set; }
    }
}
