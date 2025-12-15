import React from "react";
import { Bell } from "lucide-react";
import {
  Popover,
  PopoverItem,
  PopoverDivider,
} from "../../../components/ui/Popover";

export function NotificationMenu({
  count,
  newNotification,
  subscriptionExpiring,
  payment,
  paymentProcessed,
}) {
  return (
    <Popover
      trigger={
        <div className="relative">
          <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all  dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
            <Bell className="w-5 h-5" />
          </button>

          {count > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {count}
            </span>
          )}
        </div>
      }
    >
      <PopoverItem>
        <div className="py-2">
          <p className="font-medium text-gray-900 dark:text-white">{newNotification}</p>
          <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">{subscriptionExpiring}</p>
        </div>
      </PopoverItem>

      <PopoverDivider />

      <PopoverItem>
        <div className="py-2">
          <p className="font-medium text-gray-900 dark:text-white">{payment}</p>
          <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">{paymentProcessed}</p>
        </div>
      </PopoverItem>
    </Popover>
  );
}
