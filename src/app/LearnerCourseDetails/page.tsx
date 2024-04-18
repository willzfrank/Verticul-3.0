'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import CurriculumProgressTracker from '@/components/ProgressTracker/CurriculumProgressTracker'
import ProgressTrackerCard from '@/components/ProgressTracker/ProgressTrackerCard'
import NavbarBanner from '@/components/navbar/NavbarBanner'
import completedImage from '../../../public/assets/completedCourseCard.svg'
import EmptyCourse from '@/components/EmptyCourse'

// Dynamically import CourseTitle
const CourseTitle = dynamic(() => import('@/components/CourseTitle'), {
  ssr: false,
})
const CourseCardContainer = dynamic(
  () => import('@/components/CourseCardContainer'),
  { ssr: false }
)

const LearnerCourseDetails = () => {
  const [userPaidForCourse, setUserPaidForCourse] = useState(true)

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
            />
            <div className="w-px h-14 border-[1.5px] bg-[#E0E3E8] " />
            <ProgressTrackerCard
              progress="5"
              title="Uncompleted Courses"
              image="/assets/uncompletedCourseBox.svg"
            />
            <div className="w-px h-14 border-[1.5px] bg-[#E0E3E8] " />
            <ProgressTrackerCard
              progress="12"
              title="Certificate Acquired"
              image="/assets/certificateAward.svg"
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
    </main>
  )
}

export default LearnerCourseDetails
