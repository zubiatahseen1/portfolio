import { profile } from "../data";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#top">
          {profile.name}
        </a>
        <nav className="nav">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
