import { FlightVector } from "@/components/icons";
import { Input } from "@/components/ui";
import Checkbox from "@/components/ui/checkbox";
import { Clock, MoveRight } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="container grid grid-cols-[70%_30%] gap-4">
      <div>
        <div className="mt-4 border rounded-xl border-dashed p-4 grid grid-cols-2 justify-between items-center gap-10 bg-white">
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
        <div className="bg-white mt-4 p-4 rounded-xl border-dashed border">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">Refund on Cancellation</h4>
            <h4 className="text-yellow">Cancellation & Rescheduling Policy</h4>
          </div>
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
            <div className="w-full bg-blue rounded-full h-2.5 my-4" />
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
          </div>
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
            <div className="w-full bg-blue rounded-full h-2.5 my-4" />
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
          </div>
        </div>
        <div className="bg-white mt-4 p-4 rounded-xl border-dashed border">
          <div>
            <h4 className="text-sm font-semibold">
              Travellers Details 0/2 Added
            </h4>
            <p className="text-sm text-neutral-400">
              Choose from the saved list or add a new passenger
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center rounded-xl bg-secondary p-2 text-sm">
              <h2>Adult 1</h2>
              <p>Move</p>
            </div>
            <div className="flex justify-between items-center rounded-xl bg-secondary p-2 text-sm">
              <h2>Adult 2</h2>
              <p>Move</p>
            </div>
          </div>
        </div>
        <div className="bg-white mt-4 p-4 rounded-xl border-dashed border">
          <div>
            <h4 className="text-sm font-semibold">Contact Details</h4>
            <p className="text-sm text-neutral-400">
              Your ticket & flight information will be sent here
            </p>
          </div>
          <div className="grid grid-cols-3 justify-between gap-6 mt-4">
            <Input placeholder="IND (+91)" />
            <Input placeholder="Mobile Number" />
            <Input placeholder="Email" />
          </div>
        </div>
        <div className="bg-white mt-4 p-4 rounded-xl border-dashed border">
          <div>
            <h4 className="text-sm font-semibold">GST Details</h4>
            <p className="text-sm text-neutral-400">
              To claim for the GST charrged by airlines, please enter your GST
              details
            </p>
          </div>
          <div className="grid grid-cols-3 justify-between gap-6 mt-4">
            <Input placeholder="GST" />
            <Input placeholder="Company Name" />
            <Input placeholder="Address" />
            <Input placeholder="Pincode" />
            <Input placeholder="City" />
            <Input placeholder="State" />
          </div>
        </div>
        <div className="bg-white mt-4 p-4 rounded-xl border-dashed border">
          <div>
            <h4 className="text-sm font-semibold">Billing Address</h4>{" "}
            <p className="text-sm text-neutral-400">
              As per the latest govt regulations it.s mandatory to provide your
              address
            </p>
          </div>
          <div className="grid grid-cols-2 justify-between gap-6 mt-4">
            <Input placeholder="Pincode" />
            <Input placeholder="Address" />
            <Input placeholder="City" />
            <Input placeholder="State" />
          </div>
        </div>
        <div className="bg-white mt-4 p-4 rounded-xl border-dashed border">
          <div>
            <h4 className="text-sm font-semibold">Travellers Details</h4>
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-400">
                Choose from the saved list or add a new passenger
              </p>
              <p>2 Travellers</p>
            </div>
            <div className=" text-sm px-4 py-1 rounded-md bg-yellow/20 text-neutral-800">
              <p>
                Please ensure that your name matches your govt. ID such as
                Aadhar, Passport or Driver's Licence
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold">Adults (12 yrs or above)</p>
            <div className="flex gap-10 mt-4">
              <div className="flex items-center gap-2">
                <Checkbox label="Person 1" />
                <p className="text-sm">Person 1</p>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox label="Person 1" />
                <p className="text-sm">Person 1</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between gap-6 mt-4">
            <Input placeholder="Mr" />
            <Input placeholder="First Name" />
            <Input placeholder="Middle Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Nationality" />
          </div>
        </div>
      </div>
      <div className="mt-4 border border-dashed rounded-xl p-4 bg-white space-y-4">
        <div className="flex justify-between items-center rounded-xl">
          <h4 className="text-sm font-semibold">Fare Summary</h4>
          <p className="text-sm text-neutral-400">2 Travellers</p>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex justify-between items-center text-sm">
            <p>Fare Type</p>
            <p className="text-green-500">Partially Refundable</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <p>Base Fare</p>
            <p className="text-green-500">$ 7,990</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <p>Taxes & Fees</p>
            <p className="text-green-500">$3,244</p>
          </div>
          <div className="flex justify-between items-center text-sm border-t border-dashed border-neutral-400 pt-2">
            <p className="text-sm font-semibold">Total Amount</p>
            <p className="text-lg font-semibold">$11,234</p>
          </div>
        </div>
        <p className="text-xs">
          By clicking on continue, I confirm that I have read, understood, and
          agree with the Fare Rules, Privacy Policy and Terms of Use
        </p>
        <div className="border-2 border-blue rounded-xl p-4 bg-blue/10 text-sm">
          <p>
            Log in to access amazing offers & redeem Tripbookngo wallet on your
            flight booking
          </p>
        </div>

        <div className="border border-dashed p-4 flex justify-between items-center flex-col gap-4">
          <div>
            <div className="">
              <div className="flex items-center gap-4">
                <Checkbox />
                <p className="text-sm">OFFER 1</p>
              </div>
              <p className="text-xs">
                Get 15% off on your fare. Book now and avail the discount on
                your next flight.
              </p>
            </div>
            <p className="text-sm text-yellow">$500 off</p>
          </div>
          <div>
            <div className="">
              <div className="flex items-center gap-4">
                <Checkbox />
                <p className="text-sm">OFFER 1</p>
              </div>
              <p className="text-xs">
                Get 15% off on your fare. Book now and avail the discount on
                your next flight.
              </p>
            </div>
            <p className="text-sm text-yellow">$500 off</p>
          </div>
        </div>
      </div>
    </div>
  );
}
