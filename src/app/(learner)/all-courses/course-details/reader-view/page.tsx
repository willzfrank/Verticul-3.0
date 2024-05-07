'use client'

import React from 'react'
import CourseDetailsHeader from '@/components/CourseDetailsHeader'
import CourseDetailsTab from '@/components/CourseDetailsTab'
import ReaderViewBody from '@/components/ReaderViewBody'

type Props = {
  handleStartLearning: () => void
}

const ReaderView: React.FC<Props> = ({ handleStartLearning }) => {
  const [isSubscribed, setIsSubscribed] = React.useState(true)
  return (
    <div className="w-full">
      <CourseDetailsHeader isSubscribed={isSubscribed} />
      <div className="w-full mt-5   h-[0px] border border-gray-200"></div>

      {/* COURSE BODY */}
      <div className="w-full flex items-start gap-5 justify-between px-5">
        {/* Video Body */}
        <ReaderViewBody />
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
