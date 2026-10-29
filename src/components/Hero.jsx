import avatar from "../assets/avatar.jpg";
import { profile } from "../data";

function Hero() {
  return (
    <section id="top" className="hero container">
      <img className="avatar" src={avatar} alt={profile.name} width="120" height="120" />
      <p className="status">
        <span className="status-dot" aria-hidden="true"></span>
        {profile.status} · {profile.location}
      </p>
      <h1>
        Hi, I'm Zubia. <br />
        <span className="accent">I'm a {profile.title}.</span>
      </h1>
      <p className="lead">
        I build web apps with React and JavaScript, and native mobile apps with
        Swift and Kotlin.
      </p>
      <div className="actions">
        <a className="button primary" href="#projects">
          View projects
        </a>
        <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="button" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Hero;
