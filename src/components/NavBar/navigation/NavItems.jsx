export function NavItems({ items, currentPage, onNavigate }) {
  return (
    <div className="hidden md:flex items-center gap-1">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            currentPage === item.id
              ? "bg-linear-to-r from-[#6ECFFF]/20 to-[#3B82F6]/20 text-[#3B82F6] shadow-sm dark:from-[#6ECFFF]/30 dark:to-[#3B82F6]/30 dark:text-[#6ECFFF]"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
