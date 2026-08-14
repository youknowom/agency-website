import { Link } from "react-router-dom";
import WLogo from "./WLogo";

function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--page-bg)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3"
            >
              <WLogo size={36} />
              <div>
                <p className="text-lg font-black tracking-tight text-[var(--text)]">
                  WebCraft
                </p>
              </div>
            </Link>
          </div>
          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
            A digital agency designing and building websites, web applications, and digital experiences for ambitious businesses.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            Links
          </h3>
          <ul className="space-y-3 text-sm font-semibold text-[var(--muted)]">
            <li>
              <Link to="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-500 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-orange-500 transition-colors">
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            <li>
              <a href="mailto:hello@webcraftstudio.com" className="hover:text-orange-500 transition-colors">
                hello@webcraftstudio.com
              </a>
            </li>
            <li>Pune, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)] py-6 text-center text-sm text-[var(--muted)]">
        © 2026 WebCraft Studio. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
