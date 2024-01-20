"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
type menuProps = {
  title: string;
  icon: any;
  route: string;
};

function MenuItem(props: menuProps) {
  return (
    <Link className="w-full" href={props.route} key={props.title}>
      <div className="flex justify-between w-full items-center rounded-md p-2 cursor-pointer ">
        <h2 className="text-sm grayscale-0">{props.title}</h2>
        <p>{props.icon}</p>
      </div>
    </Link>
  );
}

export default MenuItem;
