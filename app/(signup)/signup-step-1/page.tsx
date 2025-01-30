"use client";
import CustomButton from "@/app/UI/Custom/CustomButton";
import { PasswordInputSvg, PersonFilledSvg, SaveSvg } from "@/app/UI/svgs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="md:ml-20 lg:ml-32 xl:ml-40">
      <h2 className="font-bold text-[32px] pb-4 pt-12 md:pt-24 text-center md:text-left">
        Sign up - Step 1/4
      </h2>
      <div className="bg-formWraperColor p-6 w-fit rounded-[4px]">
        <form action="">
          <div className="mb-8">
            <p className="font-semibold pb-1">Email</p>
            <div className="relative">
              <input
                type="email"
                placeholder="c.gailtier@psg.com"
                className="min-w-[280px] md:w-[392px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
              />
              <PersonFilledSvg className={"absolute top-2.5 left-2"} />
            </div>
          </div>
          <div className="mb-8">
            <p className="font-semibold pb-1">Password</p>
            <div className="relative">
              <input
                type="email"
                placeholder="********"
                className="min-w-[280px] md:w-[392px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
              />
              <PasswordInputSvg className={"absolute top-2.5 left-2"} />
            </div>
          </div>
        </form>
      </div>
      <div className="pt-4 flex items-center justify-end">
        <Link href={"/signup-step-2"}>
          <CustomButton
            name="Save and continue"
            className="bg-gradient-to-r from-[#E30E7A]  via-[#F971BA]  to-[#F740A2]  py-2 rounded-sm pl-4 pr-3"
          >
            <SaveSvg />
          </CustomButton>
        </Link>
      </div>
      <Link href={"/login"}>
        <p className="text-left underline underline-offset-2 cursor-pointer text-[#99AFFF] pb-2 pt-4">
          I already have an account sign in
        </p>
      </Link>
    </div>
  );
}
