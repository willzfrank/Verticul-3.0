import { AiOutlineSearch } from 'react-icons/ai'
import { InputHTMLAttributes } from 'react'

import command from '../../../public/assets/command.svg'
import Image from 'next/image'

type SearchProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  value: string
} & InputHTMLAttributes<HTMLInputElement>

const SearchInput = ({
  onChange,
  placeholder,
  value,
  ...props
}: SearchProps) => {
  return (
    <div className="relative rounded-lg cursor-pointer  border-gray-300  flex items-center text-[#919191] w-full h-9 px-4 py-2 shadow ">
      <AiOutlineSearch
        className="absolute left-0 ml-2 pointer-events-none"
        size={20}
      />

      <input
        className="outline-0  w-full pl-5 py-2 bg-transparent truncate text-black text-sm border-none focus:ring-transparent"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      <div className="justify-start items-center gap-5 flex">
        <div className="justify-start items-start flex">
          <div className="w-3.5 h-[13px] px-0.5 pt-px pb-0.5 bg-white rounded-sm shadow border border-gray-200 justify-center items-center flex">
            <div className="grow shrink basis-0 self-stretch relative justify-center items-center inline-flex">
              <Image src={command} alt="command" layout="fill" />
            </div>
          </div>
          <div className="w-3.5 h-[13px] px-0.5 pt-px pb-0.5 bg-white rounded-sm justify-center items-center flex ">
            <span className="#667085">+ </span>
          </div>
          <div className="h-[13px] pl-1 pr-[3px] bg-white rounded-sm shadow border border-gray-200 justify-center items-center flex">
            <div className="w-[7px] h-[17px] flex items-center justify-center  text-gray-500 text-[10px] font-normal font-['Inter'] leading-tight">
              K
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchInput
