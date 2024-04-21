'use client'

import React, { useState } from 'react'
import book from '../../../public/assets/book.svg'
import folder from '../../../public/assets/folder.png'
import verify from '../../../public/assets/verify.svg'
import award from '../../../public/assets/award.svg'
import cube from '../../../public/assets/relatedCourseCube.svg'
import logout from '../../../public/assets/logout.png'
import exploreCard from '../../../public/assets/exploreCard.png'

import profile from '../../../public/assets/portrait-person-wearing-graphic-eye-makeup.jpg'
import question from '../../../public/assets/message-question.svg'

import Image from 'next/image'

import { Flex, Progress } from 'antd'
import Link from 'next/link'

const Sidebar = () => {
  const [isCourseDetailsOpen, setIsCourseDetailsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsCourseDetailsOpen((prev) => !prev)
  }
  return (
    <div className="sticky  bg-white">
      {/* Course Details */}
      <div
        className="w-[228px] px-2 py-1.5 mx-4 my-1 bg-gray-100 rounded justify-start items-center gap-2 inline-flex  cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="w-5 h-5 justify-center items-center flex relative">
          <Image src={book} layout="fill" alt="book svg" />
        </div>
        <div className=" w-full h-5 justify-between items-center flex">
          <span className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
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
      </div>

      {isCourseDetailsOpen && (
        <div className="ml-10 mt-2.5  justify-start items-start gap-3 inline-flex">
          <div className="w-[0px] h-[93px] relative">
            <div className="w-[93px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border border-gray-200"></div>
          </div>
          <div className="flex-col justify-start items-start gap-[11px] inline-flex animate__animated animate__fadeIn ">
            <div className="w-[98px] justify-between items-center inline-flex cursor-pointer">
              <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">
                Module 1
              </div>
              <div className="w-[13.25px] h-[13.25px] relative">
                <div className="w-[13.25px] h-[13.25px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                <div className="w-[6.31px] h-[6.31px] left-[3.34px] top-[3.34px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
              </div>
            </div>
            <div className="w-[98px] justify-between items-center inline-flex cursor-pointer">
              <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">
                Module 2
              </div>
              <div className="w-[13.25px] h-[13.25px] relative">
                <div className="w-[13.25px] h-[13.25px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                <div className="w-[6.31px] h-[6.31px] left-[3.34px] top-[3.34px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
              </div>
            </div>
            <div className="w-[98px] justify-between items-center inline-flex cursor-pointer">
              <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">
                Module 3
              </div>
              <div className="w-[13.25px] h-[13.25px] relative">
                <div className="w-[13.25px] h-[13.25px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                <div className="w-[6.31px] h-[6.31px] left-[3.34px] top-[3.34px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="px-4 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-px inline-flex">
        <div className="flex-col justify-start items-start gap-1 flex">
          <Link
            href="/assessment"
            className="w-[228px] px-2 py-1.5 my-1 rounded shadow justify-start items-center gap-2 inline-flex cursor-pointer"
          >
            <div className="w-5 h-5 justify-center items-center relative flex">
              <Image src={folder} layout="fill" alt="folder svg" />
            </div>
            <div className="w-full h-5 justify-start items-center gap-2 flex">
              <div className="w-full h-5 justify-between items-center flex">
                <span className="text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
                  Asssement
                </span>
                <div className="h-[13px] px-px bg-amber-50 rounded-sm shadow justify-center items-center flex">
                  <span className="w-3 h-[17px] text-amber-700 text-[10px] font-normal font-['Inter'] leading-tight">
                    10
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/quiz"
            className="w-[228px] px-2 py-1.5 my-1 rounded shadow justify-start items-center gap-2 inline-flex cursor-pointer"
          >
            <div className="w-5 h-5 justify-center items-center flex relative">
              <Image src={question} layout="fill" alt="question svg" />
            </div>
            <div className="w-full h-5 justify-start items-center gap-2 flex">
              <div className="w-full h-5 justify-between items-center flex">
                <span className="text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
                  Quiz
                </span>
                <div className="pl-1 bg-emerald-50 rounded-sm shadow justify-end items-center flex">
                  <span className="w-3 h-[17px] text-emerald-700 text-[10px] font-normal font-['Inter'] leading-tight">
                    5
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/scores"
            className="w-[228px] px-2 py-1.5 my-1 rounded shadow justify-start items-center gap-2 inline-flex cursor-pointer"
          >
            <div className="w-5 h-5 justify-center items-center flex relative">
              <Image src={verify} layout="fill" alt="verify svg" />
            </div>
            <div className="h-5 justify-start items-center gap-2 flex">
              <span className="text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
                Scores
              </span>
            </div>
          </Link>
          <Link
            href="/certificate"
            className="w-[228px] px-2 py-1.5 my-1 rounded shadow justify-start items-center gap-2 inline-flex cursor-pointer"
          >
            <div className="w-5 h-5 justify-center items-center flex relative">
              <Image src={award} layout="fill" alt="award svg" />
            </div>
            <div className="w-full h-5 justify-start items-center gap-2 flex">
              <div className="w-full h-5 justify-between items-center flex">
                <div className="text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
                  Certificate
                </div>
                <div className="w-[12.93px] h-[12.93px]">
                  <Flex align="center" wrap="wrap" gap={30}>
                    <Progress type="circle" percent={15} size={12} />
                  </Flex>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-6 h-6 left-[252px] top-[5px] absolute cursor-pointer">
        <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#667085"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-[100px] flex-col gap-2">
        <div className="w-[138px] px-2 py-0.5 flex items-center justify-center bg-gradient-to-b from-white to-indigo-50 rounded shadow border border-gray-200 gap-2 ">
          <div className="w-3.5 h-3.5 relative">
            <Image src={cube} alt="cube" layout="fill" />
          </div>
          <h6 className="text-slate-700 text-xs font-medium font-['Inter'] leading-[18px]">
            Related courses
          </h6>
        </div>

        <small>SWIPER HERE</small>
      </div>

      {/* EXPLORE COURSES */}

      <div className="w-56 mt-[50px]  relative mx-5 h-[58.42px]">
        <Image src={exploreCard} layout="fill" alt="explore card" />
      </div>

      {/* LOG OUT */}
      <div className="mx-5 ">
        <div className="w-full h-8 py-1.5 my-5  justify-start items-center gap-2 inline-flex cursor-pointer">
          <div className="w-5 h-5 justify-center items-center flex relative">
            <Image src={logout} alt="logout" layout="fill" />
          </div>
          <div className="h-5 justify-start items-center gap-2 flex">
            <span className="text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
              Log out
            </span>
          </div>
        </div>

        {/* Profile */}
        <div className="w-full flex-col justify-startitems-start gap-4 inline-flex">
          <div className="justify-start items-center gap-2.5 inline-flex ">
            <div className="w-8 h-8 rounded-full relative ">
              <Image
                className="rounded-full"
                src={profile}
                alt="profile"
                layout="fill"
              />
            </div>
            <div className="flex-col justify-center items-start gap-0.5 inline-flex">
              <div className="h-[15px] justify-start items-center gap-2 inline-flex">
                <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                  Michael Ross
                </div>
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
                  michael.r@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
