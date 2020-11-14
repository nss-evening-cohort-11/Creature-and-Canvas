using Creature_and_Canvas.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;

namespace Creature_and_Canvas.Data
{
    public class CustomerRepository
    {
        readonly string _connectionString;
        public CustomerRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("Creature_and_Canvas");
        }
        public List<Customer> GetCustomers()
        {
            using var db = new SqlConnection(_connectionString);

            var customers = db.Query<Customer>(@"select *
                                                from Customers
                                                where IsDeleted = 0");

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

        public void Add(Customer customerToAdd)
        {
            var sql = @"INSERT INTO [dbo].[Customers]
                               ([FirstName]
                               ,[LastName]
                               ,[EmailAddress]
                               ,[MailingAddress]
                               ,[IsDeleted])
                        Output inserted.CustomerID
                        VALUES
                               (@firstName,@lastName,@emailAddress,@mailingAddress,@isDeleted)";

            using var db = new SqlConnection(_connectionString);

            var newId = db.ExecuteScalar<int>(sql, customerToAdd);

            customerToAdd.CustomerID = newId;
        }


        public void Remove(int customerId)
        {
            var sql = @"Update Customers
                       Set IsDeleted = 1
                       WHERE CustomerID = @cuid";

            using var db = new SqlConnection(_connectionString);

            db.Execute(sql, new { cuid = customerId });
        }
    }
}
