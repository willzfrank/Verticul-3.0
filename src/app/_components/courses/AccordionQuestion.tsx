"use client";
import React, { useState } from "react";

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
      </div>

      {open && <div className="py-4 min-h-[150px] ">{body}</div>}
    </div>
  );
}
