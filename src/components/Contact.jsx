import { profile } from "../data";

function Contact() {
  return (
    <section id="contact" className="section container">
      <div className="card contact-card">
        <h2>Let's work together</h2>
        <p>
          I'm open to web and mobile developer roles. The quickest way to reach
          me is on LinkedIn.
        </p>
        <div className="actions">
          {profile.email && (
            <a className="button primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
          )}
          <a
            className={profile.email ? "button" : "button primary"}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Message on LinkedIn
          </a>
          <a className="button" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
