import React from "react";
import { Cell, PieChart, Pie, Legend, Tooltip } from "recharts";
import { cyanColor, sidebarColor, yellowColor } from "../const";

const dataArray = [
  { name: "Sell", value: 11, color: sidebarColor },
  { name: "Buy", value: 20, color: yellowColor },
  { name: "Recurring", value: 30, color: cyanColor },
];

export default function DonutChart() {
  return (
    <PieChart width={220} height={220} padd>
      <Pie
        dataKey="value"
        data={dataArray}
        innerRadius={60}
        outerRadius={80}
        cornerRadius={40}
        startAngle={180}
        endAngle={0}
        blendStroke={1}
        paddingAngle={-10}
      >
        {dataArray.map((dataObj) => (
          <Cell fill={dataObj.color}  />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
