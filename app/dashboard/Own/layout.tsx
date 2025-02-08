import Card from "@/app/UI/common/card";
import Pagination from "@/app/UI/dashboard/HomePagination/page";
import { IoMdAdd } from "react-icons/io";
import shieldA from "@/public/assets/shieldA.svg";
import shieldS from "@/public/assets/shieldS.svg";
import clubBadg1 from "@/public/clubBadg-1.svg";
import clubBadg2 from "@/public/clubBadge-2.svg";
import user from "@/public/icons/person_filled.svg";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <div className="w-0.5 h-[462px] bg-gradient-to-b from-gray-800 via-[#52528E] to-gray-800" />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div>
          <Pagination />
        </div>
        <div className="mt-9 flex flex-wrap gap-5 items-center max-h-[67vh] overflow-y-scroll scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
}
