import { profile } from "../data";

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-dark text-white">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-mauve text-sm font-extrabold text-white">
            ZT
          </span>
          <span className="hidden font-semibold sm:inline">{profile.name}</span>
        </a>
        <nav className="flex gap-1 text-sm text-white/70">
          {[
            ["#experience", "Experience"],
            ["#projects", "Projects"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/10 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
