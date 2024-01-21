import React from "react";
import {
  AvatarIcon,
  BookmarkIcon,
  CaretDownIcon,
  CaretUpIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import DashboardCard from "./dasboard-cards";

function Dashboard() {

 
  const data = [
    {
      title:'Books in the catalog',
      description:'',
      icon: <ChevronUpIcon />,
      value:1229,
      path:"/dasboard/catalog"
    }
  ]


  return (
    <div className="w-full h-full flex flex-col  justify-center items-center px-5 py-10 ">
      <div className="w-full">
        <h2 className="text-3xl font-bold ">Dashboard</h2>
      </div>
      <div className="w-full">
        <h2 className="text-sm text-muted-foreground">Menu rápido</h2>
      </div>

      <div className="w-full grid grid-cols-4 my-10 space-x-3">
  
    {data.map(item =>{
      return  <DashboardCard title={item.title} icon={item.icon} value={item.value} link={item.path} />
    })}



      </div>
    </div>
  );
}

export default Dashboard;
