import React from 'react'
import document from '../../public/assets/document-text.svg'
import Image from 'next/image'

type Props = {}

const ReaderViewBody = (props: Props) => {
  return (
    <div className="border-r pr-5">
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <div className="w-[33px] h-[33px] bg-white rounded-full flex items-center cursor-pointer justify-center shadow border border-gray-300">
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-[23px] h-[23px] pl-[3px] pr-1 pt-[3px] pb-1 bg-white rounded shadow border border-gray-300 justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                <div className="w-4 h-4 relative">
                  <Image src={document} alt="" layout="fill" />
                </div>
              </div>
            </div>

            <h2 className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
              Introduction to Digital marketing
            </h2>
          </div>
          <span className="text-slate-700 text-xs font-normal font-['Inter'] leading-[18px]">
            4min read
          </span>
        </div>
        <div className="w-full my-5 h-[70%] overflow-y-auto px-[10px]">
          <span className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
            ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
            augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
            amet. Pellentesque commodo lacus at sodales sodales. Quisque
            sagittis orci ut diam condimentum, vel euismod erat placerat. In
            iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
            ligula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit
            amet sapien fringilla, mattis ligulaLorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sit amet sapien fringilla, mattis ligula
            consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam
            quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
            magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
            fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
            Quisque sagittis orci ut diam condimentum, vel euismod erat
            placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula
          </span>
        </div>
      </div>

      <div className="flex items-center  justify-end w-full">
        <div className="w-12 h-7 px-2 py-1 bg-white rounded shadow border cursor-pointer border-gray-300 justify-start items-center gap-2 inline-flex">
          <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
            Next
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReaderViewBody
