"use client";

import React, { useState } from "react";
import {
  CreditCard,
  Plus,
  Download,
  MoreVertical,
  Trash2,
  Edit,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import Card from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import Modal from "../ui/Modal";
import { Input } from "../ui/Input";
import { Popover, PopoverItem, PopoverDivider } from "../ui/Popover";

const invoices = [
  {
    id: "INV-001",
    date: "Dec 1, 2024",
    amount: "$299.00",
    status: "paid",
    items: [
      "Front Cloud Creative",
      "Emergency Application",
      "Front Cloud Studio",
    ],
  },
  {
    id: "INV-002",
    date: "Nov 1, 2024",
    amount: "$299.00",
    status: "paid",
    items: [
      "Front Cloud Creative",
      "Emergency Application",
      "Front Cloud Studio",
    ],
  },
  {
    id: "INV-003",
    date: "Oct 1, 2024",
    amount: "$299.00",
    status: "paid",
    items: [
      "Front Cloud Creative",
      "Emergency Application",
      "Front Cloud Studio",
    ],
  },
];

export function Billing() {
  const { t, isRTL } = useLanguage();
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");

  const handleAddPayment = () => {
    setShowAddPaymentModal(false);
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setCardName("");
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2 text-[32px] font-bold">{t("billing.title")}</h1>
          <p className="text-gray-600 text-base font-normal">{t("billing.subtitle")}</p>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900 font-bold text-3xl">{t("billing.paymentMethod")}</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAddPaymentModal(true)}
            >
              <Plus className="w-4 h-4" />
              {t("billing.addPayment")}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Primary Card */}
            <Card className="p-6 bg-linear-to-br from-[#6ECFFF] to-[#3B82F6] text-white relative ">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <CreditCard className="w-8 h-8" />
                  <span className="px-3 py-1 text-xs bg-white/20 text-white border border-white/30 rounded-full">
                    Primary
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-sm opacity-80 mb-1">Card Number</p>
                  <p className="text-xl tracking-wider">•••• •••• •••• 4242</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-80 mb-1">Cardholder</p>
                    <p className="text-sm">John Doe</p>
                  </div>

                  <div>
                    <p className="text-sm opacity-80 mb-1">Expires</p>
                    <p className="text-sm">12/25</p>
                  </div>

                  <Popover
                  popoverClass="!right-8 !top-7 translate-x-5"
                    trigger={
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    }
                  >
                    <PopoverItem icon={<Edit className="w-4 h-4" />}>
                      Edit
                    </PopoverItem>
                    <PopoverDivider />
                    <PopoverItem icon={<Trash2 className="w-4 h-4" />} danger>
                      Remove
                    </PopoverItem>
                  </Popover>
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full" />
              <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full" />
            </Card>

            {/* Add Card Placeholder */}
            <Card
              className="p-6 border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-[#6ECFFF] transition-colors"
              onClick={() => setShowAddPaymentModal(true)}
            >
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <Plus className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-gray-600">{t("billing.addPayment")}</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Invoices */}
        <div>
          <h2 className="text-gray-900 mb-6 font-bold text-3xl">{t("billing.invoices")}</h2>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th
                        className={`px-6 py-4 ${
                          isRTL ? "text-right" : "text-left"
                        } text-sm text-gray-600`}
                      >
                        {t("billing.invoice")}
                      </th>

                      <th
                        className={`px-6 py-4 ${
                          isRTL ? "text-right" : "text-left"
                        } text-sm text-gray-600`}
                      >
                        {t("billing.date")}
                      </th>

                      <th
                        className={`px-6 py-4 ${
                          isRTL ? "text-right" : "text-left"
                        } text-sm text-gray-600`}
                      >
                        {t("billing.amount")}
                      </th>

                      <th
                        className={`px-6 py-4 ${
                          isRTL ? "text-right" : "text-left"
                        } text-sm text-gray-600`}
                      >
                        {t("sub.status")}
                      </th>

                      <th
                        className={`px-6 py-4 ${
                          isRTL ? "text-left" : "text-right"
                        } text-sm text-gray-600`}
                      >
                        {t("sub.actions")}
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">{invoice.id}</td>

                        <td className="px-6 py-4">{invoice.date}</td>

                        <td className="px-6 py-4">{invoice.amount}</td>

                        <td className="px-6 py-4">
                          <Badge
                            variant={
                              invoice.status === "paid" ? "success" : "warning"
                            }
                          >
                            {invoice.status === "paid"
                              ? t("billing.paid")
                              : t("billing.pending")}
                          </Badge>
                        </td>

                        <td className="px-6 py-4">
                          <div
                            className={`flex ${
                              isRTL ? "justify-start" : "justify-end"
                            }`}
                          >
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4" />
                              {t("billing.download")}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {invoices.map((invoice) => (
              <Card key={invoice.id} className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-900 mb-1">{invoice.id}</p>
                    <p className="text-sm text-gray-500">{invoice.date}</p>
                  </div>

                  <Badge
                    variant={invoice.status === "paid" ? "success" : "warning"}
                  >
                    {invoice.status === "paid"
                      ? t("billing.paid")
                      : t("billing.pending")}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl text-gray-900">{invoice.amount}</p>

                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                    {t("billing.download")}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Add Payment Modal */}
      <Modal
        isOpen={showAddPaymentModal}
        onClose={() => setShowAddPaymentModal(false)}
        title={t("billing.addPayment")}
        footer={
          <>
            <Button
              variant="outline"
              onClick={() => setShowAddPaymentModal(false)}
            >
              {t("common.cancel")}
            </Button>

            <Button variant="primary" onClick={handleAddPayment}>
              Add Card
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            icon={<CreditCard className="w-5 h-5" />}
          />

          <Input
            label="Cardholder Name"
            placeholder="John Doe"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Expiry Date"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />

            <Input
              label="CVV"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              type="password"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
