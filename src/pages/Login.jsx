import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserShield,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setError("");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (
        email === "admin@example.com" &&
        password === "123456"
      ) {
        localStorage.setItem(
          "token",
          "mock-token-" + Date.now()
        );

        navigate("/");
      } else {
        setError("Invalid email or password.");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 px-6 py-10 dark:from-slate-900 dark:via-slate-950 dark:to-black">

      <div className="w-full max-w-md rounded-[32px] border border-white/20 bg-white/80 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/80">

        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-3xl text-white">
            <FaUserShield />
          </div>

          <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-300">
            Login to continue to MiniBlog
          </p>

        </div>

        {error && (
          <div className="mb-6 rounded-xl bg-red-100 p-4 text-center text-red-600 dark:bg-red-900/30 dark:text-red-300">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Email */}

          <div>

            <label className="mb-2 block font-semibold dark:text-white">
              Email
            </label>

            <div className="relative">

              <FaEnvelope className="absolute left-4 top-4 text-slate-400" />

              <input
                type="email"
                name="email"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block font-semibold dark:text-white">
              Password
            </label>

            <div className="relative">

              <FaLock className="absolute left-4 top-4 text-slate-400" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="123456"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-12 outline-none transition focus:border-blue-600 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4 text-slate-500"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

          </div>

          <button
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-lg font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

        </form>

        <div className="mt-8 rounded-2xl bg-blue-50 p-4 dark:bg-slate-900">

          <p className="font-semibold text-blue-700 dark:text-blue-400">
            Demo Credentials
          </p>

          <p className="mt-2 text-sm dark:text-slate-300">
            Email:
            <strong> admin@example.com</strong>
          </p>

          <p className="text-sm dark:text-slate-300">
            Password:
            <strong> 123456</strong>
          </p>

        </div>

      </div>

    </main>
  );
}

export default Login;
