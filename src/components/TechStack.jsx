import { techStack } from "../data";
import SectionHeading from "./SectionHeading";
import TechItem from "./TechItem";

function TechStack() {
  return (
    <section className="pb-20">
      <SectionHeading>Tech stack</SectionHeading>
      <ul className="flex flex-wrap gap-2.5">
        {techStack.map((tech) => (
          <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </ul>
    </section>
  );
}

export default TechStack;
