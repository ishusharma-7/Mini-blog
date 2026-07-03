import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Pagination({
  page,
  setPage,
  totalPages = 17,
}) {
  const pages = [];

  const startPage = Math.max(1, page - 2);
  const endPage = Math.min(totalPages, page + 2);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-3">

      <button
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-white
          px-4
          py-2
          shadow-md
          transition
          hover:bg-blue-600
          hover:text-white
          disabled:cursor-not-allowed
          disabled:opacity-40
          dark:bg-slate-800
          dark:text-white
        "
      >
        <FaChevronLeft />
        Previous
      </button>

      {pages.map((number) => (
        <button
          key={number}
          onClick={() => setPage(number)}
          className={`
            h-11
            w-11
            rounded-xl
            font-semibold
            transition
            ${
              page === number
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "bg-white hover:bg-blue-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            }
          `}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === totalPages}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-white
          px-4
          py-2
          shadow-md
          transition
          hover:bg-blue-600
          hover:text-white
          disabled:cursor-not-allowed
          disabled:opacity-40
          dark:bg-slate-800
          dark:text-white
        "
      >
        Next
        <FaChevronRight />
      </button>

    </div>
  );
}

export default Pagination;
