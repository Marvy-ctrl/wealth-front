import React from "react";
import Image from "next/image";
import Button from "./ui/button";

function Hero() {
  return (
    <section className="bg-[#0b132b]">
      <div className=" container mx-auto pt-8 text-white px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
          <div>
            <h1 className="text-8xl font-bold">Earn 4.00% APY </h1>
            <p className="italic text-8xl text-white mt-4">on all your cash.</p>
            <div className="mt-10">
              <Button
                className="bg-indigo-500 hover:bg-gradient-to-t hover:from-blue-700 hover:to-amber-700
               transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
            <div className="mt-7 text-gray-400 text-sm">
              <h3>APY provided by program banks.</h3>
              <p>Rate as of 3/15/25 and subject to change.</p>
            </div>
          </div>
          <div>
            <Image src="/phone.png" alt="phone" width={600} height={600} />
          </div>
        </div>

        {/* features */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-gray-400 text-xs">
          <div>
            <Image
              src={"/nerdwallet.svg"}
              alt="wallet"
              width={150}
              height={150}
            />
            <p>Best Robo-advisor, Portfolio Options, 2022-25 1</p>
          </div>
          <div>
            <Image src={"/bankrate.svg"} alt="bank" width={150} height={150} />
            <p>
              Best Cash Management Account, 2023-25 1 Best Investing App,
              2023-24 1
            </p>
          </div>
          <div>
            <h2>1.2M</h2>
            <p>Trusted clients 2</p>
          </div>
          <div>
            <h2>$90B+ </h2>
            <p>In total assets 2</p>
          </div>
          <div>
            <h2>4.8✦ </h2>
            <p>Apple App Store 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
