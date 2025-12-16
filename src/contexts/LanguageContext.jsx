"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    // Navigation
    "nav.dashboard": "Dashboard",
    "nav.applications": "Applications",
    "nav.subscriptions": "Subscriptions",
    "nav.billing": "Billing",
    "nav.profile": "Profile",
    "nav.logout": "Logout",

    // Login
    "login.title": "Welcome Back",
    "login.subtitle": "Sign in to your Front Cloud account",
    "login.email": "Email Address",
    "login.password": "Password",
    "login.remember": "Remember me",
    "login.forgot": "Forgot Password?",
    "login.signin": "Sign In",
    "login.signup": "Create Account",
    "login.or": "or continue with",

    // Dashboard
    "dashboard.welcome": "Hello",
    "dashboard.subtitle": "Welcome back to your dashboard",
    "dashboard.myApps": "My Applications",
    "dashboard.availableApps": "Available Applications",
    "dashboard.billing": "Billing Summary",
    "dashboard.notifications": "Notifications",

    // Applications
    "apps.title": "Applications",
    "apps.subtitle": "Explore and manage your applications",
    "apps.subscribed": "Subscribed",
    "apps.subscribe": "Subscribe",
    "apps.manage": "Manage Subscription",
    "apps.sso": "SSO Access",
    "apps.monthly": "Monthly",
    "apps.yearly": "Yearly",

    // Subscriptions
    "sub.title": "Subscription Management",
    "sub.subtitle": "Manage your active subscriptions",
    "sub.app": "Application",
    "sub.status": "Status",
    "sub.plan": "Plan",
    "sub.renewal": "Renewal Date",
    "sub.actions": "Actions",
    "sub.active": "Active",
    "sub.upgrade": "Upgrade",
    "sub.downgrade": "Downgrade",
    "sub.cancel": "Cancel",
    "sub.details": "Subscription Details",

    // Billing
    "billing.title": "Billing & Payments",
    "billing.subtitle": "Manage your payment methods and invoices",
    "billing.paymentMethod": "Payment Method",
    "billing.addPayment": "Add Payment Method",
    "billing.invoices": "Invoices",
    "billing.invoice": "Invoice",
    "billing.amount": "Amount",
    "billing.date": "Date",
    "billing.paid": "Paid",
    "billing.pending": "Pending",
    "billing.download": "Download",

    // Profile
    "profile.title": "Profile & Settings",
    "profile.subtitle": "Manage your account information",
    "profile.info": "Profile Information",
    "profile.name": "Full Name",
    "profile.email": "Email",
    "profile.phone": "Phone",
    "profile.timezone": "Timezone",
    "profile.security": "Security",
    "profile.changePassword": "Change Password",
    "profile.2fa": "Two-Factor Authentication",
    "profile.sessions": "Active Sessions",
    "profile.save": "Save Changes",

    // User Menu
    "userMenu.profile": "Profile",
    "userMenu.settings": "Settings",
    "userMenu.billing": "Billing",
    "userMenu.logout": "Logout",

    // Theme
    "theme.switchToLight": "Switch to Light Mode",
    "theme.switchToDark": "Switch to Dark Mode",

    // Notifications
    "notifications.new": "New Notification",
    "notifications.subscriptionExpiring": "Your subscription is expiring soon",
    "notifications.payment": "Payment Update",
    "notifications.paymentProcessed": "Your payment has been processed",

    // Common
    "common.month": "month",
    "common.year": "year",
    "common.cancel": "Cancel",
    "common.confirm": "Confirm",
    "common.save": "Save",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.all": "All",
    "common.loading": "Loading...",
    // Footer
    "footer.tagline":
      "The most powerful AI content platform with access to OpenAI, Anthropic, Google, and Ollama in one subscription.",

    "footer.product": "Product",

    "footer.dashboard": "Dashboard",
    "footer.applications": "Applications",
    "footer.subscriptions": "Subscriptions",
    "footer.billing": "Billing",
    "footer.profile": "Profile",

    "footer.rights": "© 2025 Front Cloud . All rights reserved.",

    "footer.language": "English",
    "footer.status": "Status",
    "footer.api": "API",
    "footer.changelog": "Changelog",

    "footer.newsletter.title": "Stay updated",
    "footer.newsletter.desc":
      "Get the latest updates about new features and AI improvements.",
    "footer.newsletter.placeholder": "Enter your email",
    "footer.newsletter.cta": "Subscribe",
  },

  ar: {
    // Navigation
    "nav.dashboard": "لوحة التحكم",
    "nav.applications": "التطبيقات",
    "nav.subscriptions": "الاشتراكات",
    "nav.billing": "الفواتير",
    "nav.profile": "الملف الشخصي",
    "nav.logout": "تسجيل الخروج",

    // Login
    "login.title": "مرحباً بعودتك",
    "login.subtitle": "سجّل الدخول إلى حسابك في Front Cloud",
    "login.email": "البريد الإلكتروني",
    "login.password": "كلمة المرور",
    "login.remember": "تذكرني",
    "login.forgot": "نسيت كلمة المرور؟",
    "login.signin": "تسجيل الدخول",
    "login.signup": "إنشاء حساب",
    "login.or": "أو تابع مع",

    // Dashboard
    "dashboard.welcome": "مرحباً",
    "dashboard.subtitle": "مرحباً بعودتك إلى لوحة التحكم",
    "dashboard.myApps": "تطبيقاتي",
    "dashboard.availableApps": "التطبيقات المتاحة",
    "dashboard.billing": "ملخص الفواتير",
    "dashboard.notifications": "الإشعارات",

    // Applications
    "apps.title": "التطبيقات",
    "apps.subtitle": "استكشف وأدِر تطبيقاتك",
    "apps.subscribed": "مشترك",
    "apps.subscribe": "اشترك",
    "apps.manage": "إدارة الاشتراك",
    "apps.sso": "وصول SSO",
    "apps.monthly": "شهري",
    "apps.yearly": "سنوي",

    // Subscriptions
    "sub.title": "إدارة الاشتراكات",
    "sub.subtitle": "أدِر اشتراكاتك النشطة",
    "sub.app": "التطبيق",
    "sub.status": "الحالة",
    "sub.plan": "الخطة",
    "sub.renewal": "تاريخ التجديد",
    "sub.actions": "الإجراءات",
    "sub.active": "نشط",
    "sub.upgrade": "ترقية",
    "sub.downgrade": "تخفيض",
    "sub.cancel": "إلغاء",
    "sub.details": "تفاصيل الاشتراك",

    // Billing
    "billing.title": "الفواتير والمدفوعات",
    "billing.subtitle": "أدِر طرق الدفع والفواتير",
    "billing.paymentMethod": "طريقة الدفع",
    "billing.addPayment": "إضافة طريقة دفع",
    "billing.invoices": "الفواتير",
    "billing.invoice": "فاتورة",
    "billing.amount": "المبلغ",
    "billing.date": "التاريخ",
    "billing.paid": "مدفوع",
    "billing.pending": "قيد الانتظار",
    "billing.download": "تحميل",

    // Profile
    "profile.title": "الملف الشخصي والإعدادات",
    "profile.subtitle": "أدِر معلومات حسابك",
    "profile.info": "معلومات الملف الشخصي",
    "profile.name": "الاسم الكامل",
    "profile.email": "البريد الإلكتروني",
    "profile.phone": "الهاتف",
    "profile.timezone": "المنطقة الزمنية",
    "profile.security": "الأمان",
    "profile.changePassword": "تغيير كلمة المرور",
    "profile.2fa": "المصادقة الثنائية",
    "profile.sessions": "الجلسات النشطة",
    "profile.save": "حفظ التغييرات",

    // User Menu
    "userMenu.profile": "الملف الشخصي",
    "userMenu.settings": "الإعدادات",
    "userMenu.billing": "الفواتير",
    "userMenu.logout": "تسجيل الخروج",

    // Theme
    "theme.switchToLight": "تبديل إلى الوضع الفاتح",
    "theme.switchToDark": "تبديل إلى الوضع الداكن",

    // Notifications
    "notifications.new": "إشعار جديد",
    "notifications.subscriptionExpiring": "ستنتهي صلاحية اشتراكك قريبًا",
    "notifications.payment": "تحديث الدفع",
    "notifications.paymentProcessed": "تم معالجة دفعتك",

    // Common
    "common.month": "شهر",
    "common.year": "سنة",
    "common.cancel": "إلغاء",
    "common.confirm": "تأكيد",
    "common.save": "حفظ",
    "common.edit": "تعديل",
    "common.delete": "حذف",
    "common.search": "بحث",
    "common.filter": "تصفية",
    "common.all": "الكل",
    "common.loading": "جاري التحميل...",
    // Footer
    "footer.tagline":
      "أقوى منصة محتوى بالذكاء الاصطناعي مع وصول إلى OpenAI وAnthropic وGoogle وOllama باشتراك واحد.",

    "footer.product": "المنتج",

    "footer.dashboard": "ڈیش بورڈ",
    "footer.applications": "ایپلی کیشنز",
    "footer.subscriptions": "سبسکرپشنز",
    "footer.billing": "بلنگ",
    "footer.profile": "پروفائل",

    "footer.rights": "© 2025 فرنٹ کلاؤڈ۔ جملہ حقوق محفوظ ہیں۔",

    "footer.language": "العربية",
    "footer.status": "الحالة",
    "footer.api": "واجهة API",
    "footer.changelog": "سجل التغييرات",

    "footer.newsletter.title": "ابقَ على اطلاع",
    "footer.newsletter.desc":
      "احصل على آخر التحديثات حول الميزات الجديدة وتحسينات الذكاء الاصطناعي.",
    "footer.newsletter.placeholder": "أدخل بريدك الإلكتروني",
    "footer.newsletter.cta": "اشترك",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr"
    );
    document.body.setAttribute("lang", language);

    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, setLanguage, t, isRTL }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
