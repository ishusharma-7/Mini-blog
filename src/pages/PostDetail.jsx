import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
        setLoading(true);

        const response = await axiosInstance.get(`/posts/${id}`);

        setPost(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch post.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <Link
        to="/"
        className="mb-6 inline-block text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          Post #{post.id}
        </span>

        <h1 className="mt-6 text-4xl font-bold capitalize">
          {post.title}
        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-700">
          {post.body}
        </p>

        <div className="mt-10 border-t pt-6 text-sm text-gray-500">
          User ID: {post.userId}
        </div>
      </div>
    </main>
  );
}

export default PostDetail;
