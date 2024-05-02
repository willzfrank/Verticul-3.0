'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { MdTimer } from 'react-icons/md'
import miniBook from '../../public/assets/miniBook.svg'
import { LuAlignLeft } from 'react-icons/lu'
import { HiOutlineDotsVertical } from 'react-icons/hi'

import command from '../../public/assets/command.svg'
import savedNotes from '../../public/assets/savedNotes.svg'

import { ProgressBar } from './CustomProgress'

type Props = {
  isSubscribed: boolean
}

const CourseDetailsHeader = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  return (
    <div className="px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-slate-700 text-sm font-normal font-['Inter'] leading-tight">
            🔖 Course Details
          </span>
          <div className="w-3 h-3 justify-center items-center inline-flex border border-[#667085] rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#667085"
              className="w-2 h-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="w-max h-[22px] px-2 py-px bg-white rounded shadow border border-gray-300 justify-start items-center gap-1 inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <div className="text-slate-700 text-sm font-normal font-['Inter'] leading-tight">
                Module 1
              </div>
              <div className="w-[11.62px] h-[11.62px] relative">
                <div className="w-[11.62px] h-[11.62px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                <div className="w-[5.54px] h-[5.54px] left-[2.93px] top-[2.93px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
              </div>
            </div>
          </div>
          {props.isSubscribed && (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 justify-center items-center inline-flex border border-[#667085] rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#667085"
                  className="w-2 h-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>

              <p className="text-slate-700 text-sm font-medium font-['Inter'] truncate leading-tight">
                Introduction to Marketing Fundamen...
              </p>
            </div>
          )}
        </div>
        <div
          className="h-7 px-2 py-1 bg-white rounded shadow border border-gray-300 justify-start items-center gap-1 inline-flex cursor-pointer"
          onClick={toggleModal}
        >
          <div className="w-3.5 h-3.5 justify-center relative items-center flex">
            <Image src={savedNotes} alt="savedNotes" layout="fill" />
          </div>
          <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
            Saved Notes
          </div>
        </div>
      </div>
      {/* Saved Notes */}
      {isModalOpen && (
        <div className="w-[392px] h-[412px] py-3 bg-white border-b rounded-xl shadow border-gray-200 flex-col justify-start items-start inline-flex fixed right-2 top-20 z-10 animate__animated animate__bounceIn">
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="w-5 h-5 p-[7px] bg-white rounded shadow border border-gray-300 justify-center items-center inline-flex relative">
              <Image src={savedNotes} alt="savedNotes" layout="fill" />
            </div>{' '}
            <div className="flex flex-col">
              <h2 className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
                Saved notes
              </h2>
              <span className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
                All notes taken in this course
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-2 border-t border-b border-gray-200 py-5 px-4 ">
              <div className="w-[22px] h-[22px] p-1 bg-violet-50 rounded shadow border border-violet-200 justify-center items-center inline-flex">
                <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex">
                  <LuAlignLeft color="#3E1C96" />
                </div>
              </div>

              <div className="">
                <div className="w-[308px] h-[26px] px-2 py-1 bg-violet-300 border-b border-violet-300 justify-start items-center gap-px inline-flex rounded-t">
                  <div className="text-slate-50 text-xs font-medium font-['Inter'] leading-[18px]">
                    Marketing tips...
                  </div>
                </div>
                <div className="w-[308px] h-[26px] px-2 py-1 bg-violet-50 justify-start items-center gap-1 inline-flex rounded-b">
                  <div className="w-3.5 h-3.5 justify-center items-center flex">
                    <div className="w-3.5 h-3.5 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#5925DC"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-violet-700 text-xs font-normal font-['Inter'] leading-[18px]">
                    Jan 5
                  </span>
                </div>
              </div>

              <div className="w-4 h-4 cursor-pointer">
                <HiOutlineDotsVertical color="#667085" />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* TITLE */}
      <div>
        <h2 className="text-gray-900 mt-3 text-4xl font-medium font-['Power Grotesk Trial'] leading-[44px] tracking-wide">
          Digital Marketing Fundamentals
        </h2>
        {/* Title details */}
        {props.isSubscribed ? (
          <div>
            <div className="flex items-center gap-1">
              <span className="text-gray-500 w-max text-sm font-normal font-['Inter'] leading-tight">
                Course Progress:
              </span>
              <div className="flex items-center">
                <ProgressBar percentage={20} />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="w-full my-1 justify-start items-center gap-2 inline-flex">
              <div className="justify-start items-center gap-1 flex">
                <div className="w-4 h-4 justify-center items-center relative flex">
                  <MdTimer className="text-u-slate-600" />
                </div>
                <div>
                  <span className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                    Duration:{' '}
                  </span>
                  <span className="text-gray-900 text-sm font-normal font-['Inter'] leading-tight">
                    1Week
                  </span>
                </div>
              </div>
              <div className="justify-start items-center gap-2 flex">
                <div className="w-[3px] h-[3px] bg-gray-500 rounded-full" />
                <div className="justify-start items-center gap-1 flex">
                  <div className="text-slate-700 text-sm font-normal font-['Inter'] leading-tight">
                    Ratings:
                  </div>
                  <div className="justify-start items-start gap-[3px] flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FEDF89"
                      className="w-3 h-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FEDF89"
                      className="w-3 h-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FEDF89"
                      className="w-3 h-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FEDF89"
                      className="w-3 h-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#FEDF89"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex ">
                <div className="w-[3px] h-[3px] bg-gray-500 rounded-full" />
                <div className="px-1 w-max flex items-center bg-sky-50 rounded-2xl border border-sky-200 justify-center gap-1 ">
                  <div className="w-4 h-4 justify-center relative items-center flex">
                    <Image src={miniBook} alt={miniBook} layout="fill" />
                  </div>
                  <div className="flex items-center justify-center gap-2  h-[25px] pr-2">
                    <h3 className="text-blue-700 text-sm font-normal font-['Inter'] leading-tight">
                      Module{' '}
                    </h3>
                    <span className="text-blue-900 text-sm font-normal font-['Inter'] leading-tight">
                      4
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Search bar */}
            <div className="w-[353px] h-9 px-4 py-2 bg-white rounded-lg shadow border border-gray-300 justify-between items-center inline-flex">
              <div className="justify-start items-center gap-4 flex">
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
                  className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight outline-none"
                  placeholder="Search for anything..."
                />
              </div>
              <div className="justify-start items-center gap-5 flex">
                <div className="justify-start items-start flex">
                  <div className="w-3.5 h-[13px] px-0.5 pt-px pb-0.5 bg-white rounded-sm shadow border border-gray-200 justify-center items-center flex">
                    <div className="grow shrink basis-0 self-stretch relative justify-center items-center inline-flex">
                      <Image src={command} alt="command" layout="fill" />
                    </div>
                  </div>
                  <div className="w-3.5 h-[13px] px-0.5 pt-px pb-0.5 bg-white rounded-sm justify-center items-center flex ">
                    <span className="#667085">+ </span>
                  </div>
                  <div className="h-[13px] pl-1 pr-[3px] bg-white rounded-sm shadow border border-gray-200 justify-center items-center flex">
                    <div className="w-[7px] h-[17px] flex items-center justify-center  text-gray-500 text-[10px] font-normal font-['Inter'] leading-tight">
                      K
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Divider */}
      </div>
    </div>
  )
}

export default CourseDetailsHeader
