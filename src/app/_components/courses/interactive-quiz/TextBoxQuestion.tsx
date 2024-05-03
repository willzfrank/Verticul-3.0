import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function TextBoxQuestion() {
  return (
    <div className="">
      <TextArea
        placeholder="Type here"
        maxLength={100}
        showCount
        autoSize
        className="!pb-20"
      />
    </div>
  );
}
