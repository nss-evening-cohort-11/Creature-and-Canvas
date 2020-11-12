using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Creature_and_Canvas.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Creature_and_Canvas.Models;

namespace Creature_and_Canvas.Controllers
{
    [Route("api/customers")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        CustomerRepository _repo;

        public CustomersController(CustomerRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllCustomers()
        {
            var allCustomers = _repo.GetCustomers();

            return Ok(allCustomers);
        }


        [HttpGet("{id}")]
        public IActionResult GetCustomerById(int id)
        {
            var customer = _repo.GetCustomerById(id);

            if (customer == null) return NotFound("No customer with that Id was found");

            return Ok(customer);
        }

        [HttpPost]
        public IActionResult CreateCustomer(Customer customer)
        {
            _repo.Add(customer);

            return Created($"/api/customers/{customer.CustomerID}", customer);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCustomer(int id)
        {
            if (_repo.GetCustomerById(id) == null)
            {
                return NotFound();
            }

            _repo.Remove(id);

            return Ok();
        }
    }
}
