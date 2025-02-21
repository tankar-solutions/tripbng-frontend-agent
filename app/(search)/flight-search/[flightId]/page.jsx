"use client";

import FlightBooking from "@/components/flight/flight-booking";
import { FlightVector } from "@/components/icons";
import Button from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import { Filter } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const datePrice = [
  { id: "Sun, 25 Aug", price: "$125" },
  { id: "Mon, 26 Aug", price: "$150" },
  { id: "Tue, 27 Aug", price: "$175" },
  { id: "Wed, 28 Aug", price: "$200" },
  { id: "Thu, 29 Aug", price: "$225" },
  { id: "Fri, 30 Aug", price: "$250" },
  { id: "Sat, 31 Aug", price: "$300" },
];

export default function Page() {
  const router = useRouter();
  const [selectedTripType, setSelectedTripType] = useState("One Way");
  const [selectedFareType, setSelectedFareType] = useState("Regular");
  const [viewPriceSection, setViewPriceSection] = useState(false);

  function handleViewPriceSection() {
    setViewPriceSection(!viewPriceSection);
  }

  const tripTypes = ["One Way", "Round Trip", "Multiple City"];

  return (
    <div className="container py-10 flex flex-col gap-4">
      {/* Trip Type Selection */}
      <div className="flex items-center gap-4 bg-white rounded-xl p-4">
        {tripTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedTripType(type)}
            className={`text-xs flex items-center gap-2 rounded-full p-2 ${
              selectedTripType === type ? "bg-yellow/10" : ""
            }`}
          >
            <span
              className={`block w-4 h-4 rounded-full ${
                selectedTripType === type ? "bg-yellow" : "bg-white"
              }`}
            ></span>
            <p>{type}</p>
          </button>
        ))}
      </div>

      {/* Flight Search Details */}
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

      {/* Fare Type Selection */}
      <div className="bg-white rounded-xl p-4">
        <p className="text-xs">Special Fares (Optional):</p>
        <button
          onClick={() => setSelectedFareType("Regular")}
          className={`text-xs flex items-center gap-2 rounded-full p-2 mt-2 ${
            selectedFareType === "Regular" ? "bg-yellow/10" : ""
          }`}
        >
          <p>Regular</p>
        </button>
        {/* Add more fare types if needed */}
      </div>

      {/* Filters and Results */}
      <div className="flex gap-4">
        {/* Filters Section */}
        <div className="bg-white rounded-xl p-4 w-1/6">
          <div className="flex justify-between items-center">
            <Filter />
            <p className="text-sm cursor-pointer text-blue-600">Clear All</p>
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold">Stops</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm">Non-Stop</p>
              <Checkbox />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm">1-Stop</p>
              <Checkbox />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold">Flight Price</p>
            <div className="flex justify-between items-center mt-2">
              <input
                type="text"
                placeholder="Min"
                className="border rounded-md p-2 w-full"
              />
            </div>
          </div>
        </div>

        {/* Flight Options Section */}
        <div className=" rounded-xl overflow-y-auto p-4 flex-1">
          <div className="flex gap-1 bg-white">
            {datePrice.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center px-4 py-1 border rounded-md text-xs flex-col"
              >
                <p className="text-neutral-400">{item.id}</p>
                <p className="">{item.price}</p>
              </div>
            ))}
          </div>

          {/* Flight Details */}
          <div className="bg-white p-6 rounded-xl shadow mt-4 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
              {/* Airline Logo and Information */}
              <div className="flex items-center gap-4 min-w-fit">
                <img
                  src="/images/QP.png"
                  alt="Airline Logo"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                <div>
                  <p className="text-base font-semibold">Air India</p>
                  <p className="text-sm text-gray-500">AO 465, AI 164</p>
                  <p className="text-sm text-blue-500 font-medium">Economy</p>
                  <p className="text-sm text-green-600">51 Seat(s) available</p>
                </div>
              </div>

              {/* Flight Timing and Route */}
              <div className="flex flex-col md:flex-row items-center w-full gap-4">
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

              <div className="flex flex-col items-end">
                <p className="text-xl font-bold text-red-600">$40,000</p>
                <p className="text-sm text-gray-400 line-through">$46,000</p>
              </div>
            </div>
            <div className="border" />
            <div className="flex items-center  justify-between">
              <div className="flex items-center gap-3">
                <h3>Facilities:</h3>
                <button className="text-xs border rounded-md px-4 py-1">
                  Facility 1
                </button>
                <button className="text-xs border rounded-md px-4 py-1">
                  Facility 2
                </button>
              </div>
              <div className="space-x-4">
                <Button>Flight Details</Button>
                <Button onClick={handleViewPriceSection}>
                  {viewPriceSection ? "Hide Price" : "View Price"}
                </Button>
              </div>
            </div>
            {viewPriceSection && (
              <table className="min-w-full bg-white">
                <thead className="border-b bg-gray-100">
                  <tr>
                    {[
                      "Fares",
                      "Cabin Bag",
                      "Check-In",
                      "Cancellation",
                      "Date Change",
                      "Seat",
                      "Meal",
                      "",
                    ].map((header) => (
                      <th
                        key={header}
                        className="text-xs font-medium text-neutral-700 uppercase px-6 py-3 text-left whitespace-nowrap"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...Array(2)].map((_, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600 font-semibold">
                          Xpress Value
                        </p>
                        <p className="text-xs text-gray-500">
                          Fare offered by airline
                        </p>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        7 Kgs / Adult
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        7 Kgs / Adult
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Free Date change allowed up to 2 hrs before departure
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Date Change fee starting ₹ 3,000
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Chargeable
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Chargeable
                      </td>
                      <td className="px-6 py-4">
                        <FlightBooking />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
