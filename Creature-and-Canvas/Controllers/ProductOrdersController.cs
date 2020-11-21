using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Creature_and_Canvas.Data;

namespace Creature_and_Canvas.Controllers
{
    [Route("api/productOrders")]
    [ApiController]
    public class ProductOrdersController : ControllerBase
    {
        ProductOrderRepository _repo;

        public ProductOrdersController()
        {
            _repo = new ProductOrderRepository();
        }

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var allProductOrders = _repo.GetProductOrders();

            return Ok(allProductOrders);
        }

        [HttpGet("{id}")]
        public IActionResult GetProductOrderById(int id)
        {
            var productOrder = _repo.GetProductOrderById(id);

            if (productOrder == null) return NotFound("No productOrder with that Id was found");

            return Ok(productOrder);
        }

        [HttpGet("details/{custId}")]
        public IActionResult GetOrderDetailsByCustomerId(int custId)
        {
            var orderDetails = _repo.GetOrderDetailsByCustomerId(custId);

            if (orderDetails == null) return NotFound("No productOrder with that customerId was found");

            return Ok(orderDetails);
        }
    }
}
