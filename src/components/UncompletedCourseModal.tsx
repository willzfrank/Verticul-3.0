import { Modal } from 'antd'
import React from 'react'
import Uncompleted from '../../public/assets/uncompletedCourseBox.svg'
import certificate_document from '../../public/assets/certificate_document.svg'
import certificate_image from '../../public/assets/certificate_image.png'
import certificate_award from '../../public/assets/certificate_award_blue.svg'
import arrow_right from '../../public/assets/arrow-right.svg'

import Image from 'next/image'
import Link from 'next/link'
import { ProgressBar } from './CustomProgress'

type Props = {
  isOpenUncompletedModal: boolean
  setIsOpenUncompletedModal: (value: boolean) => void
}

const UncompletedCourseModal: React.FC<Props> = ({
  isOpenUncompletedModal,
  setIsOpenUncompletedModal,
}) => {
  return (
    <Modal
      title={
        <div className="w-full h-[67px] pr-8 py-3.5 bg-white border-b border-gray-200 justify-end items-center inline-flex">
          <div className="self-stretch justify-between items-center inline-flex w-full">
            <div className="justify-start items-center gap-2 flex">
              <div className="w-[39px] h-[39px] relative">
                <div className="w-[39px] h-[39px] left-0 top-0 absolute">
                  <div className="w-[39px] h-[39px] left-0 top-0 relative bg-white rounded-full border border-gray-300">
                    <Image src={Uncompleted} alt="completed" layout="fill" />
                  </div>
                </div>
              </div>
              <div className="text-gray-900 text-base font-medium font-['Inter'] leading-normal">
                Uncompleted Courses{' '}
              </div>
            </div>
          </div>
        </div>
      }
      style={{ top: 150, left: 0 }}
      width="800px"
      open={isOpenUncompletedModal}
      closeIcon={
        <div className="w-[30px] h-[30px] p-[7px] bg-white rounded-md border border-gray-300 justify-center items-center inline-flex">
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      }
      onCancel={() => setIsOpenUncompletedModal(false)}
      footer={null}
    >
      <div className="my-5">
        <div className="w-full  h-[118px] bg-white rounded-xl shadow border border-gray-200 justify-start items-start inline-flex">
          <div className="w-[204px] h-[118px] relative ">
            <Image
              layout="fill"
              objectFit="cover"
              src={certificate_image}
              alt="thumbnail"
              className="rounded-l-xl"
            />
          </div>
          <div className="grow shrink h-full basis-0 py-1 flex-col justify-center items-center gap-2 inline-flex">
            <div className="self-stretch  flex-col justify-start items-start gap-px flex">
              <div className="self-stretch  px-3 py-2 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <h2 className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
                      Digital Marketing Fundamentals
                    </h2>
                    <p className="text-gray-400 text-xs font-medium font-['Inter'] leading-[18px]">
                      2 Modules left
                    </p>
                  </div>
                  <div className="w-5 h-5 justify-center items-center flex">
                    <div className="w-5 h-5 relative">
                      <Image
                        src={certificate_award}
                        layout="fill"
                        alt="award"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-[18px] justify-between items-center inline-flex">
                  <ProgressBar percentage={50} />
                  <Link
                    href="/coursedetails"
                    className="justify-start items-center gap-1 flex"
                  >
                    <div className="text-indigo-500 text-xs font-medium font-['Inter'] leading-[18px]">
                      Finish up
                    </div>
                    <div className="w-3.5 h-3.5 justify-center items-center relative flex">
                      <Image
                        src={arrow_right}
                        alt="arrow right"
                        layout="fill"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default UncompletedCourseModal
