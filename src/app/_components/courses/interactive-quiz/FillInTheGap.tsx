import { Input } from "antd";
import React from "react";

export default function FillInTheGap() {
  return (
    <div>
      This paragraphs contains some boxes
      <Input className="w-[100px] mx-4" /> fill in boxes with right answers this
      is the continuation of the paragraphs and there are empty boxes{" "}
      <Input className="w-[100px] mx-4" />
      this is the continuation <Input className="w-[100px] mx-4" /> this is the
      continuation of the paragraphs
    </div>
  );
}
