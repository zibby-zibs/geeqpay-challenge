import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { monthlySales } from "../../../data/monthly-sales";
import { weeklySales } from "../../../data/weekly-sales";
import dayjs from "dayjs";
import { cn } from "../../lib/utils";

interface Sales {
  id: number;
  week?: string;
  month?: string;
  totalSales: number;
}
const ChartCard = () => {
  const [data, setData] = useState<Sales[]>(monthlySales);
  const [weekly, setWeekly] = useState(false);

  const handleOrderTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === "weekly") {
      setData(weeklySales);
      setWeekly(true);
    } else if (value === "monthly") {
      setData(monthlySales);
      setWeekly(false);
    }
  };
  return (
    <main className="relative w-full  border border-border rounded-[0.875rem] bg-white dark:bg-[#282b2b] dark:text-white h-[23.375rem] p-5 max-w-full overflow-x-auto overflow-y-hidden scrollbar-none">
      <article className="sticky top-0 left-0 flex items-center w-full justify-between">
        <h1 className="text-[18px] font-semibold">Sales Trends</h1>
        <div className="flex gap-2 items-center">
          <p>Sort by:</p>
          <select
            name=""
            id=""
            className="p-3 rounded-full border border-border dark:border-white focus:outline-none dark:bg-[#282b2b]"
            onChange={handleOrderTime}
          >
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
      </article>
      <ResponsiveContainer
        height="90%"
        // width={}
        className={cn("!w-[600px] md:!w-full dark:text-white")}
      >
        <BarChart
          data={data}
          barGap={10}
          barSize={20}
          margin={{
            top: 5,

            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34CAA5" stopOpacity={1} />
              <stop offset="100%" stopColor="#34CAA5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey={`${weekly ? "week" : "month"}`}
            tickFormatter={(tickItem) =>
              `${weekly ? tickItem : dayjs(tickItem, "YYYY-MM").format("MMM")}`
            }
            // tick={{ fontSize: 12 }}
            className="text-[10px] lg:text-[12px]"
          />
          <YAxis className="text-[10px] lg:text-[12px] dark:text-white" />
          <Tooltip
            cursor={false}
            contentStyle={{ fontSize: 13, color: "black" }}
          />

          <Bar
            activeBar={{ fill: "#34CAA5" }}
            dataKey="totalSales"
            fill="url(#colorUv)"
            className="text-primary text-sm"
            radius={[50, 50, 0, 0]}
          />
          <LabelList dataKey="totalSales" position="top" />
        </BarChart>
      </ResponsiveContainer>
    </main>
  );
};

export default ChartCard;
