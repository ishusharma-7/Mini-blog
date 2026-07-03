import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaPlusCircle,
  FaUserShield,
  FaSignInAlt,
  FaSignOutAlt,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 rounded-xl px-4 py-2 transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent"
        >
          MiniBlog
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-3 md:flex">

          <NavLink to="/" className={navLinkStyle}>
            <FaHome />
            Home
          </NavLink>

          <NavLink to="/create" className={navLinkStyle}>
            <FaPlusCircle />
            Create
          </NavLink>

          <NavLink to="/dashboard" className={navLinkStyle}>
            <FaUserShield />
            Dashboard
          </NavLink>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full bg-slate-200 p-3 transition hover:scale-110 dark:bg-slate-700"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-slate-700" />
            )}
          </button>

          {!token ? (
            <NavLink
              to="/login"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
            >
              <FaSignInAlt />
              Login
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
            >
              <FaSignOutAlt />
              Logout
            </button>
          )}
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">

          <button
            onClick={toggleTheme}
            className="rounded-full bg-slate-200 p-3 dark:bg-slate-700"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl bg-blue-600 p-3 text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 dark:border-slate-700 dark:bg-slate-900 md:hidden">

          <div className="flex flex-col gap-3">

            <NavLink to="/" className={navLinkStyle}>
              <FaHome />
              Home
            </NavLink>

            <NavLink to="/create" className={navLinkStyle}>
              <FaPlusCircle />
              Create
            </NavLink>

            <NavLink to="/dashboard" className={navLinkStyle}>
              <FaUserShield />
              Dashboard
            </NavLink>

            {!token ? (
              <NavLink
                to="/login"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white"
              >
                <FaSignInAlt />
                Login
              </NavLink>
            ) : (
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-white"
              >
                <FaSignOutAlt />
                Logout
              </button>
            )}

          </div>
        </div>
      )}

    </header>
  );
}

export default Navbar;
