"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    name: "My reports",
    href: "/dashboard/Own/my-reports",
  },
  {
    name: "Planned reports",
    href: "/dashboard/Own/planned-reports",
  },
  {
    name: "Orders",
    href: "/dashboard/Own/orders",
  },
  {
    name: "Notifications",
    href: "/dashboard/Own/notifications",
  },
];

export default function Pagination({}) {
  const pathName = usePathname();
  const [active, setActive] = useState("my-reports");
  const handleActiveTab = (tab: string) => setActive(tab);
  return (
    <div className=" border-b border-customBorderColor flex items-center  gap-2 w-full">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => handleActiveTab(link.name)}
          className={`pb-2 px-5 ${
            active && pathName === link.href
              ? "border-b-2 border-white text-white"
              : "border-b-2 border-transparent"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
