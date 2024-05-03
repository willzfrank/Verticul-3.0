import { Modal } from "antd";
import React from "react";
import Uncompleted from "../../public/assets/uncompletedCourseBox.svg";
import certificate_document from "/assets/certificate_document.svg";
import certificate_image from ".assets/certificate_image.png";
import certificate_award from "assets/certificate_award_blue.svg";
import arrow_right from "../../public/assets/arrow-right.svg";
import { FaSquareArrowUpRight } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";
import { ProgressBar } from "@/components/CustomProgress";

export const UncompletedCourseOverlay = () => {
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
            <h2 className="text-gray-900 font-medium ">
              Digital Marketing Fundamentals
            </h2>
          </div>

          <p className="text-gray-400 text-xs font-medium mt-2">
            2 Modules left
          </p>
        </div>

        <div className="fbc ">
          <ProgressBar percentage={80} />

          <Link
            href="/course-details"
            className="fc gap-1 font-medium hover:text-indigo-800"
          >
            <div className="text-indigo-500 text-xs ">Finish up</div>
            <FaSquareArrowUpRight className="text-u-purple" />
          </Link>
        </div>
      </div>
    </div>
  );
};
