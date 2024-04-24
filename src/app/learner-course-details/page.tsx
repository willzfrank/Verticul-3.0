"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import CurriculumProgressTracker from "@/components/ProgressTracker/CurriculumProgressTracker";
import ProgressTrackerCard from "@/components/ProgressTracker/ProgressTrackerCard";
import NavbarBanner from "@/components/navbar/NavbarBanner";
import completedImage from "../../../public/assets/completedCourseCard.svg";
import EmptyCourse from "@/components/EmptyCourse";
import CompletedCourseModal from "@/components/CompletedCourseModal";
import UncompletedCourseModal from "@/components/UncompletedCourseModal";

// Dynamically import CourseTitle
const CourseTitle = dynamic(() => import("@/components/CourseTitle"), {
  ssr: false,
});
const CourseCardContainer = dynamic(
  () => import("@/components/CourseCardContainer"),
  { ssr: false }
);

const LearnerCourseDetails = () => {
  const [userPaidForCourse, setUserPaidForCourse] = useState(true);
  const [IsOpenCompletedModal, setIsOpenCompletedModal] = useState(false);
  const [IsOpenUncompletedModal, setIsOpenUncompletedModal] = useState(false);

  return (
    <main>
      <NavbarBanner />
      <CourseTitle />

      {userPaidForCourse ? (
        <div>
          <div className="p-10 flex items-center justify-between ">
            <ProgressTrackerCard
              progress="14"
              title="Completed Courses"
              image={completedImage}
              setIsOpenModal={setIsOpenCompletedModal}
            />
            <div className="w-px h-14 border-[1.5px] bg-[#E0E3E8] " />
            <ProgressTrackerCard
              progress="5"
              title="Uncompleted Courses"
              image="/assets/uncompletedCourseBox.svg"
              setIsOpenModal={setIsOpenUncompletedModal}
            />
            <div className="w-px h-14 border-[1.5px] bg-[#E0E3E8] " />
            <ProgressTrackerCard
              progress="12"
              title="Certificate Acquired"
              image="/assets/certificateAward.svg"
              setIsOpenModal={setIsOpenCompletedModal}
            />
            <div className="w-px h-14 border-[1.5px] bg-[#E0E3E8] " />
            <CurriculumProgressTracker />
          </div>

          <div className="p-10 grid grid-cols-3 gap-8">
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
      <CompletedCourseModal
        isOpenCompletedModal={IsOpenCompletedModal}
        setIsOpenCompletedModal={setIsOpenCompletedModal}
      />
      <UncompletedCourseModal
        isOpenUncompletedModal={IsOpenUncompletedModal}
        setIsOpenUncompletedModal={setIsOpenUncompletedModal}
      />
    </main>
  );
};

export default LearnerCourseDetails;
