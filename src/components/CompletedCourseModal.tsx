import { Modal } from 'antd'
import React from 'react'
import completed from '../../public/assets/completedCourseCard.svg'
import certificate_document from '../../public/assets/certificate_document.svg'
import certificate_image from '../../public/assets/certificate_image.png'
import certificate_award from '../../public/assets/certificate_award_blue.svg'

import Image from 'next/image'
import Link from 'next/link'

type Props = {
  isOpenCompletedModal: boolean
  setIsOpenCompletedModal: (value: boolean) => void
}

const CompletedCourseModal: React.FC<Props> = ({
  isOpenCompletedModal,
  setIsOpenCompletedModal,
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
                    <Image src={completed} alt="completed" layout="fill" />
                  </div>
                </div>
              </div>
              <div className="text-gray-900 text-base font-medium font-['Inter'] leading-normal">
                Completed Courses
              </div>
            </div>
          </div>
        </div>
      }
      style={{ top: 150, left: 0 }}
      width="800px"
      open={isOpenCompletedModal}
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
      onCancel={() => setIsOpenCompletedModal(false)}
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
                    <div className="justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="w-3.5 h-3.5 justify-center items-center flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#667085"
                            className="w-3.5 h-3.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
                          Jan 23
                        </p>
                      </div>
                      <div className="w-2 h-px bg-gray-500" />
                      <div className="justify-start items-center gap-1 flex">
                        <div className="w-3.5 h-3.5 justify-center items-center flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#667085"
                            className="w-3.5 h-3.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
                          Apr 15
                        </p>
                      </div>
                    </div>
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
                <div className="self-stretch justify-between items-center inline-flex">
                  <p className="text-slate-700 text-xs font-medium font-['Inter'] leading-[18px] cursor-pointer">
                    See more details
                  </p>
                  <Link
                    href="/certificate-acquired"
                    className="justify-start items-center gap-1 flex"
                  >
                    <div className="w-3.5 h-3.5 justify-center items-center flex">
                      <div className="w-3.5 h-3.5 relative">
                        <Image
                          src={certificate_document}
                          alt="certificate"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <p className="text-emerald-900 text-xs font-normal font-['Inter'] leading-[18px]">
                      Certificate acquired
                    </p>
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

export default CompletedCourseModal
