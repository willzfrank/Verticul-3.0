import NavbarBanner from '@/components/navbar/NavbarBanner'
import React from 'react'
import Image from 'next/image'
import CartEmpty from '@/components/CartEmpty'
import CartItemList from '@/components/CartItemList'

type Props = {}

const Carts = (props: Props) => {
  const cartEmpty = false

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
              {cartEmpty ? '0 items' : '1 items'}{' '}
            </span>
          </div>
        </div>
      </div>

      {cartEmpty ? <CartEmpty /> : <CartItemList />}
    </div>
  )
}

export default Carts
