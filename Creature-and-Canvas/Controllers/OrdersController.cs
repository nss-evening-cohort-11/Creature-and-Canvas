﻿using System;
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

        public OrdersController(OrderRepository repo)
        {
            _repo = repo;
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

            if (order == null) return NotFound("No order with that Id was found");

            return Ok(order);
        }

        [HttpGet("history/{custId}")]
        public IActionResult GetOrdersByCustomerId(int custId)
        {
            var orders = _repo.GetOrdersByCustomerId(custId);

            if (orders == null) return NotFound("No orders found for this customer");

            return Ok(orders);
        }
    }
}
