"use client";
import LoadingPage from "@/components/loader-spin";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const route = useRouter();
  useEffect(() => {
    route.push("/singin");
  }, []);

  return (
    <>
      <div>
        <LoadingPage />
      </div>
    </>
  );
}
