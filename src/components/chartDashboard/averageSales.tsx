import React from "react";
import { averageSalesOverTime } from "../../../data/time-series";
import { Area, ComposedChart, Line, XAxis } from "recharts";
import { FaArrowTrendUp } from "react-icons/fa6";

const AverageSales = () => {
  const gradientColors = [
    { offset: "5%", color: "#ED544E", opacity: 1 },
    { offset: "95%", color: "#ED544E", opacity: 0.0001 },
  ];

  return (
    <main className="bg-white rounded-[14px] p-4 flex flex-col gap-[8px] border border-border">
      <div className="flex items-center justify-between">
        <figure className="p-2 rounded-full border border-border">
          <img src="/3d-rotate.svg" alt="" className="w-6 h-6 object-contain" />
        </figure>

        <ComposedChart width={104} height={32} data={averageSalesOverTime}>
          <defs>
            <linearGradient
              id="colorUv"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              {gradientColors.map((color, index) => (
                <stop
                  key={index}
                  offset={color.offset}
                  stopColor={color.color}
                  stopOpacity={color.opacity}
                />
              ))}
            </linearGradient>
          </defs>
          <XAxis dataKey="refunds" hide={true} />
          <Line
            type="monotone"
            strokeWidth={2}
            dataKey="averageSales"
            stroke="#ED544E"
            dot={false}
          />

          <Area
            type="monotone"
            dataKey="averageSales"
            stroke="#ED544E"
            fill="url(#colorUv)"
          />
        </ComposedChart>
      </div>
      <div>
        <h1 className="text-[18px] text-gray-400">Average Sales</h1>
        <p className="text-[24px] font-semibold">486</p>
      </div>
      <div className="text-sm text-[#606060] flex items-center gap-1 whitespace-break-spaces">
        <div className="text-[#34CAA5] bg-[#34CAA5]/10 px-2 py-1 rounded-full flex items-center gap-1 w-fit">
          <div className="">
            <FaArrowTrendUp size={12} />
          </div>
          <p className="text-[12px]">23.5%</p>
        </div>{" "}
        <p>VS. previous month</p>
      </div>
    </main>
  );
};

export default AverageSales;