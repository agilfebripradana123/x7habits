export function ProgressSummary() {
  return (
    <section className="mb-12">
      <div className="glass-card rounded-[32px] p-8 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        {/* Subtle Glow Decoration */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-fixed/10 rounded-full blur-[80px]"></div>

        <div className="relative">
          <div className="w-48 h-48 rounded-full progress-ring-gradient flex items-center justify-center p-2">
            <div className="w-full h-full rounded-full bg-[#0f131d] flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-primary">66%</span>
              <span className="text-xs font-semibold text-on-surface-variant">
                4 of 6 Done
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
          <div className="inline-flex items-center self-center md:self-start gap-1 px-4 py-1 bg-primary-fixed/20 text-primary-fixed border border-primary-fixed/30 rounded-full neon-glow-primary">
            <span
              className="material-symbols-outlined text-[18px]"
              data-icon="local_fire_department"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              local_fire_department
            </span>
            <span className="text-xs font-semibold">12 DAY STREAK</span>
          </div>
          <h2 className="text-2xl font-bold text-primary">
            You&apos;re on fire, AGIL!
          </h2>
          <p className="text-sm text-on-surface-variant max-w-md">
            Your bio-rhythms are perfectly synced today. Complete 2 more habits
            to reach your daily optimization peak.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-8 py-2 bg-primary-fixed text-on-primary font-bold rounded-xl transition-all hover:scale-105">
              View Insights
            </button>
            <button className="px-8 py-2 border border-outline-variant/50 text-primary rounded-xl hover:bg-surface-variant/30 transition-all">
              Daily Log
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
