"use client";

import Button from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();
  return (
    <div className="container py-10 flex flex-col gap-4">
      {" "}
      <div className="grid grid-cols-6 bg-white rounded-xl">
        <div className="border rounded-l-xl p-4">
          <p className="text-sm">From</p>
          <p className="text-md font-semibold">Ahmedabad</p>
        </div>
        <div className="border p-4">
          <p className="text-sm">To</p>
          <p className="text-md font-semibold">Phuket</p>
        </div>
        <div className="border p-4">
          <p className="text-sm">Departure</p>
          <p className="text-md font-semibold">Wed, 28 Aug</p>
        </div>
        <div className="border p-4">
          <p className="text-sm">Return</p>
        </div>
        <div className="border p-4">
          <p className="text-sm">Travellers & Class</p>
          <p className="text-md font-semibold">2 Travellers, Economy</p>
        </div>
        <div className="border p-4 rounded-r-xl flex items-center">
          <Button
            onClick={() => {
              router.back();
            }}
          >
            Modify
          </Button>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <p>Home</p>
        <ChevronRight size={14} color="grey" />
        <p>Hyatt Ahmedabad</p>
        <ChevronRight size={14} color="grey" />
        <p>Hotels In Ahmedabad</p>
      </div>
      <div className="bg-white p-4 rounded-xl">
hh
      </div>
    </div>
  );
}
