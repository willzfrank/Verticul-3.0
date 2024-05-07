'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ReactPlayer from 'react-player/lazy'
import { Avatar, Tooltip } from 'antd'

import user from '../../public/assets/user-octagon.png'
import share from '../../public/assets/share.svg'

import learningObjectiveBook from '../../public/assets/learningObjectiveBook.svg'

type Props = {
  isSubscribed: boolean
  shareCourse: boolean
}

const CourseDetailsPanel = (props: Props) => {
  return (
    <div className="">
      <div className="h-full w-full my-5 relative rounded">
        <ReactPlayer
          url="https://v3.cdnpk.net/videvo_files/video/free/2012-09/large_preview/hd1823.mp4"
          light={
            <Image
              src="/assets/course-thumbnail.png"
              alt="Thumbnail"
              sizes="100vw"
              width="0"
              height="0"
              className="w-full h-full"
            />
          }
          width="100%"
          height="400px"
          controls
          playing={true}
          muted
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload',
              },
            },
          }}
          style={{ borderRadius: '20px' }}
        />
      </div>
      {/* COURSE DETAILS DIV */}
      {!props.isSubscribed ? (
        <div className="">
          <h2 className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
            Description
          </h2>
          <p>
            <div className=" text-gray-500 text-sm font-normal font-['Inter'] leading-[21px]">
              In this comprehensive course, participants will delve into the
              dynamic world of digital marketing. Through a series of engaging
              modules, learners will gain a deep understanding of fundamental
              digital marketing concepts and strategies. From search engine
              optimization (SEO) to social media marketing, email campaigns, and
              web analytics, students will acquire practical skills to design
              and execute effective online marketing initiatives. Whether
              you&apos;re a seasoned marketer seeking to refresh your knowledge
              or a beginner eager to explore the digital landscape, this course
              provides the tools and insights needed to thrive in today&apos;s
              digital marketplace.{' '}
            </div>
          </p>
          {/* READ ABT INSTRUCTOR HERE */}
          <div className="flex items-center justify-between my-5">
            <div className="h-[26px] px-1 py-px bg-white rounded-2xl shadow border border-gray-200 justify-start items-center gap-1 flex">
              <div className="w-4 h-4 justify-center items-center flex">
                <Image src={user} alt="user" width={100} height={100} />
              </div>
              <div className="h-6 justify-between items-start flex">
                <Avatar.Group>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      src="https://via.placeholder.com/24x24"
                      className="w-6 h-6 rounded-full border border-white"
                    />
                  </Tooltip>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      style={{ backgroundColor: '#f56a00' }}
                      className="w-6 h-6 rounded-full border border-white"
                    >
                      K
                    </Avatar>
                  </Tooltip>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      style={{ backgroundColor: '#87d068' }}
                      className="w-6 h-6 rounded-full border border-white"
                    />
                  </Tooltip>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      style={{ backgroundColor: '#1677ff' }}
                      className="w-6 h-6 rounded-full border border-white"
                    />
                  </Tooltip>
                </Avatar.Group>
              </div>
            </div>

            <Link
              href="#"
              className="w-max h-5 px-2 py-px bg-white rounded shadow border border-gray-300 justify-start items-center gap-1 inline-flex"
            >
              {!props.shareCourse ? (
                <span className="text-slate-700 text-xs font-medium font-['Inter'] leading-[18px]">
                  Read about the instructor
                </span>
              ) : (
                <div className="justify-start items-center gap-1 flex">
                  <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                    Share Course
                  </span>
                  <div className="w-3.5 h-3.5 justify-center items-center flex">
                    <div className="w-3.5 h-3.5 relative">
                      <Image src={share} alt="share" layout="fill" />
                    </div>
                  </div>
                </div>
              )}
            </Link>
          </div>
          {/* LEARNING OBJECTIVES HERE */}
          <div className="w-full my-5 px-3 py-2 bg-white rounded-xl shadow border border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-full p-1 bg-gradient-to-b from-white to-sky-50 rounded-lg shadow border border-sky-200 justify-start items-center gap-2 inline-flex">
              <div className="relative w-[25px] h-[25px]">
                <Image
                  src={learningObjectiveBook}
                  alt="learning objectives"
                  layout="fill"
                />
              </div>
              <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                Learning objectives
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className=" justify-start items-center gap-2 inline-flex">
                <div className="w-3 h-3 rounded-full shadow border-2 border-sky-400" />
                <p className="text-slate-700 text-xs font-normal font-['Inter'] leading-[18px]">
                  Understand key digital marketing concepts and startegies
                </p>
              </div>
              <div className=" justify-start items-center gap-2 inline-flex">
                <div className="w-3 h-3 rounded-full shadow border-2 border-sky-400" />
                <p className="text-slate-700 text-xs font-normal font-['Inter'] leading-[18px]">
                  Learn techniques for search engine optimization (SEO) and
                  social media marketing
                </p>
              </div>
              <div className=" justify-start items-center gap-2 inline-flex">
                <div className="w-3 h-3 rounded-full shadow border-2 border-sky-400" />
                <p className="text-slate-700 text-xs font-normal font-['Inter'] leading-[18px]">
                  Gain insights into effective email marketing campaigns
                </p>
              </div>
              <div className=" justify-start items-center gap-2 inline-flex">
                <div className="w-3 h-3 rounded-full shadow border-2 border-sky-400" />
                <p className="text-slate-700 text-xs font-normal font-['Inter'] leading-[18px]">
                  Gain insights into effective email marketing campaigns
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full h-8 px-2 py-1.5 bg-gray-50 rounded shadow border border-gray-200 justify-between items-center inline-flex">
            <p className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
              Vid_1
            </p>
            <div className="justify-start items-center gap-1 flex">
              <div className="w-3 h-3 justify-center items-center flex">
                <div className="w-3 h-3 relative"></div>
              </div>
              <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                3 mins
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between my-5">
            <div className="w-[169px] h-7 px-2 py-1 bg-white rounded shadow border border-gray-300 justify-start items-center gap-1 inline-flex">
              <div className="justify-start items-center gap-2 flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="bg-white rounded border border-gray-300 cursor-pointer"
                />
                <div className="text-slate-700 w-max text-sm font-medium font-['Inter'] leading-tight">
                  Mark as Completed
                </div>
              </div>
            </div>

            <button className="w-[124px] h-[26px] px-2 py-1 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow border border-violet-400 flex-col justify-center items-center gap-px inline-flex">
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-violet-50 text-xs font-medium font-['Inter'] leading-[18px]">
                  Next
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseDetailsPanel
