import { profile } from "../data";

function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p>Built with React &amp; Tailwind</p>
    </footer>
  );
}

export default Footer;
