"use client";
import { IoMdAdd } from "react-icons/io";
import Card from "../UI/common/card";
import user from "@/public/icons/person_filled.svg";
import shieldA from "@/public/assets/shieldA.svg";
import shieldS from "@/public/assets/shieldS.svg";
import clubBadg1 from "@/public/clubBadg-1.svg";
import clubBadg2 from "@/public/clubBadge-2.svg";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("my-reports");
  const handleActiveTab = (tab: string) => setActive(tab);
  return (
    <div className="px-6 flex items-start gap-5 cursor-pointer flex-col md:flex-row">
      <div>
        <div className="border-b border-customBorderColor pb-2 flex items-center justify-between max-w-[350px]">
          <p>Reports for sale</p>
          <button className="py-0.5 cursor-pointer px-2 rounded-[4px] bg-[#303054] text-sm flex items-center gap-1">
            <IoMdAdd /> <span>Create a report</span>
          </button>
        </div>
        <div className="mt-9 flex gap-4">
          <Card
            image={user}
            title="Christophe"
            price="35 €"
            shieldIcons={[shieldS, shieldA]}
            clubNames={[
              {
                name: "Paris Saint-Germain",
                badge: clubBadg1,
              },
              {
                name: "Arsenal",
                badge: clubBadg2,
              },
            ]}
            details={{
              date: "30/11/2023",
              city: "Madrid",
            }}
            views={2000}
            sold={5}
          />
          <div className="w-0.5 bg-gradient-to-b from-gray-800 via-[#52528E] to-gray-800" />
        </div>
      </div>
      <div className="border-b flex-1 border-customBorderColor flex items-center gap-2">
        <div className="flex items-center  gap-2 w-full">
          <p
            onClick={() => handleActiveTab("my-reports")}
            className={`pb-2 px-5 ${
              active === "my-reports"
                ? "border-b-2 border-white text-white"
                : "border-b-2 border-transparent"
            }`}
          >
            My reports
          </p>

          {/* Planned Reports */}
          <p
            onClick={() => handleActiveTab("planned-reports")}
            className={`pb-2 px-5 cursor-pointer ${
              active === "planned-reports"
                ? "border-b-2 border-white text-white"
                : "border-b-2 border-transparent"
            }`}
          >
            Planned-reports
          </p>

          {/* Orders */}
          <p
            onClick={() => handleActiveTab("orders")}
            className={`pb-2 px-5 cursor-pointer ${
              active === "orders"
                ? "border-b-2 border-white text-white"
                : "border-b-2 border-transparent"
            }`}
          >
            Orders
          </p>

          {/* Notifications */}
          <p
            onClick={() => handleActiveTab("notifications")}
            className={`pb-2 px-5 cursor-pointer ${
              active === "notifications"
                ? "border-b-2 border-white text-white"
                : "border-b-2 border-transparent"
            }`}
          >
            Notifications
          </p>
        </div>
      </div>
    </div>
  );
}
