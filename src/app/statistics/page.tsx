"use client";

import { TopAppBar, SideNavBar, BottomNavBar, FAB } from "@/components";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function StatisticsPage() {
  return (
    <ProtectedRoute>
      <TopAppBar />
      <div className="flex min-h-screen">
        <SideNavBar />
        <main className="md:ml-64 p-margin-mobile md:p-margin-desktop pb-32 flex-1">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <section className="mb-xl">
              <h2 className="font-headline-lg text-headline-lg mb-xs text-primary glow-text-primary">
                Sync Analytics
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Real-time performance optimization metrics.
              </p>
            </section>

            {/* Top Section: Key Metrics Bento */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">
              {/* Weekly Completion Card */}
              <div className="glass-card p-lg rounded-xl neon-border-glow transition-all duration-300">
                <div className="flex justify-between items-start mb-md">
                  <span className="font-label-md text-label-md text-primary-fixed uppercase tracking-widest">
                    Weekly Completion
                  </span>
                  <span className="material-symbols-outlined text-primary-fixed">
                    insights
                  </span>
                </div>
                <div className="flex items-baseline gap-xs">
                  <span className="font-headline-xl text-headline-xl text-primary">
                    85
                  </span>
                  <span className="font-headline-md text-headline-md text-primary-fixed">
                    %
                  </span>
                </div>
                <div className="mt-md h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-fixed to-secondary-fixed w-[85%] shadow-[0_0_10px_rgba(182,255,59,0.5)]"></div>
                </div>
              </div>

              {/* Total Habits Card */}
              <div className="glass-card p-lg rounded-xl neon-border-glow transition-all duration-300">
                <div className="flex justify-between items-start mb-md">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
                    Total Habits
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant">
                    format_list_bulleted
                  </span>
                </div>
                <div className="flex items-baseline gap-xs">
                  <span className="font-headline-xl text-headline-xl text-primary">
                    24
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Active
                  </span>
                </div>
                <div className="mt-md flex gap-xs">
                  <div className="h-2 w-8 bg-primary-fixed rounded-full"></div>
                  <div className="h-2 w-8 bg-primary-fixed rounded-full opacity-60"></div>
                  <div className="h-2 w-8 bg-primary-fixed rounded-full opacity-30"></div>
                </div>
              </div>

              {/* Best Streak Card */}
              <div className="glass-card p-lg rounded-xl neon-border-glow transition-all duration-300 border-primary-fixed/30 bg-primary-fixed/5">
                <div className="flex justify-between items-start mb-md">
                  <span className="font-label-md text-label-md text-primary-fixed uppercase tracking-widest">
                    Best Streak
                  </span>
                  <span
                    className="material-symbols-outlined text-primary-fixed"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    local_fire_department
                  </span>
                </div>
                <div className="flex items-baseline gap-xs">
                  <span className="font-headline-xl text-headline-xl text-primary">
                    20
                  </span>
                  <span className="font-headline-md text-headline-md text-on-surface">
                    days
                  </span>
                </div>
                <p className="mt-md font-label-md text-label-md text-primary-fixed">
                  +3 days from last cycle
                </p>
              </div>
            </section>

            {/* Middle Section: Weekly Progress Bar Chart */}
            <section className="mb-xl">
              <div className="glass-card p-lg rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-xl gap-md">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary">
                      Weekly Progress
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Daily completion rates across the current cycle
                    </p>
                  </div>
                  <div className="flex gap-sm">
                    <span className="flex items-center gap-xs font-label-md text-label-md">
                      <span className="w-3 h-3 rounded-full bg-primary-fixed"></span>
                      Completion
                    </span>
                    <span className="flex items-center gap-xs font-label-md text-label-md opacity-50">
                      <span className="w-3 h-3 rounded-full bg-surface-variant"></span>
                      Target
                    </span>
                  </div>
                </div>
                <div className="flex items-end justify-between h-[300px] gap-sm md:gap-lg px-xs md:px-lg">
                  {[
                    { day: "M", height: 70 },
                    { day: "T", height: 85 },
                    { day: "W", height: 60 },
                    { day: "T", height: 95 },
                    { day: "F", height: 80 },
                    { day: "S", height: 40 },
                    { day: "S", height: 55 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-md flex-1"
                    >
                      <div className="relative w-full max-w-[48px] bg-surface-variant/30 rounded-t-lg h-full flex flex-col justify-end overflow-hidden">
                        <div
                          className="w-full bg-gradient-to-t from-primary-fixed-dim to-primary-fixed rounded-t-lg shadow-[0_0_15px_rgba(182,255,59,0.2)]"
                          style={{ height: `${item.height}%` }}
                        ></div>
                      </div>
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        {item.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom Section: Habit Performance List */}
            <section>
              <div className="flex items-center justify-between mb-lg">
                <h3 className="font-headline-md text-headline-md text-primary">
                  Habit Performance
                </h3>
                <button className="font-label-md text-label-md text-primary-fixed flex items-center gap-xs hover:text-primary transition">
                  View All{" "}
                  <span className="material-symbols-outlined text-[18px]">
                    chevron_right
                  </span>
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
                {[
                  {
                    name: "Morning Workout",
                    icon: "fitness_center",
                    percentage: 92,
                    color: "primary-fixed",
                  },
                  {
                    name: "Deep Reading",
                    icon: "menu_book",
                    percentage: 78,
                    color: "tertiary-fixed",
                  },
                  {
                    name: "Hydration Intake",
                    icon: "water_drop",
                    percentage: 65,
                    color: "secondary-fixed",
                  },
                  {
                    name: "Focused Meditation",
                    icon: "psychology",
                    percentage: 88,
                    color: "primary-fixed",
                  },
                ].map((habit, index) => (
                  <div
                    key={index}
                    className={`glass-card p-lg rounded-xl flex items-center gap-lg border-l-4 border-l-${habit.color}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-${habit.color}/10 flex items-center justify-center text-${habit.color}`}
                    >
                      <span className="material-symbols-outlined">
                        {habit.icon}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-xs">
                        <span className="font-body-lg text-body-lg text-primary">
                          {habit.name}
                        </span>
                        <span
                          className={`font-label-md text-label-md text-${habit.color}`}
                        >
                          {habit.percentage}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-${habit.color}`}
                          style={{ width: `${habit.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
        </div>
        </main>
      </div>
      <BottomNavBar />
      <FAB />
    </ProtectedRoute>
  );
}
