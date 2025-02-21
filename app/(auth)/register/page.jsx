"use client";

import { FacebookIcon, GoogleIcon } from "@/components/icons";
import { Container, Input } from "@/components/ui";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [companyType, setCompanyType] = useState("");

  return (
    <Container className="mt-10">
      <div className=" px-10">
        <h1 className="text-xl font-semibold">Sign Up</h1>
        <div className="mt-5">
          <h2 className="text-lg font-medium">Select the Company Type</h2>
          <div className=" flex items-center gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="companyType"
                value="Proprietor"
                checked={companyType === "Proprietor"}
                onChange={(e) => setCompanyType(e.target.value)}
                className="mr-2 w-5 h-5"
              />
              Proprietor
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="companyType"
                value="Partner"
                checked={companyType === "Partner"}
                onChange={(e) => setCompanyType(e.target.value)}
                className="mr-2 w-5 h-5"
              />
              Partner
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="companyType"
                value="Company / LLP"
                checked={companyType === "Company / LLP"}
                onChange={(e) => setCompanyType(e.target.value)}
                className="mr-2 w-5 h-5"
              />
              Company / LLP
            </label>
          </div>
        </div>
        <div className="border-b my-3"></div>
        <div className="mt-5">
          <h2 className="text-lg font-medium">Company Information</h2>
          <div className="relative w-1/3 mt-3">
            <p className="absolute text-lgtext-gray-700 px-2 ml-4 -mt-3 bg-white">
              Agency Name*
            </p>
            <Input type="text" />
          </div>
        </div>
        <div className="border-b my-3"></div>
        <div className="mt-5">
          <h2 className="text-lg font-medium">Company Contacts</h2>
          <div className="w-1/2">
            <div className="mt-3 flex items-center gap-3 w-full">
              <div className="flex items-center gap-3 w-full">
                <div className=" w-20  ">
                  <Input type="text" value="+91" />
                </div>
                <div className="relative w-full ">
                  <p className="absolute text-lgtext-gray-700 px-2 ml-4 -mt-3 bg-white">
                    Mobile Number*
                  </p>
                  <Input type="text" />
                </div>
              </div>
              <button className=" text-white text-lg font-medium bg-yellow py-2 px-4 rounded-md w-52">
                SEND OTP
              </button>
            </div>
            <div className="mt-6 flex items-center gap-3 w-full">
              <div className="relative w-full ">
                <p className="absolute text-lgtext-gray-700 px-2 ml-4 -mt-3 bg-white">
                  Email ID*
                </p>
                <Input type="text" />
              </div>
              <button className=" text-white text-lg font-medium bg-yellow py-2 px-4 rounded-md w-52">
                SEND OTP
              </button>
            </div>
          </div>
        </div>
        <div className="border-b my-3"></div>
        <div className="mt-5">
          <h2 className="text-lg font-medium">
            Owner's Pan Information(As Per PAN)
          </h2>
          <div className="mt-3 flex items-center gap-3 w-full">
            <div className="flex items-center gap-3 w-full">
              <div className="relative w-24">
                <p className="absolute text-lgtext-gray-700 px-2 ml-1 -mt-3 bg-white">
                  Title*
                </p>
                <Input type="text" placeholder="Mr." />
              </div>
              <div className="relative w-72">
                <p className="absolute text-lgtext-gray-700 px-2 ml-4 -mt-3 bg-white">
                  Full Name*
                </p>
                <Input type="text" />
              </div>
              <div className="relative w-72">
                <p className="absolute text-lgtext-gray-700 px-2 ml-4 -mt-3 bg-white">
                  DOB*
                </p>
                <Input type="text" />
              </div>
              <div className="relative w-72">
                <p className="absolute text-lgtext-gray-700 px-2 ml-4 -mt-3 bg-white">
                  PAN Number*
                </p>
                <Input type="text" />
              </div>

              <button className=" text-white text-lg font-medium bg-yellow py-2 px-4 rounded-md w-52">
                VERIFY PAN
              </button>
            </div>
          </div>
        </div>
        <div className="border-b my-3"></div>
        <div className="mt-5">
          <h2 className="text-lg font-medium">Company Address</h2>
          <div className="mt-3 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {[
                { label: "Country*", placeholder: "Mr." },
                { label: "State*" },
                { label: "City*" },
                { label: "Pincode*" },
                { label: "Address1*" },
                { label: "Address2*" },
                { label: "Address3*" },
              ].map((field, index) => (
                <div key={index} className="relative w-full">
                  <p className="absolute text-lg text-gray-700 px-2 ml-4 -mt-3 bg-white">
                    {field.label}
                  </p>
                  <Input type="text" placeholder={field.placeholder || ""} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-b my-3"></div>
        <div className="mt-5">
          <h2 className="text-lg font-medium">Aadhar Verification</h2>
          <div className="mt-6 flex items-center gap-3 w-1/2">
            <div className="relative w-full ">
              <p className="absolute text-lgtext-gray-700 px-2 ml-4 -mt-3 bg-white">
                Aadhar Number*
              </p>
              <Input type="text" />
            </div>
            <button className=" text-white text-lg font-medium bg-yellow py-2 px-4 rounded-md w-52">
              VERIFY ADHAR
            </button>
          </div>
        </div>
        <div className="border-b my-3"></div>
        <div className="mt-5">
          <h2 className="text-lg font-medium">GST Information</h2>
          <div className="mt-6 flex items-center gap-3 w-1/2">
            <div className="relative w-full ">
              <p className="absolute text-lgtext-gray-700 px-2 ml-4 -mt-3 bg-white">
                GST Number(Optional)*
              </p>
              <Input type="text" />
            </div>
            <button className=" text-white text-lg font-medium bg-yellow py-2 px-4 rounded-md w-52">
              VERIFY GST
            </button>
          </div>
        </div>
        <div className="border-b my-3"></div>
        <div className="mt-5">
          <h2 className="text-lg font-medium">Referral Details</h2>
          <div className="mt-6 flex items-center gap-3 w-1/2">
            <div className="relative w-full ">
              <p className="absolute text-lgtext-gray-700 px-2 ml-4 -mt-3 bg-white">
                Referral Code*
              </p>
              <Input type="text" />
            </div>
            <button className=" text-white text-lg font-medium bg-yellow py-2 px-4 rounded-md w-52">
              VERIFY CODE
            </button>
          </div>
          <div className="mt-6 flex items-center gap-3 w-1/2">
            <div className="relative w-full ">
              <p className="absolute text-lgtext-gray-700 px-2 ml-4 -mt-3 bg-white">
                Relationship Manger Code*
              </p>
              <Input type="text" />
            </div>
            <button className=" text-white text-lg font-medium bg-yellow py-2 px-4 rounded-md w-52">
            VERIFY CODE
            </button>
          </div>
          <div className="mt-6 flex items-center gap-3 w-1/2">
            <div className="relative w-full ">
              <p className="absolute text-lgtext-gray-700 px-2 ml-4 -mt-3 bg-white">
                Distributor Code*
              </p>
              <Input type="text" />
            </div>
            <button className=" text-white text-lg font-medium bg-yellow py-2 px-4 rounded-md w-52">
            VERIFY CODE
            </button>
          </div>
          <div className="mt-6 flex items-center gap-3 w-1/2">
            <div className="relative w-full ">
              <p className="absolute text-lgtext-gray-700 px-2 ml-4 -mt-3 bg-white">
                Remarks*
              </p>
              <Input type="text" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
        <button className="w-34 font-medium py-2 px-4 rounded-md transition mt-5 text-lg text-white bg-gray-500">
          Cancel
        </button>
        <button className="w-34 font-medium py-2 px-4 rounded-md transition mt-5 text-lg text-white bg-yellow">
          Sign Up
        </button>
        </div>
      </div>
    </Container>
  );
}
