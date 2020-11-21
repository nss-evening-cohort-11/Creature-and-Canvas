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

        public List<ProductOrderDetail> GetOrderDetailsByCustomerId(int customerId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select O.OrderDate as [Date], (Pa.Price * Po.Quantity) as [OrderTotal], Pa.Title as [Item], Pa.Price as [Price], Pa.ItemID as [ItemID]
                            from Orders O
                            join ProductOrders Po on Po.OrderID = O.OrderID
                            join Customers Cu on Cu.CustomerID = O.CustomerID
                            join Products P on P.ProductID = Po.ProductID
                            join Paintings Pa on Pa.ItemID = P.ItemID
                            where Cu.CustomerID = @cuid";

            var parameters = new { cuid = customerId };

            var details = db.Query<ProductOrderDetail>(query, parameters).ToList();

            return details;
        }
    }
}
