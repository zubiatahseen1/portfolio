import { experience } from "../data";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <section id="experience" className="section container">
      <h2>Work experience</h2>
      <div className="experience-list">
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
      </div>
    </section>
  );
}

export default Experience;
