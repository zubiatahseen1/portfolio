function ExperienceItem({ role, company, type, period, description, highlights }) {
  return (
    <li className="relative">
      <span
        className="absolute top-1.5 -left-[29px] size-2.5 rounded-full bg-tan ring-4 ring-page"
        aria-hidden="true"
      ></span>
      <p className="text-xs font-semibold tracking-wide text-mauve">{period}</p>
      <h3 className="mt-1 text-lg font-bold text-dark">{role}</h3>
      <p className="text-sm text-muted">
        {company} · {type}
      </p>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
      )}
      {highlights && (
        <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 h-px w-3 shrink-0 bg-stone" aria-hidden="true"></span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default ExperienceItem;
