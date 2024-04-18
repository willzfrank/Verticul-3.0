'use client'

import { Modal } from 'antd'
import React, { useState } from 'react'
import magicStar from '../../public/assets/magic-star.svg'

import 'flowbite'

import Image from 'next/image'

type Props = {
  rateModal: boolean
  setRateModal: (value: boolean) => void
}

const RateModal: React.FC<Props> = ({ rateModal, setRateModal }) => {
  const [hoveredStars, setHoveredStars] = useState<number>(0)
  const [clickedStars, setClickedStars] = useState<number>(0)

  const handleMouseEnter = (starCount: number) => {
    setHoveredStars(starCount)
  }

  const handleMouseLeave = () => {
    setHoveredStars(0)
  }

  const handleStarClick = (starCount: number) => {
    setClickedStars(starCount)
  }

  return (
    <Modal
      onCancel={() => setRateModal(false)}
      open={rateModal}
      centered
      footer={
        <div className="w-full flex items-center justify-center">
          <button className="w-[201px] h-[26px] px-2 py-1 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow border border-white flex-col justify-center items-center gap-px inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <div className="text-violet-50 text-xs font-medium font-['Inter'] leading-[18px]">
                Submit
              </div>
            </div>
          </button>
        </div>
      }
    >
      <div className="w-full gap-2 flex items-center justify-center flex-col">
        <div className="w-[33px] h-[33px] pl-[9px] pr-2 pt-[9px] pb-2 bg-violet-50 rounded-lg justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch justify-center relative items-center inline-flex">
            <Image src={magicStar} layout="fill" alt="magic star" />
          </div>
        </div>
        <h2 className="text-gray-900 text-xs font-medium font-['Inter'] leading-[18px]">
          Give feedback
        </h2>
        <span className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
          How was your learning experience?
        </span>
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          {[1, 2, 3, 4, 5].map((starCount) => (
            <svg
              key={starCount}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={
                clickedStars >= starCount
                  ? '#A3A2FF'
                  : hoveredStars >= starCount
                  ? '#A3A2FF'
                  : 'currentColor'
              }
              className="w-5 h-5"
              onMouseEnter={() => handleMouseEnter(starCount)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleStarClick(starCount)}
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default RateModal
