"use client";
import React, { useState } from "react";
import MenuItem from "./menu-item";
import {
  DashboardIcon,
  LayersIcon,
  PersonIcon,
  ClipboardIcon,
  EnvelopeOpenIcon,
  FileTextIcon,
  PieChartIcon,
  GearIcon,
  BellIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";

type index = number;

function Menu() {
  const [currentMenuSelected, setCurrentMenuSelect] = useState<index>(0);
  const menuOptions = [
    { label: "Dashboard", icon: <PieChartIcon />, route: "/dashboard" },
    { label: "Catalog", icon: <LayersIcon />, route: "/dashboard" },

    { label: "Members", icon: <PersonIcon />, route: "/dashboard" },
    { label: "Reservations", icon: <ClipboardIcon />, route: "/dashboard" },
    {
      label: "Fines/Payments",
      icon: (
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-wallet"
        >
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
        </svg>
      ),
      route: "/dashboard",
    },

    { label: "Settings", icon: <GearIcon />, route: "/dashboard" },
    { label: "Notifications", icon: <BellIcon />, route: "/dashboard" },
  ];

  return (
    <div className="w-[300px] h-full border-r flex flex-col justify-between ">
      <div>
        <div className="flex items-start justify-center border-b w-full p-4">
          <h2 className="text-2xl font-semibold">LibraFlow</h2>
          <span className="text-muted-foreground text-xs">v.1.0</span>
        </div>

        <div className="flex flex-col space-y-3 items-start justify-center  w-full p-4">
          {menuOptions.map((item, index) => {
            return (
              <div
                className={
                  currentMenuSelected === index
                    ? " w-full rounded-md bg-slate-100 active:bg-slate-50 "
                    : "w-full  rounded-md active:bg-slate-50  "
                }
                onClick={() => {
                  setCurrentMenuSelect(index);
                }}
              >
                <MenuItem
                  title={item.label}
                  icon={item.icon}
                  route={item.route}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-4 border-t">
        <div>
          <MenuItem title="Log out" icon={<ExitIcon />} route="/" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
