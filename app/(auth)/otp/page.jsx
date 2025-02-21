"use client";

import { FacebookIcon, GoogleIcon } from "@/components/icons";
import { Input } from "@/components/ui";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function Otp() {
  const searchParams = useSearchParams();
  const number = searchParams.get("number");

  return (
    <div className="flex justify-center  flex-col gap-6 border rounded-xl my-10 max-w-md mx-auto p-10">
      <Image src={"/logo.png"} width={140} height={100} alt="logo" />
      <div className="space-y-2">
        <p className="text-lg font-semibold text-gray-700">
          Verify Your mobile Number
        </p>
        <p className="text-xs text-gray-500">
          Please enter the OTP received on +91 {number}
        </p>
        <InputOTP
          className="w-full"
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <p className="flex justify-between items-center text-xs">
        Didn't receive the OTP? Resend in 60 sec
        <Link href="" className="text-yellow hover:underline">
          RESEND
        </Link>
      </p>

      <Button className="w-full font-medium py-2 rounded-md transition ">
        VERIFY
      </Button>
    </div>
  );
}
