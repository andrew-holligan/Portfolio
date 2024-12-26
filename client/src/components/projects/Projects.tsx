import GridSweeperAsset from "../../assets/projects/gridsweeper.png";
import D2TrackerAsset from "../../assets/projects/d2tracker.png";

import Project from "./Project";

function Projects() {
  return (
    <section id="#projects" className="flex flex-col gap-12 p-12">
      {/* HEADING */}
      <h2 className="w-1/2 border-b-4 border-border p-2 text-4xl text-foreground max-xl:text-3xl max-md:text-2xl max-sm:text-xl">
        Projects
      </h2>

      {/* PROJECTS */}
      <ul className="flex flex-wrap gap-12">
        <li>
          <Project
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
            title={"D2Tracker"}
            image={D2TrackerAsset}
            description={[
              "Stat tracker site for Destiny 2 which displays and compares player stats",
            ]}
            website={"https://d2tracker.net/"}
            tags={["React", "TailwindCSS", "TypeScript", "Bungie API"]}
          />
        </li>
      </ul>
    </section>
  );
}

export default Projects;
