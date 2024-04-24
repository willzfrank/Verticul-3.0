import NavbarBanner from '@/components/navbar/NavbarBanner'
import React from 'react'
import dummyAssets from '../../../public/assets/dummyAssets.svg'
import Image from 'next/image'

type Props = {}

const CertificateAcquired = (props: Props) => {
  return (
    <div>
      <NavbarBanner />
      <div className="flex items-center justify-between  px-12">
        <div className="flex items-center gap-5">
          {/* BACK ICON */}
          <div className="w-[33px] h-[33px] relative">
            <div className="w-[33px] h-[33px] left-0 top-0 absolute bg-white rounded-full shadow border border-gray-300" />
            <div className="w-3 h-3 left-[11px] top-[10px] absolute justify-center items-center inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#344054"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </div>
          </div>

          {/* HEADER TITLE */}
          <div className="w-[435px] h-[68px] flex-col justify-start items-start gap-1 inline-flex">
            <h2 className="text-gray-900 text-4xl font-medium font-['Power Grotesk Trial'] leading-[44px] tracking-wide">
              Certificates Acquired
            </h2>
            <p className="text-slate-700 text-sm font-normal font-['Inter'] leading-tight">
              See all your that you have gathered so far in your learning
              journey
            </p>
          </div>
        </div>
        <div className="w-[114px] h-[102px] relative">
          <Image src={dummyAssets} alt="dummy image" layout="fill" />
        </div>
      </div>

      <div className="px-5">
        <div className="w-[295px] h-[170px] justify-center items-center inline-flex">
          <div className="bg-white rounded-lg shadow border border-gray-200 flex-col justify-start items-start inline-flex">
            <div className="pl-[55px] pr-[39px] pt-[17px] bg-gray-50 justify-end items-center inline-flex">
              <div className="w-[201px] border -border-black h-[103px] relative bg-white rounded-lg flex-col justify-start items-start flex">
                {/* <div className="w-[30px] h-[30px] bg-indigo-200 rounded-full" />
                <div className="w-1 h-10 origin-top-left rotate-90 bg-indigo-200" />
                <div className="w-1 h-10 origin-top-left rotate-90 bg-indigo-200" />
                <div className="w-1 h-10 origin-top-left rotate-90 bg-indigo-200" /> */}
              </div>
            </div>
            <div className="w-[295px] px-2 py-3 justify-between items-start inline-flex">
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
                  Digital Fundamentals...
                </div>
                <div className="justify-start items-start gap-1 inline-flex">
                  <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
                    January 23
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="w-0.5 h-0.5 bg-gray-500 rounded-full" />
                    <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
                      13:45 PM
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-4 h-4 relative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificateAcquired
