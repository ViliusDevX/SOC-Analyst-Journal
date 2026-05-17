import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-emerald-400"
      : "text-zinc-400 hover:text-white transition";

  return (
    <nav className="border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-bold text-white">
          SOC Journal
        </NavLink>

        <div className="flex gap-6 text-sm">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/journey" className={linkClass}>My Journey</NavLink>
          <NavLink to="/about" className={linkClass}>About Me</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;