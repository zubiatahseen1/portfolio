import { profile } from "../data";

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-page/90 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-5">
        <a href="#top" className="font-semibold whitespace-nowrap">
          {profile.name}
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
              className="rounded-full px-2 py-1.5 whitespace-nowrap transition-colors sm:px-3 hover:bg-white/10 hover:text-white"
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
