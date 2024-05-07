'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import filter from '../../public/assets/filter-variant.svg'
import user from '../../public/assets/user-octagon.png'

import courseCard from '../../public/assets/certificate_image.png'
import { Rate } from 'antd'
import GroupAvater from '@/app/_components/GroupAvater'
import FavouritePage from './FavouritePage'

type Props = {}

const instructors = [
  {
    firstname: 'Skillzo',
    lastname: 'Instructor',
    image: '/assets/portrait-person-wearing-graphic-eye-makeup.jpg',
  },
  {
    firstname: 'Skillzo',
    lastname: 'Instructor',
    image: null,
  },
  {
    firstname: 'killzo',
    lastname: 'nstructor',
    image: '/assets/portrait-person-wearing-graphic-eye-makeup.jpg',
  },
  {
    firstname: 'Skillzo',
    lastname: 'Instructor',
    image: '/assets/portrait-person-wearing-graphic-eye-makeup.jpg',
  },
]

const CartItemList = (props: Props) => {
  const router = useRouter() // Initialize useRouter hook
  const [showFavourites, setShowFavourites] = useState(false)

  useEffect(() => {
    // Check if URL contains the 'view' parameter and its value is 'favourites'
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('view') && urlParams.get('view') === 'favourites') {
      setShowFavourites(true)
    }
  }, [])

  const handleFavouritesClick = () => {
    setShowFavourites(true)
    router.push('/carts?view=favourites')
  }

  return (
    <div className="px-[50px] my-5">
      <div className="flex items-center justify-between ">
        <div>
          <p className="text-gray-900 text-base font-medium font-['Inter'] leading-normal">
            Selected courses
          </p>
          <span className="text-slate-700 text-base font-normal font-['Inter'] leading-normal">
            Here some few courses that caught your eye
          </span>
        </div>

        <div>
          <div className="flex items-center gap-2 ">
            <div
              className="w-max cursor-pointer h-7 px-2 py-1 bg-gradient-to-r from-pink-50 to-pink-300 rounded shadow border border-pink-200 justify-start items-center gap-1 inline-flex"
              onClick={handleFavouritesClick}
            >
              <div className="w-3.5 h-3.5 justify-center items-center flex">
                <div className="w-3.5 h-3.5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                </div>
              </div>
              <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                Favourites
              </span>
            </div>

            <div className="w-max cursor-pointer h-7 px-2 py-1 bg-white rounded shadow border border-gray-300 justify-start items-center gap-1 inline-flex">
              <div className="justify-start items-center gap-1 flex">
                <div className="w-3.5 h-3.5 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
                <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                  Clear cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showFavourites ? (
        <FavouritePage setShowFavourites={setShowFavourites} />
      ) : (
        <div>
          <div className="w-[561px] h-[159px] bg-white rounded-xl shadow border border-gray-200 justify-start items-start inline-flex my-5">
            <div className="w-[204px] h-[159px] pl-4 pr-[174px] pt-3.5 pb-[131px] justify-start items-center flex relative">
              <Image
                src={courseCard}
                alt=""
                layout="fill"
                className="rounded-l-xl"
              />
              <input
                type="checkbox"
                name=""
                id=""
                className="w-3.5 h-3.5 absolute bg-white rounded border border-gray-300 cursor-pointer"
              />
            </div>
            <div className="w-full px-5 py-[9px] ">
              <div className="py-2 flex justify-between  items-center gap-2">
                <div>
                  <div className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
                    Digital Marketing Fundamentals
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs font-medium font-['Inter'] leading-[18px]">
                      Modules
                    </span>
                    <span className="text-gray-500 text-xs font-medium font-['Inter'] leading-[18px]">
                      {' '}
                    </span>
                    <span className="text-slate-700 text-xs font-medium font-['Inter'] leading-[18px]">
                      4
                    </span>
                  </div>{' '}
                  <Rate allowHalf defaultValue={2.5} className="text-sm" />
                </div>

                <div className="flex justify-end items-end flex-col">
                  <p className="text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                    $15
                  </p>
                  <p className="text-gray-900 text-base font-semibold font-['Inter'] leading-normal">
                    N23,000
                  </p>
                </div>
              </div>
              {/* INSTRUCTORS PROFILE */}
              <div className="self-stretch px-3 py-1 flex-col justify-start items-start gap-px flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className=" px-1 bg-white rounded-2xl shadow border border-gray-200 justify-start items-center gap-1 flex">
                    <div className="w-4 h-4 justify-center items-center flex">
                      <Image src={user} alt="user" width={100} height={100} />
                    </div>

                    {/* user group */}
                    <div className="h-6 justify-between items-start flex">
                      {/* <GroupAvater users={instructors} /> */}
                    </div>
                  </div>

                  <p className="text-emerald-500 text-xs font-medium font-['Inter'] leading-[18px]">
                    10% Discount{' '}
                  </p>
                </div>
              </div>

              <div className="w-max  px-4 py-1 bg-white rounded shadow border border-gray-300 justify-center items-center gap-1 inline-flex cursor-pointer">
                <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                  Remove course
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex items-end justify-end">
            <div className="w-[181px] h-7 px-2 py-1 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow border border-violet-400 flex-col justify-center items-center gap-px inline-flex cursor-pointer">
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-violet-50 text-sm font-medium font-['Inter'] leading-tight">
                  Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartItemList
