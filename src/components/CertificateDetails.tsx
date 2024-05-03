'use client'

import React, { useState, ChangeEvent } from 'react'
import share from '../../public/assets/share.svg'
import Image from 'next/image'
import ShareModal from './ShareModal/ShareModal'
import RateModal from './RateModal'

type Props = {}

const CertificateDetails = (props: Props) => {
  const [commentCount, setCommentCount] = useState(0)
  const [comment, setComment] = useState('')
  const [shareModal, setShareModal] = useState(false)
  const [rateModal, setRateModal] = useState(false)

  // Function to handle comment submission
  const handleCommentSubmit = () => {
    // Logic to submit comment
    // After submission, update comment count
    setCommentCount((prevCount) => prevCount + 1)
  }

  // Function to handle text input change
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value
    setComment(inputText)
    setCommentCount(inputText.length)
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-2">
        <span className="text-slate-700 text-sm font-normal font-['Inter'] leading-tight">
          🔖 Certificate
        </span>

        <div className="flex items-center gap-2">
          <button className="w-max h-7 px-2 py-1 bg-white rounded shadow border border-gray-300 justify-start items-center gap-1 inline-flex cursor-pointer">
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
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </div>
            <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
              Discussion Forum
            </span>
          </button>

          <button className="w-max h-7 px-2 py-1 bg-white rounded shadow border border-gray-300 justify-start items-center gap-1 inline-flex cursor-pointer">
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
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
            </div>
            <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
              Saved Notes
            </div>
          </button>
        </div>
      </div>
      <h2 className="text-gray-900 text-xl font-medium font-['Inter'] mt-2 leading-[30px] px-2">
        Certificate issued: Fundamentals of Digital Marketing 101
      </h2>
      <div className="flex items-center gap-2 mt-3 px-2">
        <span className="text-gray-500 w-max text-sm font-normal font-['Inter'] leading-tight">
          Course Progress:
        </span>
        <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
          {' '}
          100%
        </span>
        <div className="w-[15%] flex items-center  bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-[#101828] h-2.5 rounded-full dark:bg-gray-300"
            style={{ width: ' 100%' }}
          />
        </div>
      </div>
      <div className="w-full h-[0px] border border-gray-200 my-10"></div>

      {/* certificate body */}

      <div className="flex items-center justify-center flex-col gap-5">
        <div className="w-[656px] h-[257px] relative bg-gray-100 rounded-xl shadow">
          <div className="w-[201px] h-[103px] left-[227px] top-[52px] absolute bg-white rounded-lg">
            <div className="w-[27px] h-[137px] left-[151px] top-[-22px] absolute bg-indigo-200" />
            <div className="w-1 h-10 left-[52px] top-[88px] absolute origin-top-left rotate-90 bg-indigo-200" />
            <div className="w-1 h-10 left-[52px] top-[80px] absolute origin-top-left rotate-90 bg-indigo-200" />
            <div className="w-1 h-10 left-[52px] top-[72px] absolute origin-top-left rotate-90 bg-indigo-200" />
            <div className="w-[30px] h-[30px] left-[12px] top-[12px] absolute bg-indigo-200 rounded-full" />
          </div>
          <h2 className="left-[164px] top-[178px] absolute text-slate-700 text-lg font-medium font-['Inter'] leading-7">
            Fundamentals of Digital Marketing 101
          </h2>
          <p className="left-[293px] top-[212px] absolute text-slate-700 text-sm font-normal font-['Inter'] leading-tight">
            4 Modules
          </p>
          <div className="w-[33px] h-[33px] left-[598px] top-[19px] absolute cursor-pointer">
            <div className="w-[33px] h-[33px] left-0 top-0 absolute bg-white rounded-full shadow border border-gray-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#667085"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* button here */}
        <div className="flex items-center gap-5">
          <button
            className="w-[73px] h-7 px-2 py-1 bg-white rounded shadow border border-gray-300 justify-start items-center gap-1 inline-flex cursor-pointer"
            onClick={() => setShareModal(true)}
          >
            <div className="w-3.5 relative h-3.5 justify-center items-center flex">
              <Image src={share} layout="fill" alt="share" />
            </div>
            <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
              Share
            </span>
          </button>

          <button
            className="w-[65px] h-7 px-2 py-1 bg-white rounded shadow border border-gray-300 justify-start items-center gap-1 inline-flex cursor-pointer"
            onClick={() => setRateModal(true)}
          >
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
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
              Rate
            </span>
          </button>
        </div>

        {/* COMMENT AREA */}
        <h2 className="text-slate-700 w-[690px] text-sm font-medium font-['Inter'] leading-tight">
          Comment
        </h2>
        <div
          className={`border border-gray-300 shadow rounded-lg p-1 ${
            commentCount > 100 ? 'border-red-500' : ''
          }`}
        >
          {' '}
          <textarea
            rows={35}
            cols={15}
            value={comment}
            onChange={handleInputChange}
            className="w-[656px] h-28 bg-white text-gray-500 border-none text-xs font-normal font-['Inter'] leading-[18px] resize-none focus:outline-none focus:ring-0 "
            placeholder="Type here"
          />
          <span className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
            {`${commentCount}/100`}{' '}
          </span>
        </div>

        {/* submit button */}
        <div className="w-[710px]">
          <button className="w-max flex items-start justify-start h-7 px-2 py-1 bg-gray-900 rounded shadow border border-gray-300 gap-2">
            <span className="text-gray-50 text-sm font-medium font-['Inter'] leading-tight">
              Submit Comment
            </span>
          </button>
        </div>

        <ShareModal shareModal={shareModal} setShareModal={setShareModal} />
        <RateModal rateModal={rateModal} setRateModal={setRateModal} />
      </div>
    </div>
  )
}

export default CertificateDetails
