import React from "react";
import Menu from "@/components/menu/menu-main";
import Dashboard from "@/components/dashboard/dashboard-main";

function page() {
  return (
    <div className="p-2 h-screen bg-slate-300">
      <div className="h-full w-full flex items-center justify-between  rounded-2xl border bg-white ">
        <Menu />
        <Dashboard />
      </div>
    </div>
  );
}

export default page;
