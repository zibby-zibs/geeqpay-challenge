import { ordersOverTime } from "../../../data/time-series";
import { Area, ComposedChart, Line, XAxis } from "recharts";
import { FaArrowTrendUp } from "react-icons/fa6";

const TotalOrder = () => {
  return (
    <main className="bg-white dark:bg-[#282b2b] dark:text-white rounded-[14px] p-4 flex flex-col gap-[8px] border border-border dark:border-gray-700">
      <div className="flex items-center justify-between">
        <figure className="p-2 rounded-full border border-border dark:border-white">
          <img src="/box-tick.png" alt="" className="w-6 h-6 object-contain" />
        </figure>
        <ComposedChart width={104} height={32} data={ordersOverTime}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#66C87B" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="orders" hide={true} />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#66C87B"
            strokeWidth={2}
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#66C87B"
            fill="url(#colorUv)"
          />
        </ComposedChart>
      </div>
      <div>
        <h1 className="text-[18px] text-gray-400">Total Orders</h1>
        <p className="text-[24px] font-semibold">
          {ordersOverTime.reduce((total, data) => total + data.orders, 0)}
        </p>
      </div>
      <div className="text-sm text-[#606060] flex items-center gap-1 whitespace-break-spaces">
        <div className="text-[#34CAA5] bg-[#34CAA5]/10 px-2 py-1 rounded-full flex items-center gap-1 w-fit">
          <div className="">
            <FaArrowTrendUp size={12} />
          </div>
          <p className="text-[12px]">23.5%</p>
        </div>{" "}
        <p className="dark:text-white">VS. previous month</p>
      </div>
    </main>
  );
};

export default TotalOrder;
