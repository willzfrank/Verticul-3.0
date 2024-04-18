type Props = {}

const CurriculumProgressTracker = (props: Props) => {
  return (
    <div className="w-[357px] h-32 p-1 rounded-xl shadow border-4 border-amber-50 flex-col justify-center items-start gap-px inline-flex">
      <div className="h-[120px] pb-1 bg-orange-50 rounded-lg border border-amber-300 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch h-[60px] p-px bg-gradient-to-b from-amber-100 to-orange-50 rounded-lg shadow border border-amber-300 flex-col justify-start items-start gap-px flex">
          <div className="self-stretch px-3 py-2 justify-between items-center inline-flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-orange-900 text-sm font-medium font-['Inter'] leading-tight">
                Introduction to Data Science
              </div>
              <div className="justify-start items-start gap-1 inline-flex">
                <div className="justify-start items-center gap-1 flex">
                  <div className="w-3.5 h-3.5 justify-center items-center flex">
                    <div className="w-3.5 h-3.5 relative"></div>
                  </div>
                  <p className="text-amber-700 text-xs font-normal font-['Inter'] leading-[18px]">
                    May 10
                  </p>
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="w-0.5 h-0.5 bg-amber-700 rounded-full" />
                  <p className="text-amber-700 text-xs font-normal font-['Inter'] leading-[18px]">
                    4 Modules left.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-7 h-7 p-1.5 bg-amber-50 rounded shadow border border-amber-100 justify-center items-center flex">
              <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#7A2E0E"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-12 p-px flex-col justify-start items-start gap-px flex">
          <div className="self-stretch h-[46px] px-3 py-1 flex-col justify-start items-start gap-1 flex">
            <div className="w-[323px] h-4 relative bg-amber-100 rounded">
              <div className="w-[169px] h-4 left-0 top-0 absolute bg-amber-700 rounded-sm" />
              <div className="w-[3px] h-4 left-[175px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[182px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[189px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[196px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[196px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[203px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[210px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[217px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[224px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[231px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[238px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[245px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[252px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[259px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[266px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[273px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[280px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[287px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[294px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[301px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[308px] top-0 absolute bg-amber-200" />
              <div className="w-[3px] h-4 left-[315px] top-0 absolute bg-amber-200" />
            </div>
            <div className="text-orange-900 text-xs font-normal font-['Inter'] leading-[18px]">
              40%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurriculumProgressTracker
