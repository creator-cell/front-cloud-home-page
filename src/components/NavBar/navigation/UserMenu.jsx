import React from "react";
import { User, Settings, CreditCard, LogOut } from "lucide-react";
import { Popover, PopoverItem, PopoverDivider } from "../../ui/Popover";
import { useRouter } from "next/navigation";

export function UserMenu({ onNavigate, labels }) {
   const router = useRouter();
  return (
    <Popover
      trigger={
        <button className="flex items-center gap-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white ">
          <div className="p-1 rounded-full bg-linear-to-br from-[#6ECFFF] to-[#3B82F6] flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </button>
      }
    >
      <PopoverItem icon={<User className="w-4 h-4" />} onClick={() => onNavigate("profile")}>
        {labels.profile}
      </PopoverItem>

      <PopoverItem icon={<Settings className="w-4 h-4" />}>
        {labels.settings}
      </PopoverItem>

      <PopoverItem icon={<CreditCard className="w-4 h-4" />} onClick={() => onNavigate("billing")}>
        {labels.billing}
      </PopoverItem>

      <PopoverDivider />

      <PopoverItem icon={<LogOut className="w-4 h-4" />} onClick={()=>router.push("/")}>
        {labels.logout}
      </PopoverItem>
    </Popover>
  );
}
