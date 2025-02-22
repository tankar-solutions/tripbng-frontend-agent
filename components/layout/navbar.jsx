import Image from "next/image";
import React from "react";
import Button from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl shadow-lg">
      <div className="container justify-between items-center flex py-6">
        <Link href={"/"}>
          <Image src={"/logo.png"} width={150} height={150} alt="logo" />
        </Link>
        <div className="space-x-4">
          <Link href="/login" className="bg-yellow py-1 px-4 rounded-md text-white font-medium">Login OR/or Signup</Link>
        </div>
      </div>
    </nav>
  );
}
