export function FAB() {
  return (
    <div className="md:hidden fixed right-4 bottom-24 z-40">
      <button className="w-14 h-14 bg-primary-fixed text-on-primary rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(182,255,59,0.4)] active:scale-95 transition-transform">
        <span
          className="material-symbols-outlined"
          data-icon="bolt"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          bolt
        </span>
      </button>
    </div>
  );
}
