import Image from "next/image";
import img1 from "@/assets/logo/frame.png";
import img from "@/assets/logo/frame1.png";
import img2 from "@/assets/logo/fram2.png";
import { LuFileDown } from "react-icons/lu";
export const Data = [
  {
    name: "Marcus Bergson",
    image: img1,
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
  },
  {
    name: "Jaydon Vaccaro",
    image: img,
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
  },
  {
    name: "Corey Schleifer",
    image: img2,
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
  },
  {
    name: "Cooper Press",
    image: img,
    date: "Nov 16, 2023",
    amount: "$100,000",
    status: "Refund",
  },
  {
    name: "Phillip Lubin ",
    image: img,
    date: "Nov 13, 2023",
    amount: "$150,000",
    status: "Paid",
  },
];
const DashboardTable = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "text-[#34CAA5]";
      case "Refund":
        return "text-[#ED544E]";
      default:
        return "";
    }
  };

  return (
    <div className="w-full flex flex-col space-y-4 border border-gray-100 dark:border-gray-900 px-3 py-5 dark:bg-black/40 bg-white rounded-[20px]">
      <span className="flex justify-between items-center px-3">
        <p className="text-[18px] font-semibold">Last Orders</p>
        <p className="text-[#34CAA5] text-[18px] font-medium">See All</p>
      </span>
      <div className="overflow-x-auto w-full">
        <table className="table w-[600px] md:w-full">
          <thead>
            <tr className="text-[14px] text-[#9CA4AB] !font-thin">
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody className="">
            {Data.map((item, index) => (
              <tr key={index} className="my-2">
                <td>
                  <div className="flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <p className="text-[#3A3F51] dark:text-gray-300 font-medium text-[16px]">
                      {item.name}
                    </p>
                  </div>
                </td>
                <td className="text-[16px] text-[#9CA4AB] ">{item.date}</td>
                <td className=" text-[#3A3F51] dark:text-gray-300  font-medium text-[16px]">
                  {item.amount}
                </td>
                <td className={getStatusColor(item.status)}>{item.status}</td>
                <td>
                  <span className="flex items-center space-x-1">
                    <LuFileDown className="dark:text-white/60 text-black" />
                    <p>view</p>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
