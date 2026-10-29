function ProjectCard({ name, platform, description, tags, repo, demo }) {
  return (
    <article className="card project-card">
      <p className="platform">{platform}</p>
      <h3>{name}</h3>
      <p className="description">{description}</p>
      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {(repo || demo) && (
        <div className="project-links">
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer">
              Code ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
