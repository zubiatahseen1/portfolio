import { experience } from "../data";
import ExperienceItem from "./ExperienceItem";
import SectionHeading from "./SectionHeading";

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 pb-20">
      <SectionHeading>Experience</SectionHeading>
      <ol className="space-y-10 border-l border-line pl-6">
        {experience.map((job) => (
          <ExperienceItem
            key={job.id}
            role={job.role}
            company={job.company}
            type={job.type}
            period={job.period}
            description={job.description}
            highlights={job.highlights}
          />
        ))}
      </ol>
    </section>
  );
}

export default Experience;
