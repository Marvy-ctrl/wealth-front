import React from "react";
import Card from "./ui/card";
import { title } from "process";

const stats = [
  {
    title: "Cash Account",
    subtitle: "More interest on your cash.",
    apy: "4.00% APY",
    description:
      "Earn more on your cash with a high Annual Percentage Yield (APY) delivered from our program banks. Your cash is easy to access and easy to invest, with no sneaky requirements and no strings attached.",
    features: [
      "✓ No account fees",
      "✓ Free 24/7 instant withdrawals ",
      "✓ No minimum or maximum balance to earn 4.00% APY",
      "✓ Up to $8M FDIC insurance through program banks",
    ],
    // rate: "Rate as of 3/15/25 and subject to change.",x

    button1: "Start saving with $1",
    button2: "Learn more",
    imageSrc: "/sect1.png",
  },

  {
    title: "Automated Investing Account",
    subtitle: "Invest confidently with our expert-built portfolios",
    apy: "",
    description:
      "Our classic and socially responsible portfolios are designed to weather any market condition over time. We'll handle the reinvesting and rebalancing, keep your fees low, and help you save money on taxes so you can invest with ease",
    features: [
      "✓ Globally diversified portfolios",
      "✓ Personalized to your risk level and optimized to your tax situation ",
      "✓ Unlock tax savings with Tax-Loss Harvesting",
    ],
    button1: "Start saving with $1",
    button2: "Learn more",
    rate: "",
    imageSrc: "/sect2.png",
  },
  {
    title: "Wealthfront S&P 500 Direct",
    subtitle: "Upgrade your S&P 500® investing and access tax savings",
    apy: "",
    description:
      "Own individual stocks of the S&P 500® index in an automated portfolio that can help lower your tax bill—especially if you have capital gains from your stock compensation or other investments.",
    features: [
      "✓ Invest in stocks of the S&P 500®",
      "✓ Unlock tax savings with Tax-Loss Harvesting ",
      "✓ Low 0.09% fee",
    ],
    button1: "Start saving with $1",
    button2: "Learn more",
    rate: "",
    imageSrc: "/sect3.png",
  },
];

function Stats() {
  return (
    // <Card
    //   title="Cash Account"
    //   subtitle="More interest on your cash."
    //   apy="4.00% APY"
    //   description="Earn more on your cash with a high Annual Percentage Yield (APY) delivered from our program banks. Your cash is easy to access and easy to invest, with no sneaky requirements and no strings attached."
    //   features={[
    //     "No account fees",
    //     "Free 24/7 instant withdrawals ",
    //     "No minimum or maximum balance to earn 4.00% APY",
    //     "Up to $8M FDIC insurance through program banks",
    //   ]}
    //   button1="Start saving with $1"
    //   button2="Learn more"
    //   rate="Rate as of 3/15/25 and subject to change."
    //   imageSrc="/sect1.png"
    // />

    <section className="bg-[#f7f7f7] py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-16">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              title={stat.title}
              subtitle={stat.subtitle}
              apy={stat.apy}
              description={stat.description}
              features={stat.features}
              button1={stat.button1}
              button2={stat.button2}
              rate={stat.rate}
              imageSrc={stat.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
