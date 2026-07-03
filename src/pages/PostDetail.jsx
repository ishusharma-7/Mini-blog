import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaUserCircle,
  FaRegClock,
} from "react-icons/fa";

import axiosInstance from "../api/axiosInstance";
import Loading from "../components/Loading";
import Error from "../components/Error";

function PostDetail() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosInstance.get(`/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        setError(err.message || "Failed to load post.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 dark:bg-slate-900">

      <div className="mx-auto max-w-4xl">

        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          <FaArrowLeft />
          Back to Posts
        </Link>

        <article className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-700 dark:bg-slate-800">

          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

            <div className="flex items-center gap-3">
              <FaUserCircle className="text-4xl text-blue-600" />

              <div>
                <p className="font-semibold text-slate-800 dark:text-white">
                  User {post.userId}
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Blog Author
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <FaRegClock />
              <span>5 min read</span>
            </div>

          </div>

          <div className="mb-6 h-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white">
            {post.title}
          </h1>

          <p className="mt-8 whitespace-pre-line text-lg leading-8 text-slate-600 dark:text-slate-300">
            {post.body}
          </p>

        </article>

      </div>

    </main>
  );
}

export default PostDetail;
