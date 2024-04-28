import React from "react";

export default function Button() {
  return (
    <button className="self-stretch h-[26px] px-2 py-1 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow border border-violet-400 flex-col justify-center items-center gap-px flex">
      <p className="text-violet-50 text-xs font-medium font-['Inter'] leading-[18px]">
        Start
      </p>
    </button>
  );
}
