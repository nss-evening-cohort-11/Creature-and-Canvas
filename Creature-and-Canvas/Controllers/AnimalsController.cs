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

        //[HttpGet("shopAnimals")]
        //public IActionResult GetAnimalsAndNumberOfPaintings()
        //{
        //    var shopAnimals = _repo.GetAnimalsAndPaintings();

        //    return Ok(shopAnimals);
        //}

        //[HttpGet("topThree/{animalId}")]
        //public IActionResult GetAllPaintingsByAnimalId(int animalId)
        //{
        //    var painting = _repo.GetFirstThreePaintingsByAnimalId(animalId);

        //    if (painting == null) return NotFound("No painting with that animalId was found");

        //    return Ok(painting);
        //}

        [HttpGet("topThree")]
        public IActionResult GetAllPaintingsAndTopThree()
        {
            var paintingsAndAnimals = _repo.GetAnimalAndPaintingsAndTop3();

            if (paintingsAndAnimals == null) return NotFound("nada");

            return Ok(paintingsAndAnimals);
        }
    }
}
