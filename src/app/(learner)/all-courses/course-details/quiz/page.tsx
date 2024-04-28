import { Collapse, CollapseProps } from "antd";
import React from "react";

type Props = {};

const Quiz = (props: Props) => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "4",
      label: "This is panel header 4",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
    {
      key: "5",
      label: "This is panel header 5",
      children: <p>Test Collaspe</p>,
    },
  ];

  return (
    <div className="w-full lg:w-[60%] mx-auto">
      <div className="">
        <Collapse items={items} defaultActiveKey={["1"]} />
      </div>
    </div>
  );
};

export default Quiz;
