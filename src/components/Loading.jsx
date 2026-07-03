import { FaReact } from "react-icons/fa";

function Loading({ message = "Loading..." }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">

      <div className="flex flex-col items-center">

        {/* Animated Logo */}

        <div className="mb-6 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 shadow-2xl">

          <FaReact className="animate-spin text-6xl text-white" />

        </div>

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          {message}
        </h2>

        <p className="mt-2 text-center text-slate-500 dark:text-slate-400">
          Please wait while we fetch the latest data...
        </p>

        {/* Progress Animation */}

        <div className="mt-8 h-2 w-64 overflow-hidden rounded-full bg-slate-300 dark:bg-slate-700">

          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

        </div>

      </div>

    </div>
  );
}

export default Loading;
