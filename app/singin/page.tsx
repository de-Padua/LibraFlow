"use client";
import React from "react";
import Login from "@/components/login-form/form";

function page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="lg:w-1/3 w-full flex items-center justify-center h-full flex-col space-y-4 ">
        <div className="w-full">
          <h2 className="text-2xl font-semibold">LibraFlow</h2>
          <p className="text-muted-foreground">Library book manager</p>
        </div>
        <Login />
        <div>
          <p className="text-xs text-muted-foreground">
            Copyright © 2024 MIT by Antônio de Pádua design by Antônio de pádua
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
