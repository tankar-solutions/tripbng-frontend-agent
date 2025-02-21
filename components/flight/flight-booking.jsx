"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "../ui/button";
import { FlightVector } from "../icons";
import { Clock, MoveRight } from "lucide-react";
import Link from "next/link";

export default function FlightBooking() {
  const steps = ["flight-details", "cancellation", "rescheduling"];
  const [step, setStep] = useState("flight-details");

  const handleNextStep = () => {
    if (step !== steps[steps.length - 1]) {
      setStep(steps[steps.indexOf(step) + 1]);
    }
  };

  const handlePrevStep = () => {
    if (step !== steps[0]) {
      setStep(steps[steps.indexOf(step) - 1]);
    }
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Button>$ 45,000</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center space-x-10 border-b ">
            {steps.map((item) => (
              <div key={item} className="text-center">
                <button
                  className={`text-sm ${
                    step === item ? "text-blue" : "text-neutral-500"
                  }`}
                  onClick={() => setStep(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
                <div
                  className={`w-full h-1 mt-2 ${
                    step === item ? "bg-blue" : "bg-gray-200"
                  } rounded-full`}
                />
              </div>
            ))}
          </div>
        </SheetHeader>
        {step === "flight-details" && (
          <div className="mt-4 border rounded-xl border-dashed p-4 grid grid-cols-2 justify-between items-center gap-10">
            <div>
              <div>
                <div className="flex items-center gap-3">
                  <h4>Rajkot</h4>
                  <MoveRight />
                  <h4>Mumbai</h4>
                </div>
                <p className="text-sm mt-2">
                  <span>wed, 28 Aug</span> *{" "}
                  <span className="text-neutral-400">1h 0m</span>*
                  <span className="text-neutral-400">Economy</span>
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 min-w-fit mt-4">
                <div>
                  <img
                    src="/images/QP.png"
                    alt="Airline Logo"
                    className="w-12 h-12"
                  />
                  <div>
                    <p className="text-base font-semibold">Air India</p>
                    <p className="text-sm text-gray-500">AO 465, AI 164</p>
                    <p className="text-sm text-blue-500 font-medium">Economy</p>
                  </div>
                </div>
                <div className="text-sm flex items-center gap-2 text-green-500 bg-green-500/20 p-1 w-fit rounded-xl">
                  <Clock size={14} />
                  <span>99% On time</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center w-full gap-4 mt-4">
                <div className="text-center">
                  <p className="text-lg font-semibold">07:00</p>
                  <span className="text-sm text-gray-500">AMD</span>
                </div>
                <div className="flex items-center justify-center w-full gap-4 md:px-4">
                  <div className="border-t-2 border-dashed border-gray-400 w-full"></div>
                  <div className="flex flex-col items-center text-center">
                    <FlightVector />
                    <p className="text-xs text-blue-500 whitespace-nowrap">
                      7h 30m * Direct
                    </p>
                  </div>
                  <div className="border-t-2 border-dashed border-gray-400 w-full"></div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold">13:30</p>
                  <p className="text-sm text-gray-500">Phuket</p>
                </div>
              </div>
            </div>
            <div className="text-sm">
              <div className="flex justify-between items-center gap-4">
                <div>
                  <p>Baggage</p>
                  <p>Per Traveller</p>
                </div>
                <div>
                  <p>Cabin</p>
                  <p>7 Kg (1 piece per person)</p>
                </div>
                <div>
                  <p>Check-in</p>
                  <p>15 Kb (1 piece only)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === "cancellation" && (
          <div className="mt-4 border rounded-xl border-dashed p-4">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="text-center">
                <p className="text-sm text-gray-400">$0 Refund</p>
                <p className="text-sm text-gray-400">($2999 + $300)*</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">$0 Refund</p>
                <p className="text-sm text-gray-400">($2999 + $300)*</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 my-4" />
            <div className="grid grid-cols-3 justify-center items-center">
              <div className="text-center">
                <p className="text-sm text-gray-400">Now</p>
                <p className="text-sm text-gray-400">14:31</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Now</p>
                <p className="text-sm text-gray-400">14:31</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Now</p>
                <p className="text-sm text-gray-400">14:31</p>
              </div>
            </div>
            <div className="text-sm space-y-4 mt-10">
              <p>
                *Cancellation charges applicable (Airline fee + tripbookngo fee)
              </p>
              <p>
                Total refund amount applicable for 1 traveller. In case of
                partial cancellation, refund amount will vary.
              </p>
              <p className="text-blue">View Terms & Conditions</p>
            </div>
          </div>
        )}

        {step === "rescheduling" && (
          <div className="mt-4 border rounded-xl border-dashed p-4">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="text-center">
                <p className="text-sm text-gray-400">
                  $4500 + Fare difference Refund
                </p>
                <p className="text-sm text-gray-400">($2999 + $300)*</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">
                  $4500 + Fare difference Refund
                </p>
                <p className="text-sm text-gray-400">($2999 + $300)*</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 my-4" />
            <div className="grid grid-cols-3 justify-center items-center">
              <div className="text-center">
                <p className="text-sm text-gray-400">Now</p>
                <p className="text-sm text-gray-400">14:31</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Now</p>
                <p className="text-sm text-gray-400">14:31</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Now</p>
                <p className="text-sm text-gray-400">14:31</p>
              </div>
            </div>
            <div className="text-sm space-y-4 mt-10">
              <p>
                *Cancellation charges applicable (Airline fee + tripbookngo fee)
              </p>
              <p>
                Total refund amount applicable for 1 traveller. In case of
                partial cancellation, refund amount will vary.
              </p>
              <p className="text-blue">View Terms & Conditions</p>
            </div>
          </div>
        )}

        <div className="absolute bottom-4 flex justify-between w-full border-t-2 pt-2">
          <div className="flex flex-col items-end">
            <p className="text-xl font-bold text-red-600">$40,000</p>
            <p className="text-sm text-gray-400 line-through">$46,000</p>
          </div>
          <Link href={"/flight-search/76347823/checkout"}>
            <Button>BOOK NOW</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
