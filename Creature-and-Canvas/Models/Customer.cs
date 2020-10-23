using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Creature_and_Canvas.Models
{
    public class Customer
    {
        public int CustomerID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string MailingAddress { get; set; }
        public string AccountCreated { get; set; }
    }
}
