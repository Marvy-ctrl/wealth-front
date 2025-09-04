import React from "react";
import GoalsButton from "./ui/goals-button";
import { features } from "process";
import GoalsCard from "./ui/goals-card";
const goals = [
  {
    imageSrc: "/cash-account.svg",
    title: "Cash Account",
    description:
      "Save, spend and pay bills while earning 4.00% APY from program banks on all your uninvested cash. Free 24/7 instant withdrawals. No monthly fees",
    features: ["RAINY DAY FUND", "UPCOMING EXPENSES", "BUY A HOME"],
  },
  {
    imageSrc: "/automated.svg",
    title: "Automated Bond Portfolio",
    description:
      "Invest in a diversified portfolio of bond ETFs designed to earn a higher yield than a high-yield savings account.",
    features: ["UPCOMING EXPENSES", "START INVESTING", "BUY A HOME"],
  },
  {
    imageSrc: "/bond_ladder.svg",
    title: "Automated bond Ladder",
    description:
      "Lock in current rates with a ladder of US Treasuries and skip state income taxes.",
    features: ["WEALTH PRESERVATION", "UPCOMING EXPENSES"],
  },
  {
    imageSrc: "/automated.svg",
    title: "Automated Investing account",
    description:
      "Invest in an expert-built portfolio of globally diversified index funds, personalized to you.",
    features: ["START INVESTING", "BUILD LONG-TERM WEALTH"],
  },
  {
    imageSrc: "/s&p.svg",
    title: "S&P 500 Direct",
    description:
      "Invest in individual stocks of the S&P 500® and help save money on taxes.",
    features: ["BUILD LONG-TERM WEALTH", "SAVE FOR RETIREMENT"],
  },
  {
    imageSrc: "/college.content.svg",
    title: "529 Education Savings plan",
    description:
      "Automated, tax-free investing for college and other education-related expenses.",
    features: ["SAVE FOR EDUCATION"],
  },
  {
    imageSrc: "/retirement.svg",
    title: "Retirement IRAs",
    description:
      "Save, spend and pay bills while earning 4.00% APY from program banks on all your uninvested cash. Free 24/7 instant withdrawals. No monthly fees",
    features: ["START INVESTING", "SAVE FOR RETIREMENT"],
  },
  {
    imageSrc: "/stock.svg",
    title: "Stock Investing Account",
    description:
      "Build your own portfolio with individual stocks and ETFs. Explore pre-built collections and invest with $0 commissions.",
    features: ["START INVESTING", "BUY A STOCK"],
  },
];

function Goals() {
  return (
    <section className="bg-gray-300 pb-16">
      <div className="container mx-auto pt-8 text-white px-6 py-4 text-center">
        <div className="text-[#4840BB] pt-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            You choose the goal. We’ll help you start.
          </h1>
        </div>
        <div className="space-x-4 space-y-4 text-xs text-[#4840BB]">
          <GoalsButton className="">All</GoalsButton>
          <GoalsButton className="">Build a rainy day fund</GoalsButton>
          <GoalsButton className="">Save for a long-term expenses</GoalsButton>
          <GoalsButton className="">Build long-term wealth</GoalsButton>
          <GoalsButton className="">Preserve wealth</GoalsButton>
          <GoalsButton className="">Buy a Home</GoalsButton>
          <GoalsButton className="">Save for education</GoalsButton>
          <GoalsButton className="">Save for retirement</GoalsButton>
          <GoalsButton className="">Save for individual stocks</GoalsButton>
          <GoalsButton className="">Start investing</GoalsButton>
        </div>
      </div>
      <div className="flex space-x-6 overflow-x-auto p-6 scrollbar-hide">
        {goals.map((goal) => (
          <GoalsCard
            key={goal.title}
            imageSrc={goal.imageSrc}
            title={goal.title}
            description={goal.description}
            features={goal.features}
          />
        ))}
      </div>
    </section>
  );
}

export default Goals;
