import React from "react";
import DashboardChart from "./DashboardChart";
import GreenChart from "@/assets/svg/GreenChart";
import GreenArrow from "@/assets/svg/GreenArrow";
import BoxChart from "@/assets/svg/BoxChart";
import RefundBox from "@/assets/svg/RefundBox";
import RedChart from "@/assets/svg/RedChart";
import RedArrow from "@/assets/svg/RedArrow";
import SalesBox from "@/assets/svg/SalesBox";
import IncomeIcon from "@/assets/svg/IncomeIcon";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
  return (
    <section className="max-w-[1640px] flex flex-col p-2 md:p-4  md:h-screen overflow-y-scroll">
      <div className="grid lg:grid-cols-[720px_1fr] grid-cols-1 gap-[30px] w-full h-fit p-3">
        <div className="border border-gray-100 p-4 rounded-[20px]  flex flex-col space-y-2 bg-white dark:bg-black/40 dark:border-gray-900">
          <div className="flex  justify-between items-center pb-2">
            <p className="text-[18px] font-semibold">Sales Trends</p>
            <div className="flex items-center space-x-2">
              <p className="text-[14px] font-medium text-[3A3F51]">Sort by:</p>
              <select className="select text-[#3A3F51]  w-fit h-[2em] !border !border-gray-300 !min-h-[1rem] rounded-[20px]">
                <option selected>Weekly </option>
                <option>Montly</option>
                <option>Yearly</option>
              </select>
            </div>{" "}
          </div>
          <DashboardChart />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[9px] h-full">
          <section className="px-3 py-4 h-fit w-full border border-gray-100 rounded-[14px] space-y-4 bg-white dark:bg-black/40 dark:border-gray-900">
            <div className="flex items-center justify-between">
              <span className=" flex p-2 items-center border border-gray-200 rounded-full">
                <BoxChart />
              </span>
              <GreenChart />
            </div>{" "}
            <p className="text-[18px] dark:text-gray-400 text-[#898989] font-medium">
              Total Order
            </p>
            <p className="text-[24px] font-semibold dark:text-white text-[#3A3F51]">350 </p>
            <div className="flex justify-between items-center">
              <span className="flex items-center px-2 py-1 bg-[#E7F9F4] text-[#34CAA5] rounded-2xl text-xs space-x-1">
                <GreenArrow />
                <p>23.5%</p>
              </span>
              <p className="text-sm text-[#606060] dark:text-gray-200">vs. previous month</p>
            </div>
          </section>

          <section className="px-3 py-4 h-fit w-full border border-gray-100 rounded-[14px] space-y-4 bg-white dark:bg-black/40 dark:border-gray-900">
            <div className="flex items-center justify-between">
              <span className="flex p-2 items-center border border-gray-200 rounded-full">
                <RefundBox />
              </span>
              <RedChart />
            </div>{" "}
            <p className="text-[18px] dark:text-gray-400 text-[#898989] font-medium">
              Total Refund{" "}
            </p>
            <p className="text-[24px] font-semibold dark:text-white text-[#3A3F51]">270 </p>
            <div className="flex justify-between items-center">
              <span className="flex items-center px-2 py-1 bg-[#FDEAEA] text-[#ED544E] rounded-2xl text-xs space-x-1">
                <RedArrow />
                <p>23.5%</p>
              </span>
              <p className="text-sm text-[#606060] dark:text-gray-200">vs. previous month</p>
            </div>
          </section>
          <section className="px-3 py-4 h-fit w-full border border-gray-100 rounded-[14px] space-y-4 bg-white dark:bg-black/40 dark:border-gray-900">
            <div className="flex items-center justify-between">
              <span className="flex p-2 items-center border border-gray-200 rounded-full">
                <SalesBox />
              </span>
              <RedChart />
            </div>{" "}
            <p className="text-[18px] dark:text-gray-400 text-[#898989] font-medium">
              Average Sales{" "}
            </p>
            <p className="text-[24px] font-semibold dark:text-white text-[#3A3F51]">1567 </p>
            <div className="flex justify-between items-center">
              <span className="flex items-center px-2 py-1 bg-[#FDEAEA] text-[#ED544E] rounded-2xl text-xs space-x-1">
                <RedArrow />
                <p>23.5%</p>
              </span>
              <p className="text-sm text-[#606060] dark:text-gray-200">vs. previous month</p>
            </div>
          </section>
          <section className="px-3 py-4 h-fit w-full border border-gray-100 rounded-[14px] space-y-4 bg-white dark:bg-black/40 dark:border-gray-900">
            <div className="flex items-center justify-between">
              <span className="flex p-2 items-center border border-gray-200 rounded-full">
                <IncomeIcon />
              </span>
              <GreenChart />
            </div>{" "}
            <p className="text-[18px] dark:text-gray-400 text-[#898989] font-medium">
              Total Income{" "}
            </p>
            <p className="text-[24px] font-semibold dark:text-white text-[#3A3F51]">
              $350.000{" "}
            </p>
            <div className="flex justify-between items-center">
              <span className="flex items-center px-2 py-1 bg-[#E7F9F4] text-[#34CAA5] rounded-2xl text-xs space-x-1">
                <GreenArrow />
                <p>23.5%</p>
              </span>
              <p className="text-sm text-[#606060] dark:text-gray-200">vs. previous month</p>
            </div>
          </section>
        </div>
      </div>
      <div className="grid lg:grid-cols-[720px_1fr] grid-cols-1 gap-[30px] w-full h-fit p-3 mt-4">
        <div className="relative overflow-x-auto  sm:rounded-lg w-full">
          <DashboardTable />
        </div>
        <div className="flex flex-col gap-[20px] w-full p-4 bg-white dark:bg-black/40 border border-gray-100 dark:border-gray-900 rounded-[20px]">
          <span className="flex items-center justify-between">
            <p className="text-[18px] font-semibold">Top Platform</p>
            <p className="text-[#34CAA5] text-[18px] font-medium">See All</p>
          </span>
          <div className="space-y-3 flex flex-col">
            <p className="text-[18px] font-semibold">Book Bazaar</p>
            <div class="w-full bg-gray-200 rounded-full h-2.5 ">
              <div
                class="bg-[#6160DC] h-2.5 rounded-full "
                style={{ width: "55%" }}
              ></div>
            </div>
            <span className="flex items-center justify-between">
            <p className="text-[18px] dark:text-gray-300 text-[#525252]"> $2,500,000</p>
              <p className="text-[18px] dark:text-gray-300 text-[#525252]">+15%</p>
            </span>
          </div>
          <div className="space-y-3 flex flex-col">
            <p className="text-[18px] font-semibold">Artisan Aisle</p>
            <div class="w-full bg-gray-200 rounded-full h-2.5 ">
              <div
                class="bg-[#54C5EB] h-2.5 rounded-full "
                style={{ width: "45%" }}
              ></div>
            </div>
            <span className="flex items-center justify-between">
            <p className="text-[18px] dark:text-gray-300 text-[#525252]"> $1,800,000</p>
            <p className="text-[18px] dark:text-gray-300 text-[#525252]">+10%%</p>
            </span>
          </div>
          <div className="space-y-3 flex flex-col">
            <p className="text-[18px] font-semibold">Toy Troop</p>
            <div class="w-full bg-gray-200 rounded-full h-2.5 ">
              <div
                class="bg-[#FFB74A] h-2.5 rounded-full "
                style={{ width: "37%" }}
              ></div>
            </div>
            <span className="flex items-center justify-between">
            <p className="text-[18px] dark:text-gray-300 text-[#525252]"> $1,200,000</p>
            <p className="text-[18px] dark:text-gray-300 text-[#525252]">+8%</p>
            </span>
          </div>
          <p className="text-[18px] font-semibold">XStore</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
