"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import CurriculumProgressTracker from "@/components/ProgressTracker/CurriculumProgressTracker";
import ProgressTrackerCard from "@/components/ProgressTracker/ProgressTrackerCard";
import NavbarBanner from "@/components/navbar/NavbarBanner";
import completedImage from "../../../public/assets/completedCourseCard.svg";
import EmptyCourse from "@/components/EmptyCourse";
import CourseCardContainer from "@/components/CourseCardContainer";
import { IoMdClose } from "react-icons/io";
import { BiSolidCopyAlt } from "react-icons/bi";
import { CompletedCourseOverlay } from "../../_components/courses/CompletedCourseOverlay";
import { UncompletedCourseOverlay } from "../../_components/courses/UncompletedCourseOverlay";
import { TbBriefcaseFilled } from "react-icons/tb";

// Dynamically import CourseTitle
const CourseTitle = dynamic(() => import("@/components/CourseTitle"), {
  ssr: false,
});
// const CourseCardContainer = dynamic(
//   () => import("@/components/CourseCardContainer"),
//   { ssr: false }
// );

const LearnerCourseDetails = () => {
  const [userPaidForCourse, setUserPaidForCourse] = useState(true);
  const [openCourseDropDown, setOpenCourseDropDown] = useState<any>({
    modal: false,
    title: "",
    key: "",
  });

  return (
    <main>
      <NavbarBanner />
      <CourseTitle />

      {userPaidForCourse ? (
        <div className="relative">
          <div className="p-10 flex items-center justify-between  ">
            <ProgressTrackerCard
              progress="14"
              title="Completed Courses"
              image={completedImage}
              onClick={() =>
                setOpenCourseDropDown({
                  modal: true,
                  title: "Completed Course",
                  key: "completed_course",
                })
              }
            />

            <div className="w-px h-14 border-[1.5px] bg-[#E0E3E8] " />
            <ProgressTrackerCard
              progress="5"
              title="Uncompleted Courses"
              image="/assets/uncompletedCourseBox.svg"
              onClick={() =>
                setOpenCourseDropDown({
                  modal: true,
                  title: "Uncompleted Courses",
                  key: "uncompleted_course",
                })
              }
            />

            <div className="w-px h-14 border-[1.5px] bg-[#E0E3E8] " />
            <ProgressTrackerCard
              progress="12"
              title="Certificate Acquired"
              image="/assets/certificateAward.svg"
              onClick={() =>
                setOpenCourseDropDown({
                  modal: true,
                  title: "Completed Course",
                  key: "completed_course",
                })
              }
            />
            <div className="w-px h-14 border-[1.5px] bg-[#E0E3E8] " />
            <CurriculumProgressTracker />

            {openCourseDropDown.modal && (
              <div className="absolute z-30 -top-[66px] right-8  bg-u-slate border rounded-xl  shadow-lg text-xs  w-full max-w-[600px]">
                <div className="bg-white px-5 fbc py-3 rounded-t-xl border-b ">
                  <div className="fc gap-2">
                    <div className="border w-10 h-10 fcc rounded-full  ">
                      {openCourseDropDown.key === "uncompleted_course" ? (
                        <TbBriefcaseFilled color="black" size={18} />
                      ) : (
                        <BiSolidCopyAlt color="black" size={18} />
                      )}
                    </div>
                    <p className="text-lg font-medium">
                      {openCourseDropDown.title}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setOpenCourseDropDown({
                        modal: false,
                        title: "",
                        key: "",
                      })
                    }
                    className="border border-gray-200 rounded-md w-8 h-8 fcc cursor-pointer"
                  >
                    <IoMdClose size={18} />
                  </button>
                </div>

                <div className="overflow-y-scroll h-[60vh]">
                  <div className="bg-u-slate px-8 py-3 pb-10 space-y-6 rounded-b-xl mt-6">
                    {openCourseDropDown.key === "uncompleted_course" && (
                      <UncompletedCourseOverlay />
                    )}
                    {openCourseDropDown.key === "completed_course" && (
                      <CompletedCourseOverlay />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-10 grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-16 gap-x-10">
            <CourseCardContainer />
            <CourseCardContainer />
            <CourseCardContainer />
            <CourseCardContainer />
            <CourseCardContainer />
          </div>
        </div>
      ) : (
        <EmptyCourse />
      )}
    </main>
  );
};

export default LearnerCourseDetails;
