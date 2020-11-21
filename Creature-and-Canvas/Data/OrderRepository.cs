using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Creature_and_Canvas.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace Creature_and_Canvas.Data
{
    public class OrderRepository
    {
        readonly string _connectionString;

        public OrderRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("Creature_and_Canvas");
        }

        public List<Order> GetOrders()
        {
            using var db = new SqlConnection(_connectionString);

            var orders = db.Query<Order>("select * from Orders");

            return orders.ToList();
        }

        public Order GetOrderById(int orderId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from Orders
                          where OrderID = @oid";

            var parameters = new { oid = orderId };

            var order = db.QueryFirstOrDefault<Order>(query, parameters);

            return order;
        }

        public List<Order> GetOrdersByCustomerId(int custId)
        {
            using var db = new SqlConnection(_connectionString);

            var parameters = new { cid = custId };

            var orders = db.Query<Order>("select * from Orders" +
                                         " where CustomerID = @cid" +
                                         " and isCompleted = 1" +
                                         " and isDeleted = 0", parameters);

            return orders.ToList();
        }
    }
}
