"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Popover({
  trigger,
  children,
  position = "bottom-right",
  popoverClass = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const { isRTL } = useLanguage();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target)
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

  const positionStyles = {
    "bottom-left": isRTL
      ? "top-full -right-10 mt-2"
      : "top-full -left-10 mt-2",
    "bottom-right": isRTL
      ? "top-full -left-10 mt-2"
      : "top-full -right-10 mt-2",
    "top-left": isRTL
      ? "bottom-full -right-10 mb-2"
      : "bottom-full -left-10 mb-2",
    "top-right": isRTL
      ? "bottom-full -left-10 mb-2"
      : "bottom-full -right-10 mb-2",
  };

  return (
    <div className="relative" ref={popoverRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`absolute z-50 ${positionStyles[position]} min-w-50 animate-slide-in ${popoverClass}`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl dark:shadow-black/50 border border-gray-200 dark:border-gray-700 overflow-hidden">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export function PopoverItem({
  children,
  onClick,
  icon,
  danger = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
        danger
          ? "text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
          : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
      }`}
    >
      {icon && (
        <span className="shrink-0 opacity-70">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}

export function PopoverDivider() {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 my-1" />
  );
}
