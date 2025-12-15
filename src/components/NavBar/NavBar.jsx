"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import { Logo } from "./navigation/Logo";
import { NavItems } from "./navigation/NavItems";
import { LanguageToggle } from "./navigation/LanguageToggle";
import { NotificationMenu } from "./navigation/NotificationMenu";
import { UserMenu } from "./navigation/UserMenu";
import { MobileMenu } from "./navigation/MobileMenu";
import { useState } from "react";
import { ThemeToggle } from "./navigation/ThemeToggle";

export default function Navigation({ activePage, onNavigate }) {
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page); 
  };

  const navItems = [
    { id: "dashboard", label: t("nav.dashboard") },
    { id: "applications", label: t("nav.applications") },
    { id: "subscriptions", label: t("nav.subscriptions") },
    { id: "billing", label: t("nav.billing") },
    { id: "profile", label: t("nav.profile") },
  ];

  return (
    <nav
      className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/50"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 gap-4">
          <Logo isRTL={isRTL} />

          <div className="hidden md:flex flex-1 justify-center">
            <NavItems
              items={navItems}
              currentPage={activePage}
              onNavigate={handleNavigate}
            />
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle 
              lightLabel={t('theme.switchToLight')} 
              darkLabel={t('theme.switchToDark')} 
            />
            <LanguageToggle language={language} onToggle={toggleLanguage} />

            <NotificationMenu
              count={3}
              newNotification={t("notifications.new")}
              subscriptionExpiring={t("notifications.subscriptionExpiring")}
              payment={t("notifications.payment")}
              paymentProcessed={t("notifications.paymentProcessed")}
            />

            <UserMenu
              onNavigate={handleNavigate}
              labels={{
                profile: t("userMenu.profile"),
                settings: t("userMenu.settings"),
                billing: t("userMenu.billing"),
                logout: t("userMenu.logout"),
              }}
            />

            <MobileMenu
              isOpen={mobileMenuOpen}
              onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
              items={navItems}
              currentPage={activePage}
              onNavigate={handleNavigate}
              isRTL={isRTL}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
