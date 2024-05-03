import React from 'react'
import logo from '../../../public/assets/verticul_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { RxCaretDown } from 'react-icons/rx'

const navlnks = [
  {
    name: 'Forum',
    link: 'forum',
  },
  {
    name: 'Courses',
    link: 'all-courses',
  },
  {
    name: 'New',
    link: '#',
    image: '/assets/spark.svg',
  },
  {
    name: 'Blog',
    link: 'blog',
  },
]

const Navbar = () => {
  return (
    <nav className="sticky  z-50 top-0 h-16 px-12 py-4 bg-white flex items-center justify-between ">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-[30px] h-[30px] p-0.5 bg-white rounded shadow border border-indigo-50 justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch p-1 bg-violet-50 rounded-sm justify-center items-center inline-flex">
            <Image src={logo} alt="vertical logo" width={30} height={30} />
          </div>
        </div>
        <div className=" text-gray-900 text-base font-bold font-space-grotesk uppercase leading-tight tracking-tight">
          Verticul
        </div>
      </Link>

      {/* Nav List */}
      <div className="ml-[100px] w-max h-[34px] px-10 py-1.5 bg-white rounded-[32px] shadow border border-gray-200 flex-col justify-start items-start gap-px inline-flex">
        <div className="flex items-center justify-between gap-12 ">
          {navlnks.map((nav, idx) => (
            <Link href={nav.link} key={idx} className="flex items-center gap-1">
              <div className={`text-gray-500 text-sm font-medium `}>
                {nav.name}
              </div>
              <div className="w-4 h-4">
                {nav.image && (
                  <Image src={nav.image} alt="spark" width={20} height={20} />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right corner */}
      <div className="flex items-center gap-2">
        {/* Notification */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.7}
            stroke="#101828"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
          <div className="absolute w-2 h-2 -top-[-2px] -right-[-3px] bg-red-500 rounded-full border border-white"></div>
        </div>

        <div className="w-[21px] h-[0px] rotate-90 border border-gray-200"></div>

        {/* Cart */}
        <HiOutlineShoppingCart
          size={22}
          color="#667085"
          className="cursor-pointer"
        />

        <div className="flex items-center gap-2 w-max h-9 p-0.5 bg-white rounded-3xl shadow border border-gray-300 justify-start ">
          <div className="relative w-8 h-8 ">
            <Image
              className=" rounded-full w-8 h-8 object-cover "
              src="/assets/portrait-person-wearing-graphic-eye-makeup.jpg"
              alt="profile picture"
              sizes="100vw"
              width="0"
              height="0"
            />
            <span className="bottom-0 left-6 absolute  w-2.5 h-2.5 bg-gradient-to-br from-emerald-200 to-indigo-300 rounded-full shadow border border-white"></span>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-slate-700 text-sm font-normal font-Inter leading-tight">
              Michael Ross
            </p>

            <RxCaretDown size={22} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
