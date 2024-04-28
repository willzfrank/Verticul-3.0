"use client";

import React, { useState } from "react";
import book from "../../../public/assets/book.svg";
import { usePathname } from "next/navigation";
import folder from "../../../public/assets/folder.png";
import verify from "../../../public/assets/verify.svg";
import award from "../../../public/assets/award.svg";
import cube from "../../../public/assets/relatedCourseCube.svg";
import logout from "../../../public/assets/logout.png";
import exploreCard from "../../../public/assets/exploreCard.png";

import profile from "../../../public/assets/portrait-person-wearing-graphic-eye-makeup.jpg";
import question from "../../../public/assets/message-question.svg";

import Image from "next/image";

import { Flex, Progress } from "antd";
import Link from "next/link";
import PFP from "@/app/_components/PFP";
import {
  ResponsiveContainer,
  StackedCarousel,
} from "react-stacked-center-carousel";
export const data = [
  {
    cover: "https://images6.alphacoders.com/679/thumb-1920-679459.jpg",
    title: "Interstaller",
  },
  {
    cover: "https://images2.alphacoders.com/851/thumb-1920-85182.jpg",
    title: "Inception",
  },
  {
    cover: "https://images6.alphacoders.com/875/thumb-1920-875570.jpg",
    title: "Blade Runner 2049",
  },
  {
    cover: "https://images6.alphacoders.com/114/thumb-1920-1141749.jpg",
    title: "Icon man 3",
  },
  {
    cover: "https://images3.alphacoders.com/948/thumb-1920-948864.jpg",
    title: "Venom",
  },
  {
    cover: "https://images2.alphacoders.com/631/thumb-1920-631095.jpg",
    title: "Steins Gate",
  },
  {
    cover: "https://images4.alphacoders.com/665/thumb-1920-665242.png",
    title: "One Punch Man",
  },
  {
    cover: "https://images2.alphacoders.com/738/thumb-1920-738176.png",
    title: "A Silent Voice",
  },
  {
    cover: "https://images8.alphacoders.com/100/thumb-1920-1005531.jpg",
    title: "Demon Slayer",
  },
  {
    cover: "https://images2.alphacoders.com/582/thumb-1920-582804.png",
    title: "Attack On Titan",
  },
];

export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div
      style={{
        width: "100%",
        height: 300,
        userSelect: "none",
      }}
      className="my-slide-component"
    >
      <img
        className="w-full h-full object-cover"
        width={0}
        height={0}
        alt="carousel-slide"
        sizes="100vw"
        draggable={false}
        src={cover}
      />
    </div>
  );
});

Card.displayName = "Card";

const Sidebar = () => {
  const ref = React.useRef();
  const [isCourseDetailsOpen, setIsCourseDetailsOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsCourseDetailsOpen((prev) => !prev);
  };

  const toggleActive = (item: React.SetStateAction<string>) => {
    setActive(active === item ? "" : item);
  };
  return (
    <div className=" hidden lg:flex flex-col justify-between h-full w-full ">
      {/* navlinks */}
      <div className="">
        <div
          className={`px-2 py-1.5 my-1 rounded shadow justify-start items-center gap-2 inline-flex cursor-pointer ml-4 ${
            active === "coursedetails" || pathname === "/coursedetails"
              ? "bg-gray-100 text-[#101828]"
              : "text-gray-500"
          }`}
          onClick={() => {
            toggleDropdown();
            toggleActive("courseDetails");
          }}
        >
          <div className="w-5 h-5 justify-center items-center flex relative">
            <Image src={book} layout="fill" alt="book svg" />
          </div>

          <div className=" w-full h-5 justify-between items-center flex">
            <span className=" text-sm font-medium font-['Inter'] leading-tight">
              Course Details
            </span>
            <div className="w-3 h-3 justify-center items-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        {isCourseDetailsOpen && (
          <div className="ml-10 mt-2.5  justify-start items-start gap-3 inline-flex">
            <div className="w-[0px] h-[93px] relative">
              <div className="w-[93px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border border-gray-200"></div>
            </div>
            <div className="flex-col justify-start items-start gap-[11px] inline-flex animate__animated animate__fadeIn ">
              <Link
                href="/coursedetails"
                className="w-[98px] justify-between items-center inline-flex cursor-pointer"
              >
                <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">
                  Module 1
                </div>
                <div className="w-[13.25px] h-[13.25px] relative">
                  <div className="w-[13.25px] h-[13.25px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                  <div className="w-[6.31px] h-[6.31px] left-[3.34px] top-[3.34px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
                </div>
              </Link>

              <Link
                href="#"
                className="w-[98px] justify-between items-center inline-flex cursor-pointer"
              >
                <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">
                  Module 2
                </div>
                <div className="w-[13.25px] h-[13.25px] relative">
                  <div className="w-[13.25px] h-[13.25px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                  <div className="w-[6.31px] h-[6.31px] left-[3.34px] top-[3.34px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
                </div>
              </Link>
              <Link
                href="/coursedetails"
                className="w-[98px] justify-between items-center inline-flex cursor-pointer"
              >
                <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">
                  Module 3
                </div>
                <div className="w-[13.25px] h-[13.25px] relative">
                  <div className="w-[13.25px] h-[13.25px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                  <div className="w-[6.31px] h-[6.31px] left-[3.34px] top-[3.34px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
                </div>
              </Link>
            </div>
          </div>
        )}

        <div className="px-4 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-px inline-flex">
          <div className="flex-col justify-start items-start gap-1 flex">
            <Link
              href="/all-courses/course-details/assessment"
              className={`w-[228px] px-2 py-1.5 my-1 rounded shadow justify-start items-center gap-2 inline-flex cursor-pointer ${
                active === "assessment" || pathname === "/assessment"
                  ? "bg-gray-100 text-medium text-[#101828]"
                  : "text-gray-500"
              }`}
              onClick={() => toggleActive("assessment")}
            >
              <div className="w-5 h-5 justify-center items-center relative flex">
                <Image src={folder} layout="fill" alt="folder svg" />
              </div>
              <div className="w-full h-5 justify-start items-center gap-2 flex">
                <div className="w-full h-5 justify-between items-center flex">
                  <span className="text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
                    Asssement
                  </span>
                  <div className="h-[13px] px-px bg-amber-50 rounded-sm shadow justify-center items-center flex">
                    <span className="w-3 h-[17px] text-amber-700 flex items-center justify-center text-[10px] font-normal font-['Inter'] leading-tight">
                      10
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/all-courses/course-details/quiz"
              className={`w-[228px] px-2 py-1.5 my-1 rounded shadow justify-start items-center gap-2 inline-flex cursor-pointer ${
                active === "quiz" || pathname === "/quiz"
                  ? "bg-gray-100 text-[#101828]"
                  : "text-gray-500"
              }`}
              onClick={() => toggleActive("quiz")}
            >
              <div className="w-5 h-5 justify-center items-center flex relative">
                <Image src={question} layout="fill" alt="question svg" />
              </div>
              <div className="w-full h-5 justify-start items-center gap-2 flex">
                <div className="w-full h-5 justify-between items-center flex">
                  <span className="text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
                    Quiz
                  </span>
                  <div className=" bg-emerald-50 rounded-sm shadow justify-end items-center flex">
                    <span className="w-3 h-[17px] text-emerald-700 flex items-center justify-center text-[10px] font-normal font-['Inter'] leading-tight">
                      5
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="/all-courses/course-details/scores"
              className={`w-[228px] px-2 py-1.5 my-1 rounded shadow justify-start items-center gap-2 inline-flex cursor-pointer ${
                active === "scores" || pathname === "/scores"
                  ? "bg-gray-100 text-[#101828]"
                  : "text-gray-500"
              }`}
              onClick={() => toggleActive("scores")}
            >
              <div className="w-5 h-5 justify-center items-center flex relative">
                <Image src={verify} layout="fill" alt="verify svg" />
              </div>
              <div className="h-5 justify-start items-center gap-2 flex">
                <span className=" text-sm font-medium font-['Inter'] leading-tight">
                  Scores
                </span>
              </div>
            </Link>
            <Link
              href="/certificate"
              className={`w-[228px] px-2 py-1.5 my-1 rounded shadow justify-start items-center gap-2 inline-flex cursor-pointer ${
                active === "certificate" || pathname === "/certificate"
                  ? "bg-gray-100 text-medium text-[#101828]"
                  : "text-gray-500"
              }`}
              onClick={() => toggleActive("certificate")}
            >
              <div className="w-5 h-5 justify-center items-center flex relative">
                <Image src={award} layout="fill" alt="award svg" />
              </div>
              <div className="w-full h-5 justify-start items-center gap-2 flex">
                <div className="w-full h-5 justify-between items-center flex">
                  <div className=" text-sm font-medium font-['Inter'] leading-tight">
                    Certificate
                  </div>
                  <div className="w-[12.93px] h-[12.93px]">
                    <Flex align="center" wrap="wrap" gap={30}>
                      <Progress type="circle" percent={15} size={12} />
                    </Flex>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-6 h-6 left-[252px] top-[5px] absolute cursor-pointer">
          <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow border border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#667085"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="">
        <div className="w-full flex items-center justify-center  flex-col gap-2">
          <div className="w-[138px] px-2 py-0.5 flex items-center justify-center bg-gradient-to-b from-white to-indigo-50 rounded shadow border border-gray-200 gap-2 ">
            <div className="w-3.5 h-3.5 relative">
              <Image src={cube} alt="cube" layout="fill" />
            </div>
            <h6 className="text-slate-700 text-xs font-medium font-['Inter'] leading-[18px]">
              Related courses
            </h6>
          </div>

          {/* caroseul */}

          <div className="my-5" style={{ width: "100%", position: "relative" }}>
            <ResponsiveContainer
              carouselRef={ref}
              render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 5;
                if (parentWidth <= 1440) currentVisibleSlide = 3;
                if (parentWidth <= 1080) currentVisibleSlide = 3;
                return (
                  <StackedCarousel
                    ref={carouselRef}
                    slideComponent={Card}
                    slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                    carouselWidth={parentWidth}
                    data={data}
                    className="!h-[200px]"
                    currentVisibleSlide={currentVisibleSlide}
                    maxVisibleSlide={5}
                    useGrabCursor
                  />
                );
              }}
            />
          </div>
        </div>

        {/* EXPLORE COURSES */}

        <div className=" relative mx-5 h-[58.42px]">
          <Image src={exploreCard} layout="fill" alt="explore card" />
        </div>

        {/* LOG OUT */}
        <div className="mx-5 ">
          <div className="w-full h-8 py-1.5 my-5  justify-start items-center gap-2 inline-flex cursor-pointer">
            <div className="w-5 h-5 justify-center items-center flex relative">
              <Image src={logout} alt="logout" layout="fill" />
            </div>

            <div className="h-5 justify-start items-center gap-2 flex">
              <span className="text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
                Log out
              </span>
            </div>
          </div>

          <PFP />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
