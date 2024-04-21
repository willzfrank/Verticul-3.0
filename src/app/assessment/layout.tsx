import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'
import { PiMagicWandLight } from 'react-icons/pi'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex relative w-full my-5">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      {children}

      {/* Floating buton */}
      <button className=" fixed bottom-5 right-5 w-[187px] h-[30px] pl-3.5 pr-0.5 py-0.5 bg-gradient-to-b from-zinc-500 to-zinc-800 rounded-[32px] shadow border border-neutral-200 justify-start items-center gap-6 inline-flex">
        <span className="text-gray-200 text-sm font-medium font-['Inter'] leading-tight">
          Start taking notes
        </span>
        <div className="w-5 h-5 justify-center items-center inline-flex bg-white rounded-full">
          <PiMagicWandLight color="#292929" />
        </div>
      </button>
    </main>
  )
}
