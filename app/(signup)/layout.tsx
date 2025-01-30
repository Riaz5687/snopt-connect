"use client";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative">
      <Image
        src={"/sig-up.svg"}
        alt="svg"
        width={300}
        height={432}
        priority
        className="absolute hidden z-0 md:block md:-bottom-10 right-0"
      />
      <Image
        src={"/sig-up.svg"}
        alt="svg"
        width={300}
        height={300}
        priority
        className="absolute sm:top-0 right-0 z-0 md:hidden md:-bottom-10"
      />
      <div className="max-w-[1400px] mx-auto w-full flex justify-between flex-col-reverse md:flex-row relative items-center md:items-start z-10 px-4 md:px-8 xl:px-0">
        {children}
        <div className="md:border-l border-customBorderColor md:pl-8 md:min-h-[90vh] h-full">
          <h1 className="text-4xl font-bold pb-2 pt-24">Snopt Connect</h1>
          <p className="text-lg font-bold text-right">
            The platform serving the <br /> sport industry
          </p>
        </div>
      </div>
    </div>
  );
}
