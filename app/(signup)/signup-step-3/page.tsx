"use client";
import CustomButton from "@/app/UI/Custom/CustomButton";
import { PrevSvg, SaveSvg } from "@/app/UI/svgs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="lg:ml-32 xl:ml-40">
      <h2 className="font-bold text-2xl md:text-[32px] pt-6 md:pt-12 text-center md:text-left ">
        Choose at least one <br /> subscription Step 3/4
      </h2>
      <h2 className="font-bold text-2xl md:text-[26px] pb-4 pt-5 md:pt-8 text-center md:text-left ">
        Create reports
      </h2>
      <div className="bg-formWraperColor p-6 w-fit rounded-[4px]">
        <div className="border border-customBorderColor rounded-[4px] p-5 flex flex-col md:flex-row items-end md:items-center gap-4 md:max-w-[350px] lg:max-w-[430px] mb-10">
          <div className="hidden md:block">
            <div className="w-5 h-5 rounded-full bg-[#303054]" />
          </div>
          <div>
            <h3 className="font-semibold pb-2">Scouting account</h3>
            <ul className="text-[#ABABCE] text-xs list-disc pl-4">
              <li className="pb-0.5">Create and sell reports</li>
              <li>35€ right away + €35 deducted from the first report sold.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold whitespace-nowrap">70€ / an</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold pb-2">Total</h4>
          <p className="py-4 w-full bg-[#110F1A] rounded-[4px] text-2xl font-bold text-center">
            35€
          </p>
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
