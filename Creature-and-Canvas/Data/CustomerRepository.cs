using Creature_and_Canvas.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Creature_and_Canvas.Data
{
    public class CustomerRepository
    {
        static List<Customer> _customers = new List<Customer>();

        const string _connectionString = "Server=localhost;Database=Creature_and_Canvas;Trusted_Connection=True;";

        public List<Customer> GetCustomers()
        {
            using var db = new SqlConnection(_connectionString);

            var customers = db.Query<Customer>("select * from Customers");

            return customers.ToList();
        }

        public Customer GetCustomerById(int customerId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from Customers
                          where CustomerID = @cuid";

            var parameters = new { cuid = customerId };

            var customer = db.QueryFirstOrDefault<Customer>(query, parameters);

            return customer;
        }
    }
}
