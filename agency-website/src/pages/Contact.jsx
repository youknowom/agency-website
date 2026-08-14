import { useState } from "react";
import Button from "../components/Button";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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

    setSuccess(false);
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
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setFormData(initialForm);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Let’s talk about your next move.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Tell us what you’re building, where the friction is, and what
            success looks like for your team.
          </p>

          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <p>[work@webcraft.com]</p>
            <p>+91 8855801758</p>
            <p>Pune, MH</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="space-y-6">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
              {errors.name && (
                <span className="mt-2 block text-xs text-red-500">
                  {errors.name}
                </span>
              )}
            </label>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
              {errors.email && (
                <span className="mt-2 block text-xs text-red-500">
                  {errors.email}
                </span>
              )}
            </label>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
              {errors.message && (
                <span className="mt-2 block text-xs text-red-500">
                  {errors.message}
                </span>
              )}
            </label>
          </div>

          <div className="mt-8">
            <Button
              type="submit"
              className="inline-flex items-center justify-center"
            >
              Send inquiry
            </Button>
          </div>

          {success && (
            <p className="mt-6 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              Message Sent Successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
