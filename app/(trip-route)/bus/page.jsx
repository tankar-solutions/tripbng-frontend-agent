import Button from "@/components/ui/button";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { airports } from "@/constants/data/airports";
import { dates } from "@/constants/data/date";

export default function Bus() {
  return (
    <div className="bg-white p-8 rounded-xl relative">
      <div className="rounded-xl grid grid-cols-3 mb-6 mt-6">
        <div className="border p-6 rounded-l-xl hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">From</p>
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
          <span className="text-xs text-neutral-400 font-light">India</span>
        </div>
        <div className="border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">To</p>
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
          <span className="text-xs text-neutral-400 font-light">India</span>
        </div>
        <div className="border p-6 rounded-r-xl hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">Travel Date</p>
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
      </div>
      <Button className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300">
        Search Hotels
      </Button>
    </div>
  );
}
