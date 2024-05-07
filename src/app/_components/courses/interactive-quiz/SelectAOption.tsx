"use client";

import React, { useState } from "react";
import {
  Checkbox,
  CheckboxProps,
  GetProp,
  Input,
  Radio,
  RadioChangeEvent,
  Space,
} from "antd";

export default function SelectAOption() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
}
