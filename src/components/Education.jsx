import { education } from "../data";
import SectionHeading from "./SectionHeading";

function Education() {
  return (
    <section id="education" className="scroll-mt-20 pb-20">
      <SectionHeading>Education</SectionHeading>
      <ul className="divide-y divide-line">
        {education.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div>
              <h3 className="text-base font-bold text-white">{item.credential}</h3>
              <p className="text-sm text-muted">{item.school}</p>
            </div>
            <p className="shrink-0 text-xs font-semibold tracking-wide text-muted">{item.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
