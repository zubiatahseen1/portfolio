import { profile } from "../data";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React and Vite.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
