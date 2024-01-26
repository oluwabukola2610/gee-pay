import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import profile from "@/assets/logo/profile.png";
import ArrowDown from "@/assets/svg/ArrowDown";
import Logo from "@/assets/svg/Logo";
import { MdOutlineCalendarMonth } from "react-icons/md";
const DashboardNav = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-5 py-3  border-b dark:border-b-gray-800 border-b-gray-100 bg-[#FAFAFA] dark:bg-black text-black dark:text-white">
        <Logo className="md:hidden" />

        <h1 className="text-[20px] font-semibold hidden md:flex">Dashboard</h1>
        <div className="flex space-x-5 items-center ">
          <div className=" hidden lg:flex relative ">
            <span className="absolute inset-y-0 start-0 grid w-10 place-content-center ">
              <CiSearch className="text-gray-400 dark:text-gray-100" />
            </span>
            <input
              type="text"
              placeholder="Search.."
              className="w-full md:w-[320px] text-[16px] rounded-[24px] placeholder:text-gray-400 border-gray-200 border py-3 pe-0  sm:text-sm pl-8 ring-0  bg-transparent dark:bg-black"
            />
          </div>
          <span className="w-full items-center space-x-3 hidden lg:flex">
            <MdOutlineCalendarMonth size={18} className="dark:text-white text-black" />
            <p className="font-medium">November 15, 2023</p>
          </span>
          <div className="hidden lg:flex p-2 items-center border border-gray-200 rounded-full">
            <IoNotificationsOutline
              size={18}
              className="text-black dark:text-white"
            />
          </div>
          <details className="dropdown">
            <summary className="flex px-2 py-1 space-x-3 w-full items-center border border-gray-200 rounded-full ">
              <div className="w-10 rounded-full">
                <Image src={profile} width={100} height={100} alt="profile" />{" "}
              </div>

              <span>
                <p className="text-[16px]">Justin Bergson</p>
                <p className="text-[#787486] text-[14px]">
                  Justin@gmail.com
                </p>{" "}
              </span>
              <ArrowDown />
            </summary>
            <ul className="px-3 py-2 space-y-2 text-sm  shadow flex flex-col   cursor-pointer dark:bg-black  bg-white dropdown-content  z-[10]  rounded-box w-32 mt-2">
              <li className="border-b py-2 font-medium">My Account</li>
              <li>Profile </li>
              <li>Team </li>
              <li>Billing </li>
              <li>Subscription </li>
            </ul>
          </details>
          <label htmlFor="my-drawer-2" className="flex md:hidden  px-3">
            <CgMenuRightAlt
              size="25"
              className="dark:text-gray-400 text-black"
            />
          </label>
        </div>
      </nav>
    </>
  );
};

export default DashboardNav;
