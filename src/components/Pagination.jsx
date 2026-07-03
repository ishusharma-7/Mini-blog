function Pagination({ page, setPage }) {
  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300"
      >
        Previous
      </button>

      <span className="font-semibold">
        Page {page}
      </span>

      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
}
export default Pagination;