using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Creature_and_Canvas.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Creature_and_Canvas.Controllers
{
    [Route("api/paintings")]
    [ApiController]
    public class PaintingsController : ControllerBase
    {
        PaintingRepository _repo;

        public PaintingsController()
        {
            _repo = new PaintingRepository();
        }

        [HttpGet]
        public IActionResult GetAllPaintings()
        {
            var allPaintings = _repo.GetPaintings();

            return Ok(allPaintings);
        }

        [HttpGet("search/{keyword}")]
        public IActionResult SearchPaintingsByKeyword(string keyword)
        {
            var painting = _repo.SearchPaintingsByKeyword(keyword);

            if (painting == null) return NotFound("Did not find any items with that keyword.");

            return Ok(painting);
        }


        [HttpGet("getLatest20Paintings")]
        public IActionResult GetTwentyPaintings()
        {
            var latestPaintings = _repo.GetLatest20Paintings();

            return Ok(latestPaintings);
        }


        [HttpGet("{id}")]
        public IActionResult GetPaintingById(int id)
        {
            var painting = _repo.GetPaintingById(id);

            if (painting == null) return NotFound("No product with that Id was found");

            return Ok(painting);
        }

        [HttpGet("{title}")]
        public IActionResult GetPaintingIdByTitle(string title)
        {
            var painting = _repo.GetPaintingIdByTitle(title);

            if (painting == null) return NotFound("No product with that Id was found");

            return Ok(painting);
        }

    }
}
