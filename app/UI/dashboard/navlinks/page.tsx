"use client";
import { FiHome } from "react-icons/fi";
import { FiPlusSquare } from "react-icons/fi";
import { MdHandshake } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();

  const links = [
    {
      name: "/",
      icon: <FiHome size={25} />, // Removed unnecessary fragment
      href: "/dashboard",
    },
    {
      name: "unknow1",
      icon: <FiPlusSquare size={25} />,
      href: "/dashboard/unknown1",
    },
    {
      name: "unknow2",
      icon: <MdHandshake size={25} />,
      href: "/dashboard/unknown2",
    },
    {
      name: "setting",
      icon: <IoSettingsSharp size={25} />,
      href: "/dashboard/setting",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          className={`py-2 w-full transition-all duration-300 flex items-center justify-center ${
            pathName === link.href &&
            " border-b border-l-4 border-l-[#F740A2] border-b-[#E1097C] bg-[#110F1A] text-white"
          }`}
          key={link.name}
          href={link.href}
        >
          <span
            className={`${
              pathName === link.href ? "text-[#E1097c]" : "text-white"
            }`}
          >
            {link.icon}
          </span>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
