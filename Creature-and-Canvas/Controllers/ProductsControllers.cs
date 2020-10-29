using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Creature_and_Canvas.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Creature_and_Canvas.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        ProductRepository _repo;

        public ProductsController()
        {
            _repo = new ProductRepository();
        }

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var allProducts = _repo.GetProducts();

            return Ok(allProducts);
        }

        [HttpGet("{id}")]
        public IActionResult GetProductById(int id)
        {
            var product = _repo.GetProductById(id);

            if (product == null) return NotFound("No product with that Id was found");

            return Ok(product);
        }

    }
}
