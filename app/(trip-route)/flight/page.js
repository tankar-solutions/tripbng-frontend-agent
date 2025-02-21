"use client";
import React, { useState } from "react";
import Button from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import { ArrowRightLeft, PlusCircle, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { airports } from "@/constants/data/airports";
import toast from "react-hot-toast";
import { dates } from "@/constants/data/date";
import { TRAVELLERS_CLASS } from "@/constants/data/flight-data";
import { useRouter } from "next/navigation";
import { apiService } from "@/lib/api";

export default function Page() {
  const router = useRouter();
  const [selectedTripType, setSelectedTripType] = useState("One Way");
  const [selectedFareType, setSelectedFareType] = useState("Regular");
  const [departureDate, setDepartureDate] = useState("");

  const handleFlightSearch = async () => {
    try {
      const data = await apiService.post("/flight/searchFlight", {
        Travel_Type: 0, //0 -DOMESTIC, 1 - INTERNATIONAL
        Booking_Type: 0, //0 - ONE_WAY, 1- ROUNDTRIP, 2- SPECIALROUNDTRIP
        TripInfo: [
          {
            Origin: "IXC", //IATA Code Source/Start
            Destination: "DEL", //IATA Code Desination/End
            TravelDate: "11/01/2024", //MM/DD/YYYY
          },
          {
            Origin: "DEL", //IATA Code Source/Start
            Destination: "BOM", //IATA Code Desination/End
            TravelDate: "11/05/2024", //MM/DD/YYYY
          },
          {
            Origin: "BOM", //IATA Code Source/Start
            Destination: "DEL", //IATA Code Desination/End
            TravelDate: "11/07/2024", //MM/DD/YYYY
          },
        ],
        Adult_Count: "1",
        Child_Count: "0",
        Infant_Count: "0",
        Class_Of_Travel: "0", //0- ECONOMY, 1- BUSINESS, 2- FIRST, 3- PREMIUM_ECONOMY
        Filtered_Airline: [
          {
            Airline_Code: "",
          },
        ],
        stops: [0, 1, 2, 3],
        priceRange: {
          min: 0,
          max: 250000,
        },
        departureFromOrigin: null, //0 - 12-6am, 1 - 6-12pm, 2 - 12-6pm, 3 - 6-12am
        arrivalAtDestination: null, //0 - 12-6am, 1 - 6-12pm, 2 - 12-6pm, 3 - 6-12am
        sort: {
          name: "price", //price, departure, fastest
          method: "desc", //asc
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
      console.log("failed");
    }
  };

  const [cities, setCities] = useState([
    { id: 1, from: "AMD", to: "BLR" },
    { id: 2, from: "BLR", to: "AMD" },
  ]);
  function handleCitySwap(id) {
    setCities((prevCities) =>
      prevCities.map((city) =>
        city.id === id ? { ...city, from: city.to, to: city.from } : city
      )
    );
  }

  function handleCityChange(id, field, value) {
    setCities((prevCities) => {
      const updatedCities = prevCities.map((city, index) => {
        if (city.id === id) {
          const updatedCity = { ...city, [field]: value };
          if (field === "from" && index < prevCities.length - 1) {
            prevCities[index + 1] = { ...prevCities[index + 1], to: value };
          }
          return updatedCity;
        }
        return city;
      });
      return updatedCities;
    });
  }

  function addCity() {
    const lastCity = cities[cities.length - 1];
    if (!lastCity.to) {
      toast.error('Please select a "To" city before adding a new trip.');
      return;
    }
    const newId = Math.max(...cities.map((city) => city.id)) + 1;
    setCities([...cities, { id: newId, from: lastCity.to, to: "" }]);
    toast.success("New trip added successfully!");
  }

  function removeCity(id) {
    if (cities.length > 2) {
      setCities(cities.filter((city) => city.id !== id));
      toast.success("Trip removed successfully!");
    } else {
      toast.error("At least two cities are required.");
    }
  }

  function handleSearch() {
    handleFlightSearch();
  }

  const renderCityCards = () => {
    return cities.map((city, index) => (
      <div key={city.id} className="rounded-xl grid grid-cols-5 mb-6 relative">
        <div className="border p-6 rounded-l-xl relative hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">From</p>
          <Select
            value={city.from}
            onValueChange={(value) => handleCityChange(city.id, "from", value)}
          >
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
          <p className="text-xs text-neutral-400 font-light">
            {airports.find((airport) => airport.iataCode === city.from)?.name ||
              "Select a city"}
          </p>
          <button
            className="w-10 h-10 flex items-center justify-center border shadow-md rounded-full absolute top-12 -right-5 z-10 cursor-pointer bg-white"
            onClick={() => handleCitySwap(city.id)}
          >
            <ArrowRightLeft size={14} />
          </button>
        </div>
        <div className="border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">To</p>
          <Select
            value={city.to}
            onValueChange={(value) => handleCityChange(city.id, "to", value)}
          >
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
          <p className="text-xs text-neutral-400 font-light">
            {airports.find((airport) => airport.iataCode === city.to)?.name ||
              "Select a city"}
          </p>
        </div>
        <div className="border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
          <p className="text-xs text-neutral-400">Departure</p>
          <Select onValueChange={(value) => setDepartureDate(value)}>
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
          <p className="text-xs text-neutral-400 font-light"></p>
        </div>
        {index === cities.length - 1 && (
          <div
            className={`border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer flex items-center w-fit rounded-r-xl ${
              city.to ? "" : "bg-gray-100"
            }`}
          >
            {city.to ? (
              <button
                onClick={addCity}
                className="flex items-center gap-2 text-yellow"
              >
                <PlusCircle className="cursor-pointer bg-yellow text-white rounded-full" />
                <p className="text-xl font-semibold">Add City</p>
              </button>
            ) : (
              <button
                onClick={() => removeCity(city.id)}
                className="flex items-center gap-2 "
                disabled={cities.length <= 2}
              >
                <X className="cursor-pointer border-2 text-black rounded-full p-1 border-black" />
              </button>
            )}
          </div>
        )}
      </div>
    ));
  };

  const renderTripFields = () => {
    switch (selectedTripType) {
      case "One Way":
        return (
          <>
            <div className="border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
              <p className="text-xs text-neutral-400">Departure</p>
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
              <p className="text-xs text-neutral-400">Return</p>
              <p className="text-xs text-neutral-400 font-light">
                Not applicable
              </p>
            </div>
          </>
        );
      case "Round Trip":
        return (
          <>
            <div className="border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
              <p className="text-xs text-neutral-400">Departure</p>
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
              <p className="text-xs text-neutral-400">Return</p>
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
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl relative">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => setSelectedTripType("One Way")}
          className={`text-xs flex items-center gap-2 rounded-full p-2 ${
            selectedTripType === "One Way" && "bg-yellow/10"
          }`}
        >
          <span
            className={`block w-4 h-4 rounded-full ${
              selectedTripType === "One Way" ? "bg-yellow" : "bg-white"
            }`}
          ></span>
          <p>One Way</p>
        </button>
        <button
          onClick={() => setSelectedTripType("Round Trip")}
          className={`text-xs flex items-center gap-2 rounded-full p-2 ${
            selectedTripType === "Round Trip" && "bg-yellow/10"
          }`}
        >
          <span
            className={`block w-4 h-4 rounded-full ${
              selectedTripType === "Round Trip" ? "bg-yellow" : "bg-white"
            }`}
          ></span>
          <p>Round Trip</p>
        </button>
        <button
          onClick={() => setSelectedTripType("Multiple City")}
          className={`text-xs flex items-center gap-2 rounded-full p-2 ${
            selectedTripType === "Multiple City" && "bg-yellow/10"
          }`}
        >
          <span
            className={`block w-4 h-4 rounded-full ${
              selectedTripType === "Multiple City" ? "bg-yellow" : "bg-white"
            }`}
          ></span>
          <p>Multiple City</p>
        </button>
      </div>

      {selectedTripType === "Multiple City" ? (
        renderCityCards()
      ) : (
        <div className="rounded-xl grid grid-cols-5 mb-6">
          <div className="border p-6 rounded-l-xl relative hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
            <p className="text-xs text-neutral-400">From</p>
            <Select
              value={cities[0].from}
              onValueChange={(value) =>
                handleCityChange(cities[0].id, "from", value)
              }
            >
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
            <p className="text-xs text-neutral-400 font-light">
              {airports.find((airport) => airport.iataCode === cities[0].from)
                ?.name || "Select a city"}
            </p>
            <button
              className="w-10 h-10 flex items-center justify-center border shadow-md rounded-full absolute top-12 -right-5 z-10 cursor-pointer bg-white"
              onClick={() => handleCitySwap(cities[0].id)}
            >
              <ArrowRightLeft size={14} />
            </button>
          </div>
          <div className="border p-6 hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
            <p className="text-xs text-neutral-400">To</p>
            <Select
              value={cities[0].to}
              onValueChange={(value) =>
                handleCityChange(cities[0].id, "to", value)
              }
            >
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
            <p className="text-xs text-neutral-400 font-light">
              {airports.find((airport) => airport.iataCode === cities[0].to)
                ?.name || "Select a city"}
            </p>
          </div>
          {renderTripFields()}
          <div className="border p-6 rounded-r-xl hover:bg-yellow/10 transition-all duration-300 cursor-pointer">
            <p className="text-xs text-neutral-400">Travelers & Class</p>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a travellers" />
              </SelectTrigger>
              <SelectContent>
                {TRAVELLERS_CLASS.map((airport) => (
                  <SelectItem key={airport.name} value={airport.name}>
                    {airport.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-4">
        <button
          className={`p-4 rounded-xl flex items-center gap-2 border-2 cursor-pointer ${
            selectedFareType === "Regular"
              ? "border-2 border-yellow"
              : "border-neutral-300"
          }`}
          onClick={() => setSelectedFareType("Regular")}
        >
          <Checkbox checked={selectedFareType === "Regular"} />
          <div className="flex flex-col items-start">
            <p className="text-md font-semibold">Regular</p>
            <p className="text-xs text-neutral-400">Regular fares</p>
          </div>
        </button>
        <button
          className={`p-4 rounded-xl flex items-center gap-2 border-2 cursor-pointer ${
            selectedFareType === "Senior Citizen"
              ? "border-2 border-yellow"
              : "border-neutral-300"
          }`}
          onClick={() => setSelectedFareType("Senior Citizen")}
        >
          <Checkbox checked={selectedFareType === "Senior Citizen"} />
          <div className="flex flex-col items-start">
            <p className="text-md font-semibold">Senior Citizen</p>
            <p className="text-xs text-neutral-400">upto $560 off</p>
          </div>
        </button>
        <button
          className={`p-4 rounded-xl flex items-center gap-2 border-2 cursor-pointer ${
            selectedFareType === "Armed Forces"
              ? "border-2 border-yellow"
              : "border-neutral-300"
          }`}
          onClick={() => setSelectedFareType("Armed Forces")}
        >
          <Checkbox checked={selectedFareType === "Armed Forces"} />
          <div className="flex flex-col items-start">
            <p className="text-md font-semibold">Armed Forces</p>
            <p className="text-xs text-neutral-400">upto $560 off</p>
          </div>
        </button>
        <button
          className={`p-4 rounded-xl flex items-center gap-2 border-2 cursor-pointer ${
            selectedFareType === "Doctor and Nurses"
              ? "border-2 border-yellow"
              : "border-neutral-300"
          }`}
          onClick={() => setSelectedFareType("Doctor and Nurses")}
        >
          <Checkbox checked={selectedFareType === "Doctor and Nurses"} />
          <div className="flex flex-col items-start">
            <p className="text-md font-semibold">Doctor and Nurses</p>
            <p className="text-xs text-neutral-400">upto $560 off</p>
          </div>
        </button>
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
