import GridSweeperAsset from "../../assets/projects/gridsweeper.png";
import D2TrackerAsset from "../../assets/projects/d2tracker.png";
import ReactTodoListAsset from "../../assets/projects/react-todolist.png";
import SortingVisualisedAsset from "../../assets/projects/sorting-visualised.png";

import Project from "./Project";

function Projects() {
  return (
    <section id="projects" className="my-32 flex flex-col gap-12 px-12 py-24">
      {/* HEADING */}
      <h2 className="w-1/2 border-b-4 border-border p-2 text-4xl text-foreground max-xl:text-3xl max-md:text-2xl max-sm:text-xl">
        Projects
      </h2>

      {/* PROJECTS */}
      <ul className="flex flex-wrap gap-12">
        <li>
          <Project
            star={true}
            title={"GridSweeper"}
            image={GridSweeperAsset}
            description={[
              "Online multiplayer web game inspired by Minesweeper",
            ]}
            website={"https://gridsweeper.net/"}
            tags={[
              "React",
              "TailwindCSS",
              "TypeScript",
              "PostgreSQL",
              "ASP.NET",
            ]}
          />
        </li>

        <li>
          <Project
            star={true}
            title={"D2Tracker"}
            image={D2TrackerAsset}
            description={[
              "Stat tracker site for Destiny 2 which displays and compares player stats",
            ]}
            website={"https://d2tracker.net/"}
            tags={["React", "TailwindCSS", "TypeScript", "Bungie API"]}
          />
        </li>

        <li>
          <Project
            title={"React-TodoList"}
            image={ReactTodoListAsset}
            description={[
              "Todo list web app with accounts, authentication and sessions",
            ]}
            website={"https://manage-todolist.netlify.app/"}
            code={"https://github.com/andrew-holligan/React-TodoList"}
            tags={[
              "React",
              "TailwindCSS",
              "TypeScript",
              "MongoDB",
              "Express.js",
            ]}
          />
        </li>

        <li>
          <Project
            title={"SortingVisualised"}
            image={SortingVisualisedAsset}
            description={[
              "Visualisation of sorting algorithms in action, developed in raw HTML, CSS and JavaScript",
            ]}
            website={"https://sortingvisualised.netlify.app/"}
            code={"https://github.com/andrew-holligan/SortingVisualised"}
            tags={["HTML", "CSS", "JavaScript"]}
          />
        </li>

        <li>
          <Project
            title={"ASP.NET-TodoList"}
            description={[
              "Standalone ASP.NET server with a RESTful API for a todo list",
            ]}
            code={"https://github.com/andrew-holligan/ASP.NET-TodoList"}
            tags={["ASP.NET"]}
          />
        </li>
      </ul>
    </section>
  );
}

export default Projects;
