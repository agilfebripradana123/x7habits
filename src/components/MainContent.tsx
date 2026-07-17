import { ProgressSummary } from "./ProgressSummary";
import { HabitCard } from "./HabitCard";

export function MainContent() {
  const habits = [
    {
      icon: "water_drop",
      title: "Drink Water",
      description: "2.5L Target • 4 Intake Logs",
      streakDays: 8,
      completionDots: [true, true, true, true, false],
      isCompleted: true,
    },
    {
      icon: "fitness_center",
      title: "Morning Workout",
      description: "45 mins • HIIT Circuit",
      streakDays: 2,
      completionDots: [true, true, false, false, false],
      isCompleted: false,
    },
    {
      icon: "self_improvement",
      title: "Meditation",
      description: "10 mins • Mindfulness",
      streakDays: 15,
      completionDots: [true, true, true, true, true],
      isCompleted: true,
    },
    {
      icon: "menu_book",
      title: "Deep Work",
      description: "4 hours • No Distractions",
      streakDays: 3,
      completionDots: [true, true, true, false, false],
      isCompleted: true,
    },
  ];

  return (
    <main className="flex-1 md:ml-64 px-4 md:px-10 py-8">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-primary">
            Good Morning, AGIL
          </h1>
          <p className="text-sm text-on-surface-variant">Tuesday, May 14</p>
        </div>
        <div className="hidden md:flex gap-4">
          <button className="p-2 bg-surface-container-high rounded-full text-on-surface-variant hover:text-primary transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="notifications"
            >
              notifications
            </span>
          </button>
          <div className="flex items-center gap-4 bg-surface-container-high p-1 pr-4 rounded-full border border-outline-variant/20">
            <img
              alt="User profile avatar"
              className="w-10 h-10 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5lcUGu2H3UWIe8HIRWM4rFqXorEm_EqpPv_OA22BWKDs1nAu0dPBoWbbNARHZ9G7SSNow5IeigfYVY_938i3m2E7WWJflKatuKCm08dL1tA4WTYece7t6aiGeOQhjc_NdGKM-fJFdGwUseVpu5v6NLM4umIMFMG5mlGW_ZL9BwzjOGV9PQIt-4F5dYl_ww8_RvzibnMcEFZGBgcYi0_wzwwNYJRBoTKzWNUWQiYYSNitWFJxaS2iImToSaAswOjgAHM1t0FK1igF9"
            />
            <span className="text-xs font-semibold">AGIL</span>
          </div>
        </div>
      </section>

      {/* Progress Summary */}
      <ProgressSummary />

      {/* Habits Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-primary">Daily Habits</h3>
          <button className="md:hidden flex items-center gap-1 text-primary-fixed font-bold">
            <span className="material-symbols-outlined" data-icon="add">
              add
            </span>
            Add
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habits.map((habit, i) => (
            <HabitCard key={i} {...habit} />
          ))}

          {/* Add New Habit Card */}
          <div className="border-2 border-dashed border-outline-variant/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary-fixed/50 hover:bg-primary-fixed/5 transition-all group">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-fixed group-hover:text-on-primary transition-all">
              <span className="material-symbols-outlined" data-icon="add">
                add
              </span>
            </div>
            <span className="text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors">
              Track New Habit
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
