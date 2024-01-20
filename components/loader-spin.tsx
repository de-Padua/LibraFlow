import React from "react";
import { Button } from "./ui/button";

function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="relative inline-flex">
        <div className="w-8 h-8 bg-slate-900 rounded-full"></div>
        <div className="w-8 h-8 bg-slate-900 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-8 h-8 bg-slate-900 rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
    </div>
  );
}

export default Loader;
