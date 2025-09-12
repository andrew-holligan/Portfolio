import GridSweeperAsset from "../../assets/projects/gridsweeper.png";
import D2TrackerAsset from "../../assets/projects/d2tracker.png";
// import ReactTodoListAsset from "../../assets/projects/react-todolist.png";
import SortingVisualisedAsset from "../../assets/projects/sorting-visualised.png";

import Project from "./Project";

function ProjectList() {
  const items = [
    {
      title: "D2Tracker",
      image: D2TrackerAsset,
      description: [
        "Stat tracker site for Destiny 2 which displays and compares player stats",
        "View and filter a players previous activities",
      ],
      website: "https://d2tracker.net/",
      tags: ["React", "TailwindCSS", "TypeScript", "Bungie API"],
    },
    {
      title: "GridSweeper",
      image: GridSweeperAsset,
      description: [
        "Online multiplayer web game inspired by Minesweeper",
        "Create custom grids which other players can play",
        "Create and join lobbies to play with friends",
        "Supporting private, coop, and competitive game modes",
      ],
      // website: "https://gridsweeper.net/",
      tags: [
        "React",
        "ASP.NET",
        "TailwindCSS",
        "TypeScript",
        "EntityFrameworkCore",
        "PostgreSQl",
      ],
    },
    // {
    //   title: "React-TodoList",
    //   image: ReactTodoListAsset,
    //   description: ["Todo list web app with auth, accounts and sessions"],
    //   website: "https://manage-todolist.netlify.app/",
    //   code: "https://github.com/andrew-holligan/React-TodoList",
    //   tags: ["React", "TailwindCSS", "TypeScript", "MongoDB", "Express.js"],
    // },
    {
      title: "SortingVisualised",
      image: SortingVisualisedAsset,
      description: [
        "Visualisation of sorting algorithms, developed in pure HTML, CSS and JavaScript",
        "Change the speed and size of the visualisation",
        "Includes information on each sorting algorithm",
      ],
      // website: "https://sortingvisualised.netlify.app/",
      code: "https://github.com/andrew-holligan/SortingVisualised",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    // {
    //   title: "ASP.NET-TodoList",
    //   description: [
    //     "Standalone ASP.NET server with a RESTful API for a todo list",
    //   ],
    //   code: "https://github.com/andrew-holligan/ASP.NET-TodoList",
    //   tags: ["ASP.NET"],
    // },
  ];

  return (
    <ul className="flex flex-wrap justify-center gap-12">
      {items.map((item, index) => (
        <li key={index}>
          <Project {...item} />
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
