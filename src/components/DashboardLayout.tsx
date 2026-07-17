"use client";

import React from "react";
import { TopAppBar, SideNavBar, BottomNavBar } from "@/components";
import { ProtectedRoute } from "@/components/ProtectedRoute";

interface DashboardLayoutProps {
  children: React.ReactNode;
  showFAB?: boolean;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  showFAB = false,
}) => {
  return (
    <ProtectedRoute>
      <TopAppBar />
      <div className="flex min-h-screen">
        <SideNavBar />
        <main className="md:ml-64 w-full p-margin-mobile md:p-margin-desktop pb-32">
          {children}
        </main>
      </div>
      <BottomNavBar />
    </ProtectedRoute>
  );
};
