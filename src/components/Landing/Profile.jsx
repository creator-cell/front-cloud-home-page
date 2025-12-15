"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Shield,
  Monitor,
  Smartphone,
  MapPin,
} from "lucide-react";

import { useLanguage } from "../../contexts/LanguageContext";
import  Card  from "../ui/Card";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Dropdown } from "../ui/Dropdown";
import { Toggle } from "../ui/Toggle";
import { Badge } from "../ui/Badge";

const timezones = [
  { value: "utc", label: "UTC" },
  { value: "est", label: "Eastern Time (EST)" },
  { value: "pst", label: "Pacific Time (PST)" },
  { value: "gmt", label: "GMT" },
  { value: "ist", label: "India Standard Time (IST)" },
];

const activeSessions = [
  {
    id: 1,
    device: "Desktop",
    browser: "Chrome on macOS",
    location: "New York, USA",
    lastActive: "2 minutes ago",
    current: true,
  },
  {
    id: 2,
    device: "Mobile",
    browser: "Safari on iOS",
    location: "New York, USA",
    lastActive: "3 hours ago",
    current: false,
  },
];

export default function Profile() {
  const { t, language } = useLanguage();

  const [name, setName] = useState(language === "en" ? "John Doe" : "جون دو");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [timezone, setTimezone] = useState("est");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2 font-bold text-[32px] dark:text-white">{t("profile.title")}</h1>
          <p className="text-gray-600 text-base font-normal dark:text-gray-400">{t("profile.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-[#6ECFFF] to-[#3B82F6] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">JD</span>
                </div>
                <h3 className="text-gray-900 mb-1 text-2xl font-semibold dark:text-white">{name}</h3>
                <p className="text-sm text-gray-500">{email}</p>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-xl dark:bg-gray-900">
                  <p className="text-sm text-gray-500 mb-1 dark:text-gray-400 ">Member Since</p>
                  <p className="text-gray-900 text-base font-normal dark:text-white">January 2024</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl dark:bg-gray-900">
                  <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">Account Type</p>
                  <Badge variant="info">Premium</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Info */}
            <Card className="p-6">
              <h3 className="text-gray-900 mb-6 text-2xl font-semibold dark:text-white">{t("profile.info")}</h3>

              <div className="space-y-4">
                <Input
                  label={t("profile.name")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  icon={<User className="w-5 h-5" />}
                />

                <Input
                  label={t("profile.email")}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<Mail className="w-5 h-5" />}
                />

                <Input
                  label={t("profile.phone")}
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  icon={<Phone className="w-5 h-5" />}
                />

                <Dropdown
                  label={t("profile.timezone")}
                  value={timezone}
                  options={timezones}
                  onChange={setTimezone}
                />

                <div className="pt-4">
                  <Button variant="primary" size="md">
                    {t("profile.save")}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Security */}
            <Card className="p-6">
              <h3 className="text-gray-900 mb-6 text-2xl font-semibold dark:text-white">{t("profile.security")}</h3>

              <div className="space-y-6">
                {/* Password */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl dark:bg-gray-900">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#6ECFFF]/10 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-[#6ECFFF]" />
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1 dark:text-white">
                        {t("profile.changePassword")}
                      </p>
                      <p className="text-sm text-gray-500">
                        Last changed 3 months ago
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {t("common.edit")}
                  </Button>
                </div>

                {/* Two Factor Auth */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl dark:bg-gray-900">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1 dark:text-white">{t("profile.2fa")}</p>
                      <p className="text-sm text-gray-500">
                        Extra layer of security
                      </p>
                    </div>
                  </div>
                  <Toggle
                    checked={twoFactorEnabled}
                    onChange={setTwoFactorEnabled}
                  />
                </div>
              </div>
            </Card>

            {/* Active Sessions */}
            <Card className="p-6">
              <h3 className="text-gray-900 mb-6 text-2xl font-semibold dark:text-white">{t("profile.sessions")}</h3>

              <div className="space-y-4">
                {activeSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-start justify-between p-4 bg-gray-50 rounded-xl dark:bg-gray-900"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                        {session.device === "Desktop" ? (
                          <Monitor className="w-5 h-5 text-[#3B82F6]" />
                        ) : (
                          <Smartphone className="w-5 h-5 text-[#3B82F6]" />
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-gray-900 dark:text-white">{session.browser}</p>
                          {session.current && (
                            <Badge variant="success">Current</Badge>
                          )}
                        </div>

                        <p className="text-sm text-gray-500 mb-1">
                          <MapPin className="w-3 h-3 inline mr-1" />
                          {session.location}
                        </p>

                        <p className="text-sm text-gray-400">
                          {session.lastActive}
                        </p>
                      </div>
                    </div>

                    {!session.current && (
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
