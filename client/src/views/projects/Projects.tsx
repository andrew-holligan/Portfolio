import Heading from "../../components/heading/Heading";
import ProjectList from "./ProjectList";

function Projects() {
  return (
    <section
      id="projects"
      className="my-32 flex flex-col gap-12 px-12 py-24 max-md:px-6"
    >
      <Heading title={"Projects"} />
      <ProjectList />
    </section>
  );
}

export default Projects;
