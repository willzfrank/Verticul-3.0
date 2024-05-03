import NavbarBanner from '@/components/navbar/NavbarBanner'
import React from 'react'
import cartImage from '../../../../public/assets/cart-image.png'
import Image from 'next/image'

type Props = {}

const Carts = (props: Props) => {
  return (
    <div>
      <NavbarBanner />
      <div className="w-full h-28 relative bg-stone-900">
        <div className="left-[102px] top-[16px] absolute flex-col justify-start items-start gap-[5px] inline-flex">
          <div className="text-gray-50 text-4xl font-medium font-['Power Grotesk Trial'] leading-[44px] tracking-wide">
            My Cart
          </div>
          <div>
            <span className="text-slate-700 text-sm font-normal font-['Inter'] leading-tight">
              🛍{' '}
            </span>
            <span className="text-gray-300 text-sm font-normal font-['Inter'] leading-tight">
              0 items
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-[70vh] flex-col my-5 w-full">
        <div className="w-[281.24px] h-[267.42px] relative">
          <Image
            //   className="opacity-80 mix-blend-soft-light"
            src={cartImage}
            layout="fill"
          />
        </div>

        <h2 className="w-[274px] text-center my-5 text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
          Hey Champ, Your cart is empty. Grab a course and start your journey.
        </h2>

        <div className="text-center">
          <span className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
            Not to worry we have got you covered, visit the <br />
          </span>
          <span className="text-indigo-700 text-sm font-semibold font-['Inter'] leading-tight">
            Courses page
          </span>
          <span className="text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
            {' '}
          </span>
          <span className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
            {' '}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Carts
