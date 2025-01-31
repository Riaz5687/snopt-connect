"use client";
import CustomButton from "@/app/UI/Custom/CustomButton";
import {
  CalenderSvg,
  PasswordInputSvg,
  PersonFilledSvg,
  PhoneSvg,
  PrevSvg,
  SaveSvg,
} from "@/app/UI/svgs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="lg:ml-32 xl:ml-40">
      <h2 className="font-bold text-[32px] pb-4 pt-12 md:pt-24 text-center md:text-left">
        Sign up - Step 2/4
      </h2>
      <div className="bg-formWraperColor p-6 w-fit rounded-[4px]">
        <form action="">
          <div className="mb-8">
            <p className="font-semibold pb-1">Phone number</p>
            <div className="relative">
              <input
                type="tel"
                placeholder="c.gailtier@psg.com"
                className="min-w-[280px] md:w-[300px] lg:w-[392px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
              />
              <PhoneSvg className={"absolute top-3 left-2"} />
            </div>
          </div>
          <div className="mb-8">
            <p className="font-semibold pb-1">Username</p>
            <div className="relative">
              <input
                type="text"
                placeholder="KyKy"
                className="min-w-[280px] md:w-[300px] lg:w-[392px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
              />
              <PersonFilledSvg className={"absolute top-3 left-2"} />
            </div>
          </div>
          <div className="mb-8">
            <p className="font-semibold pb-1">First name</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Kylian"
                className="min-w-[280px] md:w-[300px] lg:w-[392px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
              />
              <PersonFilledSvg className={"absolute top-3 left-2"} />
            </div>
          </div>
          <div className="mb-8">
            <p className="font-semibold pb-1">Last name</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Mbappe"
                className="min-w-[280px] md:w-[300px] lg:w-[392px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
              />
              <PersonFilledSvg className={"absolute top-3 left-2"} />
            </div>
          </div>
          <div className="mb-8">
            <p className="font-semibold pb-1">Address</p>
            <div className="relative">
              <input
                type="text"
                placeholder="20 rue de Luebeck, 78765, Paris, FRANCE"
                className="min-w-[280px] md:w-[300px] lg:w-[392px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
              />
              <PasswordInputSvg className={"absolute top-3 left-2"} />
            </div>
          </div>
          <div className="mb-8">
            <p className="font-semibold pb-1">Date of birth</p>
            <div className="relative">
              <input
                type="date"
                placeholder="20/12/1998"
                className="min-w-[280px] md:w-[300px] lg:w-[392px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
              />
              <CalenderSvg className={"absolute top-3 left-2"} />
            </div>
          </div>
        </form>
      </div>
      <div className="pt-4 flex items-center justify-end gap-4">
        <div className="p-[1px] bg-gradient-to-r from-[#E1097C] rounded-sm to-[#1A4CFF]">
          <Link href={"/signup-step-1"}>
            <CustomButton
              name="Previous Step"
              className="bg-background text-sm md:text-base"
            >
              <PrevSvg />
            </CustomButton>
          </Link>
        </div>
        <Link href={"/signup-step-3"}>
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
