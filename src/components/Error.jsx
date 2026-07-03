import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

function Error({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div
        className="
          w-full
          max-w-lg
          rounded-[32px]
          border
          border-red-200
          bg-white
          p-10
          text-center
          shadow-2xl
          dark:border-red-900
          dark:bg-slate-800
        "
      >
        {/* Error Icon */}

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
          <FaExclamationTriangle className="text-4xl text-red-600 dark:text-red-400" />
        </div>

        {/* Title */}

        <h2 className="mt-6 text-3xl font-bold text-slate-800 dark:text-white">
          Oops!
        </h2>

        {/* Message */}

        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
          {message}
        </p>

        {/* Retry Button */}

        {onRetry && (
          <button
            onClick={onRetry}
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-red-500
              to-red-600
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:scale-105
            "
          >
            <FaRedo />
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}

export default Error;