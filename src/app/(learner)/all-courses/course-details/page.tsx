'use client'
import CourseDescriptionWidget from '@/components/CourseDescriptionWidget'
import IntroductionModal from '@/components/IntroductionModal'
import { useAppContext } from '@/context/AppContext'
import React, { useState } from 'react'

const CourseDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { isExpanded } = useAppContext()

  const handleStartLearning = () => {
    setIsModalOpen(true)
  }
  return (
    <div className={!isExpanded ? 'ml-[100px] w-full' : 'ml-[300px] w-full'}>
      {' '}
      <div className="">
        <CourseDescriptionWidget handleStartLearning={handleStartLearning} />
      </div>
      <IntroductionModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </div>
  )
}

export default CourseDetails
