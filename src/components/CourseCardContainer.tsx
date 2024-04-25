"use client";

import React, { useState } from "react";

import Image from "next/image";
import user from "../../public/assets/user-octagon.png";
import { Avatar, Modal, Tooltip } from "antd";
import share from "../../public/assets/share.svg";
import Link from "next/link";
import ShareModal from "./ShareModal/ShareModal";

type Props = {};

const CourseCardContainer = (props: Props) => {
  const [shareModal, setShareModal] = useState(false);

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
          <div className="self-stretch  py-1 bg-white flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch flex-col justify-start items-start gap-px flex">
              <div className="self-stretch h-[116px] px-3 py-2 border-b border-gray-300 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch h-[66px] flex-col justify-start items-start gap-1.5 flex">
                  <h2 className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
                    Digital Marketing Fundamentals
                  </h2>
                  <p className="self-stretch h-10 text-gray-500 text-sm font-normal font-['Inter'] leading-tight w-[90%]">
                    Master the essentials of digital marketing including SEO,
                    social media...
                  </p>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div>
                    <span className="text-slate-700 text-xs font-medium font-['Inter'] leading-[18px]">
                      4{" "}
                    </span>
                    <span className="text-gray-500 text-xs font-medium font-['Inter'] leading-[18px]">
                      Modules
                    </span>
                  </div>
                  <div className="justify-start items-start gap-[3px] flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FEDF89"
                      className="w-3 h-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FEDF89"
                      className="w-3 h-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FEDF89"
                      className="w-3 h-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FEDF89"
                      className="w-3 h-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#FEDF89"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* INSTRUCTORS PROFILE */}
            <div className="self-stretch h-[34px] px-3 py-1 flex-col justify-start items-start gap-px flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="h-[26px] px-1 py-px bg-white rounded-2xl shadow border border-gray-200 justify-start items-center gap-1 flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <Image src={user} alt="user" width={100} height={100} />
                  </div>
                  <div className="h-6 justify-between items-start flex">
                    <Avatar.Group>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          src="https://via.placeholder.com/24x24"
                          className="w-6 h-6 rounded-full border border-white"
                        />
                      </Tooltip>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          style={{ backgroundColor: "#f56a00" }}
                          className="w-6 h-6 rounded-full border border-white"
                        >
                          K
                        </Avatar>
                      </Tooltip>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          style={{ backgroundColor: "#87d068" }}
                          className="w-6 h-6 rounded-full border border-white"
                        />
                      </Tooltip>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          style={{ backgroundColor: "#1677ff" }}
                          className="w-6 h-6 rounded-full border border-white"
                        />
                      </Tooltip>
                    </Avatar.Group>
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
        <Link
          href="/course-details"
          className="w-[255px] p-[0.50px] rounded border border-indigo-700 flex-col justify-start items-start gap-px inline-flex"
        >
          <div className="self-stretch h-[26px] px-2 py-1 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow border border-violet-400 flex-col justify-center items-center gap-px flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <span className="text-violet-50 text-xs font-medium font-['Inter'] leading-[18px]">
                Start
              </span>
            </div>
          </div>
        </Link>
        <Link
          href="#"
          className="px-2 py-1 bg-white rounded shadow border border-gray-300 justify-center items-center gap-1 flex"
        >
          <button
            className="justify-center items-center gap-1 flex"
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

export default CourseCardContainer;
