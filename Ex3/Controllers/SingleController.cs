using Ex3.Models;
using MazeLib;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Ex3.Controllers
{
    public class SingleController : ApiController
    {
        private SingleModel singleModel = new SingleModel();
        // GET: api/Single
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Single/name/rows/cols
        public JObject GetMaze(string name, int rows, int cols)
        {
            Maze maze = singleModel.GenerateMaze(name, rows, cols);
            JObject obj = JObject.Parse(maze.ToJSON());
            return obj;
        }

        // GET: api/Single/name/rows/cols
        public JObject GetSol(string name, int algo)
        {
            JObject obj = JObject.Parse(singleModel.Solve(name, algo));
            return obj;
        }

        // POST: api/Single
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Single/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Single/5
        public void Delete(int id)
        {
        }
    }
}
