'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import exploreCard from '../../../public/assets/images/sidebar/explore-card.png'
import safari from '../../../public/assets/images/sidebar/safari.png'
import Image from 'next/image'

import { Flex, Progress } from 'antd'
import Link from 'next/link'
import PFP from '@/app/_components/PFP'
import {
  ResponsiveContainer,
  StackedCarousel,
} from 'react-stacked-center-carousel'
import { MdOutlineVerified } from 'react-icons/md'
import { LiaAwardSolid } from 'react-icons/lia'
import { PiFolder } from 'react-icons/pi'
import { GoVerified } from 'react-icons/go'

import { BsPatchQuestion } from 'react-icons/bs'

import { CiLogout } from 'react-icons/ci'
import { HiMiniChevronDoubleRight } from 'react-icons/hi2'
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi'
import { useAppContext } from '@/context/AppContext'

type CardProps = {
  data: { cover: string; title: string }[]
  dataIndex: number
}
const course_navlinks = [
  {
    link: '/all-courses/course-details/assessment',
    icon: PiFolder,
    name: 'Asssement',
    notif: (
      <div className="p-1 text-amber-500 bg-amber-50 text-[10px] rounded">
        10
      </div>
    ),
  },
  {
    link: '/all-courses/course-details/quiz',
    icon: BsPatchQuestion,
    name: 'Quiz',
    notif: (
      <div className="p-1 text-green-500 bg-green-50 text-[10px] rounded">
        10
      </div>
    ),
  },
  {
    link: '/all-courses/course-details/scores',
    icon: GoVerified,
    name: 'Score',
  },
  {
    link: '/all-courses/course-details/certificate',
    icon: LiaAwardSolid,
    name: 'Certificate',
    notif: <Progress type="circle" percent={25} size={18} />,
  },
]

export const data = [
  {
    cover: 'https://images6.alphacoders.com/679/thumb-1920-679459.jpg',
    title: 'Interstaller',
  },
  {
    cover: 'https://images2.alphacoders.com/851/thumb-1920-85182.jpg',
    title: 'Inception',
  },
  {
    cover: 'https://images6.alphacoders.com/875/thumb-1920-875570.jpg',
    title: 'Blade Runner 2049',
  },
  {
    cover: 'https://images6.alphacoders.com/114/thumb-1920-1141749.jpg',
    title: 'Icon man 3',
  },
  {
    cover: 'https://images3.alphacoders.com/948/thumb-1920-948864.jpg',
    title: 'Venom',
  },
  {
    cover: 'https://images2.alphacoders.com/631/thumb-1920-631095.jpg',
    title: 'Steins Gate',
  },
  {
    cover: 'https://images4.alphacoders.com/665/thumb-1920-665242.png',
    title: 'One Punch Man',
  },
  {
    cover: 'https://images2.alphacoders.com/738/thumb-1920-738176.png',
    title: 'A Silent Voice',
  },
  {
    cover: 'https://images8.alphacoders.com/100/thumb-1920-1005531.jpg',
    title: 'Demon Slayer',
  },
  {
    cover: 'https://images2.alphacoders.com/582/thumb-1920-582804.png',
    title: 'Attack On Titan',
  },
]

export const Card = React.memo(function (props: CardProps) {
  const { data, dataIndex } = props
  const { cover } = data[dataIndex]

  return (
    <div
      style={{
        width: '100%',
        height: 300,
        userSelect: 'none',
      }}
      className="my-slide-component"
    >
      <img
        className="w-full h-full object-cover"
        width={0}
        height={0}
        alt="carousel-slide"
        sizes="100vw"
        draggable={false}
        src={cover}
      />
    </div>
  )
})

Card.displayName = 'Card'

const Sidebar = () => {
  const ref = React.useRef()
  const [isCourseDetailsOpen, setIsCourseDetailsOpen] = useState(false)
  const [active, setActive] = useState('')
  const pathname = usePathname()
  const { isExpanded, setIsExpanded } = useAppContext()

  const toggleDropdown = () => {
    setIsCourseDetailsOpen((prev) => !prev)
  }

  const toggleActive = (item: React.SetStateAction<string>) => {
    setActive(active === item ? '' : item)
  }
  return (
    <div
      className={`hidden lg:block fixed h-[calc(100vh-100px)] bg-white ${
        isExpanded ? '!w-[300px]' : 'w-[70px]'
      } `}
    >
      <div
        className={`relative lg:flex flex-col items-center justify-between h-full transition-all border-r `}
      >
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute z-10 -right-5  w-8 h-8 shadow border rounded-full text-gray-500 fcc bg-white cursor-pointer"
        >
          {isExpanded ? (
            <HiMiniChevronDoubleRight size={20} />
          ) : (
            <HiOutlineChevronDoubleLeft size={16} />
          )}
        </div>

        {/* navlinks */}
        <div className="border-b pb-2 w-full px-2">
          {/* <div
          className={`px-2 w-[228px]  py-1.5 my-1 rounded shadow justify-start items-center gap-2 inline-flex cursor-pointer ml-4 ${
            active === "coursedetails" || pathname === "/coursedetails"
              ? "bg-gray-100 text-[#101828]"
              : "text-gray-500"
          }`}
          onClick={() => {
            toggleDropdown();
            toggleActive("courseDetails");
          }}
        >
          <div className="w-5 h-5 justify-center items-center flex relative">
            <Image src={book} layout="fill" alt="book svg" />
          </div>

          <div className=" w-full h-5 justify-between items-center flex">
            <span className=" text-sm font-medium font-['Inter'] leading-tight">
              Course Details
            </span>
            <div className="w-3 h-3 justify-center items-center flex">
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div> */}

          {/* {isCourseDetailsOpen && (
          <div className="ml-10 mt-2.5  justify-start items-start gap-3 inline-flex">
            <div className="w-[0px] h-[93px] relative">
              <div className="w-[93px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border border-gray-200"></div>
            </div>
            <div className="flex-col justify-start items-start gap-[11px] inline-flex animate__animated animate__fadeIn ">
              <Link
                href="/coursedetails"
                className="w-[98px] justify-between items-center inline-flex cursor-pointer"
              >
                <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">
                  Module 1
                </div>
                <div className="w-[13.25px] h-[13.25px] relative">
                  <div className="w-[13.25px] h-[13.25px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                  <div className="w-[6.31px] h-[6.31px] left-[3.34px] top-[3.34px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
                </div>
              </Link>

              <Link
                href="#"
                className="w-[98px] justify-between items-center inline-flex cursor-pointer"
              >
                <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">
                  Module 2
                </div>
                <div className="w-[13.25px] h-[13.25px] relative">
                  <div className="w-[13.25px] h-[13.25px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                  <div className="w-[6.31px] h-[6.31px] left-[3.34px] top-[3.34px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
                </div>
              </Link>
              <Link
                href="/coursedetails"
                className="w-[98px] justify-between items-center inline-flex cursor-pointer"
              >
                <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">
                  Module 3
                </div>
                <div className="w-[13.25px] h-[13.25px] relative">
                  <div className="w-[13.25px] h-[13.25px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                  <div className="w-[6.31px] h-[6.31px] left-[3.34px] top-[3.34px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
                </div>
              </Link>
            </div>
          </div>
        )} */}

          <div className="space-y-3 ">
            {course_navlinks.map((nav, idx) => (
              <Link
                key={idx}
                href={nav.link}
                className={`px-2 cursor-pointer rounded-md  ${
                  isExpanded
                    ? 'py-2 hover:bg-gray-50 fbc'
                    : '!px-4 py-3 hover:bg-gray-100 fcc'
                } transition-all`}
              >
                <div className="fc gap-3">
                  {
                    <nav.icon
                      size={isExpanded ? 22 : 26}
                      className="text-gray-500"
                    />
                  }

                  {isExpanded && <p className="text-gray-500 ">{nav.name}</p>}
                </div>

                {isExpanded && nav.notif}
              </Link>
            ))}
          </div>
        </div>

        {/* section 2 */}
        <div className="">
          <div className="w-full flex items-center justify-center  flex-col gap-2 my-10 px-2 border-b pb-4">
            {/* <div className="w-[138px] px-2 py-0.5 flex items-center justify-center bg-gradient-to-b from-white to-indigo-50 rounded shadow border border-gray-200 gap-2">
            <div className="w-3.5 h-3.5 relative">
              <Image src={cube} alt="cube" layout="fill" />
            </div>
            <h6 className="text-slate-700 text-xs font-medium font-['Inter'] leading-[18px]">
              Related courses
            </h6>
          </div> */}

            {/* caroseul */}
            {isExpanded && (
              <div
                className="my-5"
                style={{ width: '100%', position: 'relative' }}
              >
                <ResponsiveContainer
                  carouselRef={ref}
                  render={(parentWidth, carouselRef) => {
                    let currentVisibleSlide = 5
                    if (parentWidth <= 1440) currentVisibleSlide = 3
                    if (parentWidth <= 1080) currentVisibleSlide = 3
                    return (
                      <StackedCarousel
                        ref={carouselRef}
                        slideComponent={Card}
                        slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                        carouselWidth={parentWidth}
                        data={data}
                        className="!h-[150px]"
                        currentVisibleSlide={currentVisibleSlide}
                        maxVisibleSlide={5}
                        useGrabCursor
                      />
                    )
                  }}
                />
              </div>
            )}

            <Image
              src={isExpanded ? exploreCard : safari}
              alt="explore card"
              className={`transition-all w-full h-max cursor-pointer hover:opacity-80`}
              sizes="100vw"
              width="0"
              height="0"
            />
          </div>

          <div className="px-2">
            <div
              className={`text-gray-500 fc gap-3 mb-5 hover:bg-gray-50 px-2 py-2 cursor-pointer rounded-md`}
            >
              <CiLogout size={25} className="" />
              {isExpanded && <p className="">Log out</p>}
            </div>

            <PFP details={isExpanded} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
