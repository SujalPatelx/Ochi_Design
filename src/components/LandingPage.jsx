import { motion } from 'framer-motion';
import React from 'react'
import { HiArrowUp } from "react-icons/hi2";




function LandingPage() {

    return (
        <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-screen  pt-40 relative overflow-hidden'>
            <div className=' ml-14 text-[#212121]'>
                {

                    ['we create', 'eye-opening', 'presentations'].map((item, index) => {
                        return (
                            <div className='masker'>
                                <div className='w-fit flex items-center'>
                                    {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "8.3vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }} className='w-[8.3vw] h-[5.7vw] mr-5 mt-4 rounded-md bg-[url("./assets/landing-page-text-img.jpg")] bg-cover bg-no-repeat'></motion.div>)}
                                    <div className='uppercase leading-[6.7vw] tracking-[0.025rem] font-[Founder-Grotesk] font-semibold text-[9vw]'>{item}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='mt-24 px-12 border-t-[1.2px] border-zinc-500/40 font-[Neue-Montreal] text-[#212121]/80 text-[1.2vw]'>
                <div className='mt-3 flex items-center justify-between'>
                    {
                        ["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                            return (
                                <p key={index} className={`${index == 1 && "ml-36"}`}> {item}</p>
                            )
                        })
                    }
                    <div className='xyzb group flex items-center gap-2 cursor-pointer'>
                        <p className='px-3 py-1 uppercase border-[.12vw] border-solid border-[#212121]/80 rounded-3xl text-[1vw] transition duration-300 group-hover:bg-[#212121]  group-hover:text-slate-300'>Start the project</p>
                        <div className='relative p-[0.4rem] border-[.12vw] border-solid border-[#212121]/80 rounded-full rotate-45 overflow-hidden '>
                            <HiArrowUp className='transition duration-300 group-hover:text-[#fff]' />
                            <div className='absolute w-12 bg-[#212121] h-12 rounded-[100%] -z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] scale-0 transition duration-300 group-hover:scale-100'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute w-44 h-14  bg-[#E73C37] top-[30%] rotate-90 -right-16 flex gap-5 items-center justify-center font-[Neue-Montreal] text-[#fff]'>
                <p className='-rotate-90 w-fit text-xl font-bold'>W.</p>
                <p className='-rotate-180 mt-1 text-sm font-medium tracking-widest'>Site of the Day</p>
            </div>
            <div className='absolute w-fit overflow-hidden bottom-6 left-[50%] -translate-x-[10%] text-[15px] font-[Neue-Montreal] text-[#333]/30 flex flex-col gap-10'>
                <div>
                    <p className='scroll-down-ani'>Scroll down</p>
                </div>
            </div>
        </div >
    )
}

export default LandingPage




