import { techStack } from "../data";
import SectionHeading from "./SectionHeading";
import TechItem from "./TechItem";

function TechStack() {
  return (
    <section className="pb-20">
      <SectionHeading>Tech stack</SectionHeading>
      <div className="space-y-6">
        {techStack.map(({ group, items }) => (
          <div key={group}>
            <h3 className="mb-3 text-xs font-semibold tracking-[0.12em] text-muted uppercase">{group}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {items.map((tech) => (
                <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
