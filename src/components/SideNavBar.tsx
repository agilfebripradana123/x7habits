"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export function SideNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="hidden md:flex flex-col p-2 gap-6 h-screen w-64 fixed left-0 top-0 bg-surface-container-low/60 backdrop-blur-2xl border-r border-outline-variant/20 shadow-2xl z-40">
      <div className="flex flex-col gap-1 mb-8">
        <span className="text-2xl font-bold text-primary">XSeven</span>
        <span className="text-xs font-semibold text-on-surface-variant opacity-70">
          Bio-Digital Sync Active
        </span>
      </div>
      <nav className="flex flex-col gap-2 flex-grow">
        <Link
          className={`flex items-center gap-4 p-2 rounded-xl font-bold transition-transform hover:translate-x-1 ${
            isActive("/")
              ? "bg-primary-container text-on-primary-container"
              : "text-on-surface-variant hover:bg-surface-variant/50"
          }`}
          href="/"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            dashboard
          </span>
          <span className="text-xs font-semibold">Dashboard</span>
        </Link>
        <Link
          className={`flex items-center gap-4 p-2 rounded-xl transition-all duration-300 hover:translate-x-1 ${
            isActive("/statistics")
              ? "bg-primary-container text-on-primary-container font-bold"
              : "text-on-surface-variant hover:bg-surface-variant/50"
          }`}
          href="/statistics"
        >
          <span className="material-symbols-outlined">bar_chart</span>
          <span className="text-xs font-semibold">Statistics</span>
        </Link>
        <Link
          className={`flex items-center gap-4 p-2 rounded-xl transition-all duration-300 hover:translate-x-1 ${
            isActive("/habits")
              ? "bg-primary-container text-on-primary-container font-bold"
              : "text-on-surface-variant hover:bg-surface-variant/50"
          }`}
          href="/habits"
        >
          <span className="material-symbols-outlined">check_circle</span>
          <span className="text-xs font-semibold">Habits</span>
        </Link>
      </nav>
      <Link
        href="/add-habit"
        className="mt-auto mb-6 py-2 px-8 bg-primary-fixed text-on-primary font-bold rounded-xl shadow-[0_4px_15px_rgba(182,255,59,0.3)] hover:scale-105 transition-transform text-center text-xs"
      >
        Add Habit
      </Link>
      <div className="flex flex-col gap-2 border-t border-outline-variant/20 pt-6">
        <a className="flex items-center gap-4 p-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-xs font-semibold">Settings</span>
        </a>
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 p-1 text-on-surface-variant hover:text-primary transition-colors text-left w-full"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="text-xs font-semibold">Log Out</span>
        </button>
      </div>
    </aside>
  );
}
