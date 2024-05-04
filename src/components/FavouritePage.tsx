import React from 'react'
import AllCourseCard from './AllCourseCard'

type Props = {}

const FavouritePage = (props: Props) => {
  return (
    <div>
      <div className="flex items-center gap-5 my-5">
        <div className="w-[33px] h-[33px] bg-white rounded-full shadow border border-gray-300 flex items-center justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#667085"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div>
          <span className="text-slate-700 text-sm font-normal font-['Inter'] leading-tight">
            📚{' '}
          </span>
          <span className="text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
            Favourite items
          </span>
        </div>
      </div>

      <div>
        <AllCourseCard />
      </div>
    </div>
  )
}

export default FavouritePage
