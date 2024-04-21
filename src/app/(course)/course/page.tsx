import Link from 'next/link'
import React from 'react'

const Course = () => {
  return (
    <div className="text-center h-[88vh] flex items-center justify-center">
      <Link
        href="/learnercoursedetails"
        className="inline-block relative overflow-hidden w-[188px] h-[33px] rounded shadow border border-neutral-200 cursor-pointer bg-gradient-to-b from-indigo-400 to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 active:bg-indigo-600 active:ring-2 active:ring-indigo-700"
      >
        <span className="absolute inset-0 flex items-center justify-center gap-px">
          <span className="text-white text-sm font-medium font-['Inter']">
            Move to course
          </span>
        </span>
      </Link>
    </div>
  )
}

export default Course
