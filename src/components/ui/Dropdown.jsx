"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Dropdown({
  label,
  value,
  options,
  onChange,
  placeholder,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { isRTL } = useLanguage();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="w-full" ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-200 focus:border-[#6ECFFF] focus:ring-2 focus:ring-[#6ECFFF]/20 focus:outline-none flex items-center justify-between hover:border-gray-300 dark:hover:border-gray-600"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <span
            className={
              selectedOption ? "" : "text-gray-400 dark:text-gray-500"
            }
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>

          <ChevronDown
            className={`w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div
            className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl dark:shadow-black/50 border border-gray-200 dark:border-gray-700 overflow-hidden animate-slide-in"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-sm font-medium transition-colors text-left ${
                  option.value === value
                    ? "bg-linear-to-r from-[#6ECFFF]/20 to-[#3B82F6]/20 text-[#3B82F6] dark:from-[#6ECFFF]/30 dark:to-[#3B82F6]/30 dark:text-[#6ECFFF]"
                    : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
