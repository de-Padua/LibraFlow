"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function layout({ children }: { children: React.ReactNode }) {
  const route = useRouter();

  useEffect(() => {
    route.push("/dashboard/home");
  }, []);

  return <div>{children}</div>;
}

export default layout;
