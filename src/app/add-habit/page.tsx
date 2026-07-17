"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TopAppBar, SideNavBar, BottomNavBar, FAB } from "@/components";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function AddHabitPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    frequency: "daily",
    category: "health",
    goalType: "completion",
    goalValue: "",
    goalUnit: "times",
    icon: "fitness_center",
    color: "primary-fixed",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    { value: "health", label: "Health & Fitness" },
    { value: "learning", label: "Learning" },
    { value: "productivity", label: "Productivity" },
    { value: "mindfulness", label: "Mindfulness" },
    { value: "finance", label: "Finance" },
    { value: "social", label: "Social" },
    { value: "other", label: "Other" },
  ];

  const frequencies = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "twice-weekly", label: "Twice Weekly" },
    { value: "monthly", label: "Monthly" },
  ];

  const icons = [
    "fitness_center",
    "menu_book",
    "water_drop",
    "psychology",
    "edit_note",
    "shopping_cart",
    "sports_soccer",
    "volunteer_activism",
  ];

  const colors = [
    "primary-fixed",
    "secondary-fixed",
    "tertiary-fixed",
    "error",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Habit name is required";
    }
    if (formData.goalType === "specific" && !formData.goalValue) {
      newErrors.goalValue = "Goal value is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Submitting habit:", formData);

    // Show success message and redirect
    router.push("/habits");
  };

  return (
    <ProtectedRoute>
      <TopAppBar />
      <div className="flex min-h-screen">
        <SideNavBar />
        <main className="md:ml-64 p-margin-mobile md:p-margin-desktop pb-32 flex-1">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <section className="mb-2xl">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-xs mb-lg text-primary-fixed hover:text-primary transition font-label-md text-label-md"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Back
              </button>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-xs glow-text-primary">
                Create New Habit
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Define a new habit to track and build consistency.
              </p>
            </section>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2xl">
              <div className="glass-card p-2xl rounded-xl space-y-xl">
                {/* Habit Name */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                    Habit Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Morning Meditation"
                    className={`w-full px-md py-md bg-surface-container-low/50 border rounded-lg focus:outline-none focus:border-primary-fixed focus:ring-2 focus:ring-primary-fixed/20 transition text-on-surface placeholder-on-surface-variant/50 font-body-md text-body-md ${
                      errors.name ? "border-error" : "border-outline-variant/40"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-error font-body-md text-body-md mt-xs">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Why is this habit important to you?"
                    rows={4}
                    className="w-full px-md py-md bg-surface-container-low/50 border border-outline-variant/40 rounded-lg focus:outline-none focus:border-primary-fixed focus:ring-2 focus:ring-primary-fixed/20 transition text-on-surface placeholder-on-surface-variant/50 font-body-md text-body-md resize-none"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-md py-md bg-surface-container-low/50 border border-outline-variant/40 rounded-lg focus:outline-none focus:border-primary-fixed focus:ring-2 focus:ring-primary-fixed/20 transition text-on-surface font-body-md text-body-md"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Frequency */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                    Frequency
                  </label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleInputChange}
                    className="w-full px-md py-md bg-surface-container-low/50 border border-outline-variant/40 rounded-lg focus:outline-none focus:border-primary-fixed focus:ring-2 focus:ring-primary-fixed/20 transition text-on-surface font-body-md text-body-md"
                  >
                    {frequencies.map((freq) => (
                      <option key={freq.value} value={freq.value}>
                        {freq.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Goal Type */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                    Goal Type
                  </label>
                  <div className="flex gap-md">
                    <label className="flex items-center gap-xs cursor-pointer">
                      <input
                        type="radio"
                        name="goalType"
                        value="completion"
                        checked={formData.goalType === "completion"}
                        onChange={handleInputChange}
                        className="cursor-pointer"
                      />
                      <span className="font-body-md text-body-md">
                        Just Complete
                      </span>
                    </label>
                    <label className="flex items-center gap-xs cursor-pointer">
                      <input
                        type="radio"
                        name="goalType"
                        value="specific"
                        checked={formData.goalType === "specific"}
                        onChange={handleInputChange}
                        className="cursor-pointer"
                      />
                      <span className="font-body-md text-body-md">
                        Specific Goal
                      </span>
                    </label>
                  </div>
                </div>

                {/* Goal Value (Conditional) */}
                {formData.goalType === "specific" && (
                  <div className="grid grid-cols-2 gap-md">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                        Goal Value *
                      </label>
                      <input
                        type="number"
                        name="goalValue"
                        value={formData.goalValue}
                        onChange={handleInputChange}
                        placeholder="e.g., 5"
                        className={`w-full px-md py-md bg-surface-container-low/50 border rounded-lg focus:outline-none focus:border-primary-fixed focus:ring-2 focus:ring-primary-fixed/20 transition text-on-surface placeholder-on-surface-variant/50 font-body-md text-body-md ${
                          errors.goalValue
                            ? "border-error"
                            : "border-outline-variant/40"
                        }`}
                      />
                      {errors.goalValue && (
                        <p className="text-error font-body-md text-body-md mt-xs">
                          {errors.goalValue}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                        Unit
                      </label>
                      <select
                        name="goalUnit"
                        value={formData.goalUnit}
                        onChange={handleInputChange}
                        className="w-full px-md py-md bg-surface-container-low/50 border border-outline-variant/40 rounded-lg focus:outline-none focus:border-primary-fixed focus:ring-2 focus:ring-primary-fixed/20 transition text-on-surface font-body-md text-body-md"
                      >
                        <option value="times">Times</option>
                        <option value="hours">Hours</option>
                        <option value="minutes">Minutes</option>
                        <option value="miles">Miles</option>
                        <option value="pages">Pages</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Icon & Color */}
                <div className="grid grid-cols-2 gap-lg">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                      Icon
                    </label>
                    <div className="grid grid-cols-4 gap-xs">
                      {icons.map((icon) => (
                        <button
                          key={icon}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              icon,
                            }))
                          }
                          className={`p-md rounded-lg transition ${
                            formData.icon === icon
                              ? "bg-primary-fixed/20 border-2 border-primary-fixed"
                              : "bg-surface-variant/20 border-2 border-transparent hover:border-primary-fixed/40"
                          }`}
                        >
                          <span className="material-symbols-outlined">
                            {icon}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                      Color
                    </label>
                    <div className="space-y-xs">
                      {colors.map((color) => (
                        <label
                          key={color}
                          className="flex items-center gap-md cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={formData.color === color}
                            onChange={handleInputChange}
                            className="cursor-pointer"
                          />
                          <div
                            className={`w-6 h-6 rounded-full bg-${color}`}
                          ></div>
                          <span className="font-body-md text-body-md capitalize">
                            {color.replace("-fixed", "")}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-md">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="flex-1 px-lg py-md bg-surface-variant/30 hover:bg-surface-variant/50 text-on-surface font-bold rounded-lg transition font-label-md text-label-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-lg py-md bg-primary-fixed text-on-primary font-bold rounded-lg shadow-[0_0_20px_rgba(175,248,51,0.3)] hover:shadow-[0_0_30px_rgba(175,248,51,0.5)] transition-all font-label-md text-label-md"
                >
                  Create Habit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <BottomNavBar />
      <FAB />
    </ProtectedRoute>
  );
}
