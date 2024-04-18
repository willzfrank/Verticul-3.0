'use client'

import React from 'react'
import certificateCard from '../../public/assets/CertificateCard.png'
import Image from 'next/image'
import 'flowbite'

type Props = {}

const CertificateProgressBar = (props: Props) => {
  return (
    <div className="flex items-center h-[60%] justify-center flex-col gap-5">
      <div className="w-[188.99px] relative h-[195px] bg-gradient-to-b from-stone-700 to-stone-800 rounded-[20.62px]">
        <Image src={certificateCard} alt="certificate" layout="fill" />
      </div>

      <p className="w-[274px] text-center text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
        You are almost close to the finish line, Certificate is 70% ready.{' '}
      </p>
      <div className="w-[25%] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 border border-black">
        <div
          className="bg-[#101828] h-2.5 rounded-full"
          style={{ width: '45%' }}
        ></div>
      </div>
    </div>
  )
}

export default CertificateProgressBar
