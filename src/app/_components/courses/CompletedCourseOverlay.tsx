import { Modal } from "antd";
import React from "react";
import completed from "../../public/assets/completedCourseCard.svg";
import Image from "next/image";
import Link from "next/link";

export const CompletedCourseOverlay = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow border border-gray-200 flex items-start">
      <Image
        src="/assets/certificate_image.png"
        alt="thumbnail"
        width="0"
        height="0"
        sizes="100vw"
        className="rounded-l-xl object-cover h-[100px] w-[40%]"
      />

      <div className="px-3 py-2 w-full h-[100px] flex flex-col justify-between">
        <div>
          <div className="fbc">
            <h2 className="text-gray-900 font-medium">
              Digital Marketing Fundamentals
            </h2>

            <div className="w-5 h-5 relative">
              <Image
                src="/assets/certificate_award_blue.svg"
                layout="fill"
                alt="award"
              />
            </div>
          </div>

          <div className="fc gap-2">
            <div className="justify-start items-center gap-1 flex">
              <div className="w-3.5 h-3.5 justify-center items-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#667085"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
                Jan 23
              </p>
            </div>

            <div className="w-2 h-px bg-gray-500" />
            <div className="justify-start items-center gap-1 flex">
              <div className="w-3.5 h-3.5 justify-center items-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#667085"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
                Apr 15
              </p>
            </div>
          </div>
        </div>

        <div className="fbc mt-5">
          <Link
            href="/certificate"
            className="text-slate-700 text-xs font-medium cursor-pointer"
          >
            See more details
          </Link>

          <div className="justify-start items-center gap-1 flex">
            <Image
              src="/assets/certificate_document.svg"
              alt="certificate"
              width="0"
              height="0"
              sizes="100vw"
              className="rounded-l-xl w-3.5 h-3.5"
            />

            <p className="text-emerald-900 text-xs font-normal font-['Inter'] leading-[18px]">
              Certificate acquired
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
