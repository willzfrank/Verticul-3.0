import { headers } from "next/headers";
import React from "react";

type AccordionProps = {
  idx: number;
  header: string;
  body: React.ReactNode;
};

export default function AccordionQuestion({
  idx,
  header,
  body,
}: AccordionProps) {
  return (
    <div className=" ">
      <div className="fbc bg-gray-200 py-2 px-2 ">
        <p className="text-sm">
          Q{idx}. {header}
        </p>
      </div>

      <div className="py-4 min-h-[150px] ">{body}</div>
    </div>
  );
}
