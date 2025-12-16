import Link from "next/link";
import Image from "next/image";

export function Logo({ isRTL }) {
  return (
    <div
      className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
    >
      {/* <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#6ECFFF] to-[#3B82F6] flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-xl">FC</span>
      </div>

      <div className="hidden md:block">
        <h1 className="text-lg font-bold text-gray-900 whitespace-nowrap dark:text-white">
          Front Cloud Solutions
        </h1>
      </div> */}

      <Link href="/landingpage" className="flex items-center gap-1 shrink-0">
        <Image
          src="/logo2.png"
          alt="Front Cloud Logo"
          width={30}
          height={30}
          className="shrink-0 "
          priority
        />

        {/* <img
          src="/logo2.png"
          alt="Front Cloud Logo"
          className="shrink-0 w-8 h-6"
          //  priority
        /> */}

        <div className="flex flex-col leading-tight ">
          <span className="text-[#0A0A0A] text-sm lg:text-base font-semibold dark:text-[#f2f6fa]">
            Front Cloud
          </span>
          {/* <span className="text-[0.70rem] text-[#64748B] text-medium font-normal dark:text-white">
            Creative
          </span> */}
        </div>

        {/*  */}
      </Link>
    </div>
  );
}
