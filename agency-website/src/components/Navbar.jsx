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
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center">
      {/* Native CSS transition style to keep morphing buttery smooth without layout projection */}
      <nav
        className="w-full flex items-center justify-between transition-all duration-300 ease-out"
        style={{
          // Spacing & shape morphing
          maxWidth: scrolled ? "1024px" : "100%",
          paddingLeft: scrolled ? "20px" : "32px",
          paddingRight: scrolled ? "20px" : "32px",
          paddingTop: scrolled ? "10px" : "18px",
          paddingBottom: scrolled ? "10px" : "18px",
          marginTop: scrolled ? "16px" : "0px",
          borderRadius: scrolled ? "99px" : "0px",
          marginLeft: scrolled ? "16px" : "0px",
          marginRight: scrolled ? "16px" : "0px",
          
          // Background & Glass filters
          background: scrolled
            ? darkMode
              ? "rgba(5, 5, 5, 0.45)"
              : "rgba(255, 255, 255, 0.55)"
            : darkMode
              ? "#030303"
              : "#ffffff",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          
          // Borders
          borderBottom: scrolled
            ? `1px solid ${darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(9, 9, 11, 0.06)"}`
            : `1px solid ${darkMode ? "rgba(255, 255, 255, 0.03)" : "rgba(9, 9, 11, 0.05)"}`,
          borderLeft: scrolled
            ? `1px solid ${darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(9, 9, 11, 0.06)"}`
            : "1px solid transparent",
          borderRight: scrolled
            ? `1px solid ${darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(9, 9, 11, 0.06)"}`
            : "1px solid transparent",
          borderTop: scrolled
            ? `1px solid ${darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(9, 9, 11, 0.06)"}`
            : "1px solid transparent",

          // Shadow
          boxShadow: scrolled
            ? darkMode
              ? "0 12px 30px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.02)"
              : "0 12px 30px rgba(9, 9, 11, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)"
            : "none",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
          aria-label="WebCraft Studio home"
        >
          <WLogo size={32} />
          <span className="text-base font-black tracking-tight text-[var(--text)]">
            WebCraft
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="px-4 py-2 text-sm font-semibold rounded-full transition-colors text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--panel-alt)]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
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
            className="rounded-full px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:opacity-95"
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
          className="absolute top-full left-0 right-0 w-full bg-[var(--page-bg)] px-6 py-4 md:hidden border-b border-[var(--line)] shadow-lg"
          style={{
            animation: "slideDown 0.3s ease-out"
          }}
        >
          <div className="flex flex-col gap-1">
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

          <div className="my-3 h-px bg-[var(--line)]" />

          <div className="flex items-center gap-2">
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
              Let's Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
