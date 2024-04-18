'use client'

import React, { useState } from 'react'

import dynamic from 'next/dynamic'

const CertificateProgressBar = dynamic(
  () => import('@/components/CertificateProgressBar'),
  { ssr: false }
)

const Sidebar = dynamic(() => import('@/components/Sidebar/Sidebar'), {
  ssr: false,
})

const CertificateDetails = dynamic(
  () => import('@/components/CertificateDetails'),
  { ssr: false }
)

type Props = {}

const Certificate = (props: Props) => {
  const [completedCourse, setCompletedCourse] = useState(false)
  return (
    <div>
      <main className="flex relative w-full my-5">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%]">
          {completedCourse ? (
            <CertificateProgressBar />
          ) : (
            <CertificateDetails />
          )}
        </div>
      </main>{' '}
    </div>
  )
}

export default Certificate
