"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export function TopAppBar() {
  const [showMenu, setShowMenu] = useState(false);
  const { logout, user } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-4 md:hidden py-2 w-full bg-background/80 backdrop-blur-xl border-b border-surface-variant/30">
      <span className="text-2xl font-bold tracking-tight text-primary">
        XSeven
      </span>
      <div className="flex gap-4 relative">
        <span className="material-symbols-outlined text-primary-fixed cursor-pointer hover:text-primary transition">
          notifications
        </span>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="material-symbols-outlined text-primary-fixed hover:text-primary transition cursor-pointer"
        >
          settings
        </button>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute right-0 top-12 w-48 bg-surface-container-low/95 backdrop-blur-lg border border-outline-variant/30 rounded-lg shadow-lg z-50">
            <div className="p-md border-b border-outline-variant/20">
              <p className="font-label-md text-label-md text-on-surface-variant">
                Logged in as
              </p>
              <p className="font-body-md text-body-md text-primary truncate">
                {user?.email}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full text-left px-md py-md text-error hover:bg-surface-variant/50 transition font-label-md text-label-md flex items-center gap-xs"
            >
              <span className="material-symbols-outlined text-[20px]">
                logout
              </span>
              Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
