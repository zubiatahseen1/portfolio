import { profile } from "../data";

function Contact() {
  const href = profile.email ? `mailto:${profile.email}` : profile.linkedin;
  const external = profile.email ? {} : { target: "_blank", rel: "noreferrer" };

  return (
    <section id="contact" className="scroll-mt-20 pb-16">
      <div className="rounded-2xl bg-dark px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Let's build something<span className="text-tan">.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-white/70">
          I'm open to web and mobile developer roles. I'd love to hear from you.
        </p>
        <a
          href={href}
          {...external}
          className="mt-6 inline-block rounded-full bg-mauve px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
        >
          {profile.email ? "Say hello" : "Message me on LinkedIn"}
        </a>
      </div>
    </section>
  );
}

export default Contact;
