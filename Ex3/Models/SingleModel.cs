using MazeGeneratorLib;
using MazeLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SearchAlgorithmsLib;

namespace Ex3.Models
{
    public class SingleModel
    {
        private DFSMazeGenerator dFSMazeGenerator = new DFSMazeGenerator();
        private static Dictionary<string, Maze> mazes = new Dictionary<string, Maze>();


        /// <summary>
        /// Generates the maze.
        /// </summary>
        /// <param name="name">The name.</param>
        /// <param name="rows">The amount of rows.</param>
        /// <param name="cols">The amount of columns.</param>
        /// <returns>Maze.</returns>
        public Maze GenerateMaze(string name, int rows, int cols)
        {
            Maze maze = this.dFSMazeGenerator.Generate(rows, cols);
            maze.Name = name;
           mazes.Add(name, maze);
            return maze;
        }

        /// <summary>
        /// Solves the path for given maze
        /// </summary>
        /// <param name="name">The maze</param>
        /// <param name="algorithm">The algorithm to solve with.</param>
        /// <returns>the path</returns>
        public string Solve(string name, int algorithm)
        {
            //if (this.solutions.ContainsKey(name))
            //{
            //    return this.solutions[name];
            //}
            Solution<Position> solution = null;
            Adapter adapted = new Adapter(mazes[name]);
            ISearcher<Position> searcher = null;
            switch (algorithm)
            {
                case 0:
                    searcher = new BFS<Position>();
                    break;
                case 1:
                    searcher = new DFS<Position>();
                    break;
            }
            solution = searcher.Search(adapted);
            SolveSolution solveSolution = new SolveSolution(name, solution, searcher.GetNumberOfNodesEvaluated());
            string toJSON = solveSolution.ToJSON();
            //solutions.Add(name, toJSON);
            return toJSON;
        }

    }
}