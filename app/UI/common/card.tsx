"use client";
import Image from "next/image";
import React from "react";
import { CgCloseR } from "react-icons/cg";
import { BsPencilSquare } from "react-icons/bs";
import ToggleButton from "../Custom/ToggleButton";

// Define the type for props
interface CardProps {
  title: string;
  price?: string;
  image: string;
  shieldIcons?: string[];
  clubNames?: {
    name: string;
    badge?: "string";
  }[];
  stats?: {
    top: number;
    bottom: number;
  };
  details?:
    | {
        date?: string;
        city?: string;
      }
    | undefined;
  views?: number;
  sold?: number;
  reportStatus?: string;
}

// Functional Component Definition
const Card: React.FC<CardProps> = ({
  title,
  price,
  image,
  shieldIcons = [],
  clubNames = [],
  stats = { top: 0, bottom: 0 },
  details,
  views,
  sold,
  reportStatus,
}) => {
  return (
    <div className="w-[350px] h-fit bg-gradient-to-b from-[#303054] to-[#1F1F37] p-4 rounded-md shadow-md shadow-[#303054]">
      {/* Club Name & Price */}
      <div className="flex justify-between items-center pb-4">
        <div className="px-1.5 py-0.5 bg-[#52528E] text-sm">
          {clubNames[0].name}
        </div>
        {price && <div>{price}</div>}
      </div>

      {/* Player Details */}
      <div className="pb-7 flex items-center gap-2">
        <Image src={image} alt="user" width={24} height={24} />
        <p className="font-medium">{title}</p>
        <div className="flex items-center">
          {shieldIcons.map((icon, index) => (
            <Image key={index} src={icon} alt="shield" width={24} height={24} />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex items-center gap-2 pb-6">
        <div className="bg-[#303054] rounded-sm p-1.5 flex flex-col items-center">
          <span className="pb-1 font-bold px-6">{stats.top}</span>
          <div className="bg-[#1F1F37] w-full h-1" />
          <span className="pt-1 font-bold px-6">{stats.bottom}</span>
        </div>

        <div className="">
          {clubNames.map((club, index) => (
            <div key={index} className=" my-2 flex items-center gap-2">
              <Image
                src={club.badge || ""}
                width={18}
                height={18}
                alt="Badge"
              />
              <p className="whitespace-nowrap font-semibold">{club.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-0.5">
          {details?.date && (
            <span className="text-sm font-semibold">{details.date}</span>
          )}
          {details?.city && (
            <span className="text-sm font-normal">{details.city}</span>
          )}
        </div>
        <div className="flex flex-col items-end gap-0.5">
          {views && <span className="text-sm font-normal">{views} Views</span>}
          {sold && (
            <span className="text-sm text-[#DBD71B] font-extrabold">
              Sold {sold} times
            </span>
          )}
        </div>
      </div>

      {/* Report Status Handling */}
      {reportStatus && (
        <div
          className={`mt-2 flex ${
            reportStatus === "Cancel order" ||
            reportStatus === "Waiting confirmation"
              ? "justify-end"
              : "justify-between"
          } items-center gap-2`}
        >
          {/* Button for specific statuses */}
          {reportStatus === "For sale" ? (
            <ToggleButton text={"For Sale"} />
          ) : (
            (reportStatus === "Finish report" ||
              reportStatus === "Waiting confirmation" ||
              reportStatus === "Cancel order" ||
              reportStatus === "Accept order") && (
              <button
                className={`w-[179px]  px-3 py-1 rounded-[4px] ${
                  reportStatus === "Finish report" ||
                  reportStatus === "Waiting confirmation"
                    ? "bg-[#84275E]"
                    : reportStatus === "Accept order"
                    ? "bg-[#305441]"
                    : "bg-[#52528E]"
                }`}
              >
                {reportStatus}
              </button>
            )
          )}
          {!(
            reportStatus === "Waiting confirmation" ||
            reportStatus === "Cancel order"
          ) && (
            <div className="flex items-center gap-2">
              <CgCloseR size={30} className="bg-[#303054] p-2 rounded-[4px] " />
              {!(reportStatus === "Accept order") && (
                <BsPencilSquare
                  size={30}
                  className="bg-[#303054] p-1 rounded-[4px]"
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
