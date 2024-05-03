import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function TextBoxQuestion() {
  return (
    <div>
      <TextArea
        placeholder="Type here"
        maxLength={100}
        showCount
        className="min-h-[150px]"
      />
    </div>
  );
}
