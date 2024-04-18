'use client'

import React, { useEffect, useState } from 'react'
import command from '../../public/assets/command.svg'
import Image from 'next/image'

type Props = {}

const CourseTitle = (props: Props) => {
  const [currentTime, setCurrentTime] = useState('')
  const [isMorning, setIsMorning] = useState(true)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const day = now.toLocaleString('default', { weekday: 'long' })
      const time = now.toLocaleString('default', {
        hour: 'numeric',
        minute: 'numeric',
      })
      setCurrentTime(`${day}, ${time}`)

      // Check if it's morning or night
      const hours = now.getHours()
      setIsMorning(hours >= 6 && hours < 18)
    }

    updateTime() // Initial update
    const interval = setInterval(updateTime, 60000) // Update time every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="p-10 w-full h-[92px] pb-10 border-b border-gray-200 justify-between items-center flex">
      <div className="w-full h-[68px] justify-between items-center flex">
        <div className="flex-col justify-start items-start gap-1 inline-flex">
          <div className="justify-start items-center gap-1 inline-flex">
            <div className="text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
              👋🏻 Hi, Michael Ross
            </div>
            <div className="justify-start items-center gap-1.5 flex">
              <div className="w-[0px] h-[15px] relative">
                <div className="w-0.5 h-0.5 left-[-0.50px] top-[6.50px] absolute bg-gray-500 rounded-full" />
              </div>
              <div className="w-[0px] h-[15px] relative">
                <div className="w-3 h-[0px] left-1 top-[1.50px] absolute origin-top-left rotate-90 border border-gray-200"></div>
              </div>
              <div className="text-gray-500 text-xs font-medium font-['Inter'] leading-[18px]">
                {isMorning ? '🌤️' : '🌙'} {currentTime}{' '}
              </div>
            </div>
          </div>
          <div className="font-space-grotesk text-gray-900 text-4xl font-medium leading-[44px] tracking-wide">
            My Courses
          </div>
        </div>
        <div className="w-[465px] h-9 px-4 py-2 bg-white rounded-lg shadow border border-gray-300 justify-between items-center flex">
          <div className="justify-start w-full items-center gap-4 flex">
            <div className="w-3.5 h-3.5 justify-center items-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight w-full outline-none"
              placeholder="Search for anything..."
            />
          </div>
          <>
            <div className="justify-between items-center flex">
              <div className="w-3.5 h-[13px] px-0.5 pt-px pb-0.5 bg-white rounded-sm shadow border border-gray-200 justify-center items-center flex">
                <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                  <Image src={command} width={10} height={10} alt="command" />
                </div>
              </div>
              <span className="w-3.5 text-[#667085] h-[13px] px-0.5 pt-px pb-0.5 bg-white rounded-sm justify-center items-center flex">
                +{' '}
              </span>
              <div className="h-[13px] pl-1 pr-[3px] bg-white rounded-sm shadow border border-gray-200 justify-center items-center flex">
                <div className="w-[7px] h-[17px]flex items-center justify-center text-gray-500 text-[10px] font-normal font-['Inter'] leading-tight">
                  K
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </section>
  )
}

export default CourseTitle
