import React from "react";
import Image from "next/image";
import GoalsButton from "./goals-button";
interface CardProp {
  imageSrc: string;
  title: string;
  description: string;
  features: string[];
}

function GoalsCard({ imageSrc, title, description, features }: CardProp) {
  return (
    <section>
      <div className="h-full min-w-[250px] bg-white shadow-md rounded-xl p-4 w-[500px] flex-shrink-0">
        <div>
          <div className="flex gap-2">
            <Image src={imageSrc} alt="icons" width={40} height={40}></Image>
            <h2 className="font-semibold text-2xl text-[#4840BB] hover:underline">
              {title}
            </h2>
          </div>
          <p className="text-sm text-black p-2.5">{description}</p>
        </div>
        <div className="mt-auto">
          {features.map((feat, index) => (
            <GoalsButton
              key={index}
              className="bg-[#B2ADE6] text-xs font-semibold mt-6"
            >
              {feat}
            </GoalsButton>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GoalsCard;
