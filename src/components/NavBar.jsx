import { NavLink } from "react-router-dom";

function NavBar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-emerald-400"
      : "text-zinc-400 hover:text-white transition";

  const externalLinkClass =
    "text-zinc-400 hover:text-emerald-400 transition";

  return (
    <nav className="border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <NavLink to="/" className="font-bold text-white">
          SOC Journal
        </NavLink>

        <div className="flex flex-wrap items-center gap-6 text-sm">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/journey" className={linkClass}>
            My Journey
          </NavLink>

          <NavLink to="/scenario-lab" className={linkClass}>
            Scenario Lab
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About Me
          </NavLink>

          <span className="hidden sm:inline text-zinc-700">|</span>

          <a
            href="https://github.com/ViliusDevX"
            target="_blank"
            rel="noreferrer"
            className={externalLinkClass}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vilius-nikitinas-01381732a/"
            target="_blank"
            rel="noreferrer"
            className={externalLinkClass}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;