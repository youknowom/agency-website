function TestimonialCard({ name, role, quote }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5 text-3xl text-orange-500">“</div>
      <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
        {quote}
      </p>
      <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-800">
        <p className="font-bold text-slate-900 dark:text-white">{name}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
