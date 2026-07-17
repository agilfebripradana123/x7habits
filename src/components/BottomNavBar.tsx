"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface-container-lowest/80 backdrop-blur-2xl border-t border-outline-variant/30 shadow-[0_-4px_20px_rgba(149,218,3,0.15)] rounded-t-xl">
      <Link
        className={`flex flex-col items-center justify-center transition-transform duration-200 ${
          isActive("/")
            ? "text-primary-fixed filter drop-shadow-[0_0_8px_rgba(149,218,3,0.5)] scale-110"
            : "text-on-surface-variant hover:text-primary"
        }`}
        href="/"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          home
        </span>
        <span className="text-xs font-semibold text-[10px]">Home</span>
      </Link>
      <Link
        className={`flex flex-col items-center justify-center transition-transform duration-200 ${
          isActive("/statistics")
            ? "text-primary-fixed filter drop-shadow-[0_0_8px_rgba(149,218,3,0.5)] scale-110"
            : "text-on-surface-variant hover:text-primary"
        }`}
        href="/statistics"
      >
        <span className="material-symbols-outlined">analytics</span>
        <span className="text-xs font-semibold text-[10px]">Stats</span>
      </Link>
      <Link
        className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary"
        href="/add-habit"
      >
        <span className="material-symbols-outlined text-[32px] text-primary-fixed">
          add_circle
        </span>
        <span className="text-xs font-semibold text-[10px]">Add</span>
      </Link>
      <Link
        className={`flex flex-col items-center justify-center transition-transform duration-200 ${
          isActive("/habits")
            ? "text-primary-fixed filter drop-shadow-[0_0_8px_rgba(149,218,3,0.5)] scale-110"
            : "text-on-surface-variant hover:text-primary"
        }`}
        href="/habits"
      >
        <span className="material-symbols-outlined">check_circle</span>
        <span className="text-xs font-semibold text-[10px]">Habits</span>
      </Link>
    </nav>
  );
}
