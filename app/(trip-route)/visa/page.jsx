import Button from "@/components/ui/button";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { country } from "@/constants/data/country";
import { dates } from "@/constants/data/date";
import { VISA_TYPE } from "@/constants/data/visa-data";

export default function Bus() {
  return (
    <div className="bg-white p-8 rounded-xl relative">
      <div className="rounded-xl grid grid-cols-5 mb-6 mt-6">
        <div className="border p-6 rounded-l-xl hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">For</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {country.map((airport) => (
                <SelectItem key={airport.name} value={airport.name}>
                  {airport.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
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
        <div className="border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">Visa type</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a visa type" />
            </SelectTrigger>
            <SelectContent>
              {VISA_TYPE.map((airport) => (
                <SelectItem key={airport.label} value={airport.label}>
                  <span className="text-sm">{airport.label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">Staying Days</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a staying days" />
            </SelectTrigger>
            <SelectContent>
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map((airport) => (
                <SelectItem key={airport} value={airport}>
                  <span className="text-sm">{airport} days</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="border p-6 rounded-r-xl hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">Travellers</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a travellers" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((airport) => (
                <SelectItem key={airport} value={airport}>
                  <span className="text-sm">{airport} Travellers</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300">
        Search
      </Button>
    </div>
  );
}
