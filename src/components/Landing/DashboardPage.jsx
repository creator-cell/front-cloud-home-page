"use client";

import React from "react";
import {
  ExternalLink,
  TrendingUp,
  CreditCard,
  Calendar,
  Hand,
  SirenIcon,
  ClapperboardIcon,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import Card from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export default function Dashboard({ onNavigate }) {
  const { t, language } = useLanguage();

  const apps = [
    {
      id: "creative",
      name: "Front Cloud Creative",
      description: "Creative design and collaboration platform",
      icon: "🎨",
      status: "active",
      plan: "Professional",
      nextBilling: "Jan 15, 2025",
    },
    {
      id: "emergency",
      name: "Emergency Application",
      description: "Critical emergency response system",
      icon: <SirenIcon className="text-pink-600 " />,
      status: "active",
      plan: "Enterprise",
      nextBilling: "Jan 20, 2025",
    },
    {
      id: "studio",
      name: "Front Cloud Studio",
      description: "Professional studio management",
      icon: <ClapperboardIcon className="text-[#7e6da3] fill-[#7e6da3]" />,
      status: "active",
      plan: "Business",
      nextBilling: "Jan 25, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-[40px] font-bold text-gray-900 mb-2 flex items-center gap-2">
            {t("dashboard.welcome")}, {language === "en" ? "John" : "جون"}{" "}
            <Hand className="text-yellow-400  mt-2" />
          </h1>
          <p className="text-gray-600 text-base font-normal">
            {t("dashboard.subtitle")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#6ECFFF]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#6ECFFF]" />
              </div>
              <Badge variant="success">+12%</Badge>
            </div>
            <h3 className="text-gray-900 mb-1 font-semibold text-2xl">3</h3>
            <p className="text-gray-600 text-base font-normal">
              Active Subscriptions
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-[#3B82F6]" />
              </div>
              <Badge variant="info">This month</Badge>
            </div>
            <h3 className="text-gray-900 mb-1 font-semibold text-2xl">$299</h3>
            <p className="text-gray-600 text-base font-normal">Monthly Spend</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-500" />
              </div>
              <Badge variant="default">Upcoming</Badge>
            </div>
            <h3 className="text-gray-900 mb-1 font-semibold text-2xl">
              Jan 15
            </h3>
            <p className="text-gray-600 text-base font-normal">Next Billing</p>
          </Card>
        </div>

        {/* My Applications */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900 font-bold text-3xl">
              {t("dashboard.myApps")}
            </h2>
            <Button
              variant="outline"
              size="base"
              className="w-22 h-10 flex items-center justify-center rounded-full"
              onClick={() => onNavigate("applications")}
            >
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <Card key={app.id} className="p-6" hover>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#6ECFFF] to-[#3B82F6] flex items-center justify-center text-2xl shadow-lg">
                    {app.icon}
                  </div>
                  <Badge variant="success">{t("sub.active")}</Badge>
                </div>

                <h4 className="text-gray-900 mb-2 font-semibold text-xl">
                  {app.name}
                </h4>
                <p className="text-base font-normal text-gray-600 mb-4">
                  {app.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between ">
                    <span className="text-gray-500 text-base font-normal">
                      Plan:
                    </span>
                    <span className="text-gray-900 text-base font-normal">
                      {app.plan}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-base font-normal">
                      Next Billing:
                    </span>
                    <span className="text-gray-900 text-base font-normal">
                      {app.nextBilling}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="primary" size="sm" fullWidth>
                    <ExternalLink className="w-4 h-4" />
                    {t("apps.sso")}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => onNavigate("subscriptions")}
                  >
                    {t("apps.manage")}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Billing Summary */}
        <div>
          <h2 className="text-gray-900 mb-6 text-3xl font-bold">
            {t("dashboard.billing")}
          </h2>
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-base font-normal text-gray-500 mb-1">
                  Current Period
                </p>
                <p className="text-gray-900 text-base font-normal">
                  Dec 1 - Dec 31
                </p>
              </div>

              <div>
                <p className="text-base font-normal text-gray-500 mb-1">
                  Amount Due
                </p>
                <p className="text-gray-900 text-base font-normal">$299.00</p>
              </div>

              <div>
                <p className="text-base font-normal text-gray-500 mb-1">
                  Payment Method
                </p>
                <p className="text-gray-900 text-base font-normal">
                  Visa •••• 4242
                </p>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => onNavigate("billing")}
                >
                  {t("nav.billing")}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
