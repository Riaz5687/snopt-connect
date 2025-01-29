import React from "react";
import { Logo } from "../svgs";

import Image from "next/image";
import LanguageDropdown from "../Custom/LanguageDropDown";

const Footer = () => {
  const logoImages = [
    "/footer/instagram.svg",
    "/footer/tiktok.svg",
    "/footer/youtube.svg",
    "/footer/twitter.svg",
  ];
  return (
    <div className="w-full mt-10 p-9 bg-[#1A1A2D] border-t border-muted-purple flex-col justify-start items-start gap-12 inline-flex">
      <div className="max-w-[1150px] m-auto w-full">
        <div className="w-full flex justify-between gap-4">
          <div className="self-stretch justify-between items-start  inline-flex flex-col">
            <div className="justify-start items-center gap-2 mb-[48px] flex">
              <Logo />
            </div>

            <div className="gap-8 sm:gap-16 justify-start inline-flex text-left">
              <div className="max-w-[640px] justify-start items-end gap-2.5 ">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="px-0.5 py-px rounded justify-center items-center gap-1 inline-flex">
                    <div className="text-left text-light-gray text-base font-normal leading-[21.12px]">
                      Human ressources
                    </div>
                  </div>
                  <div className="px-0.5 py-px rounded justify-center items-center gap-1 inline-flex">
                    <div className="text-left text-light-gray text-base font-normal leading-[21.12px]">
                      Foundation
                    </div>
                  </div>
                  <div className="px-0.5 py-px rounded justify-center items-center gap-1 inline-flex">
                    <div className="text-left text-light-gray text-base font-normal leading-[21.12px]">
                      Legal
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-[640px] justify-start gap-2.5 inline-flex">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="px-0.5 py-px rounded justify-center items-center gap-1 inline-flex">
                    <div className="text-left text-light-gray text-base font-normal leading-[21.12px]">
                      Privacy policy
                    </div>
                  </div>
                  <div className="px-0.5 py-px rounded justify-center items-center gap-1 inline-flex">
                    <div className="text-left text-light-gray text-base font-normal leading-[21.12px]">
                      Terms & Conditions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-end items-center gap-9 inline-flex">
            <div className="justify-start items-center gap-4 flex flex-col sm:flex-row">
              <div className="justify-start items-center gap-4 flex flex-col sm:flex-row">
                {logoImages.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo}
                    alt="logo"
                    height={20}
                    width={20}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <LanguageDropdown />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-[72px] flex justify-between ">
          <div className="text-center text-[#ababce] w-full text-sm font-normal  leading-tight">
            Copyright © Snopt Connect 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
