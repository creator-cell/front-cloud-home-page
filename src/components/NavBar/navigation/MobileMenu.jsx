import React from "react";
import { Menu, X } from "lucide-react";

export function MobileMenu({ isOpen, onToggle, items, currentPage, onNavigate, isRTL }) {
  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors dark:text-gray-300 dark:hover:bg-gray-700"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 top-16 bg-white border-b border-gray-200 py-4 px-4 shadow-lg animate-slide-in  dark:bg-gray-800 dark:border-gray-700">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                onToggle();
              }}
              className={`w-full ${
                isRTL ? "text-right" : "text-left"
              } px-4 py-3 rounded-lg transition-all duration-200 mb-1 ${
                currentPage === item.id
                  ? "bg-linear-to-r from-[#6ECFFF]/20 to-[#3B82F6]/20 text-[#3B82F6] dark:text-[#6ECFFF]"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
