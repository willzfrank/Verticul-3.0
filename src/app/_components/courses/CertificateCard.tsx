import Image from "next/image";
import React from "react";
import { MdMoreVert } from "react-icons/md";

export default function CertificateCard() {
  return (
    <div className="border bg-u-slate-100 shadow-md rounded-xl">
      <div className="px-10 mt-10">
        <Image
          src="/assets/images/certificate-placeholder.png"
          alt="course-thumbnail"
          sizes="100vw"
          width="0"
          height="0"
          className="rounded-t-xl w-[300px] mx-auto h-[100px] object-fill "
        />
      </div>

      <div className="bg-white px-2 py-3 rounded-b-xl flex justify-between items-start">
        <div>
          <p>Digital Fundamentals...</p>
          <div className="text-xs text-slate-600">January 23 13:45 PM</div>
        </div>

        <MdMoreVert size={22} color="#667085" className="cursor-pointer" />
      </div>
    </div>
  );
}
