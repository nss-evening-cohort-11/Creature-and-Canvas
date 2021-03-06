﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Creature_and_Canvas.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Creature_and_Canvas.Controllers
{
    [Route("api/paintings")]
    [ApiController]
    public class PaintingsController : ControllerBase
    {
        public abstract class FirebaseEnabledController : ControllerBase
        {
            protected string UserId => User.FindFirst(x => x.Type == "user_id").Value;
        }

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

        [HttpGet("{itemId}")]
        public IActionResult GetPaintingById(int itemId)
        {
            var painting = _repo.GetPaintingById(itemId);

            if (painting == null) return NotFound("No product with that Id was found");

            return Ok(painting);
        }

        [HttpGet("animalPainting/{animalId}")]
        public IActionResult GetPaintingByAnimalId(int animalId)
        {
            var painting = _repo.GetAllPaintingByAnimalId(animalId);

            if (painting == null) return NotFound("No painting with that animalId was found");

            return Ok(painting);
        }
    }
}
