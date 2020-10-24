using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Creature_and_Canvas.Data;

namespace Creature_and_Canvas.Controllers
{
    [Route("api/orders")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        OrderRepository _repo;

        public OrdersController()
        {
            _repo = new OrderRepository();
        }

        [HttpGet]
        public IActionResult GetAllOrders()
        {
            var allOrders = _repo.GetOrders();

            return Ok(allOrders);
        }


        [HttpGet("{id}")]
        public IActionResult GetOrderById(int id)
        {
            var order = _repo.GetOrderById(id);

            if (order == null) return NotFound("No payment with that Id was found");

            return Ok(order);
        }
    }
}
