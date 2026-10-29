import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 pb-20">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
