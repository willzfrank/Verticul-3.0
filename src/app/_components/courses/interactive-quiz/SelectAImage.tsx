"use client";

import { Radio, RadioChangeEvent } from "antd";
import Image from "next/image";
import React, { useState } from "react";

export default function SelectAImage() {
  const [selectedImage, setSelectedImage] = useState("");
  const onChange = (e: RadioChangeEvent) => {
    setSelectedImage(e.target.value);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-6">
        <div
          className={` p-1 rounded ${
            selectedImage === "one" ? "border border-indigo-600" : ""
          }`}
        >
          <Image
            alt="question one"
            src="/assets/images/question-image.png"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-[200px] object-fill rounded"
          />
        </div>

        <div
          className={` p-1 rounded ${
            selectedImage === "two" ? "border border-indigo-600" : ""
          }`}
        >
          <Image
            alt="question one"
            src="/assets/images/question-image.png"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-[200px] object-fill rounded"
          />
        </div>
      </div>

      <Radio.Group onChange={onChange} className="w-full">
        <div className="flex flex-col gap-2 w-full">
          <Radio value="one" className="border-b pb-2 w-full">
            Image one
          </Radio>
          <Radio value="two" className="border-b pb-2 w-full">
            Image two
          </Radio>
        </div>
      </Radio.Group>
    </div>
  );
}
