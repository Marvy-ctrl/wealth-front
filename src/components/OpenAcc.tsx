import React from "react";
import Button from "./ui/button";
function OpenAcc() {
  return (
    <section className="bg-[#1c1049]  bg-gradient-to-br from-[#1c1049] via-[#1c1049] to-[#6c5ab5]/60 text-white text-center p-30 md:p-30 h-90 md:h-90">
      <div className="">
        <h1 className="text-3xl md:text-6xl font-bold">
          Save and Invest{" "}
          <span className="italic font-stretch-50% font-extralight ">
            for what’s next
          </span>
          .
        </h1>
      </div>
      <div className="mt-6">
        <Button
          className="bg-[#4840BB] hover:bg-gradient-to-t hover:from-[#33218f] hover:to-amber-700
               transition-all duration-300 text-sm font-bold"
        >
          Open Account
        </Button>
      </div>
    </section>
  );
}

export default OpenAcc;
