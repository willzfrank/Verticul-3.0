import React from 'react'
import empty from '../../public/assets/emptyCourse.png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const EmptyCourse = (props: Props) => {
  return (
    <section className="w-full  mt-10 h-full flex items-center justify-center flex-col">
      <Image
        src={empty}
        height={250}
        width={250}
        objectFit="contain"
        alt="empty"
      />
      <p className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
        You currently have no available Course.
      </p>
      <div className="text-center">
        <span className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
          Not to worry we have got you covered, visit the <br />
        </span>
        <Link
          href="/Course"
          className="text-indigo-700 text-sm font-semibold font-['Inter'] leading-tight"
        >
          Courses page
        </Link>
        <span className="text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
          {' '}
        </span>
        <span className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
          to kick start your journey!{' '}
        </span>
      </div>
    </section>
  )
}

export default EmptyCourse
