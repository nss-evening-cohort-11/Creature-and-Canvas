using System.Net.NetworkInformation;

namespace Creature_and_Canvas.Models
{
    public class Payment
    {
        public int PaymentlID { get; set; }
        public string PaymentType { get; set; }
        public int AccountNumber { get; set; }
        public int CustomerID { get; set; }
    }
}
