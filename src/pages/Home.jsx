function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-white shadow-lg">
        <h1 className="mb-4 text-5xl font-bold">
          Welcome to MiniBlog
        </h1>

        <p className="max-w-xl text-lg">
          Discover articles, read posts, and explore React API integration.
        </p>
      </section>

      {/* Posts Section */}
      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">
          Latest Posts
        </h2>

        <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center text-gray-500">
          Posts will appear here after API integration.
        </div>
      </section>
    </main>
  );
}

export default Home;