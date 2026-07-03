import { useState } from "react";

import useFetch from "../hooks/useFetch";
import PostCard from "../components/PostCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Pagination from "../components/Pagination";

function Home() {
  const [page, setPage] = useState(1);

  const {
    data: posts,
    loading,
    error,
  } = useFetch(`/posts?_page=${page}&_limit=6`);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Hero Section */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-white shadow-lg">
        <h1 className="mb-4 text-5xl font-bold">
          Welcome to MiniBlog
        </h1>

        <p className="max-w-2xl text-lg">
          Explore posts fetched from an external API using
          React, Axios, and Tailwind CSS.
        </p>
      </section>

      {/* Posts */}
      <section className="mt-12">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Latest Posts
          </h2>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Page {page}
          </span>

        </div>

        {loading && <Loading />}

        {error && <Error message={error} />}

        {!loading && !error && (

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
              />
            ))}

          </div>

        )}

        <Pagination
          page={page}
          setPage={setPage}
        />

      </section>

    </main>
  );
}

export default Home;
