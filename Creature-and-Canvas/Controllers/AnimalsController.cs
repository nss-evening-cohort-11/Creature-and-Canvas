using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Creature_and_Canvas.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Creature_and_Canvas.Controllers
{
    [Route("api/animals")]
    [ApiController]
    public class AnimalsController : ControllerBase
    {
        AnimalRepository _repo;

        public AnimalsController()
        {
            _repo = new AnimalRepository();
        }

        [HttpGet]
        public IActionResult GetAllAnimals()
        {
            var allAnimals = _repo.GetAnimals();

            return Ok(allAnimals);
        }
    }
}
