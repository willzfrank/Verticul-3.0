'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import { PiMagicWandLight } from 'react-icons/pi'
import savedNotes from '../../public/assets/savedNotes.svg'
import paintbucket from '../../public/assets/paintbucket.svg'

type Props = {}

const Notes = (props: Props) => {
  const [isNotesOpen, setIsNotesOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const toggleNotes = () => {
    setIsNotesOpen((prevState) => !prevState)
  }

  const handleSaveNote = () => {
    setIsSaving(true)
    setIsNotesOpen(false)

    // Your save logic here...
  }

  return (
    <div className="relative">
      {/* Notes area */}
      {isNotesOpen && (
        <div className="w-[305px]  bg-white shadow border-b border-gray-300 z-10 fixed  rounded bottom-[55px] right-5 animate__animated animate__bounceInUp">
          <div className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-[26px] h-[26px] bg-neutral-100 rounded-full border border-stone-300" />

              <h2 className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
                Notes
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5  cursor-pointer">
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
                    d="M5 12h14"
                  />
                </svg>
              </div>
              <div
                className="w-3.5 h-3.5  cursor-pointer"
                onClick={toggleNotes}
              >
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" border-t border-gray-300 ">
            <textarea
              name=""
              id=""
              cols={28}
              rows={7}
              className="outline-none border-none my-3 focus:ring-transparent text-sm resize-none w-full"
              style={{ outline: 'none' }}
            ></textarea>
          </div>
          <div className="w-full px-3 py-2 bg-gray-50 border-t border-gray-300 justify-end items-center inline-flex">
            <div
              className="px-2 py-1 bg-white rounded shadow border border-gray-300 justify-start items-center gap-1 flex cursor-pointer"
              onClick={handleSaveNote}
            >
              <div className="justify-start items-center gap-1 flex">
                <span className="text-slate-700 text-sm font-medium leading-tight">
                  Save note
                </span>
                <div className="w-3.5 h-3.5 bg-white justify-center items-center flex">
                  <div className="w-3.5 h-3.5 relative">
                    <Image src={savedNotes} alt="saved notes" layout="fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Saving notes */}
      {isSaving && (
        <div className="w-[303px] p-2 flex-col z-10 bg-white shadow border-b border-gray-300 rounded justify-start items-start gap-4 inline-flex bottom-[10px] right-5 fixed ">
          <h2 className="text-gray-900 text-xs font-medium font-['Inter'] leading-[18px]">
            Note Title
          </h2>
          <input
            type="text"
            name=""
            id=""
            placeholder="Intoduction to marketing"
            className="p-0.7 rounded-lg border-4 w-full border-indigo-50 text-xs font-normal leading-[18px] outline-none "
          />
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 justify-center items-center inline-flex">
              <div className="w-3.5 h-3.5 relative">
                <Image src={paintbucket} alt="painbucket" layout="fill" />
              </div>
            </div>
            <h2 className="text-slate-700 text-xs font-medium font-['Inter'] leading-[18px]">
              Customize note
            </h2>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="w-5 h-5 relative bg-gray-200 rounded-sm shadow border border-gray-500" />
            <div className="w-5 h-5 relative bg-violet-400 rounded-sm shadow" />
            <div className="w-5 h-5 relative bg-emerald-400 rounded-sm shadow" />
            <div className="w-5 h-5 relative bg-sky-400 rounded-sm shadow" />
            <div className="w-5 h-5 relative bg-orange-400 rounded-sm shadow" />
            <div className="w-5 h-5 relative bg-indigo-500 rounded-sm shadow" />
            <div className="w-5 h-5 relative bg-pink-500 rounded-sm shadow" />
          </div>
          <button className="w-full h-[26px] px-2 py-1 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow border border-violet-400 flex-col justify-center items-center gap-px inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <div className="text-violet-50 text-xs font-medium font-['Inter'] leading-[18px]">
                Save
              </div>
            </div>
          </button>
        </div>
      )}
      {/* FLOATING BUTTON */}
      <button
        className="fixed bottom-5 right-5 w-[187px] h-[30px] pl-3.5 pr-0.5 py-0.5 bg-gradient-to-b from-zinc-500 to-zinc-800 rounded-[32px] shadow border border-neutral-200 justify-start items-center gap-6 inline-flex"
        onClick={toggleNotes}
      >
        <span className="text-gray-200 text-sm font-medium font-['Inter'] leading-tight">
          Start taking notes
        </span>
        <div className="w-5 h-5 justify-center items-center inline-flex bg-white rounded-full">
          <PiMagicWandLight color="#292929" />
        </div>
      </button>
    </div>
  )
}

export default Notes
