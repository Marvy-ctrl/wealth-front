// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./ui/button";

// function NavBar() {
//   return (
//     <header className="bg-[#3b2b7d]">
//       <nav className=" container mx-auto pt-8 text-white px-6 py-4 flex justify-between items-center">
//         <div>
//           <Image src="/logo.svg" alt="logo" width={200} height={200} />
//         </div>

//         <div>
//           <ul className="flex space-x-4 ">
//             <li className="hover:underline">
//               <Link href="#"> Cash</Link>
//             </li>
//             <li className="hover:underline">
//               <Link href="#"> Bonds</Link>
//             </li>
//             <li className="hover:underline">
//               <Link href="#"> Automated Investing</Link>
//             </li>
//             <li className="hover:underline">
//               <Link href="#"> Stocks</Link>
//             </li>
//             <li className="hover:underline">
//               <Link href="#">Learn</Link>
//             </li>
//           </ul>
//         </div>

//         <div className="space-x-3">
//           <Button className="border border-amber-100 hover:text-amber-700 hover:border-amber-700">
//             Log in
//           </Button>
//           <Button
//             className="bg-indigo-500  hover:bg-gradient-to-t hover:from-blue-700 hover:to-amber-700
//                transition-all duration-300"
//           >
//             Get Started
//           </Button>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default NavBar;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#3b2b7d]">
      <nav className="container mx-auto text-white px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:underline">
            <Link href="#">Cash</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">Bonds</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">Automated Investing</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">Stocks</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">Learn</Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3">
          <Button className="border border-amber-100 hover:text-amber-700 hover:border-amber-700">
            Log in
          </Button>
          <Button className="bg-indigo-500 hover:bg-gradient-to-t hover:from-blue-700 hover:to-amber-700 transition-all duration-300">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2a1f57] text-white px-6 py-4 space-y-4 text-center">
          <ul className="space-y-3">
            <li>
              <Link href="#">Cash</Link>
            </li>
            <li>
              <Link href="#">Bonds</Link>
            </li>
            <li>
              <Link href="#">Automated Investing</Link>
            </li>
            <li>
              <Link href="#">Stocks</Link>
            </li>
            <li>
              <Link href="#">Learn</Link>
            </li>
          </ul>
          <div className="mt-6 space-y-3">
            <Button className="w-full border border-amber-100 hover:text-amber-700 hover:border-amber-700">
              Log in
            </Button>
            <Button className="w-full text-[#3b2b7d] bg-white hover:bg-gradient-to-t hover:from-blue-700 hover:to-amber-700 transition-all duration-300">
              Get Started
            </Button>
          </div>
          <div className="flex justify-between pt-3.5">
            <Image
              src={"/app-store.svg"}
              alt="app"
              width={150}
              height={150}
            ></Image>
            <Image
              src={"/google-play.svg"}
              alt="app"
              width={150}
              height={150}
            ></Image>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
