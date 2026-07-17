"use client";

import { TopAppBar, SideNavBar, BottomNavBar, FAB } from "@/components";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Link from "next/link";

export default function HabitsPage() {
  const habits = [
    {
      id: 1,
      name: "Morning Workout",
      icon: "fitness_center",
      frequency: "Daily",
      streak: 12,
      completion: 92,
      color: "primary-fixed",
    },
    {
      id: 2,
      name: "Deep Reading",
      icon: "menu_book",
      frequency: "Daily",
      streak: 8,
      completion: 78,
      color: "tertiary-fixed",
    },
    {
      id: 3,
      name: "Hydration Intake",
      icon: "water_drop",
      frequency: "Daily",
      streak: 5,
      completion: 65,
      color: "secondary-fixed",
    },
    {
      id: 4,
      name: "Focused Meditation",
      icon: "psychology",
      frequency: "Daily",
      streak: 15,
      completion: 88,
      color: "primary-fixed",
    },
    {
      id: 5,
      name: "Evening Journaling",
      icon: "edit_note",
      frequency: "Daily",
      streak: 6,
      completion: 75,
      color: "tertiary-fixed",
    },
    {
      id: 6,
      name: "Cold Shower",
      icon: "shower",
      frequency: "3x Weekly",
      streak: 3,
      completion: 50,
      color: "secondary-fixed",
    },
  ];

  return (
    <ProtectedRoute>
      <TopAppBar />
      <div className="flex min-h-screen">
        <SideNavBar />
        <main className="md:ml-64 p-margin-mobile md:p-margin-desktop pb-32 flex-1">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <section className="mb-xl">
              <div className="flex items-center justify-between mb-xs">
                <h2 className="font-headline-lg text-headline-lg text-primary glow-text-primary">
                  Your Habits
                </h2>
                <Link
                  href="/add-habit"
                  className="flex items-center gap-xs px-lg py-md bg-primary-fixed text-on-primary font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <span className="material-symbols-outlined">add</span>
                  <span className="font-label-md text-label-md">New Habit</span>
                </Link>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Track and manage your daily habits for better productivity.
              </p>
            </section>

            {/* Habits Grid */}
            <section className="space-y-lg">
              {/* Active Habits Section */}
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-lg">
                  Active Habits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                  {habits.map((habit) => (
                    <div
                      key={habit.id}
                      className="glass-card p-lg rounded-xl hover:shadow-lg hover:border-primary-fixed/50 transition-all duration-300 group cursor-pointer"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-md">
                        <div
                          className={`w-12 h-12 rounded-full bg-${habit.color}/10 flex items-center justify-center text-${habit.color}`}
                        >
                          <span className="material-symbols-outlined">
                            {habit.icon}
                          </span>
                        </div>
                        <div className="flex gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-xs hover:bg-surface-variant/50 rounded">
                            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                              edit
                            </span>
                          </button>
                          <button className="p-xs hover:bg-surface-variant/50 rounded">
                            <span className="material-symbols-outlined text-[20px] text-error">
                              delete
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Title & Frequency */}
                      <h4 className="font-headline-md text-headline-md text-primary mb-xs">
                        {habit.name}
                      </h4>
                      <p className="font-label-md text-label-md text-on-surface-variant mb-lg">
                        {habit.frequency}
                      </p>

                      {/* Streak */}
                      <div className="flex items-center gap-xs mb-lg p-md bg-primary-fixed/10 rounded-lg">
                        <span className="material-symbols-outlined text-primary-fixed">
                          local_fire_department
                        </span>
                        <span className="font-headline-md text-headline-md text-primary-fixed">
                          {habit.streak} day streak
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-md">
                        <div className="flex justify-between items-center mb-xs">
                          <span className="font-label-md text-label-md text-on-surface-variant">
                            Completion
                          </span>
                          <span
                            className={`font-label-md text-label-md text-${habit.color}`}
                          >
                            {habit.completion}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-${habit.color}`}
                            style={{ width: `${habit.completion}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full py-md bg-primary-fixed/10 hover:bg-primary-fixed/20 text-primary-fixed font-bold rounded-lg transition-colors font-label-md text-label-md">
                        Log Activity
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Empty State */}
              <div className="mt-2xl p-2xl glass-card rounded-xl border-2 border-dashed border-outline-variant/40 text-center">
                <span className="material-symbols-outlined text-[48px] text-primary-fixed/40 block mx-auto mb-md">
                  add_circle
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface/60 mb-xs">
                  Create New Habit
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant/60 mb-lg">
                  Get started by adding your first habit to track your progress.
                </p>
                <Link
                  href="/add-habit"
                  className="inline-block px-lg py-md bg-primary-fixed text-on-primary font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  <span className="font-label-md text-label-md">
                    Add Your First Habit
                  </span>
                </Link>
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
