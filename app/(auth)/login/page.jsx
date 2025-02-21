"use client";

import { FacebookIcon, GoogleIcon } from "@/components/icons";
import { Input } from "@/components/ui";
import Button from "@/components/ui/button";
import { apiService } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    try {
      const payload = emailOrPhone.includes("@")
        ? { email: emailOrPhone, password }
        : { mobile: emailOrPhone, password };
      const { data } = await apiService.post("user/login", payload);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center flex-col gap-4 border rounded-xl my-10 max-w-md mx-auto p-10">
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={100}
        objectFit="cover"
      />
      <div className="space-y-4 w-full">
        <p className="text-lg text-gray-700 font-semibold">Login</p>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email or Phone Number
          </label>
          <Input
            type="text"
            placeholder="Enter your email or phone number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <Button
        className="w-full font-medium py-2 rounded-md transition"
        onClick={signIn}
      >
        CONTINUE
      </Button>

      <div className="flex items-center justify-between w-full -mt-3">
        <Link href="/forgotPassword" className="text-blue font-medium">Forgot Password?</Link>
        <Link href="/register" className="text-blue font-medium">Join with us</Link>
      </div>

      <p className="text-xs text-gray-500 text-center mt-2">
        By proceeding, you agree to our{" "}
        <Link href="/term-and-condition" className="underline text-blue-600">
          T&amp;C
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className="underline text-blue-600">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
