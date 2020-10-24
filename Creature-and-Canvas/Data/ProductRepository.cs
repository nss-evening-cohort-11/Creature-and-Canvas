using Creature_and_Canvas.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Creature_and_Canvas.Data
{
    public class ProductRepository
    {
        static List<Product> _products = new List<Product>();

        const string _connectionString = "Server=localhost;Database=Creature_and_Canvas;Trusted_Connection=True;";

        public List<Product> GetProducts()
        {
            using var db = new SqlConnection(_connectionString);
            
            var products = db.Query<Product>("select * from Products");

            return products.ToList();
        }

        public Product GetProductById(int productId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from Products
                          where ProductID = @pid";

            var parameters = new { pid = productId };

            var product = db.QueryFirstOrDefault<Product>(query, parameters);

            return product;
        }
    }
}
