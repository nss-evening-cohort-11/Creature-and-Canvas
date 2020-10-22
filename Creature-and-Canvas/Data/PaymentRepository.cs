using Creature_and_Canvas.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Creature_and_Canvas.Data
{
    public class PaymentRepository
    {
        static List<Payment> _payments = new List<Payment>();

        const string _connectionString = "Server=localhost;Database=Creature_and_Canvas;Trusted_Connection=True;";

        public List<Payment> GetPayments()
        {
            using var db = new SqlConnection(_connectionString);
            
            var payments = db.Query<Payment>("select * from Payments");

            return payments.ToList();
        }

        public Payment GetPaymentById(int paymentId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from Payments
                          where PaymentID = @pid";

            var parameters = new { pid = paymentId };

            var payment = db.QueryFirstOrDefault<Payment>(query, parameters);

            return payment;
        }
    }
}
