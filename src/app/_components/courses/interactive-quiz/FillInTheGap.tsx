import { Input } from "antd";
import React from "react";

export default function FillInTheGap() {
  return (
    <div className="px-4 pt-2 pb-6 text-sm text-gray-800 border rounded">
      This paragraphs contains some boxes
      <Input className="w-[100px] h-[30px] rounded border border-gray-500 mx-4" />{" "}
      fill in boxes with right answers this is the continuation of the
      paragraphs and there are empty boxes{" "}
      <Input className="w-[100px] h-[30px] rounded border border-gray-500 mx-4" />
      this is the continuation{" "}
      <Input className="w-[100px] h-[30px] rounded border border-gray-500 mx-4" />{" "}
      this is the continuation of the paragraphs
    </div>
  );
}
