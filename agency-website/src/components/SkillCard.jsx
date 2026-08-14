function SkillCard({ name, value }) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {name}
        </h3>
        <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
          {value}%
        </span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default SkillCard;
