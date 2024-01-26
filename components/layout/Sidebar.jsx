"use client";
import Logo from "@/assets/svg/Logo";
import React from "react";
import { sidebarData } from "./SideBarData";
import Link from "next/link";
import ArrowRight from "@/assets/svg/ArrowRight";
import Setting2 from "@/assets/svg/Setting2";
import Logout from "@/assets/svg/Logout";
import { usePathname } from "next/navigation";
import Sun from "@/assets/svg/Sun";
import Moon from "@/assets/svg/Moon";
import Theme from "./Theme";

const Sidebar = () => {
  const router = usePathname();
  return (
    <div className="drawer-side z-10">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <aside className="flex flex-col  space-y-6 w-[5.4rem] h-screen overflow-hidden shadow-xl bg-[#F7F8FA] border-r border-r-gray-200 dark:border-r-gray-800 py-2 overflow-y-scroll dark:bg-gray-950">
        <div className="mt-4 w-full flex items justify-center">
          <Logo />
        </div>
        <div className="flex flex-col gap-[25px] flex-1">
          {sidebarData.map((data, index) => (
            <Link href={data.key} key={index}>
              <div className="relative flex items-center justify-between">
                <div
                  className={`${
                    router === data.key
                      ? "border-r-[3px] dark:border-r-white border-r-gray-800 h-full w-full flex justify-center"
                      : "flex justify-center h-full w-full"
                  }`}
                >
                  <div className="tooltip tooltip-top z-[1]" data-tip={data.label}>
                    {data.icon}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* <div className="flex justify-center">
            <div className="!bg-white rounded-3xl px-1 py-2 space-y-5 border w-max ">
              <button
                type="button"
                className="block bg-[#34CAA5]  p-2 rounded-full w-max"
              >
                <Sun />{" "}
              </button>
              <button
                type="button"
                className="rounded-full block w-max mx-auto"
              >
                <Moon />
              </button>
            </div>
          </div> */}
          <Theme />
        </div>
        <div className="flex flex-col gap-[25px] py-2 items-center mt-auto ">
          <ArrowRight />
          <Setting2 />
          <Logout />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
