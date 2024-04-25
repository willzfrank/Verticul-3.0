import { Modal } from "antd";
import React from "react";
import Uncompleted from "../../public/assets/uncompletedCourseBox.svg";
import certificate_document from "../../public/assets/certificate_document.svg";
import certificate_image from "../../public/assets/certificate_image.png";
import certificate_award from "../../public/assets/certificate_award_blue.svg";
import arrow_right from "../../public/assets/arrow-right.svg";

import Image from "next/image";
import Link from "next/link";
import { ProgressBar } from "./CustomProgress";

const UncompletedCourseModal = () => {
  return (
    <div className="my-5">
      <div className="w-full  h-[118px] bg-white rounded-xl shadow border border-gray-200 justify-start items-start inline-flex">
        <div className="w-[204px] h-[118px] relative ">
          <Image
            layout="fill"
            objectFit="cover"
            src={certificate_image}
            alt="thumbnail"
            className="rounded-l-xl"
          />
        </div>
        <div className="grow shrink h-full basis-0 py-1 flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch  flex-col justify-start items-start gap-px flex">
            <div className="self-stretch  px-3 py-2 flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                  <h2 className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
                    Digital Marketing Fundamentals
                  </h2>
                  <p className="text-gray-400 text-xs font-medium font-['Inter'] leading-[18px]">
                    2 Modules left
                  </p>
                </div>
                <div className="w-5 h-5 justify-center items-center flex">
                  <div className="w-5 h-5 relative">
                    <Image src={certificate_award} layout="fill" alt="award" />
                  </div>
                </div>
              </div>
              <div className="w-full h-[18px] justify-between items-center inline-flex">
                <ProgressBar percentage={50} />
                <Link
                  href="/coursedetails"
                  className="justify-start items-center gap-1 flex"
                >
                  <div className="text-indigo-500 text-xs font-medium font-['Inter'] leading-[18px]">
                    Finish up
                  </div>
                  <div className="w-3.5 h-3.5 justify-center items-center relative flex">
                    <Image src={arrow_right} alt="arrow right" layout="fill" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UncompletedCourseModal;
