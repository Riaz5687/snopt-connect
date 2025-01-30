"use client";
import CustomButton from "@/app/UI/Custom/CustomButton";
import { PasswordInputSvg, PersonFilledSvg, SaveSvg } from "@/app/UI/svgs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="md:ml-20 lg:ml-32 xl:ml-40">
      <h2 className="font-bold text-[32px] pb-4 pt-12 md:pt-24 text-center md:text-left">
        Sign up - Step 2/4
      </h2>
      <div className="bg-formWraperColor p-6 w-fit rounded-[4px]">
        <form action="">
          <div className="mb-8">
            <p className="font-semibold pb-1">Card holder</p>
            <div className="relative">
              <input
                type="text"
                placeholder="John Doe"
                className="min-w-[280px] md:w-[392px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
              />
              <PersonFilledSvg className={"absolute top-3 left-2"} />
            </div>
          </div>
          <div className="mb-8">
            <p className="font-semibold pb-1">Card number</p>
            <div className="relative">
              <input
                type="number"
                placeholder="** *** ***"
                className="min-w-[280px] md:w-[392px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
              />
              <PersonFilledSvg className={"absolute top-3 left-2"} />
            </div>
          </div>
          <div className="flex items-center box-border gap-8 flex-col md:flex-row  md:gap-4 max-w-[392px] pb-8">
            <div>
              <p className="font-semibold pb-1">Expiration date</p>
              <div className="relative">
                <input
                  type="date"
                  placeholder="Kylian"
                  className="bg-formInputColor md:max-w-[190px] py-2 pl-8 pr-3 rounded-sm "
                />
                <PersonFilledSvg className={"absolute top-3 left-2"} />
              </div>
            </div>
            <div>
              <p className="font-semibold pb-1">CVV</p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="***"
                  className=" bg-formInputColor  md:max-w-[190px] py-2 pl-8 pr-3 rounded-sm "
                />
                <PasswordInputSvg className={"absolute top-3 left-2"} />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="pt-4 flex items-center justify-center gap-4">
        <CustomButton
          name="Enregister"
          className="bg-gradient-to-r text-sm md:text-base from-[#E30E7A]  via-[#F971BA]  to-[#F740A2]  py-2 rounded-sm pl-4 pr-3"
        >
          <SaveSvg />
        </CustomButton>
      </div>
      <Link href={"/login"}>
        <p className="text-left underline underline-offset-2 cursor-pointer text-[#99AFFF] pb-2 pt-4">
          I already have an account sign in
        </p>
      </Link>
    </div>
  );
}
