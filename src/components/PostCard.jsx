import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaRegClock,
  FaUserCircle,
} from "react-icons/fa";

function PostCard({ post }) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        dark:border-slate-700
        dark:bg-slate-800
      "
    >
      {/* Banner */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

      <div className="p-6">

        {/* Author */}
        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-300">
            <FaUserCircle className="text-2xl text-blue-600" />
            <span className="text-sm font-medium">
              User {post.userId}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-300">
            <FaRegClock />
            5 min read
          </div>

        </div>

        {/* Title */}
        <h2
          className="
            line-clamp-2
            text-2xl
            font-bold
            text-slate-800
            dark:text-white
          "
        >
          {post.title}
        </h2>

        {/* Body */}
        <p
          className="
            mt-4
            line-clamp-3
            text-slate-600
            dark:text-slate-300
          "
        >
          {post.body}
        </p>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">

          <span
            className="
              rounded-full
              bg-blue-100
              px-3
              py-1
              text-xs
              font-semibold
              text-blue-700
              dark:bg-blue-900/40
              dark:text-blue-300
            "
          >
            React
          </span>

          <Link
            to={`/posts/${post.id}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              px-4
              py-2
              font-semibold
              text-white
              transition
              duration-300
              group-hover:scale-105
            "
          >
            Read More
            <FaArrowRight />
          </Link>

        </div>

      </div>
    </article>
  );
}

export default PostCard;
