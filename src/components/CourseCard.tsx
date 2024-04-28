"use client";

import React, { useState } from "react";

import Image from "next/image";
import user from "../../public/assets/user-octagon.png";
import { Avatar, Modal, Rate, Tooltip } from "antd";
import share from "../../public/assets/share.svg";
import Link from "next/link";
import ShareModal from "./ShareModal/ShareModal";
import GroupAvater from "@/app/_components/GroupAvater";

type Props = {};

const CourseCard = (props: Props) => {
  const [shareModal, setShareModal] = useState(false);

  const instructors = [
    {
      firstname: "Skillzo",
      lastname: "Instructor",
      image: "/assets/portrait-person-wearing-graphic-eye-makeup.jpg",
    },
    {
      firstname: "Skillzo",
      lastname: "Instructor",
      image: null,
    },
    {
      firstname: "killzo",
      lastname: "nstructor",
      image: "/assets/portrait-person-wearing-graphic-eye-makeup.jpg",
    },
    {
      firstname: "Skillzo",
      lastname: "Instructor",
      image: "/assets/portrait-person-wearing-graphic-eye-makeup.jpg",
    },
  ];

  return (
    <div className=" bg-gray-100 rounded-xl  shadow-md   border border-gray-200 flex-col inline-flex">
      <div className="rounded-xl ">
        <Image
          src="/assets/course-thumbnail.png"
          alt="course-thumbnail"
          sizes="100vw"
          width="0"
          height="0"
          className="rounded-t-xl  w-full h-[200px] object-cover"
        />

        {/* COURSE DESCRIPTION */}
        <div className="self-stretch flex-col justify-start items-start flex">
          <div className="self-stretch  py-1 bg-white flex-col justify-start items-start gap-2 flex rounded-b-2xl">
            <div className="px-3 py-2 space-y-4">
              <div className="space-y-1">
                <h2 className="text-gray-900  font-medium ">
                  Digital Marketing Fundamentals
                </h2>

                <p className=" text-gray-500 text-sm font-normal w-[90%]">
                  Master the essentials of digital marketing including SEO,
                  social media...
                </p>
              </div>

              <div className="fc gap-2">
                <div className="text-sm text-gray-600">4 Modules</div>

                <Rate allowHalf defaultValue={2.5} className="text-sm" />
              </div>
            </div>

            {/* INSTRUCTORS PROFILE */}
            <div className="self-stretch h-[34px] px-3 py-1 flex-col justify-start items-start gap-px flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="h-[26px] px-1 py-px bg-white rounded-2xl shadow border border-gray-200 justify-start items-center gap-1 flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <Image src={user} alt="user" width={100} height={100} />
                  </div>

                  {/* user group */}
                  <div className="h-6 justify-between items-start flex">
                    <GroupAvater users={instructors} />
                  </div>
                </div>

                <div className="justify-start items-center gap-1 flex">
                  <div className="w-3 h-[0px] rotate-90 border border-gray-200"></div>
                  <div className="w-4 h-4 justify-center items-center flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#8098F9"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                    20
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SHARE BUTTON */}

      <div className="w-full mt-2 p-2 justify-center  items-center gap-2 flex">
        <div className="w-[70%]">
          <Link href="/all-courses/course-details">
            <button className="w-full px-3 py-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow border border-violet-500 flex-col justify-center items-center gap-px flex">
              <p className="text-violet-50 text-xs">Start</p>
            </button>
          </Link>
        </div>

        <Link
          href="#"
          className="px-2 py-2 bg-white rounded shadow border border-gray-300 justify-center items-center gap-1 flex"
        >
          <button
            className="justify-center items-center flex"
            onClick={() => setShareModal(true)}
          >
            <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
              Share
            </span>
            <div className="w-3.5 h-3.5 justify-center items-center flex relative">
              <Image src={share} layout="fill" objectFit="cover" alt="share" />
            </div>
          </button>

          <ShareModal shareModal={shareModal} setShareModal={setShareModal} />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
