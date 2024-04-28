import { Modal } from "antd";
import React from "react";

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
};
const IntroductionModal = ({ setIsModalOpen, isModalOpen }: Props) => {
  return (
    <Modal style={{ top: 20 }} open={isModalOpen} width={1000}>
      <div className="w-full px-4 py-2 bg-white rounded-[20px] justify-between items-center gap-5 inline-flex">
        {/* Introduction */}
        <div className="w-1/2 ">
          <div className="w-[216px] h-[45px] justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 self-stretch pl-[12.27px] pr-[10.91px] pt-[12.27px] pb-[10.91px] bg-violet-50 rounded-[10.91px] justify-center items-center flex">
              <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                <div className="w-[21.82px] h-[21.82px] relative"></div>
              </div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <h2 className="w-[143px] h-[27px] text-black text-base font-medium font-['Power Grotesk Trial'] leading-[30px]">
                Quick Introduction
              </h2>
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">
                We would love to know you
              </p>
            </div>
          </div>

          {/* FORM */}
          <form>
            <div className="flex items-center justify-between w-full my-3">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-gray-900 text-xs font-medium font-['Inter'] leading-[18px]"
                >
                  Roles
                </label>{" "}
                <input
                  className="w-[219px] h-[30px] px-3 py-1.5 bg-white rounded-md shadow border border-gray-300 justify-start items-center gap-px inline-flex text-gray-500 text-xs font-normal font-['Inter'] leading-[18px] outline-none"
                  placeholder="lorem"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-gray-900 text-xs font-medium font-['Inter'] leading-[18px]"
                >
                  Organization
                </label>{" "}
                <input
                  className="w-[219px] h-[30px] px-3 py-1.5 bg-white rounded-md shadow border border-gray-300 justify-start items-center gap-px inline-flex text-gray-500 text-xs font-normal font-['Inter'] leading-[18px] outline-none"
                  placeholder="Intoduction to marketing"
                />
              </div>
            </div>

            <div className="my-3">
              <label
                htmlFor=""
                className="text-gray-900 text-xs font-medium font-['Inter'] leading-[18px]"
              >
                Hobbies
              </label>{" "}
              <input
                className="w-full h-[30px] px-3 py-1.5 bg-white rounded-md shadow border border-gray-300 justify-start items-center gap-px inline-flex text-gray-500 text-xs font-normal font-['Inter'] leading-[18px] outline-none"
                placeholder="lorem.."
              />
            </div>

            <div className="flex flex-col my-3">
              <label
                htmlFor=""
                className="text-gray-900 text-xs font-medium font-['Inter'] leading-[18px]"
              >
                What are your expectations?{" "}
              </label>{" "}
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className="bg-gray-50 rounded-lg shadow border border-gray-300 outline-none p-2 resize-none"
              ></textarea>
            </div>

            <div>
              {/* BUTTON HERE */}

              <div className="flex items-center gap-5">
                <button
                  className="w-[134px] h-[26px] px-2 py-1 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded shadow border border-violet-400 flex-col justify-center items-center gap-px inline-flex"
                  onClick={() => setIsModalOpen(false)}
                >
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div className="text-violet-50 text-xs font-medium font-['Inter'] leading-[18px]">
                      Submit
                    </div>
                  </div>
                </button>

                <button
                  className="w-[83px] h-7 px-2 py-1 bg-white rounded shadow border border-gray-300 justify-center items-center gap-2 inline-flex"
                  onClick={() => setIsModalOpen(false)}
                >
                  <div className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight">
                    Skip
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* TREE */}
        <div className="w-[379px] h-[469px] relative bg-gradient-to-t from-indigo-300 via-indigo-100 to-yellow-50 rounded-xl">
          <div className="w-[29px] h-[29px] left-[175px] top-[22px] absolute">
            <div className="w-[29px] h-[29px] left-0 top-0 absolute bg-white rounded-full shadow" />
          </div>
          <div className="origin-top-left rotate-[-58.13deg] w-[29.03px] h-[30.30px] left-[12.47px] top-[264.24px] absolute">
            <div className="w-[29.03px] h-[29.03px] left-0 top-0 absolute origin-top-left rotate-[-58.13deg] bg-white rounded-full shadow" />
            <div className="w-[10.53px] h-[23.70px] left-[10.92px] top-[-9.12px] absolute origin-top-left rotate-[-29.53deg] text-black text-xs font-medium font-['Inter'] leading-[18px]">
              🎁
            </div>
          </div>
          <div className="origin-top-left rotate-[-58.13deg] w-[20.14px] h-[21.02px] left-[21px] top-[113.11px] absolute">
            <div className="w-[20.14px] h-[20.14px] left-0 top-0 absolute origin-top-left rotate-[-58.13deg] bg-white rounded-full shadow" />
            <div className="w-[7.31px] h-[16.44px] left-[7.58px] top-[-6.33px] absolute origin-top-left rotate-[-29.53deg] text-black text-[8.32px] font-medium font-['Inter'] leading-3">
              😃
            </div>
          </div>
          <div className="origin-top-left rotate-[-58.13deg] w-[20.14px] h-[21.02px] left-[342px] top-[436.11px] absolute">
            <div className="w-[20.14px] h-[20.14px] left-0 top-0 absolute origin-top-left rotate-[-58.13deg] bg-white rounded-full shadow" />
            <div className="w-[7.31px] h-[16.44px] left-[7.58px] top-[-6.33px] absolute origin-top-left rotate-[-29.53deg] text-black text-[8.32px] font-medium font-['Inter'] leading-3">
              😃
            </div>
          </div>
          <div className="origin-top-left rotate-[-58.13deg] w-[29.03px] h-[30.30px] left-[320px] top-[247.66px] absolute">
            <div className="w-[29.03px] h-[29.03px] left-0 top-0 absolute origin-top-left rotate-[-58.13deg] bg-white rounded-full shadow" />
            <div className="w-[10.53px] h-[23.70px] left-[10.92px] top-[-9.12px] absolute origin-top-left rotate-[-29.53deg] text-black text-xs font-medium font-['Inter'] leading-[18px]">
              ✌🏼
            </div>
          </div>
          <div className="origin-top-left rotate-[-58.13deg] w-[20.35px] h-[21.24px] left-[12px] top-[393.28px] absolute">
            <div className="w-[20.35px] h-[20.35px] left-0 top-0 absolute origin-top-left rotate-[-58.13deg] bg-white rounded-full shadow" />
            <div className="w-[7.38px] h-[16.61px] left-[7.65px] top-[-6.40px] absolute origin-top-left rotate-[-29.53deg] text-black text-[8.41px] font-medium font-['Inter'] leading-3">
              ✌🏼
            </div>
          </div>
          <div className="w-[301.18px] h-[154px] left-[48px] top-[77px] absolute">
            <div className="origin-top-left rotate-[-58.13deg] w-[20.14px] h-[21.02px] left-[272.70px] top-[44.11px] absolute">
              <div className="w-[20.14px] h-[20.14px] left-0 top-0 absolute origin-top-left rotate-[-58.13deg] bg-white rounded-full shadow" />
              <div className="w-[7.31px] h-[16.44px] left-[7.58px] top-[-6.33px] absolute origin-top-left rotate-[-29.53deg] text-black text-[8.32px] font-medium font-['Inter'] leading-3">
                🚀
              </div>
            </div>
            <div className="px-1 left-[210px] top-[80px] absolute bg-white rounded-2xl shadow justify-start items-center gap-0.5 inline-flex">
              <div className="w-2.5 h-2.5 bg-gradient-to-b from-neutral-500 to-zinc-900 rounded-full shadow" />
              <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                Arts and craft
              </div>
            </div>
            <div className="px-1 left-0 top-[80px] absolute bg-white rounded-2xl shadow justify-start items-center gap-0.5 inline-flex">
              <div className="w-2.5 h-2.5 bg-gradient-to-b from-neutral-500 to-zinc-900 rounded-full shadow" />
              <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                Team player
              </div>
            </div>
            <div className="left-[35px] top-[116px] absolute bg-white rounded-tr-md rounded-bl-md rounded-br-md flex-col justify-start items-start inline-flex">
              <div className="px-1 py-0.5 rounded-2xl justify-start items-start gap-0.5 inline-flex">
                <div className="w-1 h-1 bg-gray-300 rounded-full shadow" />
                <div className="w-1 h-1 bg-gray-300 rounded-full shadow" />
                <div className="w-1 h-1 bg-gray-300 rounded-full shadow" />
              </div>
              <div className="px-1 py-2 shadow justify-center items-center gap-px inline-flex">
                <div className="text-gray-500 text-[8px] font-normal font-['Inter'] leading-[1px]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit <br />
                  Ut et massa mi. Aliquam in hendrerit urna. Pellentesque .
                </div>
              </div>
            </div>
            <div className="p-0.5 left-[128px] top-[56px] absolute bg-white rounded-2xl justify-start items-start gap-0.5 inline-flex">
              <div className="w-[5px] h-[5px] bg-red-500 rounded-full shadow" />
              <div className="w-[5px] h-[5px] bg-amber-400 rounded-full shadow" />
              <div className="w-[5px] h-[5px] bg-emerald-500 rounded-full shadow" />
            </div>
            <div className="w-[172px] h-[41.30px] left-[53px] top-0 absolute">
              <div className="w-[141px] h-[18px] left-[15px] top-[23.30px] absolute bg-purple-300 bg-opacity-20 rounded" />
              <div className="w-[163px] h-[21px] left-[5px] top-[15px] absolute bg-violet-200 bg-opacity-30 rounded" />
              <div className="w-[172px] px-[5.35px] py-[2.68px] left-0 top-0 absolute bg-white rounded-md shadow justify-start items-center gap-2 inline-flex">
                <div className="w-[23.42px] h-[23.42px] relative">
                  <img
                    className="w-[23.42px] h-[23.42px] left-0 top-0 absolute rounded-full"
                    src="https://via.placeholder.com/23x23"
                  />
                  <div className="w-[6.83px] h-[6.83px] left-[16.47px] top-[15.37px] absolute bg-gradient-to-br from-emerald-200 to-indigo-300 rounded-full shadow border border-white" />
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-indigo-950 text-[9.37px] font-medium font-['Inter'] leading-[13.39px]">
                    Jane Adebayo
                  </div>
                  <div className="justify-start items-start gap-[2.68px] inline-flex">
                    <div className="text-gray-500 text-[5.35px] font-normal font-['Inter'] leading-3">
                      Moniepoint
                    </div>
                    <div className="justify-start items-center gap-[2.68px] flex">
                      <div className="w-[1.34px] h-[1.34px] bg-gray-500 rounded-full" />
                      <div className="text-gray-500 text-[5.35px] font-normal font-['Inter'] leading-3">
                        Financial Analyst
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-1 left-[91px] top-[80px] absolute bg-white rounded-2xl shadow justify-start items-center gap-0.5 inline-flex">
              <div className="w-2.5 h-2.5 bg-gradient-to-b from-neutral-500 to-zinc-900 rounded-full shadow" />
              <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                Love reading books
              </div>
            </div>
          </div>
          <div className="w-[301.18px] h-[154px] left-[52px] top-[280px] absolute">
            <div className="origin-top-left rotate-[-58.13deg] w-[20.14px] h-[21.02px] left-[272.70px] top-[44.11px] absolute">
              <div className="w-[20.14px] h-[20.14px] left-0 top-0 absolute origin-top-left rotate-[-58.13deg] bg-white rounded-full shadow" />
              <div className="w-[7.31px] h-[16.44px] left-[7.58px] top-[-6.33px] absolute origin-top-left rotate-[-29.53deg] text-black text-[8.32px] font-medium font-['Inter'] leading-3">
                🚀
              </div>
            </div>
            <div className="px-1 left-[210px] top-[80px] absolute bg-white rounded-2xl shadow justify-start items-center gap-0.5 inline-flex">
              <div className="w-2.5 h-2.5 bg-gradient-to-b from-neutral-500 to-zinc-900 rounded-full shadow" />
              <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                Arts and craft
              </div>
            </div>
            <div className="px-1 left-0 top-[80px] absolute bg-white rounded-2xl shadow justify-start items-center gap-0.5 inline-flex">
              <div className="w-2.5 h-2.5 bg-gradient-to-b from-neutral-500 to-zinc-900 rounded-full shadow" />
              <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                Team player
              </div>
            </div>
            <div className="left-[35px] top-[116px] absolute bg-white rounded-tr-md rounded-bl-md rounded-br-md flex-col justify-start items-start inline-flex">
              <div className="px-1 py-0.5 rounded-2xl justify-start items-start gap-0.5 inline-flex">
                <div className="w-1 h-1 bg-gray-300 rounded-full shadow" />
                <div className="w-1 h-1 bg-gray-300 rounded-full shadow" />
                <div className="w-1 h-1 bg-gray-300 rounded-full shadow" />
              </div>
              <div className="px-1 py-2 shadow justify-center items-center gap-px inline-flex">
                <div className="text-gray-500 text-[8px] font-normal font-['Inter'] leading-[1px]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit <br />
                  Ut et massa mi. Aliquam in hendrerit urna. Pellentesque .
                </div>
              </div>
            </div>
            <div className="w-[172px] h-[41.30px] left-[53px] top-0 absolute">
              <div className="w-[141px] h-[18px] left-[15px] top-[23.30px] absolute bg-purple-300 bg-opacity-20 rounded" />
              <div className="w-[163px] h-[21px] left-[5px] top-[15px] absolute bg-violet-200 bg-opacity-30 rounded" />
              <div className="w-[172px] px-[5.35px] py-[2.68px] left-0 top-0 absolute bg-white rounded-md shadow justify-start items-center gap-2 inline-flex">
                <div className="w-[23.42px] h-[23.42px] relative">
                  <img
                    className="w-[23.42px] h-[23.42px] left-0 top-0 absolute rounded-full"
                    src="https://via.placeholder.com/23x23"
                  />
                  <div className="w-[6.83px] h-[6.83px] left-[16.47px] top-[15.37px] absolute bg-gradient-to-br from-emerald-200 to-indigo-300 rounded-full shadow border border-white" />
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-indigo-950 text-[9.37px] font-medium font-['Inter'] leading-[13.39px]">
                    Jane Adebayo
                  </div>
                  <div className="justify-start items-start gap-[2.68px] inline-flex">
                    <div className="text-gray-500 text-[5.35px] font-normal font-['Inter'] leading-3">
                      Moniepoint
                    </div>
                    <div className="justify-start items-center gap-[2.68px] flex">
                      <div className="w-[1.34px] h-[1.34px] bg-gray-500 rounded-full" />
                      <div className="text-gray-500 text-[5.35px] font-normal font-['Inter'] leading-3">
                        Financial Analyst
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-1 left-[91px] top-[80px] absolute bg-white rounded-2xl shadow justify-start items-center gap-0.5 inline-flex">
              <div className="w-2.5 h-2.5 bg-gradient-to-b from-neutral-500 to-zinc-900 rounded-full shadow" />
              <div className="text-slate-700 text-[8px] font-medium font-['Inter'] leading-[18px]">
                Love reading books
              </div>
            </div>
            <div className="p-0.5 left-[128px] top-[56px] absolute bg-white rounded-2xl justify-start items-start gap-0.5 inline-flex">
              <div className="w-[5px] h-[5px] bg-red-500 rounded-full shadow" />
              <div className="w-[5px] h-[5px] bg-amber-400 rounded-full shadow" />
              <div className="w-[5px] h-[5px] bg-emerald-500 rounded-full shadow" />
            </div>
          </div>
        </div>{" "}
      </div>
    </Modal>
  );
};

export default IntroductionModal;
