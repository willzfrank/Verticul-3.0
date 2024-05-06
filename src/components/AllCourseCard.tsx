'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import user from '../../public/assets/user-octagon.png'
import { Avatar, Modal, Rate, Tooltip } from 'antd'
import share from '../../public/assets/share.svg'
import Link from 'next/link'
import ShareModal from './ShareModal/ShareModal'
import GroupAvater from '@/app/_components/GroupAvater'

type Props = {}

const AllCourseCard = (props: Props) => {
  const [shareModal, setShareModal] = useState(false)

  const instructors = [
    {
      firstname: 'Skillzo',
      lastname: 'Instructor',
      image: '/assets/portrait-person-wearing-graphic-eye-makeup.jpg',
    },
    {
      firstname: 'Skillzo',
      lastname: 'Instructor',
      image: null,
    },
    {
      firstname: 'killzo',
      lastname: 'nstructor',
      image: '/assets/portrait-person-wearing-graphic-eye-makeup.jpg',
    },
    {
      firstname: 'Skillzo',
      lastname: 'Instructor',
      image: '/assets/portrait-person-wearing-graphic-eye-makeup.jpg',
    },
  ]

  return (
    <div className=" bg-gray-100 rounded-xl  shadow-md   border border-gray-200 flex-col inline-flex animate__animated animate__fadeIn">
      <div className="rounded-xl ">
        <div className="relative w-full">
          <Image
            src="/assets/course-thumbnail.png"
            alt="course-thumbnail"
            sizes="100vw"
            width="0"
            height="0"
            className="rounded-t-xl  w-full h-[200px] object-cover"
          />

          <div className="w-10 h-10 right-[12px] top-[12px] absolute bg-white opacity-40 rounded-full">
            <div className="w-full h-full flex items-center justify-center cursor-pointer animate__animated animate__flash">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="w-4 h-4"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* COURSE DESCRIPTION */}
        <div className="self-stretch flex-col justify-start items-start flex">
          <div className="self-stretch  bg-white flex-col gap-2 flex rounded-b-2xl">
            <div className="px-3 py-2 space-y-4 flex items-center justify-between">
              <div>
                <div className="space-y-1">
                  <h2 className="text-gray-900  font-medium font-inter leading-tight">
                    Digital Marketing Fundamentals
                  </h2>
                </div>

                <div className="fc gap-2">
                  <div>
                    <span className="text-gray-400 text-xs font-medium font-inter leading-[18px]">
                      Modules
                    </span>
                    <span className="text-gray-500 text-xs font-medium font-inter leading-[18px]">
                      {' '}
                    </span>
                    <span className="text-slate-700 text-xs font-medium font-inter leading-[18px]">
                      4
                    </span>
                  </div>
                  <Rate allowHalf defaultValue={2.5} className="text-sm" />
                </div>
              </div>
              <div className="flex items-end flex-col">
                <p className="text-gray-500 text-base font-inter font-normal leading-normal">
                  $15
                </p>
                <p className="text-gray-900 text-base font-inter font-semibold leading-normal">
                  N23,000
                </p>
              </div>
            </div>

            {/* INSTRUCTORS PROFILE */}
            <div className="self-stretch h-[34px] px-3 py-1 flex-col justify-start items-start gap-px flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="h-[26px] px-1 py-px bg-white rounded-2xl shadow border border-gray-200 justify-start items-center gap-1 flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <Image src={user} alt="user" width={100} height={100} />
                  </div>

                  {/* user group */}
                  <div className="h-6 justify-between items-start flex">
                    <GroupAvater users={instructors} />
                  </div>
                </div>

                <p className="text-emerald-500 text-xs font-medium font-inter leading-[18px]">
                  10% Discount{' '}
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* SHARE BUTTON */}

      <div className="w-full mt-2 p-2 justify-between  items-center gap-2 flex">
        <div className="w-[70%]">
          <Link href="/all-courses/course-details">
            <button className="w-full px-3 py-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow border border-violet-500 flex-col justify-center items-center gap-px flex">
              <p className="text-violet-50 text-xs font-inter">Buy</p>
            </button>
          </Link>
        </div>

        <Link
          href="/carts"
          className="px-2 py-2 bg-white rounded shadow border border-gray-300 justify-center items-center gap-1 flex"
        >
          <button className="justify-center items-center flex">
            <div className="w-3.5 h-3.5 justify-center items-center flex relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#101323"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <span className="text-slate-700 text-sm font-medium font-inter leading-tight ">
              Cart
            </span>
          </button>

          <ShareModal shareModal={shareModal} setShareModal={setShareModal} />
        </Link>
      </div>
    </div>
  )
}

export default AllCourseCard
