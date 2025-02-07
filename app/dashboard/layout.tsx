import React from "react";
import Sidebar from "../UI/dashboard/sidebar/page";
import Image from "next/image";
import hex from "@/public/hex.svg";
import hex2 from "@/public/hex2.svg";
import hexMiddle from "@/public/hexmiddle.svg";
import { FiUser } from "react-icons/fi";
import sheildA from "@/public/assets/shieldA.svg";
import sheildS from "@/public/assets/shieldS.svg";
import { BsShieldFillCheck } from "react-icons/bs";
import editButton from "@/public/edit.svg";

// Layout component that wraps around child components
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-w-[1400px] 3xl:mx-auto">
      {/* Sidebar component for navigation */}
      <Sidebar />

      {/* Main content section */}
      <div className="flex-1 relative h-screen">
        {/* Background section with hexagonal images */}
        <div className="relative z-0 w-full md:max-h-[192px]">
          {/* Background hexagonal images positioned absolutely */}
          <Image
            className="absolute z-0 top-0"
            src={hex}
            alt="bg"
            width={224}
            height={224}
          />
          <Image
            className="absolute hidden md:block z-0 top-12 right-1/2"
            src={hexMiddle}
            alt="bg"
            width={224}
            height={224}
          />
          <Image
            className="absolute hidden md:block z-0 top-0 right-40"
            src={hex2}
            alt="bg"
            width={130}
            height={200}
          />

          {/* Profile section with user avatar and information */}
          <div className="px-10 py-9 relative z-10 gap-10 flex items-start justify-between flex-col md:flex-row">
            {/* User avatar section */}
            <div className="bg-white relative w-32 h-32 rounded-full flex items-center justify-center">
              <FiUser size={40} className="text-gray-500" />
              {/* Edit button for profile picture */}
              <button className="absolute -bottom-3">
                <Image src={editButton} width={28} height={24} alt="edit" />
              </button>
            </div>

            {/* User information section */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold pb-1 gap-2 flex items-center gap-">
                Kylian
                {/* Displaying shields next to the user's name */}
                <div className="flex items-center">
                  <span>
                    <Image src={sheildS} alt="shield" width={24} height={24} />
                  </span>
                  <span>
                    <Image src={sheildA} alt="shield" width={24} height={24} />
                  </span>
                </div>
              </h1>

              {/* User representation */}
              <p className="font-semibold pb-3">
                Representing
                <span className="text-[#F2ED17]"> Olympique Lyonnais</span>
              </p>

              {/* Rating badge */}
              <span className="bg-[#303054] rounded-[4px] text-[##CAFFD9] px-5 py-1 mb-3 flex items-center gap-2 w-fit">
                <BsShieldFillCheck className="" />
                4.9/5
              </span>

              {/* User description */}
              <p className="text-sm">
                My name is Kylian and I buy and create reports on Snopt for
                Olympique Lyonnnais
              </p>
            </div>

            {/* Modify information button */}
            <div className="flex items-center gap-2">
              Modify my information
              <button className="">
                <Image src={editButton} width={28} height={24} alt="edit" />
              </button>
            </div>
          </div>
        </div>

        {/* Main content area where children components will be rendered */}
        <div className="relative z-10 p-8">{children}</div>
      </div>
    </div>
  );
};

export default layout;
