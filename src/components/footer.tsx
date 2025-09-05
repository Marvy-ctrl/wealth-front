import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <section className="footer bg-[#18172B] text-white text-center p-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 text-left">
        <div>
          <Image src={"/logo.svg"} alt="logo" width={200} height={200}></Image>
        </div>
        <div>
          <h1 className="font-bold text-[22px] pb-4 md:pb-2">Investing</h1>
          <ul>
            <li>Automated Investing</li>
            <li>Stock Investing</li>
            <li>Explore all investmants</li>
            <li>Retirements</li>
            <li>College</li>
            <li>Socially Responsible</li>
            <li>Pricing</li>
            <li>Tax Loss Harvesting</li>
            <li>Historical Performance</li>
            <li>Whitepapers</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-[22px] pb-2">Save</h1>
          <ul>
            <li>Cash</li>
            <li>ATM Locator</li>
          </ul>
          <h1 className="font-bold text-[22px] pt-2">Bonds</h1>
          <ul>
            <li>Automated Bond ladder</li>
            <li>Automated Bond Portfolio</li>
          </ul>
          <h1 className="font-bold text-[22px] pt-2">Borrow</h1>
          <ul>
            <li>Borrow</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-[22px] pb-2">Learn</h1>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Joint Accounts</li>
            <li>What level of risk suit you best</li>
            <li>IRA Contribution Calculator</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-[22px] pb-2">About</h1>
          <ul>
            <li>Newsroom</li>
            <li>Reviews</li>
            <li>Careers</li>
            <li>Legal</li>
            <li>Security</li>
            <li>Sitemap</li>
            <li>Your Privacy Choices</li>
          </ul>
          <p className="text-[16px] my-4 hover:underline">Back to top</p>
        </div>
      </div>
      <div className="w-full border-b border-white p-4"></div>
    </section>
  );
}

export default Footer;
