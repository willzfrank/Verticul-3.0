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
    </main>
  )
}
