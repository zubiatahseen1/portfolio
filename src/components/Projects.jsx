import { projects } from "../data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section container">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
