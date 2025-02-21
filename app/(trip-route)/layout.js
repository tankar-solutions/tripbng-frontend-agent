"use client";

import { FlightDeals, HolidaySlider, HotelSlider } from "@/components/home";
import Cta from "@/components/home/cta";
import OffersCard from "@/components/home/offers-card";
import Testimonial from "@/components/home/testimonial";
import {
  BusColorIcon,
  BusIcon,
  FlightColorIcon,
  FlightIcon,
  HolidayColorIcon,
  HolidayIcon,
  HotelColorIcon,
  HotelIcon,
  VisaColorIcon,
  VisaIcon,
  YatchIcon,
  YatchlColorIcon,
} from "@/components/icon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const navItems = [
  {
    title: "Home",
    url: "/",
    icon: "/menu/home.png",
    activeIcon: "/menu/homeActive.png",
  },
  {
    title: "Flights",
    url: "/flight",
    icon: "/menu/plane.png",
    activeIcon: "/menu/planeActive.png",
  },
  {
    title: "Hotels",
    url: "/hotel",
    icon: "/menu/hotel.png",
    activeIcon: "/menu/hotelActive.png",
  },
  {
    title: "Buses",
    url: "/bus",
    icon: "/menu/bus.png",
    activeIcon: "/menu/busActive.png",
  },
  {
    title: "Holidays",
    url: "/holiday",
    icon: "/menu/vacation.png",
    activeIcon: "/menu/vacationActive.png",
  },
  {
    title: "Visa",
    url: "/visa",
    icon: "/menu/visa.png",
    activeIcon: "/menu/visaActive.png",
  },
];

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <div className="hero-image bg-gradient-to-r from-blue-500 to-blue-800">
        <div className="pt-28 pb-24">
          <div className="container relative">
           
            <div className="max-w-3xl mx-auto flex items-center gap-10 shadow-xl justify-around bg-white rounded-full shadow-blue-800 py-4 px-10 absolute -top-20 left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => {
                const isActive = pathname === item.url;
                const Icon = isActive ? item.activeIcon : item.icon;

                return (
                  <Link href={item.url} key={item.title}>
                    <button
                      className={`flex items-center flex-col gap-2 text-sm transition-all duration-300 ease-in-out ${
                        isActive ? "text-black" : "text-neutral-500 hover:text-blue-500"
                      }`}
                    >
                      <Image src={Icon} alt="asa" width={35} height={35} />
                      <span
                        className={`${
                          isActive ? "border-b-2 border-blue-500" : ""
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4">
      {children}
      <Cta />
      <OffersCard />
      <FlightDeals />
      <HotelSlider />
      <HolidaySlider />
      <Testimonial />
      </div>
    </>
  );
}
