"use client";
import Image from "next/image";
import React, { useState } from "react";

type AccordionProps = {
  idx: number;
  header: string;
  body: React.ReactNode;
  explanation?: boolean;
  wrong?: boolean;
};

export default function AccordionAnswer({
  idx,
  header,
  body,
  explanation,
  wrong,
}: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className=" ">
      <div
        onClick={() => setOpen(!open)}
        className="fbc bg-gray-100 py-2 px-2 cursor-pointer  rounded"
      >
        <p className="text-sm">
          Q{idx}. {header}
        </p>

        <div>
          {wrong ? (
            <Image
              className="rounded-full object-cover w-4 h-4 cursor-pointer"
              src="/assets/images/wrong.png"
              alt="profile"
              sizes="100vw"
              width="0"
              height="0"
            />
          ) : (
            <Image
              className="rounded-full object-cover w-4 h-4 cursor-pointer"
              src="/assets/images/correct.png"
              alt="profile"
              sizes="100vw"
              width="0"
              height="0"
            />
          )}
        </div>
      </div>

      {open && <div className="py-4 min-h-[150px] ">{body}</div>}

      {open && explanation && (
        <div
          className={`p-4  my-4 mb-12 text-sm bg-gray-100 rounded text-gray-700 ${
            wrong ? "!bg-amber-50 !text-amber-700" : ""
          }`}
        >
          <h4 className="font-medium mb-2">Explanation:</h4>
          <p className={`text-xs `}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue
          </p>
        </div>
      )}
    </div>
  );
}
