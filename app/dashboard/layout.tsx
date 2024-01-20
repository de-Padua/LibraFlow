"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Menu from "@/components/menu/menu-main";
import Loader from "@/components/loader-spin";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

function layout({ children }: { children: React.ReactNode }) {
  const route = useRouter()
  useEffect(()=>{
    route.push("/dashboard/home")
  })
  return (
    <>
      <div className="p-2 h-screen  bg-slate-300">
        <div className="h-full w-full flex items-center justify-between  rounded-2xl border  bg-white ">
          <Menu />
          <ScrollArea className="h-full w-full rounded-md  p-5">
            {children}
          </ScrollArea>{" "}
        </div>
      </div>
    </>
  );
}

export default layout;
