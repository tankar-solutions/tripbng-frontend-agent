"use client";
import Button from "@/components/ui/button";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { airports } from "@/constants/data/airports";
import { dates } from "@/constants/data/date";
import { PRICE_RANGE, ROOMS_GUEST } from "@/constants/data/hotel-data";
import { useRouter } from "next/navigation";

export default function Hotel() {
  const router = useRouter();
  function handleSearch() {
    router.push(`/hotel-search/7897868796gasyudcg78`);
  }
  return (
    <div className="bg-white p-8 rounded-xl relative">
      <div className="rounded-xl grid grid-cols-5 mb-6">
        <div className="border p-6 rounded-l-xl">
          <p className="text-xs text-neutral-400">
            City, Property name or Location
          </p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              {airports.map((airport) => (
                <SelectItem key={airport.city} value={airport.iataCode}>
                  {airport.city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">Check-In</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a date" />
            </SelectTrigger>
            <SelectContent>
              {dates.map((airport) => (
                <SelectItem key={airport.id} value={airport.day}>
                  <h3 className="text-xl font-bold mt-3">
                    {airport.date}{" "}
                    <span className="text-sm">SEP&apos;{airport.day}</span>
                  </h3>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">Check-Out</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a date" />
            </SelectTrigger>
            <SelectContent>
              {dates.map((airport) => (
                <SelectItem key={airport.id} value={airport.day}>
                  <h3 className="text-xl font-bold mt-3">
                    {airport.date}{" "}
                    <span className="text-sm">SEP&apos;{airport.day}</span>
                  </h3>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">Rooms & Guests</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a date" />
            </SelectTrigger>
            <SelectContent>
              {ROOMS_GUEST.map((airport) => (
                <SelectItem key={airport.id} value={airport.name}>
                  <h3 className="text-xl font-bold mt-3">
                    <span className="text-sm">{airport.name}</span>
                  </h3>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-xs text-neutral-400 font-light">
            Economy / Premium Economy
          </span>
        </div>
        <div className="border p-6 rounded-r-xl hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">Price range per night</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a date" />
            </SelectTrigger>
            <SelectContent>
              {PRICE_RANGE.map((airport) => (
                <SelectItem key={airport.id} value={airport.name}>
                  <h3 className="text-xl font-bold mt-3">
                    <span className="text-sm">{airport.name}</span>
                  </h3>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-xs text-neutral-400 font-light">
            Economy / Premium Economy
          </span>
        </div>
      </div>

      <Button
        onClick={handleSearch}
        size="lg"
        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300"
      >
        Search
      </Button>
    </div>
  );
}
