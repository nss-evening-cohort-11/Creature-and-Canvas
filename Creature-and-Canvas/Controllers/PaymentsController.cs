using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Creature_and_Canvas.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Creature_and_Canvas.Controllers
{
    [Route("api/payments")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        PaymentRepository _repo;

        public PaymentsController()
        {
            _repo = new PaymentRepository();
        }

        [HttpGet]
        public IActionResult GetAllPayments()
        {
            var allPayments = _repo.GetPayments();

            return Ok(allPayments);
        }


        [HttpGet("{id}")]
        public IActionResult GetPaymentById(int id)
        {
            var payment = _repo.GetPaymentById(id);

            if (payment == null) return NotFound("No payment with that Id was found");

            return Ok(payment);
        }
    }
}
