"use client";
import React from "react";
import { Checkbox, GetProp } from "antd";

export default function SelectMultipleOptions() {
  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];

  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <div>
      <div className="flex flex-col">
        <Checkbox.Group
          options={options}
          style={{ display: "block", marginLeft: 0 }}
          defaultValue={["Apple"]}
          onChange={onChange}
          //className="flex flex-col"
        />
      </div>
    </div>
  );
}
