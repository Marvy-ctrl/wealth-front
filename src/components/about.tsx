import React from "react";
import Image from "next/image";
import AboutCard from "./ui/about-card";
import { title } from "process";

const info = [
  {
    title: "1.2M+",
    content: "Trusted by 1.2M+ clients",
  },
  {
    title: "$90B+",
    content: "$90B+ in client funds",
  },
  {
    title: "13+ years",
    content: "Simplifying finances since 2011",
  },
];
function About() {
  return (
    <section className="bg-[#3b2b7d] pb-14">
      <div className=" container mx-auto pt-8 text-white px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 text-center space-x-9">
          <div className="py-18 font-sans text-[#F0F0F2]">
            <p className=" text-5xl font-bold">“</p>
            <h1 className="text-3xl md:text-5xl font-bold ">
              Wealthfront is the best overall robo-advisor.
            </h1>
            <Image
              src={"/investopidia.svg"}
              alt="invest-logo"
              width={200}
              height={200}
              className="mx-auto mt-6"
            />
            <p className="mt-3">2025 4</p>
          </div>
          <div className="pt-8">
            <Image
              src={"/robo.webp"}
              alt="robo"
              width={800}
              height={800}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3  gap-8 mt-8 md:mt-7 text-center">
          {info.map((inf) => (
            // <div className="rounded-2xl bg-amber-500 p-6 text-center">
            <AboutCard
              key={inf.title}
              title={inf.title}
              content={inf.content}
            />
            // </div>
          ))}
        </div>
        <div>
          <p className="text-xs text-gray-400 mt-2">
            The testimonials above are by clients of Wealthfront Advisers and
            Wealthfront Brokerage. No compensation was provided. These
            testimonials may not be representative of other clients’ experience.
            Past performance is no guarantee of success. Investopedia receives
            compensation from Wealthfront Advisers for advertising, which
            presents a conflict of interest. The endorsements provided are
            independent and not directly influenced by the compensation. There
            is no other affiliation between Investopedia and Wealthfront
            Advisers, and Investopedia is not a client of Wealthfront Advisers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
