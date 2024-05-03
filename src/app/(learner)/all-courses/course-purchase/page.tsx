'use client'

import CourseSearchSection from '@/components/CourseSearchSection'
import NavbarBanner from '@/components/navbar/NavbarBanner'
import React from 'react'

import { Tabs, TabsProps } from 'antd'
import { MdTimer } from 'react-icons/md'

import Image from 'next/image'

import filter from '../../../../../public/assets/filter-variant.svg'
import miniBook from '../../../../../public/assets/miniBook.svg'
import CourseDetailsPanel from '@/components/CourseDetailsPanel'
import MininumRequirements from '@/components/MininumRequirements'
import RelatedCourse from '@/components/RelatedCourse'
import CourseOutlinePanel from '@/components/CourseOutlinePanel'

import 'flowbite'

type Props = {}

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

const CoursePurchase = (props: Props) => {
  return (
    <div>
      <NavbarBanner />
      <CourseSearchSection headerText="Course Details" />
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

        <div className="flex items-center gap-2">
          <div className="w-[33px] h-[33px] bg-white rounded-full shadow border border-gray-300 flex items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#667085"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <small>🔖 Course Details</small>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 text-4xl font-medium font-['Power Grotesk Trial'] leading-[44px] tracking-wide my-1">
              Digital Marketing Fundamentals
            </h1>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 justify-center items-center inline-flex">
                <div className="w-4 h-4 relative">
                  <MdTimer className="text-u-slate-600" />
                </div>
              </div>
              <div>
                <span className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                  Duration:
                </span>
                <span className="text-slate-700 text-sm font-normal font-['Inter'] leading-tight">
                  {' '}
                </span>
                <span className="text-gray-900 text-sm font-normal font-['Inter'] leading-tight">
                  1Week
                </span>
              </div>

              <div className="w-[3px] h-[3px] bg-gray-500 rounded-full" />
              <span className="text-slate-700 text-sm font-normal font-['Inter'] leading-tight">
                Ratings:
              </span>
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
          </div>

          <div>
            <div className="flex items-center justify-between gap-[55px]">
              <div className="flex items-center gap-2">
                <span className="text-indigo-500 text-2xl font-semibold font-['Inter'] leading-loose">
                  N15,000
                </span>

                <div className="w-1 h-1 bg-gray-500 rounded-full" />

                <span className="text-gray-500 text-2xl font-medium font-['Inter'] leading-loose">
                  $10
                </span>
              </div>

              <div>
                <div className="w-9 h-9 bg-white rounded-full shadow border border-gray-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <div className="w-max h-7 px-2 py-1 bg-white rounded shadow border border-gray-300 justify-start items-center gap-1 inline-flex cursor-pointer">
                <div className="w-3.5 h-3.5 justify-center items-center flex">
                  <div className="w-3.5 h-3.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                  Apply Discount Code
                </div>
              </div>

              <div className="w-[101px] h-7 px-2 py-1 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow border border-violet-400 flex-col justify-center items-center gap-px inline-flex cursor-pointer">
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="text-violet-50 text-sm font-medium font-['Inter'] leading-tight">
                    Buy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-5 h-[0px] border border-gray-300" />
        <div className="flex items-start gap-5">
          <div className=" w-full">
            <CourseDetailsPanel isSubscribed={false} shareCourse={true} />
            <MininumRequirements />
            <div className="mt-5">
              <RelatedCourse />
            </div>
          </div>
          <div className="w-1/2 ">
            <div className=" mb-5 text-slate-700 text-base font-semibold font-['Inter'] leading-normal">
              Course Outline
            </div>{' '}
            {/* ACCORDION */}
            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1 ">
                <button
                  type="button"
                  className="flex items-center my-2 justify-between w-full p-3.5 bg-gray-50 font-medium rtl:text-right text-gray-500 shadow border border-gray-300 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <div>
                    <span className="flex items-center gap-3">
                      <div className="w-[18.62px] h-[18.62px] relative">
                        <div className="w-[18.62px] h-[18.62px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                        <div className="w-[8.87px] h-[8.87px] left-[4.70px] top-[4.70px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
                      </div>

                      <h2 className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                        Module 1
                      </h2>
                    </span>
                  </div>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{' '}
                    <a
                      href="/docs/getting-started/introduction/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      get started
                    </a>{' '}
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  className="flex items-center my-3 justify-between w-full p-3.5 bg-gray-50 font-medium rtl:text-right text-gray-500 shadow border border-gray-300 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2"
                >
                  <span className="flex items-center gap-2">
                    <div className="w-[18.62px] h-[18.62px] relative">
                      <div className="w-[18.62px] h-[18.62px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                      <div className="w-[8.87px] h-[8.87px] left-[4.70px] top-[4.70px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
                    </div>

                    <h2 className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                      Module 2
                    </h2>
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out the{' '}
                    <a
                      href="https://flowbite.com/figma/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Figma design system
                    </a>{' '}
                    based on the utility classNamees from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  className="flex items-center my-3 justify-between w-full p-3.5 bg-gray-50 font-medium rtl:text-right text-gray-500 shadow border border-gray-300 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[18.62px] h-[18.62px] relative">
                      <div className="w-[18.62px] h-[18.62px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                      <div className="w-[8.87px] h-[8.87px] left-[4.70px] top-[4.70px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
                    </div>
                    <h2 className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                      Module 3
                    </h2>
                  </div>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                      <a
                        href="https://flowbite.com/pro/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* BUY BUTON */}
            <div className="space-y-4">
              <div className="w-full h-7 px-2 py-1 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow border border-violet-400 flex-col justify-center items-center gap-px inline-flex cursor-pointer">
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="text-violet-50 text-sm font-medium font-['Inter'] leading-tight">
                    Buy
                  </div>
                </div>
              </div>
              {/* cart button */}
              <div className="w-full h-7 px-2 py-1 bg-white rounded shadow border border-gray-300 justify-center items-center gap-1 inline-flex cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePurchase
