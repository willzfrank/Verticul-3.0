import Image from 'next/image'
import React from 'react'
import cartImage from '../../public/assets/cart-image.png'

type Props = {}

const CartEmpty = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-[70vh] flex-col my-5 w-full">
      <div className="w-[281.24px] h-[267.42px] relative">
        <Image src={cartImage} layout="fill" alt="" />
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
  )
}

export default CartEmpty
