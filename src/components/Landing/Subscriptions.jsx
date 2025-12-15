"use client";

import React, { useState } from "react";
import {
  MoreVertical,
  ArrowUpCircle,
  ArrowDownCircle,
  XCircle,
  Calendar,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import Card from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Popover, PopoverItem, PopoverDivider } from "../ui/Popover";
import { Modal } from "../ui/Modal";

const subscriptions = [
  {
    id: 1,
    app: "Front Cloud Creative",
    icon: "🎨",
    status: "active",
    plan: "Professional",
    price: "$99/month",
    renewalDate: "Jan 15, 2025",
    autoRenew: true,
  },
  {
    id: 2,
    app: "Emergency Application",
    icon: "🚨",
    status: "active",
    plan: "Enterprise",
    price: "$149/month",
    renewalDate: "Jan 20, 2025",
    autoRenew: true,
  },
  {
    id: 3,
    app: "Front Cloud Studio",
    icon: "🎬",
    status: "active",
    plan: "Business",
    price: "$79/month",
    renewalDate: "Jan 25, 2025",
    autoRenew: true,
  },
];

export default function Subscriptions() {
  const { t, isRTL } = useLanguage();
  const [selectedSub, setSelectedSub] = useState(null);
  const [modalType, setModalType] = useState(null);

  const openModal = (sub, type) => {
    setSelectedSub(sub);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedSub(null);
    setModalType(null);
  };

  const handleAction = () => {
    closeModal();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 dark:text-white mb-2 text-[32px] font-bold">
            {t("sub.title")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            {t("sub.subtitle")}
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            {/* Header Row */}
            <div
              className="grid grid-cols-12 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 
            text-base text-gray-600 dark:text-gray-400 font-medium rounded-t-2xl"
            >
              <div className="col-span-4">{t("sub.app")}</div>
              <div className="col-span-2">{t("sub.status")}</div>
              <div className="col-span-2">{t("sub.plan")}</div>
              <div className="col-span-3">{t("sub.renewal")}</div>
              <div className="col-span-1 text-right">{t("sub.actions")}</div>
            </div>

            {/* Rows */}
            {subscriptions.map((sub, index) => (
              <div
                key={sub.id}
                className={`grid grid-cols-12 items-center px-6 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700
                 ${
                   index !== subscriptions.length - 1
                     ? "border-b border-gray-200 dark:border-gray-700"
                     : "hover:rounded-b-2xl"
                 }`}
              >
                {/* App */}
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-300 to-blue-600 flex items-center justify-center text-lg">
                    {sub.icon}
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white text-base font-medium">
                      {sub.app}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-base">
                      {sub.price}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="col-span-2">
                  <Badge variant="success">{t("sub.active")}</Badge>
                </div>

                {/* Plan */}
                <div className="col-span-2 text-gray-900 dark:text-white text-base">
                  {sub.plan}
                </div>

                {/* Renewal */}
                <div className="col-span-3 flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{sub.renewalDate}</span>
                </div>

                {/* Actions */}
                <div className="col-span-1 flex justify-end">
                  <Popover
                    popoverClass="!right-8 !top-8 translate-x-5"
                    trigger={
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </button>
                    }
                  >
                    <PopoverItem
                      icon={<ArrowUpCircle className="w-4 h-4" />}
                      onClick={() => openModal(sub, "upgrade")}
                    >
                      {t("sub.upgrade")}
                    </PopoverItem>

                    <PopoverItem
                      icon={<ArrowDownCircle className="w-4 h-4" />}
                      onClick={() => openModal(sub, "downgrade")}
                    >
                      {t("sub.downgrade")}
                    </PopoverItem>

                    <PopoverDivider />

                    <PopoverItem
                      icon={<XCircle className="w-4 h-4" />}
                      danger
                      onClick={() => openModal(sub, "cancel")}
                    >
                      {t("sub.cancel")}
                    </PopoverItem>
                  </Popover>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-4">
          {subscriptions.map((sub) => (
            <Card
              key={sub.id}
              className="p-4 dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-300 to-blue-600 flex items-center justify-center text-lg">
                  {sub.icon}
                </div>

                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium">
                    {sub.app}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {sub.price}
                  </p>
                </div>

                <Popover
                  popoverClass="!right-8 !top-8 translate-x-5"
                  trigger={
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg">
                      <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                  }
                >
                  <PopoverItem
                    icon={<ArrowUpCircle className="w-4 h-4" />}
                    onClick={() => openModal(sub, "upgrade")}
                  >
                    {t("sub.upgrade")}
                  </PopoverItem>

                  <PopoverItem
                    icon={<ArrowDownCircle className="w-4 h-4" />}
                    onClick={() => openModal(sub, "downgrade")}
                  >
                    {t("sub.downgrade")}
                  </PopoverItem>

                  <PopoverDivider />

                  <PopoverItem
                    icon={<XCircle className="w-4 h-4" />}
                    danger
                    onClick={() => openModal(sub, "cancel")}
                  >
                    {t("sub.cancel")}
                  </PopoverItem>
                </Popover>
              </div>

              <div className="mt-3 flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{sub.renewalDate}</span>
              </div>

              <div className="mt-2">
                <Badge variant="success">{t("sub.active")}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalType !== null}
        onClose={closeModal}
        title={
          modalType === "upgrade"
            ? t("sub.upgrade")
            : modalType === "downgrade"
            ? t("sub.downgrade")
            : t("sub.cancel")
        }
        footer={
          <>
            <Button variant="outline" onClick={closeModal}>
              {t("common.cancel")}
            </Button>
            <Button
              variant={modalType === "cancel" ? "destructive" : "primary"}
              onClick={handleAction}
            >
              {t("common.confirm")}
            </Button>
          </>
        }
      >
        {selectedSub && (
          <div className="w-full">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {modalType === "upgrade" &&
                `Upgrade your ${selectedSub.app} subscription to a higher tier plan.`}
              {modalType === "downgrade" &&
                `Downgrade your ${selectedSub.app} subscription to a lower tier plan.`}
              {modalType === "cancel" &&
                `Cancel your ${selectedSub.app} subscription.`}
            </p>

            <div className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xl">
                  {selectedSub.icon}
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {selectedSub.app}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {selectedSub.plan}
                  </p>
                </div>
              </div>

              <div className="text-gray-900 dark:text-white font-semibold">
                {selectedSub.price}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
