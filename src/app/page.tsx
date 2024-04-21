import Link from 'next/link'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-5">
      {/* Learner button */}
      <Link
        className="w-[188px] h-[33px] px-1 py-2 bg-white rounded shadow border border-neutral-200 justify-center items-center gap-px inline-flex cursor-pointer"
        href="/course"
      >
        <div className="text-neutral-700 text-sm font-medium font-['Inter']">
          Sign In as Learner
        </div>
      </Link>

      {/* Instructor button */}
      <Link
        className="w-[188px] h-[33px] px-1 py-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow-inner justify-center items-center gap-px inline-flex cursor-pointer"
        href="/create-course"
      >
        <div className="text-white text-sm font-medium font-['Inter']">
          Sign In as Instructor
        </div>
      </Link>
    </div>
  )
}

export default Home
