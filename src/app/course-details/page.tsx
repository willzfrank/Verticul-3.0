'use client'

import dynamic from 'next/dynamic'
import React, { useState } from 'react'

// Dynamically import
const CourseDescriptionWidget = dynamic(
  () => import('@/components/CourseDescriptionWidget'),
  {
    ssr: false,
  }
)
const Sidebar = dynamic(() => import('@/components/Sidebar/Sidebar'), {
  ssr: false,
})

const IntroductionModal = dynamic(
  () => import('@/components/IntroductionModal'),
  {
    ssr: false,
  }
)

type Props = {}

const CourseDetails = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleStartLearning = () => {
    setIsModalOpen(true)
  }
  return (
    <>
      <div className="w-[80%]">
        <CourseDescriptionWidget handleStartLearning={handleStartLearning} />
      </div>
      <IntroductionModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </>
  )
}

export default CourseDetails
