"use client";

import CustomButton from "@/app/UI/Custom/CustomButton";
import { PasswordInputSvg, PersonFilledSvg, TickSvg } from "@/app/UI/svgs";

export default function Page() {
  return (
    <div className="lg:ml-32 xl:ml-40">
      {/* Page Title */}
      <h2 className="font-bold text-[32px] pb-4 pt-12 md:pt-24 text-center md:text-left">
        Sign up - Step 4/4
      </h2>

      {/* Form Wrapper */}
      <div className="bg-formWraperColor p-6 w-fit rounded-[4px]">
        <form action="">
          {/* Card Holder Input Field */}
          <div className="mb-8">
            <p className="font-semibold pb-1">Card holder</p>
            <div className="relative">
              <input
                type="text"
                placeholder="John Doe"
                className="min-w-[280px] md:w-[300px] lg:w-[392px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
              />
              {/* Icon for Card Holder Input */}
              <PersonFilledSvg className={"absolute top-3 left-2"} />
            </div>
          </div>

          {/* Card Number Input Field */}
          <div className="mb-8">
            <p className="font-semibold pb-1">Card number</p>
            <div className="relative">
              <input
                type="number"
                placeholder="** *** ***"
                className="min-w-[280px] md:w-[300px] lg:w-[392px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
              />
              {/* Icon for Card Number Input */}
              <PersonFilledSvg className={"absolute top-3 left-2"} />
            </div>
          </div>

          {/* Expiration Date and CVV Input Fields */}
          <div className="flex items-center box-border gap-8 flex-col md:flex-row md:gap-4 max-w-[300px] lg:w-[392px] pb-8">
            {/* Expiration Date */}
            <div className="w-full">
              <p className="font-semibold pb-1">Expiration date</p>
              <div className="relative">
                <input
                  type="date"
                  className="bg-formInputColor w-full md:w-[145px] lg:w-[190px] py-2 pl-8 pr-3 rounded-sm "
                />
                {/* Icon for Expiration Date Input */}
                <PersonFilledSvg className={"absolute top-3 left-2"} />
              </div>
            </div>

            {/* CVV */}
            <div className="w-full">
              <p className="font-semibold pb-1">CVV</p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="***"
                  className="bg-formInputColor w-full md:w-[145px] lg:w-[190px] py-2 pl-8 pr-3 rounded-sm "
                />
                {/* Icon for CVV Input */}
                <PasswordInputSvg className={"absolute top-3 left-2"} />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Save and Continue Button */}
      <div className="pt-4 flex items-center justify-center gap-4">
        <CustomButton
          name="Enregister"
          className="bg-gradient-to-r text-sm md:text-base from-[#E30E7A] via-[#F971BA] to-[#F740A2] py-2 rounded-sm pl-4 pr-3"
        >
          <TickSvg />
        </CustomButton>
      </div>
    </div>
  );
}
