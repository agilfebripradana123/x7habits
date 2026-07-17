interface HabitCardProps {
  icon: string;
  title: string;
  description: string;
  streakDays: number;
  completionDots: boolean[];
  isCompleted?: boolean;
}

export function HabitCard({
  icon,
  title,
  description,
  streakDays,
  completionDots,
  isCompleted = false,
}: HabitCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all hover:translate-y-[-4px] hover:bg-surface-variant/20">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 rounded-xl bg-primary-fixed/10 flex items-center justify-center border border-primary-fixed/20">
          <span
            className="material-symbols-outlined text-primary-fixed"
            data-icon={icon}
          >
            {icon}
          </span>
        </div>
        {isCompleted ? (
          <div className="w-6 h-6 rounded-md border-2 border-primary-fixed flex items-center justify-center bg-primary-fixed">
            <span
              className="material-symbols-outlined text-[16px] text-on-primary"
              data-icon="check"
            >
              check
            </span>
          </div>
        ) : (
          <div className="w-6 h-6 rounded-md border-2 border-outline-variant hover:border-primary-fixed transition-colors"></div>
        )}
      </div>
      <div>
        <h4 className="text-lg font-bold text-primary">{title}</h4>
        <p className="text-xs font-semibold text-on-surface-variant mt-1">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-1 mt-1">
        <div className="flex -space-x-1">
          {completionDots.map((completed, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${completed ? "bg-primary-fixed" : "bg-surface-variant"}`}
            ></div>
          ))}
        </div>
        <span className="text-xs text-on-surface-variant ml-4">
          {streakDays} days streak
        </span>
      </div>
    </div>
  );
}
