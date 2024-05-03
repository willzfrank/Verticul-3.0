import React from "react";
import { RxDragHandleDots2 } from "react-icons/rx";

export default function SortAListQuestion() {
  return (
    <div className="space-y-3">
      <div className="fc border text-sm py-1 px-2 rounded hover:bg-gray-50 cursor-pointer">
        <RxDragHandleDots2 className="mr-2 cursor-grab" />
        <p className="">First answer in the sequence</p>
      </div>
      <div className="fc border text-sm py-1 px-2 rounded hover:bg-gray-50 cursor-pointer">
        <RxDragHandleDots2 className="mr-2 cursor-grab" />
        <p className="">First answer in the sequence</p>
      </div>
      <div className="fc border text-sm py-1 px-2 rounded hover:bg-gray-50 cursor-pointer">
        <RxDragHandleDots2 className="mr-2 cursor-grab" />
        <p className="">First answer in the sequence</p>
      </div>
      <div className="fc border text-sm py-1 px-2 rounded hover:bg-gray-50 cursor-pointer">
        <RxDragHandleDots2 className="mr-2 cursor-grab" />
        <p className="">First answer in the sequence</p>
      </div>
    </div>
  );
}
