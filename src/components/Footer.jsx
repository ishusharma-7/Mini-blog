import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";
import { SiTailwindcss, SiAxios } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent">
              MiniBlog
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              A modern React application demonstrating API integration,
              authentication, routing, pagination, reusable components,
              and responsive UI using Tailwind CSS.
            </p>

          </div>

          {/* Technologies */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-slate-800 dark:text-white">
              Built With
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaReact className="text-2xl text-sky-500" />
                <span className="dark:text-slate-300">React</span>
              </div>

              <div className="flex items-center gap-3">
                <SiTailwindcss className="text-2xl text-cyan-500" />
                <span className="dark:text-slate-300">
                  Tailwind CSS v4
                </span>
              </div>

              <div className="flex items-center gap-3">
                <SiAxios className="text-2xl text-indigo-500" />
                <span className="dark:text-slate-300">Axios</span>
              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-slate-800 dark:text-white">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-100 p-4 transition hover:-translate-y-1 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                <FaGithub className="text-2xl dark:text-white" />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-100 p-4 transition hover:-translate-y-1 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                <FaLinkedin className="text-2xl text-blue-600" />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-700">

          <p className="flex flex-wrap items-center justify-center gap-2 text-center text-slate-600 dark:text-slate-300">

            © {year} MiniBlog • Made with

            <FaHeart className="text-red-500" />

            using React & Tailwind CSS

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
