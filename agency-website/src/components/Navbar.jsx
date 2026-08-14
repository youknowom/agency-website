import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import WLogo from "./WLogo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* Floating glass pill navbar */}
      <nav
        className="pointer-events-auto mt-6 mx-4 flex items-center gap-1.5 px-3 py-2.5 transition-all duration-500 ease-out"
        style={{
          borderRadius: "9999px",
          background: darkMode
            ? "rgba(5, 5, 5, 0.4)"
            : "rgba(255, 255, 255, 0.55)",
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
          border: `1px solid ${
            darkMode
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(9, 9, 11, 0.06)"
          }`,
          boxShadow: scrolled
            ? darkMode
              ? "0 12px 30px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.02)"
              : "0 12px 30px rgba(9, 9, 11, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.8)"
            : darkMode
              ? "0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.01)"
              : "0 4px 20px rgba(9, 9, 11, 0.01), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
          transform: scrolled ? "scale(0.98)" : "scale(1)",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 pl-2 pr-3"
          aria-label="WebCraft Studio home"
        >
          <WLogo size={32} />
          <span className="text-base font-black tracking-tight text-[var(--text)]">
            WebCraft
          </span>
        </Link>

        {/* Divider */}
        <div
          className="hidden md:block h-6 w-px mx-1 bg-[var(--line)]"
        />

        {/* Desktop nav links */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="relative px-3.5 py-2 text-sm font-semibold rounded-full transition-colors text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--panel-alt)]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div
          className="hidden md:block h-6 w-px mx-1 bg-[var(--line)]"
        />

        {/* Desktop actions */}
        <div className="hidden items-center gap-1.5 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--panel-alt)] transition-all duration-200"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <MdOutlineLightMode size={17} />
            ) : (
              <MdDarkMode size={17} />
            )}
          </button>
          <Link
            to="/contact"
            className="rounded-full px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:opacity-95"
            style={{
              background: "var(--primary)",
              boxShadow: "0 2px 12px rgba(255, 90, 31, 0.2)",
            }}
          >
            Let's Connect
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--muted)] hover:text-[var(--text)] md:hidden"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <FiX size={19} /> : <FiMenu size={19} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="pointer-events-auto absolute top-[calc(100%+0.25rem)] left-4 right-4 p-3 md:hidden"
          style={{
            borderRadius: "1.5rem",
            background: darkMode
              ? "rgba(9, 9, 11, 0.75)"
              : "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: `1px solid ${
              darkMode
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(9, 9, 11, 0.06)"
            }`,
            boxShadow: darkMode
              ? "0 12px 48px rgba(0, 0, 0, 0.5)"
              : "0 12px 48px rgba(9, 9, 11, 0.08)",
          }}
        >
          <div className="flex flex-col gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--panel-alt)]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="my-2 h-px bg-[var(--line)]" />

          <div className="flex items-center gap-2 px-1">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-[var(--muted)] bg-[var(--panel-alt)]"
            >
              {darkMode ? (
                <MdOutlineLightMode size={16} />
              ) : (
                <MdDarkMode size={16} />
              )}
              {darkMode ? "Light" : "Dark"}
            </button>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 rounded-xl px-3 py-2.5 text-center text-sm font-bold text-white bg-[var(--primary)]"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
