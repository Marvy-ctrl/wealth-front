import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";

function NavBar() {
  return (
    <header className="bg-[#0b132b]">
      <nav className=" container mx-auto pt-8 text-white px-6 py-4 flex justify-between items-center">
        <div>
          <Image src="/logo.svg" alt="logo" width={200} height={200} />
        </div>

        <div>
          <ul className="flex space-x-4 ">
            <li className="hover:underline">
              <Link href="#"> Cash</Link>
            </li>
            <li>
              <Link href="#"> Bonds</Link>
            </li>
            <li>
              <Link href="#"> Automated Investing</Link>
            </li>
            <li>
              <Link href="#"> Stocks</Link>
            </li>
            <li>
              <Link href="#">Learn</Link>
            </li>
          </ul>
        </div>

        <div className="space-x-3">
          <Button className="border border-amber-100 hover:text-amber-700 hover:border-amber-700">
            Log in
          </Button>
          <Button
            className="bg-indigo-500  hover:bg-gradient-to-t hover:from-blue-700 hover:to-amber-700
               transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
