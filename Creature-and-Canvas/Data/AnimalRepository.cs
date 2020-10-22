using Creature_and_Canvas.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Creature_and_Canvas.Data
{
    public class AnimalRepository
    {
        static List<Animal> _animals = new List<Animal>();

        const string _connectionString = "Server=localhost;Database=Creature_and_Canvas;Trusted_Connection=True;";

        public List<Animal> GetAnimals()
        {
            using var db = new SqlConnection(_connectionString);
            
            var animals = db.Query<Animal>("select * from Animals");

            return animals.ToList();
        }
    }
}
