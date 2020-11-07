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

        [HttpGet("{id}")]
        public IActionResult GetAnimalById(int id)
        {
            var animal = _repo.GetAnimalById(id);

            if (animal == null) return NotFound("No animal with that Id was found");

            return Ok(animal);
        }

        [HttpGet("topThree")]
        public IActionResult GetAllPaintingsAndTopThree()
        {
            var paintingsAndAnimals = _repo.GetAnimalAndPaintingsAndTop3();

            if (paintingsAndAnimals == null) return NotFound("nada");

            return Ok(paintingsAndAnimals);
        }
    }
}
