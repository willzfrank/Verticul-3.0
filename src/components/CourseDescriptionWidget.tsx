'use client'

import React from 'react'
import timer from '../../public/assets/timer.png'
import miniBook from '../../public/assets/miniBook.svg'
import command from '../../public/assets/command.svg'
import courseImage from '../../public/assets/courseImage.png'

import CourseDetailsTab from './CourseDetailsTab'
import CourseDetailsHeader from './CourseDetailsHeader'
import CourseDetailsPanel from './CourseDetailsPanel'

type Props = {
  handleStartLearning: () => void // Define the type of handleStartLearning
}

const CourseDescriptionWidget = ({ handleStartLearning }: Props) => {
  const [isSubscribed, setIsSubscribed] = React.useState(false)
  return (
    <div className="w-full">
      <CourseDetailsHeader isSubscribed={isSubscribed} />
      <div className="w-full mt-5 mb-2  h-[0px] border border-gray-200"></div>

      {/* COURSE BODY */}
      <div className="w-full flex items-start gap-5 justify-between px-5">
        {/* Video Body */}
        <CourseDetailsPanel isSubscribed={isSubscribed} shareCourse={false} />
        {/* Modules */}
        <div className="w-[35%] mt-5">
          <CourseDetailsTab
            handleStartLearning={handleStartLearning}
            isSubscribed={isSubscribed}
          />
        </div>
      </div>
    </div>
  )
}

export default CourseDescriptionWidget
