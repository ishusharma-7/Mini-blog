import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">

      <div className="w-full max-w-xl rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-2xl dark:border-slate-700 dark:bg-slate-800">

        {/* Icon */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
          <FaExclamationTriangle className="text-5xl text-red-500" />
        </div>

        {/* 404 */}

        <h1 className="mt-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-7xl font-extrabold text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
          Sorry, the page you're looking for doesn't exist or may have
          been moved.
        </p>

        <Link
          to="/"
          className="
            mt-8
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            px-6
            py-3
            font-semibold
            text-white
            transition
            duration-300
            hover:scale-105
            hover:shadow-xl
          "
        >
          <FaHome />
          Back to Home
        </Link>

      </div>

    </main>
  );
}

export default NotFound;
