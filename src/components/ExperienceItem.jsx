function ExperienceItem({ role, company, type, period, description, highlights }) {
  return (
    <article className="card experience-item">
      <div className="experience-head">
        <div>
          <h3>{role}</h3>
          <p className="meta">
            {company} · {type}
          </p>
        </div>
        <p className="period">{period}</p>
      </div>
      {description && <p>{description}</p>}
      {highlights && (
        <ul className="highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default ExperienceItem;
