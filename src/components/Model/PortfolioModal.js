import {Dialog, Transition} from "@headlessui/react";
// import { useActiveModal } from '@/zustand/modals'
import {Fragment} from "react";
// import { div } from '../twin/Twin'

import {
  HandThumbUpIcon,
  ChevronRightIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
// import { useRouter } from 'next/router'
export default function PortfolioModal({setIsModal, isOpen, ModalData}) {
  //   const router = useRouter()
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
          onClose={() => setIsModal(true)}
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block md:w-3/4 w-full lg:w-1/2 relative max-w-2xl px-6 py-7  my-8  text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl sm:my-5 sm:align-middle sm:max-w-7xl">
                <div className="flex   justify-between py-5 px-8 items-center">
                  <h1 className="font-bold text-[#306975] text-3xl">
                    {ModalData?.titleModal}
                  </h1>
                  <div
                    onClick={() => setIsModal(false)}
                    className="text-[#306975] cursor-pointer"
                  >
                    <XMarkIcon className="w-8 h-8 " />
                  </div>
                </div>
                <div className="flex flex-col h-[75vh] overflow-y-auto py-8 space-x-6">
                  <div className="px-3 md:px-6 lg:px-8">
                    {ModalData?.images.map(v => (
                      <div className=" ">
                        <img
                          src={v.img}
                          alt=""
                          className=" h-[200px] lg:h-[400px] aspect-auto object-cover object-center  w-full  rounded-[6px] "
                        />
                        <p className=" font-bold py-2  text-xl text-[#306975] pt-3">
                          {v?.title}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p
                      className='font-bold font text-2xl text-[#306975] ">
                 pt-4'
                    >
                      Skills and deliverables
                    </p>
                    <div className="flex flex-wrap space-x-3 pt-4">
                      {ModalData?.skill?.map(v => (
                        <p className="bg-slate-100 px-2 py-1  text-[#306975] rounded-full">
                          {" "}
                          {v}
                        </p>
                      ))}
                    </div>
                    <p
                      className='font-bold font text-2xl text-[#306975] ">
                 pt-4'
                    >
                      Project description
                    </p>
                    <p className=" text-justify font-Poppins text-lg text-[#3c3e41] pt-6">
                      {ModalData?.subModal} {ModalData?.subModal2}
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
