"use client";

import Button from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import { HOTEL_LISTS } from "@/constants/data/hotel-data";
import { Filter } from "lucide-react";
import Link from "next/link";
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

  return (
    <div className="container py-10 flex flex-col gap-4">
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
          {/* Flight Details */}
          <div className=" mt-4 flex flex-col gap-4">
            {HOTEL_LISTS.map((el) => (
              <>
                <Link
                  href={`/hotel-search/explore/7897868796gasyudcg78`}
                  className="bg-white p-6 rounded-xl flex justify-between gap-4"
                  key={el.id}
                >
                  <div className="flex gap-2">
                    <img
                      key={el.images[0]}
                      src={el.images[0]}
                      alt="Hotel Image"
                      className="rounded-lg col-span-2 h-[200px] object-cover"
                    />
                    <div className="flex flex-col gap-2">
                      <img
                        key={el.images[1]}
                        src={el.images[1]}
                        alt="Hotel Image"
                        className="rounded-lg h-[100px] object-cover"
                      />
                      <img
                        key={el.images[2]}
                        src={el.images[2]}
                        alt="Hotel Image"
                        className="rounded-lg h-[100px] object-cover relative"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-4">
                      <h4 className="text-lg font-semibold">{el.title}</h4>
                      <p>{el.rating} Star</p>
                    </div>
                    <p className="text-sm text-blue">{el.location}</p>
                    <div>
                      <p className="mb-2">Property Offers</p>
                      <div className="flex gap-4">
                        {el.propertyOffers.map((offer, index) => (
                          <p
                            key={index}
                            className="text-sm text-gray-500 px-2 py-1 rounded-md border"
                          >
                            {offer}
                          </p>
                        ))}
                      </div>
                    </div>
                    <ul>
                      {el.description.map((description, index) => (
                        <li
                          key={index}
                          className="text-sm text-green-500 list-inside list-disc text-sm "
                        >
                          {description}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-l px-4 flex flex-col">
                    <div>
                      <p>Excellent</p>
                      <span>(687 Raatings)</span>
                    </div>
                    <button className="text-sm rounded-md bg-blue text-white px-3 py-2">
                      4.2
                    </button>
                    <button className="text-sm rounded-md bg-blue/10 text-blue px-4 py-1">
                      Offer/Notes
                    </button>
                    <div>
                      <p>Per Night</p>
                      <p>Excluded fees & Taxes</p>
                    </div>
                    <div>
                      <p className="text-yellow text-lg text-semibold">
                        {el.priceRange}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="bg-blue rounded-lg px-4 py-1">
                  <p className="text-sm text-white">
                    Get INR 742 Cashback to Card on payments via credit/debit
                    cards
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
