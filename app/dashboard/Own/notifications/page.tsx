"use client";
import Image from "next/image";
import badge1 from "@/public/clubBadg-1.svg";

const notifications = [
  {
    badge: badge1, // Use the public folder path
    notification: "New order by Olympique Lyonnais",
  },
  {
    badge: badge1,
    notification: "New order by Olympique Lyonnais",
  },
  {
    badge: badge1,
    notification: "New order by Olympique Lyonnais",
  },
  {
    badge: badge1,
    notification: "New order by Olympique Lyonnais",
  },
];

export default function Notifications() {
  return (
    <div className="w-full">
      <p className="text-sm font-semibold pb-4">4 hours ago</p>
      {notifications.map((item, i) => (
        <div
          key={i}
          className="p-2 mb-2 rounded-[4px] w-full bg-[#2C2C4D] flex items-center gap-3"
        >
          <Image src={item.badge} alt="badge" width={24} height={24} />
          <span>{item.notification}</span>
        </div>
      ))}
    </div>
  );
}
