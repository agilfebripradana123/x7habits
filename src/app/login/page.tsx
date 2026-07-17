"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      login(email, password);
      router.push("/");
    } catch {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface-container to-background flex items-center justify-center p-md">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="glass-card p-2xl rounded-2xl border border-outline-variant/30">
          {/* Header */}
          <div className="mb-2xl text-center">
            <h1 className="font-headline-lg text-headline-lg text-primary mb-md">
              XSeven
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Bio-Digital Sync
            </p>
            <p className="font-label-md text-label-md text-primary-fixed mt-sm">
              Welcome Back
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-lg">
            {/* Error Message */}
            {error && (
              <div className="p-md bg-error/10 border border-error rounded-lg">
                <p className="font-body-md text-body-md text-error">{error}</p>
              </div>
            )}

            {/* Email Input */}
            <div className="space-y-xs">
              <label className="block font-label-md text-label-md text-on-surface-variant">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-md py-md bg-surface-container-low/50 border border-outline-variant/40 rounded-lg focus:outline-none focus:border-primary-fixed focus:ring-2 focus:ring-primary-fixed/20 transition text-on-surface placeholder-on-surface-variant/50 font-body-md text-body-md"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-xs">
              <label className="block font-label-md text-label-md text-on-surface-variant">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-md py-md bg-surface-container-low/50 border border-outline-variant/40 rounded-lg focus:outline-none focus:border-primary-fixed focus:ring-2 focus:ring-primary-fixed/20 transition text-on-surface placeholder-on-surface-variant/50 font-body-md text-body-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility" : "visibility_off"}
                  </span>
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-xs cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded cursor-pointer"
                />
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="font-label-md text-label-md text-primary-fixed hover:text-primary-fixed/80 transition"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-primary-fixed text-on-primary-container font-bold py-md rounded-lg shadow-[0_0_20px_rgba(175,248,51,0.3)] hover:shadow-[0_0_30px_rgba(175,248,51,0.5)] transition-all duration-300 font-label-md text-label-md"
            >
              Sign In
            </button>

            {/* Demo Credentials */}
            <div className="pt-lg border-t border-outline-variant/20">
              <p className="font-label-md text-label-md text-on-surface-variant text-center mb-md">
                Demo Credentials:
              </p>
              <div className="space-y-xs text-center">
                <p className="font-body-md text-body-md text-on-surface/70">
                  Email:{" "}
                  <span className="text-primary-fixed">demo@example.com</span>
                </p>
                <p className="font-body-md text-body-md text-on-surface/70">
                  Password:{" "}
                  <span className="text-primary-fixed">password123</span>
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center mt-xl font-body-md text-body-md text-on-surface-variant">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-primary-fixed hover:text-primary-fixed/80 font-bold transition"
          >
            Sign up
          </a>
        </p>
      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(26, 35, 51, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid #2b3548;
        }
      `}</style>
    </div>
  );
}
