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
import Modal from "../ui/Modal";

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
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2 text-[40px] font-bold">{t("sub.title")}</h1>
          <p className="text-gray-600 text-base font-normal">{t("sub.subtitle")}</p>
        </div>

        {/* Desktop Table Look (NO TABLES USED) */}
        <div className="hidden lg:block">
          <Card className="">
            {/* Header Row */}
            <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 px-6 py-4 text-base text-gray-600 font-medium">
              <div className="col-span-4">{t("sub.app")}</div>
              <div className="col-span-2">{t("sub.status")}</div>
              <div className="col-span-2">{t("sub.plan")}</div>
              <div className="col-span-3">{t("sub.renewal")}</div>
              <div className="col-span-1 text-right">{t("sub.actions")}</div>
            </div>

            {/* Rows */}
            <div>
              {subscriptions.map((sub) => (
                <div
                  key={sub.id}
                  className="grid grid-cols-12 items-center px-6 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {/* App + Icon */}
                  <div className="col-span-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-300 to-blue-600 flex items-center justify-center text-lg">
                      {sub.icon}
                    </div>
                    <div>
                      <p className="text-gray-900 text-base font-medium">{sub.app}</p>
                      <p className=" text-gray-500 text-base font-normal">{sub.price}</p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="col-span-2">
                    <Badge variant="success">{t("sub.active")}</Badge>
                  </div>

                  {/* Plan */}
                  <div className="col-span-2 text-gray-900 text-base">{sub.plan}</div>

                  {/* Renewal Date */}
                  <div className="col-span-3 flex items-center gap-2 text-gray-600 text-base font-normal">
                    <Calendar className="w-4 h-4" />
                    <span>{sub.renewalDate}</span>
                  </div>

                  {/* Actions */}
                  <div className="col-span-1 flex justify-end">
                    <Popover
                      popoverClass="!right-8 !top-8 translate-x-5"
                      trigger={
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="w-5 h-5 text-gray-600" />
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
            </div>
          </Card>
        </div>

        {/* Mobile View (unchanged) */}
        {/* Mobile View */}
        <div className="lg:hidden space-y-4">
          {subscriptions.map((sub) => (
            <Card key={sub.id} className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-300 to-blue-600 flex items-center justify-center text-lg">
                  {sub.icon}
                </div>

                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{sub.app}</p>
                  <p className="text-sm text-gray-500">{sub.price}</p>
                </div>

                <Popover
                  popoverClass="!right-8 !top-8 translate-x-5"
                  trigger={
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-gray-600" />
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

              <div className="mt-3 flex items-center gap-2 text-gray-600 text-sm">
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

      {/* Modal (unchanged) */}
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

    {/* Subtitle */}
    <p className="text-gray-600 text-base mb-4">
      {modalType === "upgrade" &&
        `Upgrade your ${selectedSub.app} subscription to a higher tier plan.`}

      {modalType === "downgrade" &&
        `Downgrade your ${selectedSub.app} subscription to a lower tier plan.`}

      {modalType === "cancel" &&
        `Cancel your ${selectedSub.app} subscription.`}
    </p>

    {/* MAIN INNER CARD (this is what was missing) */}
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 flex items-center justify-between shadow-sm">

      {/* Left section */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
          {selectedSub.icon}
        </div>

        <div>
          <p className="text-gray-900 text-lg font-semibold">
            {selectedSub.app}
          </p>
          <p className="text-gray-500 text-sm">
            {selectedSub.plan}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="text-gray-900 text-lg font-semibold">
        {selectedSub.price}
      </div>
    </div>

    {/* Current Price Row */}
    <p className="text-gray-500 text-sm mt-3">
      <strong>Current Price:</strong> {selectedSub.price}
    </p>
  </div>
)}

      </Modal>
    </div>
  );
}
