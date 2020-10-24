using System;
using Dapper;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System.Linq;
using Creature_and_Canvas.Models;
using System.Threading.Tasks;

namespace Creature_and_Canvas.Data
{
    public class ProductOrderRepository
    {

        static List<ProductOrder> _productOrders = new List<ProductOrder>();

        const string _connectionString = "Server=localhost;Database=Creature_and_Canvas;Trusted_Connection=True;";

        public List<ProductOrder> GetProductOrders()
        {
            using var db = new SqlConnection(_connectionString);

            var productOrders = db.Query<ProductOrder>("select * from ProductOrders");

            return productOrders.ToList();
        }

        public ProductOrder GetProductOrderById(int productOrderId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from ProductOrders
                          where ProductOrderID = @poid";

            var parameters = new { poid = productOrderId };

            var productOrder = db.QueryFirstOrDefault<ProductOrder>(query, parameters);

            return productOrder;
        }
    }
}
