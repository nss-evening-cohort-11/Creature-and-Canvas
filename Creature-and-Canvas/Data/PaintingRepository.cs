using Creature_and_Canvas.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Creature_and_Canvas.Data
{
    public class PaintingRepository
    {
        static List<Painting> _animals = new List<Painting>();

        const string _connectionString = "Server=localhost;Database=Creature_and_Canvas;Trusted_Connection=True;";

        public List<Painting> GetPaintings()
        {
            using var db = new SqlConnection(_connectionString);
            
            var paintings = db.Query<Painting>("select * from Paintings");

            return paintings.ToList();
        }

        public Painting SearchPaintingsByKeyword(string keyword)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select *
                          from Paintings
                          where PaintingDescription like '%" + keyword + "%'";

            var parameters = new { kwd = keyword };

            var painting = db.QueryFirstOrDefault<Painting>(query, parameters);

            return painting;
        }

        public List<Painting> GetLatest20Paintings()
        {
            using var db = new SqlConnection(_connectionString);

            var paintings = db.Query<Painting>(@"select *
                                                 from Paintings
                                                 where ItemID > ((select count(*) from Paintings) - 20)
                                                 order by ItemID desc");
          
          return paintings.ToList();

        }

        public AnimalPainting GetPaintingById(int itemId)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select A.AnimalName, P.ItemID, P.Price, P.CanvasSize, P.AnimalID, P.PaintingDescription, P.ProductTypeID, P.ImageURL, P.Title
                          from Paintings P
                          join Animals A
                          on A.AnimalId = P.AnimalId
                          where ItemID = @Iid";

            var parameters = new { Iid = itemId };

            var painting = db.QueryFirstOrDefault<AnimalPainting>(query, parameters);

            return painting;
        }

        public Painting GetPaintingIdByTitle(string title)
        {
            using var db = new SqlConnection(_connectionString);

            var query = @"select ItemID
                          from Paintings
                          where Title like '%" + title + "%'";

            var parameters = new { tid = title };

            var painting = db.QueryFirstOrDefault<Painting>(query, parameters);

            return painting;
        }
    }
}
