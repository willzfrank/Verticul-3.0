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
  const [completedCourse, setCompletedCourse] = useState(true)
  return (
    <div className="w-[80%]">
      <div className="w-full flex items-center justify-center h-[90vh]">
        {completedCourse ? <CertificateProgressBar /> : <CertificateDetails />}
      </div>
    </div>
  )
}

export default Certificate
