"use client";
import { SubscriptionCards } from "@/app/json/subscriptionCards";
import CustomButton from "@/app/UI/Custom/CustomButton";
import { PrevSvg, SaveSvg, TickSvg } from "@/app/UI/svgs";
import Link from "next/link";
import { useState } from "react";
export default function Page() {
  const [selection, setSelection] = useState("monthly");

  const handleSeclection = (plan: string) => setSelection(plan);
  return (
    <div className="lg:ml-32 xl:ml-40">
      {/* Page heading */}
      <h2 className="font-bold text-2xl md:text-[32px] pt-6 md:pt-12 text-center md:text-left ">
        Choose at least one <br /> subscription Step 3/4
      </h2>
      <h2 className="font-bold text-2xl md:text-[26px] pb-4 pt-5 md:pt-8 text-center md:text-left ">
        Create reports
      </h2>

      {/* Subscription card for scouting account */}
      <div className="bg-formWraperColor p-6 w-fit rounded-[4px]">
        <div className="border border-customBorderColor rounded-[4px] p-5 flex flex-col md:flex-row items-end md:items-center gap-4 md:max-w-[350px] lg:max-w-[430px] mb-10">
          {/* Decorative circle (only visible on md screens) */}
          <div className="hidden md:block">
            <div className="w-5 h-5 rounded-full bg-[#303054] flex items-center justify-center">
              <div className="bg-white w-1 h-1 rounded-full" />
            </div>
          </div>

          {/* Subscription details */}
          <div>
            <h3 className="font-semibold pb-2">Scouting account</h3>
            <ul className="text-[#ABABCE] text-xs list-disc pl-4">
              <li className="pb-0.5">Create and sell reports</li>
              <li>35€ right away + €35 deducted from the first report sold.</li>
            </ul>
          </div>

          {/* Subscription price */}
          <div>
            <p className="font-semibold whitespace-nowrap">70€ / an</p>
          </div>
        </div>

        {/* Total price and Subscribe button */}
        <div>
          <p className="font-semibold pb-2">Total</p>
          <p className="py-4 w-full bg-[#110F1A] rounded-[4px] text-2xl font-bold text-center">
            35€
          </p>
          <div className="pt-2 flex justify-center">
            <CustomButton
              name="Subscribe"
              className="bg-gradient-to-r text-sm md:text-base from-[#E30E7A] via-[#F971BA] to-[#F740A2] py-2 rounded-sm pl-4 pr-3"
            >
              <TickSvg />
            </CustomButton>
          </div>
        </div>
      </div>

      {/* Order reports section */}
      <h3 className="font-bold text-2xl md:text-[26px] pb-4 pt-10 md:pt-8 text-center md:text-left ">
        Order reports
      </h3>

      {/* Subscription plans list */}
      <div className="bg-formWraperColor p-6 w-full rounded-[4px]">
        {SubscriptionCards.map((card, i) => (
          <div
            key={i}
            className="border border-customBorderColor justify-between rounded-[4px] p-5 flex flex-col mb-3 md:flex-row md:items-center gap-4 md:max-w-[350px] lg:max-w-[430px]"
          >
            <div className="hidden md:block">
              <div className="w-4 h-4 rounded-full bg-[#303054]" />
            </div>
            <div className="flex-1">
              <p className="font-semibold pb-2 text-[#F740A2]">{card.title}</p>
              <ul className="text-[#ABABCE] text-xs list-disc pl-4">
                {card.li1.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            </div>
            <div className="text-end">
              <p className="font-semibold whitespace-nowrap">
                {card.price}€ / an
              </p>
            </div>
          </div>
        ))}

        {/* Subscription type selection */}
        <p className="font-semibold pb-2">Subscription type</p>
        <div className="flex items-center gap-3 pb-5">
          <button
            onClick={() => handleSeclection("monthly")}
            className={`
              border border-customBorderColor flex-1 flex items-center gap-2 p-3 outline-none
              ${selection === "monthly" ? "bg-[#1F1F37]" : "bg-[#110F1A]"}
            `}
          >
            <div className="w-3 h-3 rounded-full bg-[#303054] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-white" />
            </div>
            <p className="font-semibold">Monthly</p>
          </button>
          <button
            onClick={() => handleSeclection("annual")}
            className={`
              border border-customBorderColor flex-1 flex items-center gap-2 p-3 outline-none
              ${selection === "annual" ? "bg-[#1F1F37]" : "bg-[#110F1A]"}
            `}
          >
            <span className="w-3 h-3 rounded-full bg-[#303054] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-white" />
            </span>
            <p className="font-semibold">Annual</p>
          </button>
        </div>

        {/* Total and Subscribe button */}
        <p className="font-semibold pb-2">Total</p>
        <p className="py-4 w-full bg-[#110F1A] rounded-[4px] text-2xl font-bold text-center">
          0€ / an
        </p>
        <div className="pt-2 flex justify-center">
          <CustomButton
            name="Subscribe"
            className="bg-gradient-to-r text-sm md:text-base from-[#E30E7A] via-[#F971BA] to-[#F740A2] py-2 rounded-sm pl-4 pr-3"
          >
            <TickSvg />
          </CustomButton>
        </div>
      </div>
      <div className="pt-4 flex items-center justify-end gap-4">
        <div className="p-[1px] bg-gradient-to-r from-[#E1097C] rounded-sm to-[#1A4CFF]">
          <Link href={"/signup-step-2"}>
            <CustomButton
              name="Previous Step"
              className="bg-background text-sm md:text-base"
            >
              <PrevSvg />
            </CustomButton>
          </Link>
        </div>
        <Link href={"/signup-step-4"}>
          <CustomButton
            name="Save & continue"
            className="bg-gradient-to-r text-sm md:text-base from-[#E30E7A]  via-[#F971BA]  to-[#F740A2]  py-2 rounded-sm pl-4 pr-3"
          >
            <SaveSvg />
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}
