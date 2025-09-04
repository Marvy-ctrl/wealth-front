import React from "react";
import Image from "next/image";
import { features, title } from "process";
import Button from "./button";

interface CardProp {
  title: string;
  subtitle: string;
  apy?: string;
  description: string;
  features: string[];
  button1: string;
  button2: string;
  rate?: string;
  imageSrc: string;
}

function Card({
  title,
  subtitle,
  apy,
  description,
  features,
  button1,
  button2,
  rate,
  imageSrc,
}: CardProp) {
  return (
    <section className="bg-white rounded-xl">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="p-8 md:p-12 rounded-6xl">
          <h6 className=" font-bold text-[#4840BB]">{title}</h6>
          <p className="text-2xl md:text-4xl text-[#4840BB] font-bold mt-2">
            {subtitle}
          </p>
          <p className="text-[#4840BB] text-3xl font-bold">{apy}</p>
          <p className="text-gray-700 text-1xl mt-4">{description}</p>
          <ul className="mt-6 space-y-2 text-[#4840BB] font-bold">
            {features.map((feat, index) => (
              <li key={index}>{feat}</li>
            ))}
          </ul>
          <p>{rate}</p>
          <div className="grid grid-cols-2 gap-4 mt-3.5">
            <Button
              className="text-white bg-[#4840BB]  hover:bg-gradient-to-b hover:from-blue-700 hover:to-amber-700
               transition-all duration-300"
            >
              {button1}
            </Button>
            <Button className="text-[#4840BB] border border-[#4840BB] hover:text-amber-700 hover:border-amber-700">
              {button2}
            </Button>
          </div>
        </div>
        {/* image */}
        <div className="flex justify-center">
          <Image src={imageSrc} alt="phones" width={700} height={700}></Image>
        </div>
      </div>
    </section>
  );
}

export default Card;
