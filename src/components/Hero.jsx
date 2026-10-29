import avatar from "../assets/avatar.jpg";
import { profile } from "../data";
import { GitHubIcon, LinkedInIcon } from "./Icons";

function Hero() {
  return (
    <section id="top" className="pt-10 pb-20">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-md">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
            {profile.status}
          </p>
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-dark sm:text-5xl">
            Hi, I'm Zubia<span className="text-tan">.</span>
          </h1>
          <p className="mt-3 text-lg font-medium text-ink/80">
            {profile.title} based in {profile.location}.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            I build web apps with React and JavaScript, and native mobile apps
            with Swift and Kotlin.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-dark px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-mauve"
            >
              See my work
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-dark hover:text-dark"
            >
              <LinkedInIcon className="size-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-dark hover:text-dark"
            >
              <GitHubIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative shrink-0 self-start sm:self-center">
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-full bg-stone"></div>
          <img
            src={avatar}
            alt={profile.name}
            width="176"
            height="176"
            className="relative size-32 rounded-full border-4 border-white object-cover shadow-sm sm:size-44"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
