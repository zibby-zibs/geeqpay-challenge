import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { monthlySales } from "../../../data/monthly-sales";
import dayjs from "dayjs";

const CustomTooltip = ({ active, payload, label, coordinate }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{ left: `${coordinate.x}px`, top: `${coordinate.y}px` }}
      >
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <div className="arrow" />
      </div>
    );
  }

  return null;
};

const ChartCard = () => {
  const [data, setData] = useState(monthlySales);
  return (
    <main className="w-full border border-border rounded-[0.875rem] bg-white h-[23.375rem] p-5">
      <h1 className="text-[18px]">Sales Trends</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap={10}
          barSize={20}
          margin={{
            top: 5,
            right: 30,
            left: 20,
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
            dataKey="month"
            tickFormatter={(tickItem) =>
              dayjs(tickItem, "YYYY-MM").format("MMM")
            }
          />
          <YAxis />
          <Tooltip cursor={false} />
          <Legend />
          <Bar
            dataKey="totalSales"
            fill="url(#colorUv)"
            className="text-primary"
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </main>
  );
};

export default ChartCard;
