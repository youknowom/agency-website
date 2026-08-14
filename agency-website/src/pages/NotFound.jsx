import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-600 dark:text-orange-400">
        404
      </p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-400"
      >
        Back to home
      </Link>
    </section>
  );
}

export default NotFound;
