"use client";
import React from "react";
import { Column } from "@ant-design/plots";

const DashboardChart = () => {
  const data = [
    {
      type: "Jan",
      sales: 6000,
    },
    {
      type: "Feb",
      sales: 15000,
    },
    {
      type: "Mar",
      sales: 4000,
    },
    {
      type: "Apr",
      sales: 25000,
    },
    {
      type: "Mei",
      sales: 9000,
    },
    {
      type: "Jun",
      sales: 45000,
    },
    {
      type: "July",
      sales: 10000,
    },
    {
      type: "Aug",
      sales: 25000,
    },
    {
      type: "Sep",
      sales: 30000,
    },
    {
      type: "Oct",
      sales: 5000,
    },
    {
      type: "Nov",
      sales: 23000,
    },
    {
      type: "Dec",
      sales: 24000,
    },
  ];

  const config = {
    data,
    xField: "type",
    yField: "sales",
    isStack: true,
    color: ({ type }) =>
      type === "Jun"
        ? "rgba(52, 202, 165, 1), rgba(52, 202, 165, 0)"
        : "#34CAA51A",
    columnWidthRatio: 1,
    xAxis: {
      label: {
        autoHide: false,
        autoRotate: false,
      },
    },
    yAxis: {
      label: {
        position: "top",
        formatter: (val) => `${Number(val).toLocaleString()}`,
      },
    },
    interactions: [
      {
        type: "active-region",
        enable: false,
      },
    ],
    tooltip: false,
    minColumnWidth: 30,
    maxColumnWidth: 30,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
    label: {
      position: "top",
      offsetY: 8,
      formatter: ({ type, sales }) =>
        type === "Jun" ? `$${sales.toLocaleString()}` : null,
    },
  };

  return <Column {...config} className="h-[350px] " />;
};

export default DashboardChart;
