import { useState } from "react";
import {
  FaHeading,
  FaAlignLeft,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

import axiosInstance from "../api/axiosInstance";

function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSuccess("");
    setError("");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.title.trim() || !formData.body.trim()) {
    setLoading(false);
    setError("Please fill in all fields.");
    return;
  }

  try {
    setLoading(true);
    setError("");
    setSuccess("");

    await axiosInstance.post("/posts", formData);

    const newPost = {
      id: Date.now(),
      userId: 1,
      title: formData.title,
      body: formData.body,
      createdAt: Date.now(),
    };

    const customPosts =
      JSON.parse(localStorage.getItem("customPosts")) || [];

    localStorage.setItem(
      "customPosts",
      JSON.stringify([newPost, ...customPosts])
    );

    setSuccess("🎉 Post created successfully!");

    setFormData({
      title: "",
      body: "",
    });
  } catch (err) {
    setError("Failed to create post.");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 dark:bg-slate-900">

      <div className="mx-auto max-w-3xl">

        {/* Header */}

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white">
            Create New Post
          </h1>

          <p className="mt-3 text-slate-500 dark:text-slate-300">
            Share your thoughts with the community.
          </p>

        </div>

        {/* Form */}

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-700 dark:bg-slate-800">

          {success && (
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-100 p-4 text-green-700 dark:bg-green-900/30 dark:text-green-300">
              <FaCheckCircle />
              {success}
            </div>
          )}

          {error && (
            <div className="mb-6 rounded-xl bg-red-100 p-4 text-red-600 dark:bg-red-900/30 dark:text-red-300">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Title */}

            <div>

              <label className="mb-2 block font-semibold dark:text-white">
                Title
              </label>

              <div className="relative">

                <FaHeading className="absolute left-4 top-4 text-slate-400" />

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter post title..."
                  maxLength={100}
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                />

              </div>

              <p className="mt-2 text-right text-sm text-slate-500 dark:text-slate-400">
                {formData.title.length}/100
              </p>

            </div>

            {/* Body */}

            <div>

              <label className="mb-2 block font-semibold dark:text-white">
                Content
              </label>

              <div className="relative">

                <FaAlignLeft className="absolute left-4 top-4 text-slate-400" />

                <textarea
                  rows={8}
                  name="body"
                  value={formData.body}
                  onChange={handleChange}
                  placeholder="Write your post..."
                  maxLength={500}
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                />

              </div>

              <p className="mt-2 text-right text-sm text-slate-500 dark:text-slate-400">
                {formData.body.length}/500
              </p>

            </div>

            {/* Button */}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-lg font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FaPaperPlane />

              {loading
                ? "Publishing..."
                : "Publish Post"}
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}

export default CreatePost;
