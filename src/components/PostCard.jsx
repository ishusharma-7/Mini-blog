import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <h2 className="mb-3 text-xl font-bold capitalize">
        {post.title}
      </h2>

      <p className="mb-5 text-gray-600">
        {post.body.slice(0, 100)}...
      </p>

      <Link
        to={`/posts/${post.id}`}
        className="font-semibold text-blue-600 hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
}

export default PostCard;