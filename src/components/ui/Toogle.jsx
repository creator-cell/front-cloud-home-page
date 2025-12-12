"use client";

import React from "react";

export default function Toggle({ checked, onChange, label, disabled = false }) {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />

        <div
          className={`w-14 h-7 rounded-full transition-all duration-300 shadow-inner ${
            checked
              ? "bg-linear-to-r from-[#6ECFFF] to-[#3B82F6]"
              : "bg-gray-300"
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <div
            className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
              checked ? "left-7" : "left-0.5"
            }`}
          />
        </div>
      </div>

      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
    </label>
  );
}
