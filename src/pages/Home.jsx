import { useEffect, useMemo, useState } from "react";
import {
  FaSearch,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";

import axiosInstance from "../api/axiosInstance";

import Loading from "../components/Loading";
import Error from "../components/Error";
import Pagination from "../components/Pagination";
import PostCard from "../components/PostCard";

function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const limit = 6;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axiosInstance.get(
        `/posts?_page=${page}&_limit=${limit}`
      );

      const apiPosts = response.data;

      // Show custom posts only on the first page
      
      const customPosts = JSON.parse(localStorage.getItem("customPosts")) || [];

        if (page === 1) {
          if (customPosts.length > 0) {
            // Show custom posts first, then API posts
            const visibleCustomPosts = customPosts.slice(0, limit);

            const remaining = limit - visibleCustomPosts.length;

            const visibleApiPosts = apiPosts.slice(
              0,
              Math.max(remaining, 0)
            );

            setPosts([
              ...visibleCustomPosts,
              ...visibleApiPosts,
            ]);
          } 
          else {
            // No custom posts, show only API posts
            setPosts(apiPosts);
          }
        } 
        else {
          // Page 2 onwards always show API posts
          setPosts(apiPosts);
        }
        

    } catch (err) {
      setError("Failed to fetch posts.");
    } finally {
      setLoading(false);
    }
  };

  fetchPosts();
}, [page]);

  const filteredPosts = useMemo(() => {
    if (!posts) return [];

    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-14">

        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 p-10 text-white shadow-2xl">

          <div className="max-w-3xl">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-md">
              <FaBookOpen />
              Modern React Blog
            </div>

            <h1 className="text-5xl font-extrabold leading-tight">
              Discover Amazing React Articles
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Read, create and explore modern blog posts powered by
              React, Axios, Tailwind CSS and React Router.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105">
              Explore Posts
              <FaArrowRight />
            </button>

          </div>

        </div>

      </section>

      {/* Search */}

      <section className="mx-auto max-w-7xl px-6">

        <div className="relative mb-8">

          <FaSearch className="absolute left-5 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              rounded-2xl
              border
              border-slate-300
              bg-white
              py-4
              pl-14
              pr-4
              shadow-md
              outline-none
              transition
              focus:border-blue-600
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-white
            "
          />

        </div>

      </section>

      {/* Posts */}

      <section className="mx-auto max-w-7xl px-6 pb-14">

        {filteredPosts.length === 0 ? (

          <div className="rounded-3xl bg-white p-16 text-center shadow-xl dark:bg-slate-800">

            <h2 className="text-3xl font-bold dark:text-white">
              No Posts Found
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Try searching with another keyword.
            </p>

          </div>

        ) : (

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
              />
            ))}

          </div>

        )}

        <div className="mt-12 flex justify-center">

          <Pagination
            page={page}
            setPage={setPage}
            totalPages={Math.ceil(100 / limit)}
          />

        </div>

      </section>

    </main>
  );
}

export default Home;
