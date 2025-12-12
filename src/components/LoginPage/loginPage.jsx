"use client";

import { Mail, Lock, Eye, EyeOff, Moon, Sun, Globe } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeProvider";
import { Button } from "../ui/Button";
import { Toggle } from "../ui/Toggle";
import { Input } from "../ui/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer } from "../ui/Toast"; 
import { Toast } from "../ui/Toast";

export function LoginPage() {
  const router = useRouter();
  const { t, isRTL, toggleLanguage, language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [toasts, setToasts] = useState([]);

  const showToast = (type, message) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("success", "Login successful!");
    // router.push("/landingpage");
    setTimeout(() => {
      router.push("/landingpage");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-sky-200 flex items-center justify-center p-4 relative">
      <ToastContainer toasts={toasts} removeToast={(id) =>
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      } />
      {/* Theme + Language */}
      <div
        className={`absolute top-4 ${
          isRTL ? "left-4" : "right-4"
        } flex items-center gap-2`}
      >
        <button
          onClick={toggleTheme}
          className="p-3 rounded-xl bg-white/90 backdrop-blur-sm text-gray-700 
          hover:bg-white transition-all shadow-lg hover:shadow-xl border border-gray-200/50"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>

        <button
          onClick={toggleLanguage}
          className="p-3 rounded-xl bg-white/90 backdrop-blur-sm text-gray-700 
          hover:bg-white transition-all shadow-lg hover:shadow-xl flex items-center gap-2 border border-gray-200/50"
        >
          <Globe className="w-5 h-5" />
          <span className="text-sm font-medium">
            {language === "en" ? "AR" : "EN"}
          </span>
        </button>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 animate-slide-in border border-white/20">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#6ECFFF] to-[#3B82F6] flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-2xl">FC</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {t("login.title")}
            </h2>
            <p className="text-base text-gray-600">{t("login.subtitle")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              type="email"
              label={t("login.email")}
              placeholder="john@example.com"
              icon={<Mail className="w-5 h-5" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                label={t("login.password")}
                placeholder="••••••••"
                icon={<Lock className="w-5 h-5" />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute ${
                  isRTL ? "left-3" : "right-3"
                } top-[42px] text-gray-400 hover:text-gray-600 transition-colors`}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <Toggle
                checked={rememberMe}
                onChange={setRememberMe}
                label={t("login.remember")}
              />
              <button
                type="button"
                className="text-sm font-medium text-[#6ECFFF] hover:text-[#5AB8E6]"
              >
                {t("login.forgot")}
              </button>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              {t("login.signin")}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-700 font-semibold">
                  {t("login.or")}
                </span>
              </div>
            </div>

            <Button type="button" variant="outline" size="lg" fullWidth>
              {t("login.signup")}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2024 Front Cloud Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
