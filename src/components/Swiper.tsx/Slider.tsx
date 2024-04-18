import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import './Swiper.module.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" bg-white rounded shadow border border-gray-200 flex-col justify-center items-center gap-[13px] inline-flex">
            <div className="w-[133px] h-[84px] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch pl-[95px] pr-[11.67px] pt-[71px] justify-end items-center inline-flex">
                <div className="w-[26.33px] h-[26.33px] relative">
                  <div className="w-[26.33px] h-[26.33px] left-0 top-0 absolute bg-indigo-100 bg-opacity-50 rounded-full" />
                  <div className="w-[21.27px] h-[21.27px] left-[2.70px] top-[2.70px] absolute">
                    <div className="w-[21.27px] h-[21.27px] left-0 top-0 absolute bg-white rounded-full" />
                    <div className="w-[17.22px] h-[17.22px] left-[2.03px] top-[2.03px] absolute bg-white rounded-full shadow" />
                    <div className="w-[10.80px] h-[10.80px] left-[5.06px] top-[5.06px] absolute" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[52.86px] px-2 py-1 flex-col justify-start items-start gap-0.5 flex">
              <div className="justify-start items-start gap-0.5 inline-flex">
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.86px] relative">
                  <div className="w-[6.74px] h-[6.86px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                  <div className="w-[3.21px] h-[3.27px] left-[1.70px] top-[1.73px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
                </div>
              </div>
              <div className="h-9 flex-col justify-start items-start flex">
                <div className="w-[118px] justify-between items-center inline-flex">
                  <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                    Baiscs of 3d Modelling...
                  </div>
                  <div className="w-3 justify-start items-center gap-0.5 flex">
                    <div className="text-slate-700 text-[6px] font-normal font-['Inter'] leading-tight">
                      4
                    </div>
                    <div className="justify-start items-start gap-[3px] flex">
                      <div className="w-1.5 h-1.5 relative" />
                    </div>
                  </div>
                </div>
                <div className="h-[18px] pt-0.5 pb-1 flex-col justify-start items-start gap-1 flex">
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[18px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[67px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[76px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[9px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded shadow border border-gray-200 flex-col justify-center items-center gap-[13px] inline-flex">
            <div className="w-[133px] h-[84px] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch pl-[95px] pr-[11.67px] pt-[71px] justify-end items-center inline-flex">
                <div className="w-[26.33px] h-[26.33px] relative">
                  <div className="w-[26.33px] h-[26.33px] left-0 top-0 absolute bg-indigo-100 bg-opacity-50 rounded-full" />
                  <div className="w-[21.27px] h-[21.27px] left-[2.70px] top-[2.70px] absolute">
                    <div className="w-[21.27px] h-[21.27px] left-0 top-0 absolute bg-white rounded-full" />
                    <div className="w-[17.22px] h-[17.22px] left-[2.03px] top-[2.03px] absolute bg-white rounded-full shadow" />
                    <div className="w-[10.80px] h-[10.80px] left-[5.06px] top-[5.06px] absolute" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[52.86px] px-2 py-1 flex-col justify-start items-start gap-0.5 flex">
              <div className="justify-start items-start gap-0.5 inline-flex">
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.86px] relative">
                  <div className="w-[6.74px] h-[6.86px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                  <div className="w-[3.21px] h-[3.27px] left-[1.70px] top-[1.73px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
                </div>
              </div>
              <div className="h-9 flex-col justify-start items-start flex">
                <div className="w-[118px] justify-between items-center inline-flex">
                  <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                    Baiscs of 3d Modelling...
                  </div>
                  <div className="w-3 justify-start items-center gap-0.5 flex">
                    <div className="text-slate-700 text-[6px] font-normal font-['Inter'] leading-tight">
                      4
                    </div>
                    <div className="justify-start items-start gap-[3px] flex">
                      <div className="w-1.5 h-1.5 relative" />
                    </div>
                  </div>
                </div>
                <div className="h-[18px] pt-0.5 pb-1 flex-col justify-start items-start gap-1 flex">
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[18px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[67px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[76px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[9px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded shadow border border-gray-200 flex-col justify-center items-center gap-[13px] inline-flex">
            <div className="w-[133px] h-[84px] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch pl-[95px] pr-[11.67px] pt-[71px] justify-end items-center inline-flex">
                <div className="w-[26.33px] h-[26.33px] relative">
                  <div className="w-[26.33px] h-[26.33px] left-0 top-0 absolute bg-indigo-100 bg-opacity-50 rounded-full" />
                  <div className="w-[21.27px] h-[21.27px] left-[2.70px] top-[2.70px] absolute">
                    <div className="w-[21.27px] h-[21.27px] left-0 top-0 absolute bg-white rounded-full" />
                    <div className="w-[17.22px] h-[17.22px] left-[2.03px] top-[2.03px] absolute bg-white rounded-full shadow" />
                    <div className="w-[10.80px] h-[10.80px] left-[5.06px] top-[5.06px] absolute" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[52.86px] px-2 py-1 flex-col justify-start items-start gap-0.5 flex">
              <div className="justify-start items-start gap-0.5 inline-flex">
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.86px] relative">
                  <div className="w-[6.74px] h-[6.86px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                  <div className="w-[3.21px] h-[3.27px] left-[1.70px] top-[1.73px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
                </div>
              </div>
              <div className="h-9 flex-col justify-start items-start flex">
                <div className="w-[118px] justify-between items-center inline-flex">
                  <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                    Baiscs of 3d Modelling...
                  </div>
                  <div className="w-3 justify-start items-center gap-0.5 flex">
                    <div className="text-slate-700 text-[6px] font-normal font-['Inter'] leading-tight">
                      4
                    </div>
                    <div className="justify-start items-start gap-[3px] flex">
                      <div className="w-1.5 h-1.5 relative" />
                    </div>
                  </div>
                </div>
                <div className="h-[18px] pt-0.5 pb-1 flex-col justify-start items-start gap-1 flex">
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[18px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[67px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[76px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[9px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded shadow border border-gray-200 flex-col justify-center items-center gap-[13px] inline-flex">
            <div className="w-[133px] h-[84px] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch pl-[95px] pr-[11.67px] pt-[71px] justify-end items-center inline-flex">
                <div className="w-[26.33px] h-[26.33px] relative">
                  <div className="w-[26.33px] h-[26.33px] left-0 top-0 absolute bg-indigo-100 bg-opacity-50 rounded-full" />
                  <div className="w-[21.27px] h-[21.27px] left-[2.70px] top-[2.70px] absolute">
                    <div className="w-[21.27px] h-[21.27px] left-0 top-0 absolute bg-white rounded-full" />
                    <div className="w-[17.22px] h-[17.22px] left-[2.03px] top-[2.03px] absolute bg-white rounded-full shadow" />
                    <div className="w-[10.80px] h-[10.80px] left-[5.06px] top-[5.06px] absolute" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[52.86px] px-2 py-1 flex-col justify-start items-start gap-0.5 flex">
              <div className="justify-start items-start gap-0.5 inline-flex">
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.86px] relative">
                  <div className="w-[6.74px] h-[6.86px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                  <div className="w-[3.21px] h-[3.27px] left-[1.70px] top-[1.73px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
                </div>
              </div>
              <div className="h-9 flex-col justify-start items-start flex">
                <div className="w-[118px] justify-between items-center inline-flex">
                  <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                    Baiscs of 3d Modelling...
                  </div>
                  <div className="w-3 justify-start items-center gap-0.5 flex">
                    <div className="text-slate-700 text-[6px] font-normal font-['Inter'] leading-tight">
                      4
                    </div>
                    <div className="justify-start items-start gap-[3px] flex">
                      <div className="w-1.5 h-1.5 relative" />
                    </div>
                  </div>
                </div>
                <div className="h-[18px] pt-0.5 pb-1 flex-col justify-start items-start gap-1 flex">
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[18px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[67px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[76px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[9px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded shadow border border-gray-200 flex-col justify-center items-center gap-[13px] inline-flex">
            <div className="w-[133px] h-[84px] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch pl-[95px] pr-[11.67px] pt-[71px] justify-end items-center inline-flex">
                <div className="w-[26.33px] h-[26.33px] relative">
                  <div className="w-[26.33px] h-[26.33px] left-0 top-0 absolute bg-indigo-100 bg-opacity-50 rounded-full" />
                  <div className="w-[21.27px] h-[21.27px] left-[2.70px] top-[2.70px] absolute">
                    <div className="w-[21.27px] h-[21.27px] left-0 top-0 absolute bg-white rounded-full" />
                    <div className="w-[17.22px] h-[17.22px] left-[2.03px] top-[2.03px] absolute bg-white rounded-full shadow" />
                    <div className="w-[10.80px] h-[10.80px] left-[5.06px] top-[5.06px] absolute" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[52.86px] px-2 py-1 flex-col justify-start items-start gap-0.5 flex">
              <div className="justify-start items-start gap-0.5 inline-flex">
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.86px] relative">
                  <div className="w-[6.74px] h-[6.86px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                  <div className="w-[3.21px] h-[3.27px] left-[1.70px] top-[1.73px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
                </div>
              </div>
              <div className="h-9 flex-col justify-start items-start flex">
                <div className="w-[118px] justify-between items-center inline-flex">
                  <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                    Baiscs of 3d Modelling...
                  </div>
                  <div className="w-3 justify-start items-center gap-0.5 flex">
                    <div className="text-slate-700 text-[6px] font-normal font-['Inter'] leading-tight">
                      4
                    </div>
                    <div className="justify-start items-start gap-[3px] flex">
                      <div className="w-1.5 h-1.5 relative" />
                    </div>
                  </div>
                </div>
                <div className="h-[18px] pt-0.5 pb-1 flex-col justify-start items-start gap-1 flex">
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[18px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[67px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[76px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[9px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded shadow border border-gray-200 flex-col justify-center items-center gap-[13px] inline-flex">
            <div className="w-[133px] h-[84px] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch pl-[95px] pr-[11.67px] pt-[71px] justify-end items-center inline-flex">
                <div className="w-[26.33px] h-[26.33px] relative">
                  <div className="w-[26.33px] h-[26.33px] left-0 top-0 absolute bg-indigo-100 bg-opacity-50 rounded-full" />
                  <div className="w-[21.27px] h-[21.27px] left-[2.70px] top-[2.70px] absolute">
                    <div className="w-[21.27px] h-[21.27px] left-0 top-0 absolute bg-white rounded-full" />
                    <div className="w-[17.22px] h-[17.22px] left-[2.03px] top-[2.03px] absolute bg-white rounded-full shadow" />
                    <div className="w-[10.80px] h-[10.80px] left-[5.06px] top-[5.06px] absolute" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[52.86px] px-2 py-1 flex-col justify-start items-start gap-0.5 flex">
              <div className="justify-start items-start gap-0.5 inline-flex">
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.86px] relative">
                  <div className="w-[6.74px] h-[6.86px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                  <div className="w-[3.21px] h-[3.27px] left-[1.70px] top-[1.73px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
                </div>
              </div>
              <div className="h-9 flex-col justify-start items-start flex">
                <div className="w-[118px] justify-between items-center inline-flex">
                  <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                    Baiscs of 3d Modelling...
                  </div>
                  <div className="w-3 justify-start items-center gap-0.5 flex">
                    <div className="text-slate-700 text-[6px] font-normal font-['Inter'] leading-tight">
                      4
                    </div>
                    <div className="justify-start items-start gap-[3px] flex">
                      <div className="w-1.5 h-1.5 relative" />
                    </div>
                  </div>
                </div>
                <div className="h-[18px] pt-0.5 pb-1 flex-col justify-start items-start gap-1 flex">
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[18px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[67px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[76px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[9px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded shadow border border-gray-200 flex-col justify-center items-center gap-[13px] inline-flex">
            <div className="w-[133px] h-[84px] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch pl-[95px] pr-[11.67px] pt-[71px] justify-end items-center inline-flex">
                <div className="w-[26.33px] h-[26.33px] relative">
                  <div className="w-[26.33px] h-[26.33px] left-0 top-0 absolute bg-indigo-100 bg-opacity-50 rounded-full" />
                  <div className="w-[21.27px] h-[21.27px] left-[2.70px] top-[2.70px] absolute">
                    <div className="w-[21.27px] h-[21.27px] left-0 top-0 absolute bg-white rounded-full" />
                    <div className="w-[17.22px] h-[17.22px] left-[2.03px] top-[2.03px] absolute bg-white rounded-full shadow" />
                    <div className="w-[10.80px] h-[10.80px] left-[5.06px] top-[5.06px] absolute" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[52.86px] px-2 py-1 flex-col justify-start items-start gap-0.5 flex">
              <div className="justify-start items-start gap-0.5 inline-flex">
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.86px] relative">
                  <div className="w-[6.74px] h-[6.86px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                  <div className="w-[3.21px] h-[3.27px] left-[1.70px] top-[1.73px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
                </div>
              </div>
              <div className="h-9 flex-col justify-start items-start flex">
                <div className="w-[118px] justify-between items-center inline-flex">
                  <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                    Baiscs of 3d Modelling...
                  </div>
                  <div className="w-3 justify-start items-center gap-0.5 flex">
                    <div className="text-slate-700 text-[6px] font-normal font-['Inter'] leading-tight">
                      4
                    </div>
                    <div className="justify-start items-start gap-[3px] flex">
                      <div className="w-1.5 h-1.5 relative" />
                    </div>
                  </div>
                </div>
                <div className="h-[18px] pt-0.5 pb-1 flex-col justify-start items-start gap-1 flex">
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[18px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[67px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[76px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[9px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded shadow border border-gray-200 flex-col justify-center items-center gap-[13px] inline-flex">
            <div className="w-[133px] h-[84px] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch pl-[95px] pr-[11.67px] pt-[71px] justify-end items-center inline-flex">
                <div className="w-[26.33px] h-[26.33px] relative">
                  <div className="w-[26.33px] h-[26.33px] left-0 top-0 absolute bg-indigo-100 bg-opacity-50 rounded-full" />
                  <div className="w-[21.27px] h-[21.27px] left-[2.70px] top-[2.70px] absolute">
                    <div className="w-[21.27px] h-[21.27px] left-0 top-0 absolute bg-white rounded-full" />
                    <div className="w-[17.22px] h-[17.22px] left-[2.03px] top-[2.03px] absolute bg-white rounded-full shadow" />
                    <div className="w-[10.80px] h-[10.80px] left-[5.06px] top-[5.06px] absolute" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[52.86px] px-2 py-1 flex-col justify-start items-start gap-0.5 flex">
              <div className="justify-start items-start gap-0.5 inline-flex">
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.86px] relative">
                  <div className="w-[6.74px] h-[6.86px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                  <div className="w-[3.21px] h-[3.27px] left-[1.70px] top-[1.73px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
                </div>
              </div>
              <div className="h-9 flex-col justify-start items-start flex">
                <div className="w-[118px] justify-between items-center inline-flex">
                  <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                    Baiscs of 3d Modelling...
                  </div>
                  <div className="w-3 justify-start items-center gap-0.5 flex">
                    <div className="text-slate-700 text-[6px] font-normal font-['Inter'] leading-tight">
                      4
                    </div>
                    <div className="justify-start items-start gap-[3px] flex">
                      <div className="w-1.5 h-1.5 relative" />
                    </div>
                  </div>
                </div>
                <div className="h-[18px] pt-0.5 pb-1 flex-col justify-start items-start gap-1 flex">
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[18px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[67px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[76px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[9px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded shadow border border-gray-200 flex-col justify-center items-center gap-[13px] inline-flex">
            <div className="w-[133px] h-[84px] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch pl-[95px] pr-[11.67px] pt-[71px] justify-end items-center inline-flex">
                <div className="w-[26.33px] h-[26.33px] relative">
                  <div className="w-[26.33px] h-[26.33px] left-0 top-0 absolute bg-indigo-100 bg-opacity-50 rounded-full" />
                  <div className="w-[21.27px] h-[21.27px] left-[2.70px] top-[2.70px] absolute">
                    <div className="w-[21.27px] h-[21.27px] left-0 top-0 absolute bg-white rounded-full" />
                    <div className="w-[17.22px] h-[17.22px] left-[2.03px] top-[2.03px] absolute bg-white rounded-full shadow" />
                    <div className="w-[10.80px] h-[10.80px] left-[5.06px] top-[5.06px] absolute" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[52.86px] px-2 py-1 flex-col justify-start items-start gap-0.5 flex">
              <div className="justify-start items-start gap-0.5 inline-flex">
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-emerald-400 via-emerald-400 to-green-700 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-slate-300 to-teal-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.86px] relative">
                  <div className="w-[6.74px] h-[6.86px] left-0 top-0 absolute bg-gradient-to-b from-amber-200 via-orange-300 to-orange-400 rounded-full" />
                  <div className="w-[3.21px] h-[3.27px] left-[1.70px] top-[1.73px] absolute bg-gradient-to-t from-amber-100 to-orange-50 rounded-full shadow" />
                </div>
                <div className="w-[6.74px] h-[6.74px] relative">
                  <div className="w-[6.74px] h-[6.74px] left-0 top-0 absolute bg-gradient-to-b from-violet-300 via-indigo-300 to-indigo-800 rounded-full" />
                  <div className="w-[3.21px] h-[3.21px] left-[1.70px] top-[1.70px] absolute bg-gradient-to-t from-indigo-100 to-slate-50 rounded-full shadow" />
                </div>
              </div>
              <div className="h-9 flex-col justify-start items-start flex">
                <div className="w-[118px] justify-between items-center inline-flex">
                  <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                    Baiscs of 3d Modelling...
                  </div>
                  <div className="w-3 justify-start items-center gap-0.5 flex">
                    <div className="text-slate-700 text-[6px] font-normal font-['Inter'] leading-tight">
                      4
                    </div>
                    <div className="justify-start items-start gap-[3px] flex">
                      <div className="w-1.5 h-1.5 relative" />
                    </div>
                  </div>
                </div>
                <div className="h-[18px] pt-0.5 pb-1 flex-col justify-start items-start gap-1 flex">
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[18px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[67px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                  <div className="w-[118px] justify-start items-start gap-[5px] inline-flex">
                    <div className="w-[23px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[76px] h-1 bg-gray-200 rounded-lg" />
                    <div className="w-[9px] h-1 bg-gray-200 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
