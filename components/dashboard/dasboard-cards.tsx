import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  icon?: any;
  value: number;
  link: string;
}

function DashboardCard({ title, description, icon, value, link }: CardProps) {
  return (
    <Card className="shadow-none  h-fit rounded-sm">
      <CardHeader>
        <CardTitle className="w-full justify-between flex items-center">
          {title} {icon}
        </CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : ""}
      </CardHeader>
      <CardContent className="h-full">
        <div className="flex items-center justify-between space-x-2 h-full">
          <div className="flex items-center justify-between w-full space-x-2 text-4xl line-clamp-1 h-full relative 	">
            <p className="w-full ">{new Intl.NumberFormat().format(value)}</p>
          </div>
          <Link href={link}>
            <Button size={"sm"} variant={"default"} className="justify-end">
              Ver mais
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;
