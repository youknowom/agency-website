function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600 dark:text-orange-400">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--text)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;
