"use client";
import CourseDescriptionWidget from "@/components/CourseDescriptionWidget";
import IntroductionModal from "@/components/IntroductionModal";
import React, { useState } from "react";

const CourseDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartLearning = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="">
        <CourseDescriptionWidget handleStartLearning={handleStartLearning} />
      </div>

      <IntroductionModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </>
  );
};

export default CourseDetails;
