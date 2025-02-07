"use client";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import NavLinks from "../navlinks/page";
import { signOut } from "next-auth/react";
const Sidebar = () => {
  return (
    <div className="h-screen  bg-formWraperColor w-14 flex items-center flex-col justify-between md:h-[700px] border-r border-customBorderColor">
      <div className=" w-full flex items-center justify-center mt-8 pb-4  border-b  border-customBorderColor ">
        <FaUserCircle
          className="bg-white text-gray-400 rounded-full"
          size={25}
        />
      </div>
      <div className="flex flex-col gap-5 items-center w-full flex-1 pt-14">
        <NavLinks />
      </div>
      <div className="p-5 border-t border-b border-customBorderColor">
        <form
          action={async () => {
            // "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button>
            <MdLogout />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
