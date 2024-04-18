import React from 'react'
import logo from '../../../public/assets/verticul_logo.svg'
import spark from '../../../public/assets/spark.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className=" h-16 px-12 py-4 bg-white flex items-center justify-between ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-[30px] h-[30px] p-0.5 bg-white rounded shadow border border-indigo-50 justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch p-1 bg-violet-50 rounded-sm justify-center items-center inline-flex">
            <Image src={logo} alt="vertical logo" width={30} height={30} />
          </div>
        </div>
        <div className=" text-gray-900 text-base font-bold font-space-grotesk uppercase leading-tight tracking-tight">
          Verticul
        </div>
      </div>

      {/* Nav List */}
      <div className="ml-[100px] w-max h-[34px] px-10 py-1.5 bg-white rounded-[32px] shadow border border-gray-200 flex-col justify-start items-start gap-px inline-flex">
        <div className="flex items-center justify-between gap-12 ">
          <div className="text-gray-500 text-sm font-medium font-Inter leading-tight">
            Forum
          </div>
          <div className="text-gray-500 text-sm font-medium font-Inter leading-tight">
            Courses
          </div>
          <div className="flex items-center gap-1">
            <div className="text-gray-500 text-sm font-medium font-Inter leading-tight">
              New
            </div>
            <div className="w-4 h-4">
              <Image src={spark} alt="spark" width={20} height={20} />
            </div>
          </div>
          <div className="text-gray-500 text-sm font-medium font-Inter leading-tight">
            Blog
          </div>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.7}
          stroke="#667085"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>

        {/* PROFILE DROP DOWN */}
        <div className="flex items-center gap-2 w-max h-9 p-0.5 bg-white rounded-3xl shadow border border-gray-300 justify-start ">
          <div className="relative w-8 h-8 ">
            <Image
              className=" rounded-full"
              fill={true}
              src="/assets/portrait-person-wearing-graphic-eye-makeup.jpg"
              alt=""
            />
            <span className="bottom-0 left-6 absolute  w-2.5 h-2.5 bg-gradient-to-br from-emerald-200 to-indigo-300 rounded-full shadow border border-white"></span>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-slate-700 text-sm font-normal font-Inter leading-tight">
              Michael Ross
            </p>
            <div className="w-3 h-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
