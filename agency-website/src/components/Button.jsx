function Button({
  children,
  href,
  className = "",
  variant = "primary",
  type = "button",
  target = "_self",
  rel,
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950";

  const variantClasses =
    variant === "secondary"
      ? "border border-slate-200 bg-transparent text-slate-800 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-900/40"
      : "bg-[var(--primary)] text-white hover:opacity-90 shadow-sm shadow-orange-600/10";

  const content = (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? rel || "noreferrer" : rel}
      >
        {content}
      </a>
    );
  }

  return <button type={type}>{content}</button>;
}

export default Button;
