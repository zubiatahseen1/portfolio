import { profile } from "../data";

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pb-16">
      <div className="rounded-2xl border border-line bg-card px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Let's build something<span className="text-muted">.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-white/70">
          I'm open to frontend and full-stack developer roles. I'd love to hear from you.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <span className="inline-flex flex-row flex-nowrap items-center gap-2 whitespace-nowrap select-all rounded-full border border-line bg-white px-6 py-2.5 text-sm font-bold text-page transition-opacity hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 shrink-0"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
            tahseenzubia4@gmail.com
          </span>

          <span className="text-sm text-white/50">or</span>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-white px-6 py-2.5 text-sm font-bold text-page transition-opacity hover:opacity-90"
          >
            Message me on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
