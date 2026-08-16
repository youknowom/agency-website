import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../components/Button";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

/* ── Contact-info items ──────────────────────────────────── */
const contactDetails = [
  {
    id: "email",
    label: "Email",
    value: "work@webcraft.com",
    href: "mailto:work@webcraft.com",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    id: "phone",
    label: "Phone",
    value: "+91 8855801758",
    href: "tel:+918855801758",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    id: "location",
    label: "Office",
    value: "Pune, Maharashtra",
    href: null,
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
];

/* ── Social links ───────────────────────────────────────── */
const socials = [
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════════════════════ */

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters long.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    // Simulate submit
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData(initialForm);
    }, 800);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* ── Page header ────────────────────────────────── */}
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
          Get in Touch
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 lg:whitespace-nowrap sm:text-5xl dark:text-white">
          Let's build something <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">remarkable</span>
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-500 lg:whitespace-nowrap dark:text-slate-400">
          Tell us what you're building, where the friction is, and what success looks like for your team.
        </p>
      </div>

      <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ── Contact card ────────────────────────────── */}
        <div
          id="contact-info-card"
          className="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl dark:border-slate-800/60 dark:bg-slate-950 dark:shadow-2xl"
        >
            {/* Decorative blob */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-10 dark:opacity-20"
              style={{
                background:
                  "radial-gradient(circle, #ff5a1f 0%, transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full opacity-5 dark:opacity-10"
              style={{
                background:
                  "radial-gradient(circle, #ff5a1f 0%, transparent 70%)",
              }}
            />

            <h2 className="relative text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Contact Information
            </h2>
            <p className="relative mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Reach out through any of these channels and we'll respond within
              24 hours.
            </p>

            {/* Detail rows */}
            <div className="relative mt-8 space-y-5">
              {contactDetails.map((item) => {
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? { href: item.href, target: "_self" }
                  : {};

                return (
                  <Wrapper
                    key={item.id}
                    {...wrapperProps}
                    className="group flex items-center gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500/20 dark:bg-orange-500/15 dark:text-orange-400 dark:group-hover:bg-orange-500/25">
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                        {item.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Social icons */}
            <div className="relative mt-auto border-t border-slate-200/80 pt-6 dark:border-white/10">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Follow us
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-all hover:bg-orange-500/15 hover:text-orange-500 hover:scale-110 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-orange-500/20 dark:hover:text-orange-400"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
        </div>

        {/* ── Form ────────────────────────────────────── */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/80"
        >
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Send us a message
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Fill out the form and we'll be in touch as soon as possible.
          </p>

          <div className="mt-8 space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Full Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full rounded-xl border bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-orange-500/30 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600 ${
                  errors.name
                    ? "border-red-400 dark:border-red-500"
                    : "border-slate-200 focus:border-orange-500 dark:border-slate-700 dark:focus:border-orange-500"
                }`}
              />
              {errors.name && (
                <span className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-xl border bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-orange-500/30 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600 ${
                  errors.email
                    ? "border-red-400 dark:border-red-500"
                    : "border-slate-200 focus:border-orange-500 dark:border-slate-700 dark:focus:border-orange-500"
                }`}
              />
              {errors.email && (
                <span className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.email}
                </span>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className={`w-full resize-none rounded-xl border bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-orange-500/30 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600 ${
                  errors.message
                    ? "border-red-400 dark:border-red-500"
                    : "border-slate-200 focus:border-orange-500 dark:border-slate-700 dark:focus:border-orange-500"
                }`}
              />
              {errors.message && (
                <span className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.message}
                </span>
              )}
            </div>
          </div>

          <div className="mt-8">
            <Button
              type="submit"
              className={`inline-flex w-full items-center justify-center gap-2 sm:w-auto ${
                submitting ? "pointer-events-none opacity-70" : ""
              }`}
            >
              {submitting ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Send Message
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
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </>
              )}
            </Button>
          </div>
        </form>
      </div>


    </section>
  );
}

export default Contact;
