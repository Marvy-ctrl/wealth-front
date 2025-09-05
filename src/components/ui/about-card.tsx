import React from "react";

interface CardProp {
  title: string;
  content: string;
}
function AboutCard({ title, content }: CardProp) {
  return (
    // <section>
    //   <div className=" rounded-2xl bg-amber-500">
    //     <h1 className="text-3xl md:text-5xl font-bold">{title} </h1>
    //     <p>{content}</p>
    //   </div>
    // </section>
    <section>
      <div className="rounded-2xl bg-[#F5F5F40D] p-6 gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold ">{title}</h1>
          <p className="text-sm text-gray-300 ">{content}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutCard;
