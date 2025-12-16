"use client";

import { Twitter, Linkedin, Github, Mail, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

const Icons = [Twitter, Linkedin, Github, Mail];

export const Footer = ({ onNavigate }) => {
  const { t, isRTL, toggleLanguage } = useLanguage();

  const productLinks = [
    { labelKey: "footer.dashboard", page: "dashboard" },
    { labelKey: "footer.applications", page: "applications" },
    { labelKey: "footer.subscriptions", page: "subscriptions" },
    { labelKey: "footer.billing", page: "billing" },
    { labelKey: "footer.profile", page: "profile" },
  ];

  return (
    <footer
      className={`
        bg-slate-50 text-slate-600 
        dark:bg-linear-to-b dark:from-[#0f1b2d] dark:to-[#13233a] dark:text-[#b7c4d6]
        ${isRTL ? "rtl" : ""}
      `}
    >
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white"
            >
              <Image
                src="/logo2.png"
                alt="Front Cloud"
                width={28}
                height={28}
              />
              Front Cloud
            </Link>

            <p className="max-w-sm text-sm text-slate-600 dark:text-[#b7c4d6]">
              {t("footer.tagline")}
            </p>

            <div className="flex gap-4 pt-3">
              {Icons.map((Icon, i) => (
                <Icon
                  key={i}
                  className="h-5 w-5 cursor-pointer text-slate-500 hover:text-gray-900 dark:text-[#9fb1c9] dark:hover:text-white"
                />
              ))}
            </div>
          </div>

          <FooterColumn
            title={t("footer.product")}
            links={productLinks}
            onNavigate={onNavigate}
            t={t}
          />
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-center mt-5  md:justify-center text-sm">
          <p className="text-slate-500 dark:text-[#b7c4d6]">
            {t("footer.rights")}
          </p>
        </div>
        {/*  */}
      </div>
 
    </footer>
  );
};

const FooterColumn = ({ title, links, onNavigate, t }) => (
  <div>
    <h4 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
      {title}
    </h4>

    <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
      {links.map((item) => (
        <li
          key={item.page}
          onClick={() => onNavigate(item.page)}
          className="
            cursor-pointer 
            text-slate-500 hover:text-gray-900 
            dark:text-[#9fb1c9] dark:hover:text-white
            whitespace-nowrap
          "
        >
          {t(item.labelKey)}
        </li>
      ))}
    </ul>
  </div>
);
