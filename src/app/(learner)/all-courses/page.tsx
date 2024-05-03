'use client'

import { IoFilterOutline } from 'react-icons/io5'
import AllCourseCard from '@/components/AllCourseCard'
import CourseCardContainer from '@/components/CourseCard'
import CourseTitle from '@/components/CourseTitle'
import SearchInput from '@/components/inputs/SearchInput'
import NavbarBanner from '@/components/navbar/NavbarBanner'
import { Tabs, TabsProps } from 'antd'
import filter from '../../../../public/assets/filter-variant.svg'

import React from 'react'
import Image from 'next/image'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Popular Courses',
    children: '',
  },
  {
    key: '2',
    label: 'Recommended',
    children: '',
  },
  {
    key: '3',
    label: 'Top rated',
    children: '',
  },
  {
    key: '4',
    label: 'New',
    children: '',
  },
]

export default function page() {
  return (
    <div className="">
      <NavbarBanner />

      <div className="py-5 bg-[#FCFCFD]">
        <div className="wrapper fbc">
          <p className="text-2xl font-medium">All Courses</p>

          <div className="w-[300px] ">
            <SearchInput
              placeholder="Search for courses... "
              value=""
              onChange={(e) => {
                console.log(e.target.value)
              }}
            />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="flex items-center justify-between">
          <div>
            <Tabs defaultActiveKey="1" items={items} onChange={() => {}} />
          </div>

          <div className="flex items-center gap-2">
            <div className="w-max cursor-pointer h-7 px-2 py-1 bg-gradient-to-r from-pink-50 to-pink-300 rounded shadow border border-pink-200 justify-start items-center gap-1 inline-flex">
              <div className="w-3.5 h-3.5 justify-center items-center flex">
                <div className="w-3.5 h-3.5 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                </div>
              </div>
              <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                Favourites
              </span>
            </div>

            <div className="w-max cursor-pointer h-7 px-2 py-1 bg-white rounded shadow border border-gray-300 justify-start items-center gap-1 inline-flex">
              <div className="justify-start items-center gap-1 flex">
                <div className="w-3.5 h-3.5 relative">
                  <Image src={filter} alt="" layout="fill" />
                </div>
                <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                  Filter by
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-16 gap-x-8">
          <AllCourseCard />
          <AllCourseCard />
          <AllCourseCard />
          <AllCourseCard />
          <AllCourseCard />
        </div>
      </div>
    </div>
  )
}
