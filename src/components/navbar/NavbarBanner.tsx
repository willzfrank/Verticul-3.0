import Link from 'next/link'

type Props = {}

const NavbarBanner = (props: Props) => {
  return (
    <div className="w-full h-[51px] flex items-center justify-center pt-[15px] pb-4 bg-gradient-to-l from-indigo-300 via-indigo-100 to-yellow-50 ">
      <div className="self-stretch gap-2 inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <div className="w-[16.97px] h-[16.97px] relative">
            <div className="w-3 h-3 left-0 top-[8.49px] absolute origin-top-left -rotate-45 bg-violet-50 shadow" />
            <div className="w-1.5 h-1.5 left-[5.50px] top-[5.40px] absolute bg-indigo-400 rounded-full" />
          </div>
          <p className="text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
            Check out the Best seller for this month!
          </p>
        </div>
        <div className="justify-start items-center gap-1 flex">
          <div className="justify-start items-center gap-1.5 flex">
            <Link
              href="#"
              className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight"
            >
              Read Here
            </Link>
          </div>
          <div className="w-3.5 h-3.5 justify-center items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarBanner
