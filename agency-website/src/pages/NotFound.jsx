import { Link } from "react-router-dom";
import WLogo from "../components/WLogo";

function NotFound() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6 lg:px-8">
      {/* Giant faded 404 background text */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-[12rem] font-black tracking-tight text-slate-100 sm:text-[18rem] dark:text-slate-900/50"
      >
        404
      </span>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <WLogo size={48} />
          <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            WebCraft
          </span>
        </div>

        {/* 404 badge */}
       

        <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          Page not found
        </h1>

        <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500 dark:text-slate-400">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>


        {/* Home button */}
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
