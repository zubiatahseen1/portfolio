import avatar from "../assets/avatar.jpg";
import { profile } from "../data";
import { GitHubIcon, LinkedInIcon } from "./Icons";

function Hero() {
  return (
    <section id="top" className="pt-10 pb-20">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-md">
          <h1 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl">
            Hi, I'm Zubia<span className="text-muted">.</span>
          </h1>
          <p className="mt-3 text-lg font-medium text-white/85">
            {profile.title} based in {profile.location}.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
              </span>
              {profile.status}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-muted hover:text-white"
            >
              <LinkedInIcon className="size-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-muted hover:text-white"
            >
              <GitHubIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="shrink-0 self-start rounded-full bg-gradient-to-br from-teal-300 via-cyan-400 to-indigo-500 p-[3px] sm:self-center">
          <img
            src={avatar}
            alt={profile.name}
            width="176"
            height="176"
            className="size-32 rounded-full border-4 border-white object-cover sm:size-44"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
