"use client";

import React, { useState } from "react";
import {
  Check,
  ExternalLink,
  Sparkles,
  Zap,
  Crown,
  ArrowUp,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import Card  from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Toggle } from "../ui/Toggle";
import  {Modal}  from "../ui/Modal";

const applications = [
  {
    id: "creative",
    name: "Front Cloud Creative",
    description:
      "Creative design and collaboration platform with advanced tools",
    icon: "🎨",
    plans: [
      {
        id: "basic",
        name: "Basic",
        icon: <Sparkles className="w-5 h-5" />,
        price: { monthly: 49, yearly: 490 },
        features: [
          "10 projects",
          "Basic design tools",
          "2 team members",
          "10GB storage",
          "Email support",
        ],
      },
      {
        id: "professional",
        name: "Professional",
        icon: <Zap className="w-5 h-5" />,
        price: { monthly: 99, yearly: 990 },
        features: [
          "Unlimited projects",
          "Advanced design tools",
          "10 team members",
          "100GB storage",
          "Priority support",
          "Custom templates",
        ],
        popular: true,
        currentPlan: true,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        icon: <Crown className="w-5 h-5" />,
        price: { monthly: 199, yearly: 1990 },
        features: [
          "Unlimited everything",
          "All advanced tools",
          "Unlimited team members",
          "1TB storage",
          "24/7 dedicated support",
          "Custom branding",
          "API access",
          "SLA guarantee",
        ],
      },
    ],
  },

  {
    id: "emergency",
    name: "Emergency Application",
    description: "Critical emergency response and management system",
    icon: "🚨",
    plans: [
      {
        id: "basic",
        name: "Basic",
        icon: <Sparkles className="w-5 h-5" />,
        price: { monthly: 99, yearly: 990 },
        features: ["Basic monitoring", "Email alerts", "5 workflows", "Standard support"],
      },
      {
        id: "professional",
        name: "Professional",
        icon: <Zap className="w-5 h-5" />,
        price: { monthly: 149, yearly: 1490 },
        features: [
          "24/7 monitoring",
          "Instant SMS/Email alerts",
          "Unlimited workflows",
          "Priority support",
          "Mobile app",
          "Real-time dashboard",
        ],
        popular: true,
        currentPlan: true,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        icon: <Crown className="w-5 h-5" />,
        price: { monthly: 299, yearly: 2990 },
        features: [
          "Everything in Professional",
          "Dedicated account manager",
          "Custom integrations",
          "Multi-region deployment",
          "Advanced analytics",
          "White-label option",
          "99.99% uptime SLA",
        ],
      },
    ],
  },

  {
    id: "studio",
    name: "Front Cloud Studio",
    description: "Professional studio and project management platform",
    icon: "🎬",
    plans: [
      {
        id: "basic",
        name: "Basic",
        icon: <Sparkles className="w-5 h-5" />,
        price: { monthly: 39, yearly: 390 },
        features: [
          "5 active projects",
          "Basic time tracking",
          "3 team members",
          "5GB storage",
          "Email support",
        ],
      },
      {
        id: "professional",
        name: "Professional",
        icon: <Zap className="w-5 h-5" />,
        price: { monthly: 79, yearly: 790 },
        features: [
          "Unlimited projects",
          "Advanced time tracking",
          "15 team members",
          "50GB storage",
          "Client portal",
          "Invoice generation",
          "Priority support",
        ],
        popular: true,
        currentPlan: true,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        icon: <Crown className="w-5 h-5" />,
        price: { monthly: 159, yearly: 1590 },
        features: [
          "Everything in Professional",
          "Unlimited team members",
          "500GB storage",
          "Advanced reporting",
          "Custom workflows",
          "API access",
          "Dedicated support",
          "White-label option",
        ],
      },
    ],
  },
];

export function Applications() {
  const { t } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [selectedApp, setSelectedApp] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const handleSubscribe = (app, plan) => {
    setSelectedApp(app);
    setSelectedPlan(plan);
    setShowSubscribeModal(true);
  };

  const handleUpgrade = (app, plan) => {
    setSelectedApp(app);
    setSelectedPlan(plan);
    setShowUpgradeModal(true);
  };

  const confirmSubscribe = () => {
    setShowSubscribeModal(false);
    setSelectedApp(null);
    setSelectedPlan(null);
  };

  const confirmUpgrade = () => {
    setShowUpgradeModal(false);
    setSelectedApp(null);
    setSelectedPlan(null);
  };

  const subscribedApps = applications.filter((app) =>
    app.plans.some((plan) => plan.currentPlan)
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <h1 className="text-gray-900 mb-2 text-[32px] font-bold dark:text-white">{t("apps.title")}</h1>
        <p className="text-gray-600 text-base font-normal mb-10 dark:text-gray-400">{t("apps.subtitle")}</p>

        {/* QUICK SSO ACCESS */}
        {subscribedApps.length > 0 && (
          <div className="mb-12">
            <Card className="p-6 bg-linear-to-br from-[#6ECFFF]/10 to-[#3B82F6]/10 border-2 border-[#6ECFFF]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#6ECFFF] to-[#3B82F6] flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quick SSO Access</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Access your subscribed applications instantly
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {subscribedApps.map((app) => {
                  const currentPlan = app.plans.find((p) => p.currentPlan);
                  return (
                    <div
                      key={app.id}
                      className="bg-white rounded-xl p-4 flex items-center justify-between gap-4 hover:shadow-lg transition-shadow dark:bg-gray-800"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-[#6ECFFF] to-[#3B82F6] flex items-center justify-center text-xl">
                          {app.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                            {app.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {currentPlan?.name} Plan
                          </p>
                        </div>
                      </div>

                      <Button variant="primary" size="sm">
                        <ExternalLink className="w-4 h-4" />
                        SSO
                      </Button>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        )}

        {/* UPGRADE BANNER */}
        <div className="mb-8">
          <Card className="p-6 bg-linear-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-400/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Unlock Premium Features</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Upgrade to Enterprise plans and get advanced analytics, dedicated support,
                    API access, and more!
                  </p>
                </div>
              </div>

              <Button variant="primary" size="md">
                <ArrowUp className="w-4 h-4" />
                Explore Upgrades
              </Button>
            </div>
          </Card>
        </div>

        {/* BILLING TOGGLE */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm ${billingPeriod === "monthly" ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
            {t("apps.monthly")}
          </span>

          <Toggle
            checked={billingPeriod === "yearly"}
            onChange={(checked) => setBillingPeriod(checked ? "yearly" : "monthly")}
          />

          <span className={`text-sm ${billingPeriod === "yearly" ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
            {t("apps.yearly")}
          </span>

          {billingPeriod === "yearly" && <Badge variant="success">Save 17%</Badge>}
        </div>

        {/* APPLICATIONS + PLANS */}
        <div className="space-y-16">
          {applications.map((app) => {
            const currentPlanIndex = app.plans.findIndex((p) => p.currentPlan);

            return (
              <div key={app.id} className="space-y-6">

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#6ECFFF] to-[#3B82F6] flex items-center justify-center text-3xl shadow-lg">
                    {app.icon}
                  </div>

                  <div>
                    <h2 className="text-gray-900 mb-1 text-[32px] font-bold dark:text-white">{app.name}</h2>
                    <p className="text-gray-600 text-bse font-normal dark:text-gray-400">{app.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {app.plans.map((plan, index) => {
                    const isUpgrade = currentPlanIndex !== -1 && index > currentPlanIndex;
                    const isDowngrade = currentPlanIndex !== -1 && index < currentPlanIndex;

                    return (
                      <Card
                        key={plan.id}
                        className={`p-6 flex flex-col relative ${plan.popular ? "border-2 border-[#6ECFFF] shadow-xl" : ""}`}
                        hover
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge variant="info">Most Popular</Badge>
                          </div>
                        )}

                        {plan.currentPlan && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="success">Current Plan</Badge>
                          </div>
                        )}

                        {isUpgrade && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="warning">
                              <ArrowUp className="w-3 h-3 inline mr-1" /> Upgrade
                            </Badge>
                          </div>
                        )}

                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-2 text-[#6ECFFF]">
                            {plan.icon}
                            <h4 className="text-gray-900 text-xl font-semibold dark:text-white">{plan.name}</h4>
                          </div>

                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white">
                              ${billingPeriod === "monthly" ? plan.price.monthly : plan.price.yearly}
                            </span>
                            <span className="text-gray-500">
                              / {billingPeriod === "monthly" ? t("common.month") : t("common.year")}
                            </span>
                          </div>

                          {billingPeriod === "yearly" && (
                            <p className="text-sm text-gray-500 mt-1">
                              ${(plan.price.yearly / 12).toFixed(2)} per month
                            </p>
                          )}
                        </div>

                        <ul className="space-y-3 mb-8 grow">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <Check className="w-5 h-5 text-[#6ECFFF] shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="space-y-2">
                          {plan.currentPlan ? (
                            <Button variant="outline" fullWidth>{t("apps.manage")}</Button>
                          ) : isUpgrade ? (
                            <Button
                              variant="primary"
                              fullWidth
                              onClick={() => handleUpgrade(app, plan)}
                            >
                              <ArrowUp className="w-4 h-4" /> Upgrade to {plan.name}
                            </Button>
                          ) : isDowngrade ? (
                            <Button
                              variant="outline"
                              fullWidth
                              onClick={() => handleSubscribe(app, plan)}
                            >
                              Switch to {plan.name}
                            </Button>
                          ) : (
                            <Button
                              variant={plan.popular ? "primary" : "outline"}
                              fullWidth
                              onClick={() => handleSubscribe(app, plan)}
                            >
                              {t("apps.subscribe")}
                            </Button>
                          )}
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SUBSCRIBE MODAL */}
      <Modal
        isOpen={showSubscribeModal}
        onClose={() => setShowSubscribeModal(false)}
        title="Confirm Subscription"
        footer={
          <>
            <Button variant="outline" onClick={() => setShowSubscribeModal(false)}>
              {t("common.cancel")}
            </Button>
            <Button variant="primary" onClick={confirmSubscribe}>
              {t("common.confirm")}
            </Button>
          </>
        }
      >
        {selectedApp && selectedPlan && (
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              You are about to subscribe to{" "}
              <strong className="text-gray-900 dark:text-white">{selectedApp.name}</strong> -{" "}
              {selectedPlan.name} Plan
            </p>

            <div className="p-4 bg-gray-50 rounded-xl space-y-3 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Application:</span>
                <span className="text-gray-900 font-medium dark:text-white">{selectedApp.name}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Plan:</span>
                <span className="text-gray-900 font-medium dark:text-white">{selectedPlan.name}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Billing:</span>
                <span className="text-gray-900 dark:text-white">
                  {billingPeriod === "monthly" ? "Monthly" : "Yearly"}
                </span>
              </div>

              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-medium dark:text-white">Total Amount:</span>
                  <span className="text-2xl font-bold text-[#6ECFFF]">
                    ${billingPeriod === "monthly"
                      ? selectedPlan.price.monthly
                      : selectedPlan.price.yearly}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 dark:bg-blue-900/20 dark:border-blue-800">
              <p className="text-sm text-blue-900 dark:text-blue-300">
                <strong>Note:</strong> You will be charged immediately upon confirmation.
                You can cancel or change your plan anytime from the Subscriptions page.
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* UPGRADE MODAL */}
      <Modal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        title="Confirm Upgrade"
        footer={
          <>
            <Button variant="outline" onClick={() => setShowUpgradeModal(false)}>
              {t("common.cancel")}
            </Button>
            <Button variant="primary" onClick={confirmUpgrade}>
              {t("common.confirm")}
            </Button>
          </>
        }
      >
        {selectedApp && selectedPlan && (
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              You are about to upgrade{" "}
              <strong className="text-gray-900 dark:text-white">{selectedApp.name}</strong> -{" "}
              {selectedPlan.name} Plan
            </p>

            <div className="p-4 bg-gray-50 rounded-xl space-y-3 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Application:</span>
                <span className="text-gray-900 font-medium dark:text-white">{selectedApp.name}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Plan:</span>
                <span className="text-gray-900 font-medium dark:text-white">{selectedPlan.name}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Billing:</span>
                <span className="text-gray-900 dark:text-white">
                  {billingPeriod === "monthly" ? "Monthly" : "Yearly"}
                </span>
              </div>

              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-medium dark:text-white">Total Amount:</span>
                  <span className="text-2xl font-bold text-[#6ECFFF]">
                    ${billingPeriod === "monthly"
                      ? selectedPlan.price.monthly
                      : selectedPlan.price.yearly}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 dark:bg-blue-900/20 dark:border-blue-800">
              <p className="text-sm text-blue-900 dark:text-blue-300">
                <strong>Note:</strong> You will be charged immediately. You can change plans anytime.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
