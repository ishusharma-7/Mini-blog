import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          MiniBlog
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/create"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Create
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;