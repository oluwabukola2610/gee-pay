import Analytics from "@/assets/svg/Analytics";
import Box from "@/assets/svg/Box";
import Circle from "@/assets/svg/Circle";
import { BiSolidDashboard } from "react-icons/bi";import People from "@/assets/svg/People";
import Settings from "@/assets/svg/Settings";

export const sidebarData = [
  {
    icon: <BiSolidDashboard  className="text-black/60 dark:text-white/50" size={23} />,
    key: "/",
    label:"Dashboard"
  },
  {
    icon: <Analytics className=" font-bold text-[#7C8493]" />,
    key: "/a",
    label:"Trends"

  },

  {
    icon: <People className=" font-bold text-[#7C8493]" />,
    key: "/b",
    label:"Customers"

  },

  {
    icon: <Box className=" font-bold text-[#7C8493]" />,
    key: "/c",
    label:"Product"

  },
  {
    icon: <Settings className=" font-bold text-[#7C8493]" />,
    key: "/D",
    label:"Discounts"

  },
  {
    icon: <Circle className=" font-bold text-[#7C8493]" />,
    key: "/e",
    label:"Info"

  },
];
