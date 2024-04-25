"use client";

import CourseCardContainer from "@/components/CourseCardContainer";
import CourseTitle from "@/components/CourseTitle";
import SearchInput from "@/components/inputs/SearchInput";
import NavbarBanner from "@/components/navbar/NavbarBanner";
import { Tabs, TabsProps } from "antd";

import React from "react";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Popular Courses",
    children: "",
  },
  {
    key: "2",
    label: "Recommended",
    children: "",
  },
  {
    key: "3",
    label: "Top rated",
    children: "",
  },
  {
    key: "4",
    label: "New",
    children: "",
  },
];

export default function page() {
  return (
    <div className="">
      <NavbarBanner />

      <div className="py-5 bg-[#FCFCFD]">
        <div className="wrapper fbc">
          <p className="text-2xl font-medium">All Courses</p>

          <div className="w-[300px] ">
            <SearchInput
              placeholder="Search for courses... "
              value=""
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div>
          <Tabs defaultActiveKey="1" items={items} onChange={() => {}} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-16 gap-x-8">
          <CourseCardContainer />
          <CourseCardContainer />
          <CourseCardContainer />
          <CourseCardContainer />
          <CourseCardContainer />
        </div>
      </div>
    </div>
  );
}
