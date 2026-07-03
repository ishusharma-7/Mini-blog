import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaFileAlt,
  FaUserShield,
  FaCheckCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import axiosInstance from "../api/axiosInstance";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Dashboard() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get("/posts");

        setPosts(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 dark:bg-slate-900">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-4xl font-bold text-slate-800 dark:text-white">
          Dashboard
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800">
            <FaFileAlt className="mb-4 text-4xl text-blue-600" />

            <p className="text-gray-500 dark:text-gray-300">
              Total Posts
            </p>

            <h2 className="mt-2 text-4xl font-bold dark:text-white">
              {posts.length}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800">
            <FaUserShield className="mb-4 text-4xl text-indigo-600" />

            <p className="text-gray-500 dark:text-gray-300">
              Current User
            </p>

            <h2 className="mt-2 text-2xl font-bold dark:text-white">
              Admin
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800">
            <FaCheckCircle className="mb-4 text-4xl text-green-600" />

            <p className="text-gray-500 dark:text-gray-300">
              Authentication
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-600">
              Active
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800">
            <FaCheckCircle className="mb-4 text-4xl text-cyan-600" />

            <p className="text-gray-500 dark:text-gray-300">
              API Status
            </p>

            <h2 className="mt-2 text-2xl font-bold text-cyan-600">
              Connected
            </h2>
          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-800">

          <h2 className="mb-4 text-2xl font-bold dark:text-white">
            Session Details
          </h2>

          <div className="space-y-3">

            <p className="dark:text-gray-300">
              <strong>Mock Token:</strong>
            </p>

            <p className="break-all rounded-xl bg-slate-100 p-4 text-sm dark:bg-slate-700 dark:text-white">
              {token}
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="mt-10 flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </main>
  );
}

export default Dashboard;
