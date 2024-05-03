import React from 'react'
import AllCourseCard from './AllCourseCard'

type Props = {}

const RelatedCourse = (props: Props) => {
  return (
    <div>
      <h2 className="text-gray-900 text-2xl font-medium font-['Power Grotesk Trial'] leading-[44px] tracking-wide">
        Related Courses
      </h2>
      <div className="my-3 grid grid-cols-3 gap-5">
        <AllCourseCard />
        <AllCourseCard />
        <AllCourseCard />
      </div>
    </div>
  )
}

export default RelatedCourse
