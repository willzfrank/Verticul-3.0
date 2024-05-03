"use client";
import React, { ChangeEvent } from "react";
import { Checkbox, CheckboxProps, GetProp } from "antd";

export default function SelectMultipleOptions() {
  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <Checkbox onChange={onChange} className="mb-4">
          Select All
        </Checkbox>
        {[1, 2, 3, 4].map((i, idx) => (
          <Checkbox key={idx} onChange={onChange} className="border-b pb-2">
            Checkbox
          </Checkbox>
        ))}
      </div>
    </div>
  );
}
