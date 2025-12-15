"use client";

import React, { useEffect } from "react";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Toast({
  type,
  message,
  onClose,
  duration = 5000,
}) {
  const { isRTL } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  };

  const styles = {
    success:
      "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-800 dark:text-green-400",
    error:
      "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/30 dark:border-red-800 dark:text-red-400",
    info:
      "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-400",
  };

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg animate-slide-in ${styles[type]}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {icons[type]}

      <p className="flex-1 text-sm">{message}</p>

      <button
        onClick={onClose}
        className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export function ToastContainer({ toasts, removeToast }) {
  const { isRTL } = useLanguage();

  return (
    <div
      className={`fixed ${
        isRTL ? "left-4" : "right-4"
      } bottom-4 z-50 flex flex-col gap-3 w-full max-w-md`}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}
