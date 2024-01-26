"use client"
import Dashboard from "@/components/dashboard/Dashboard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import React from "react";
import { ThemeProvider } from "next-themes";

const page = () => {
  return (
    <ThemeProvider attribute="class">
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>{" "}
    </ThemeProvider>
  );
};

export default page;
