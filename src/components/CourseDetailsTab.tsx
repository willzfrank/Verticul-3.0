import React, { useState } from 'react'
import { FaBook } from 'react-icons/fa'
import { MdTimer } from 'react-icons/md'
import { MdOutlineTimer } from 'react-icons/md'
import { IoDocumentText } from 'react-icons/io5'
import { IoPlayCircleOutline } from 'react-icons/io5'
import { IoDocumentOutline } from 'react-icons/io5'
import 'animate.css'

type Props = {
  handleStartLearning: () => void // Define the type of handleStartLearning
}

const CourseDetailsTab = ({ handleStartLearning }: Props) => {
  const [activeTab, setActiveTab] = useState('modules')
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="w-[95%] p-0.5 flex items-center justify-between rounded bg-gray-100 border border-gray-100">
        <button
          className={`w-[166px] h-7 px-3 py-1  justify-center items-center gap-px inline-flex focus:outline-none ${
            activeTab === 'modules'
              ? 'border border-gray-200 shadow rounded bg-white'
              : 'bg-gray-100'
          }`}
          onClick={() => setActiveTab('modules')}
        >
          <span
            className={` text-sm font-medium font-['Inter'] leading-tight ${
              activeTab === 'modules' ? 'text-gray-900' : 'text-gray-500'
            }`}
          >
            Modules
          </span>
        </button>

        <div className="w-3.5 h-[0px]  rotate-90 border border-gray-300"></div>
        <button
          className={`w-[166px] h-7 px-3 py-1   justify-center items-center gap-px inline-flex focus:outline-none ${
            activeTab === 'discussion'
              ? 'border border-gray-200 shadow rounded bg-white'
              : 'bg-gray-100'
          }`}
          onClick={() => setActiveTab('discussion')}
        >
          <span
            className={` text-sm font-medium font-['Inter'] leading-tight ${
              activeTab === 'discussion' ? 'text-gray-900' : 'text-gray-500'
            }`}
          >
            {' '}
            Discussion Forum
          </span>
        </button>
      </div>
      <div className="mt-8">
        {activeTab === 'modules' && (
          <div>
            <div>
              {/* ACCORDION HEADER */}
              <div
                className={`w-full pb-2 bg-gradient-to-b from-violet-300 to-violet-100 rounded-lg shadow border border-violet-300 flex-col justify-start items-start gap-px inline-flex animate__animated animate__pulse ${
                  isAccordionOpen ? 'hidden' : ''
                }`}
              >
                <div className="self-stretch h-[74px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch px-2 py-3 rounded-lg shadow border border-violet-300 justify-between items-start inline-flex">
                    <div className="justify-start items-start gap-2 flex">
                      <div className="w-5 h-5 p-[3px] bg-violet-100 rounded shadow border border-violet-300 justify-center items-center flex">
                        <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                          <FaBook color="#3E1C96" />{' '}
                        </div>
                      </div>
                      <div className="text-violet-900 text-sm font-medium font-['Inter'] leading-tight">
                        Module 1
                      </div>
                    </div>
                    <div
                      className="w-3.5 h-3.5 justify-center items-center flex cursor-pointer bg-[#3E1C96] rounded-full"
                      onClick={toggleAccordion}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-2.5 h-2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="self-stretch h-[22px] px-2 py-1 justify-between items-start inline-flex">
                    <div className="justify-start items-center gap-1 flex">
                      <div className="w-4 h-4 justify-center items-center flex bg-[#BDB4FE] rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#BDB4FE"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                          />
                        </svg>
                      </div>
                      <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-[18px]">
                        2
                      </div>
                    </div>
                    <div className="justify-start items-center gap-1 flex">
                      <div className="w-4 h-4 justify-center items-center flex">
                        <MdTimer color="#BDB4FE" />{' '}
                      </div>
                      <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-[18px]">
                        5 mins
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACCORDION BODY */}
              <div
                className={`${
                  isAccordionOpen ? '' : 'hidden'
                } transition-all duration-500 ease-in-out`}
              >
                {' '}
                <div className="w-full px-2 mb-2 py-3 bg-gradient-to-b from-violet-300 to-violet-100 rounded-lg shadow border border-violet-300 justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <div className="w-5 h-5 p-[3px] bg-violet-100 rounded shadow border border-violet-300 justify-center items-center flex">
                      <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                        <FaBook color="#3E1C96" />{' '}
                      </div>
                    </div>
                    <div className="text-violet-900 text-sm font-medium font-['Inter'] leading-tight">
                      Module 1
                    </div>
                  </div>
                  <div
                    className="w-3.5 h-3.5 justify-center items-center flex cursor-pointer bg-[#3E1C96] rounded-full"
                    onClick={toggleAccordion}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-2.5 h-2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full h-[216px] flex-col justify-start items-end gap-4 inline-flex animate__animated animate__fadeIn">
                  <div className="self-stretch px-2 py-1  rounded shadow border border-indigo-400  items-start flex">
                    <div className="w-[22px] h-[22px] relative">
                      <div className="w-[22px] h-[22px] left-0 top-0 absolute">
                        <div className="w-[22px] h-[22px] left-0 top-0 absolute bg-indigo-200 rounded-full border border-white" />
                        <div className="w-4 h-4 left-[3px] top-[3px] absolute bg-white rounded-full shadow border border-gray-200" />
                      </div>

                      <span className="w-[6.74px] text-[10px] flex items-center justify-center h-2 left-[7.60px] top-[7.50px] font-bold text-[#C9C8FF] absolute">
                        T
                      </span>
                    </div>
                    <div className="w-full flex-col gap-1 ml-[5px] inline-flex">
                      <p className="text-slate-700 truncate text-sm font-medium font-['Inter'] leading-tight">
                        Intoduction to Marketing Fundamentals...
                      </p>
                      <div className="w-full justify-between items-center inline-flex">
                        <div className="justify-start items-start gap-1 flex">
                          <div className="justify-start items-center gap-1 flex">
                            <div className="w-3 h-3 justify-center items-center flex">
                              <IoPlayCircleOutline color="#667085" />{' '}
                            </div>
                            <p className="text-slate-700 text-xs font-normal font-['Inter'] leading-[18px]">
                              2
                            </p>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="w-0.5 h-0.5 bg-gray-500 rounded-full" />
                            <div className="justify-start items-center gap-1 flex">
                              <div className="w-3 h-3 justify-center items-center flex">
                                <IoDocumentOutline color="#667085" />{' '}
                              </div>
                              <p className="text-slate-700 text-xs font-normal font-['Inter'] leading-[18px]">
                                3
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="justify-start items-center gap-1 flex">
                          <div className="w-3 h-3 justify-center items-center flex">
                            <MdOutlineTimer color="#667085" />
                          </div>
                          <p className="text-slate-700 text-xs font-normal font-['Inter'] leading-[18px]">
                            5 mins
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[150px] flex-col justify-start items-start gap-3.5 flex">
                    <div className="self-stretch p-1 bg-white rounded border border-gray-300 justify-start items-start gap-[3px] inline-flex">
                      <div className="w-4 h-4 justify-center items-center flex">
                        <IoDocumentText color="#667085" />{' '}
                      </div>
                      <div className="justify-start items-center gap-1 flex">
                        <div className="w-[11px] h-[0px] origin-top-left rotate-90 border border-gray-200"></div>
                        <p className="text-gray-900 text-xs font-normal font-['Inter'] leading-[18px]">
                          #000345
                        </p>
                      </div>
                    </div>
                    <div className="self-stretch p-1 bg-white rounded border border-gray-300 justify-start items-start gap-[3px] inline-flex">
                      <div className="w-4 h-4 justify-center items-center flex">
                        <IoDocumentText color="#667085" />{' '}
                      </div>
                      <div className="justify-start items-center gap-1 flex">
                        <div className="w-[11px] h-[0px] origin-top-left rotate-90 border border-gray-200"></div>
                        <p className="text-gray-900 text-xs font-normal font-['Inter'] leading-[18px]">
                          #000345
                        </p>
                      </div>
                    </div>
                    <div className="self-stretch p-1 bg-white rounded border border-gray-300 justify-start items-start gap-[3px] inline-flex">
                      <div className="w-4 h-4 justify-center items-center flex">
                        <IoDocumentText color="#667085" />{' '}
                      </div>
                      <div className="justify-start items-center gap-1 flex">
                        <div className="w-[11px] h-[0px] origin-top-left rotate-90 border border-gray-200"></div>
                        <p className="text-gray-900 text-xs font-normal font-['Inter'] leading-[18px]">
                          #000345
                        </p>
                      </div>
                    </div>
                    <div className="self-stretch h-[30px] pb-2 bg-gradient-to-b from-violet-300 to-violet-100 rounded-bl-lg rounded-br-lg shadow border border-violet-300 flex-col justify-start items-start gap-px flex">
                      <div className="self-stretch h-[22px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch h-[22px] px-2 py-1 justify-between items-start inline-flex">
                          <div className="justify-start items-center gap-1 flex">
                            <div className="w-3 h-3 justify-center rounded items-center flex bg-[#BDB4FE]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="w-6 h-6"
                              >
                                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                              </svg>
                            </div>
                            <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-[18px]">
                              2
                            </div>
                          </div>
                          <div className="justify-start items-center gap-1 flex">
                            <div className="w-4 h-4 justify-center items-center flex">
                              <MdTimer color="#BDB4FE" />
                            </div>
                            <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-[18px]">
                              5 mins
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* START BUTTON */}
            <button
              className="w-full my-5 h-7 px-2 py-1 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow border border-violet-400 flex-col justify-center items-center gap-px inline-flex"
              onClick={handleStartLearning}
            >
              <div className="justify-start items-center gap-1 inline-flex">
                <span className="text-violet-50 text-sm font-medium font-['Inter'] leading-tight">
                  Start Learning
                </span>
              </div>
            </button>
          </div>
        )}
        {activeTab === 'discussion' && (
          <div className="bg-white shadow-md rounded-md p-6 animate__animated animate__pulse">
            {/* Your discussion forum content goes here */}
            <p className="text-lg font-semibold">
              Welcome to the Discussion Forum!
            </p>
            <p className="mt-4">
              Feel free to start a discussion or join an existing one.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseDetailsTab
