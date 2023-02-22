import React from "react";
import { Cell, PieChart, Pie, Legend, Tooltip } from "recharts";
import { cyanColor, sidebarColor, yellowColor } from "../const";

const dataArray = [
  { name: "Low", value: 10, color: cyanColor },
  { name: "Medium", value: 30, color: yellowColor },
  { name: "High", value: 20, color: "black" },
];

export default function DonutChart2() {
  return (
    <PieChart width={220} height={220}>
      <Pie
        dataKey="value"
        data={dataArray}
        innerRadius={60}
        outerRadius={80}
        startAngle={180}
        cornerRadius={20}
        paddingAngle={-10}
        blendStroke={1}
        endAngle={0}
      >
        {dataArray.map((dataObj) => (
          <Cell fill={dataObj.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
