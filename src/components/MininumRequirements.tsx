import React from 'react'

type Props = {}

const MininumRequirements = (props: Props) => {
  return (
    <div>
      <div className="w-[185px] h-6 justify-start items-center gap-2 inline-flex">
        <div className="w-[7px] h-4 bg-indigo-50 rounded shadow-inner" />
        <div className="text-slate-700 text-base font-semibold font-['Inter'] leading-normal">
          Minimum requirement
        </div>
      </div>

      <ul>
        <li className="text-slate-700 text-base font-normal font-['Inter'] leading-normal">
          Must own a laptop or smart phone
        </li>
        <li className="text-slate-700 text-base font-normal font-['Inter'] leading-normal">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </li>
        <li className="text-slate-700 text-base font-normal font-['Inter'] leading-normal">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </li>{' '}
        <li className="text-slate-700 text-base font-normal font-['Inter'] leading-normal">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </li>{' '}
        <li className="text-slate-700 text-base font-normal font-['Inter'] leading-normal">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </li>
      </ul>
    </div>
  )
}

export default MininumRequirements
