import Image from "next/image";
import React from "react";

export default function PFP() {
  return (
    <div className="w-full  flex-col justify-startitems-start gap-4 inline-flex">
      <div className="justify-start items-center gap-2.5 inline-flex ">
        <Image
          className="rounded-full object-cover w-10 h-10 cursor-pointer"
          src="/assets/portrait-person-wearing-graphic-eye-makeup.jpg"
          alt="profile"
          sizes="100vw"
          width="0"
          height="0"
        />

        <div className="flex-col justify-center items-start gap-0.5 inline-flex">
          <div className="h-[15px] justify-start items-center gap-2 inline-flex">
            <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
              Michael Ross
            </div>
          </div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
              michael.r@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
