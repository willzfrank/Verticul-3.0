import { Modal } from 'antd'
import React from 'react'
import insta from '../../../public/assets/skill-icons_instagram.svg'
import facebook from '../../../public/assets/facebook.svg'
import twitter from '../../../public/assets/Twitter-new-cross-mark-Icon-PNG-X-1024x576.png'
import linkedin from '../../../public/assets/linkedin.svg'
import 'flowbite'

import Image from 'next/image'

type Props = {
  shareModal: boolean
  setShareModal: (value: boolean) => void
}

const ShareModal: React.FC<Props> = ({ shareModal, setShareModal }) => {
  return (
    <Modal
      title={
        <div className="flex items-center gap-2">
          <div className="w-[39px] h-[39px] flex items-center justify-center bg-white rounded-full border border-gray-300">
            <div className="w-5 h-5 justify-center items-center inline-flex bg-[#344054] rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-4 h-"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-[191px] h-10 flex-col justify-start items-start gap-0.5 inline-flex">
            <h2 className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
              Share this course
            </h2>
            <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
              Learn and share with your friends
            </p>
          </div>{' '}
        </div>
      }
      onCancel={() => setShareModal(false)}
      open={shareModal}
      centered
      footer={
        <div className="w-full bg-gray-100 h-[50px] px-3 py-2 justify-between items-center inline-flex">
          <input
            className="px-3 py-2 w-[90%] outline-none bg-white rounded border border-gray-300 justify-start items-center gap-px flex"
            placeholder="https://www.youtube.com/watch?v=46Mi-_m4"
          />
          <div className="text-gray-900 text-xs font-medium font-['Inter'] leading-[18px]"></div>
          <div className="w-[27px] h-[27px] pl-1.5 pr-[5px] py-[5.50px] bg-gray-200 rounded shadow border border-gray-300 justify-center items-center flex cursor-pointer">
            <div className="w-4 h-4 justify-center items-center inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#667085"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </div>
          </div>
        </div>
      }
    >
      <div className="my-5 items-center flex justify-center gap-3">
        {/* instagram */}
        <div className="w-[33px] h-[33px] px-[4.50px] pt-1 pb-[5px] bg-white rounded-lg border border-gray-300 justify-center items-center inline-flex cursor-pointer">
          <div className="w-6 h-6 relative flex-col justify-start items-start flex">
            <Image src={insta} layout="fill" alt="insta" />
          </div>
        </div>

        {/* Facebook */}
        <div className="w-[33px] h-[33px] px-[4.50px] pt-1 pb-[5px] bg-white rounded-lg border border-gray-300 justify-center items-center inline-flex cursor-pointer">
          <div className="w-6 h-6 relative flex-col justify-start items-start flex">
            <Image src={facebook} layout="fill" alt="insta" />
          </div>
        </div>

        {/* X app */}
        <div className="w-[33px] h-[33px] px-[4.50px] pt-1 pb-[5px] bg-white rounded-lg border border-gray-300 justify-center items-center inline-flex cursor-pointer">
          <div className="w-6 h-6 relative flex-col justify-start items-start flex">
            <Image src={twitter} layout="fill" alt="insta" />
          </div>
        </div>

        {/* Linked In */}
        <div className="w-[33px] h-[33px] px-[4.50px] pt-1 pb-[5px] bg-white rounded-lg border border-gray-300 justify-center items-center inline-flex cursor-pointer">
          <div className="w-6 h-6 relative flex-col justify-start items-start flex">
            <Image src={linkedin} layout="fill" alt="insta" />
          </div>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          id="floating_outlined"
          className="block px-2.5 pb-2.5 pt-4 w-full h-16 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Comment{' '}
        </label>
      </div>
    </Modal>
  )
}

export default ShareModal
