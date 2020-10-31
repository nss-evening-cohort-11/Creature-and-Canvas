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
<<<<<<< HEAD
<<<<<<< HEAD
                                                 order by ItemID desc");
            
=======
                                                 order by ItemID desc)");
=======
                                                 order by ItemID desc");
>>>>>>> d7e6df65183573fef2016d73a4012bb9b09ed192

>>>>>>> 871f3510171e51e40ef52c3fae4463e2dd07bb35
            return paintings.ToList();
        }

    }
}
