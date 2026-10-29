function ProjectCard({ name, platform, description, tags, repo, demo, image }) {
  return (
    <article className="group flex flex-col rounded-2xl bg-card p-5 transition-shadow hover:shadow-md sm:odd:last:col-span-2">
      {image && (
        <img
          src={image}
          alt={`${name} screenshot`}
          className="mb-5 w-full rounded-xl"
        />
      )}
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-dark transition-colors group-hover:text-mauve">
          {name}
        </h3>
        <span className="rounded-md bg-white px-2 py-0.5 text-[11px] font-semibold text-muted">
          {platform}
        </span>
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>

      <p className="mt-4 text-xs font-medium text-muted">{tags.join(" · ")}</p>

      {(repo || demo) && (
        <div className="mt-4 flex gap-5 border-t border-line pt-4 text-sm font-semibold">
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="text-dark hover:text-mauve">
              Live demo →
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className="text-dark hover:text-mauve">
              View code →
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
