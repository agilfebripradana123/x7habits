"use client";

import {
  TopAppBar,
  SideNavBar,
  MainContent,
  BottomNavBar,
  FAB,
} from "@/components";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <TopAppBar />
      <div className="flex min-h-screen">
        <SideNavBar />
        <MainContent />
      </div>
      <BottomNavBar />
      <FAB />
    </ProtectedRoute>
  );
}
