import { techStack } from "../data";
import TechItem from "./TechItem";

function TechStack() {
  return (
    <section id="stack" className="section container">
      <h2>Tech stack</h2>
      <ul className="tech-list">
        {techStack.map((tech) => (
          <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </ul>
    </section>
  );
}

export default TechStack;
