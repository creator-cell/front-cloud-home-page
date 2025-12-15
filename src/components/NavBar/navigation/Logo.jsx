

export function Logo({ isRTL }) {
  return (
    <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#6ECFFF] to-[#3B82F6] flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-xl">FC</span>
      </div>

      <div className="hidden md:block">
        <h1 className="text-lg font-bold text-gray-900 whitespace-nowrap dark:text-white">
          Front Cloud Solutions
        </h1>
      </div>
    </div>
  );
}
