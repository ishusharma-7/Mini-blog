function Error({ message }) {
  return (
    <div className="rounded-lg border border-red-300 bg-red-100 p-4 text-center text-red-700">
      {message}
    </div>
  );
}

export default Error;
