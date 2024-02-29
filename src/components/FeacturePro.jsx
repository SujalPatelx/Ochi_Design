import React, { useState } from 'react'
import { motion } from 'framer-motion'
import pro1 from '../assets/product-1.png'
import pro2 from '../assets/product-2.jpg'
import pro3 from '../assets/product-3.jpg'
import pro4 from '../assets/product-4.png'
import { HiArrowUp } from "react-icons/hi2";
import './Effect.css'

const FeacturePro = () => {

    const [isEffect1, setEffect1] = useState(false)
    const [isEffect2, setEffect2] = useState(false)
    const [isEffect3, setEffect3] = useState(false)
    const [isEffect4, setEffect4] = useState(false)

    return (
        <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full h-[250vh]'>
            <div className='mt-[15vh] ml-[3vw] text-[4vw] font-[Neue-Montreal] text-[#212121]'>
                Featured projects
            </div>
            <div className='w-full h-[1.5px] bg-[#212121]/20 mt-[4vh]'>
            </div>
            <div className='relative px-[4vw] pt-[8vh] flex gap-[30px]'>
                <div className='w-[100%]'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='w-[10px] h-[10px] rounded-full bg-[#212121]'>
                        </div>
                        <div className='text-[1vw] font-[400] '>FYDE</div>
                    </div>
                    <div className='group relative'>
                        <div onMouseEnter={() => setEffect1(true)} onMouseLeave={() => setEffect1(false)} className='product-1 cursor-pointer mt-[20px] w-full rounded-xl overflow-hidden scale-[1.02] transition duration-[0.7s] hover:scale-[0.97]'>
                            <img src={pro1} alt="loading" className='bg-cover bg-center bg-no-repeat scale-[1] transition duration-[0.7s] group-hover:scale-[1.09] w-full' />
                        </div>
                    </div>
                    <div className='flex gap-[14px] font-[Neue-Montreal]  text-[14px] mt-[24px]'>
                        {
                            ["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map((item, index) => {
                                return (
                                    <p className='px-3 py-1 uppercase border-[.12vw] border-solid border-[#212121]/80 rounded-3xl text-[1vw] transition duration-300 cursor-pointer hover:bg-[#212121]  hover:text-slate-300'>{item}</p>

                                )
                            })
                        }
                    </div>
                </div>
                <div className='w-[100%]'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='w-[10px] h-[10px] rounded-full bg-[#212121]'>
                        </div>
                        <div className='text-[1vw] font-[400] '>VISE</div>
                    </div>
                    <div className='group relative'>
                        <div onMouseEnter={() => setEffect2(true)} onMouseLeave={() => setEffect2(false)} className='product-1 cursor-pointer mt-[20px] w-full rounded-xl overflow-hidden scale-[1.02] transition duration-[0.7s] hover:scale-[0.97]'>
                            <img src={pro2} alt="loading" className='bg-cover bg-center bg-no-repeat scale-[1] transition duration-[0.7s] group-hover:scale-[1.09] w-full' />
                        </div>
                    </div>
                    <div className='flex gap-[14px] font-[Neue-Montreal]  text-[14px] mt-[24px]'>
                        {
                            ["AGENCY", "COMPANY PRESENTATION"].map((item, index) => {
                                return (
                                    <p className='px-3 py-1 uppercase border-[.12vw] border-solid border-[#212121]/80 rounded-3xl text-[1vw] transition duration-300 cursor-pointer hover:bg-[#212121]  hover:text-slate-300'>{item}</p>

                                )
                            })
                        }
                    </div>
                </div>
                <div className='absolute h-[16vh] w-[14vw] overflow-hidden text-[10vw] text-[#CDEA68] font-[Founder-Grotesk] font-black top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <p className='flex top-1/2 left-1/2 absolute -translate-x-[50%] -translate-y-[50%]'>{"FYDE".split("").map((item, index) => (
                        <motion.span initial={{ y: "70%" }}
                            animate={isEffect1 ? { y: "0%" } : { y: "70%" }}
                            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .02 }}
                            className='inline-block '
                        >
                            {item}
                        </motion.span>
                    ))}
                    </p>
                    <p className='flex top-1/2 left-1/2 absolute -translate-x-[50%] -translate-y-[50%]'>{"VISE".split("").map((item, index) => (
                        <motion.span initial={{ y: "70%" }}
                            animate={isEffect2 ? { y: "0%" } : { y: "70%" }}
                            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .02 }}
                            className='inline-block '
                        >
                            {item}
                        </motion.span>
                    ))}
                    </p>
                </div>
            </div>
            <div className='relative px-[4vw] pt-[8vh] flex gap-[30px]'>
                <div className='w-[100%]'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='w-[10px] h-[10px] rounded-full bg-[#212121]'>
                        </div>
                        <div className='text-[1vw] font-[400] '>TRAWA</div>
                    </div>
                    <div className='group relative'>
                        <div onMouseEnter={() => setEffect3(true)} onMouseLeave={() => setEffect3(false)} className='product-1 cursor-pointer mt-[20px] w-full rounded-xl overflow-hidden scale-[1.02] transition duration-[0.7s] hover:scale-[0.97]'>
                            <img src={pro3} alt="loading" className='bg-cover bg-center bg-no-repeat scale-[1] transition duration-[0.7s] group-hover:scale-[1.09] w-full' />
                        </div>
                    </div>
                    <div className='flex gap-[14px] font-[Neue-Montreal]  text-[14px] mt-[24px]'>
                        {
                            ["BRANDED IDENTITY", "DESIGN RESEARCH", "INVESTOR DECK"].map((item, index) => {
                                return (
                                    <p className='px-3 py-1 uppercase border-[.12vw] border-solid border-[#212121]/80 rounded-3xl text-[1vw] transition duration-300 cursor-pointer hover:bg-[#212121]  hover:text-slate-300'>{item}</p>

                                )
                            })
                        }
                    </div>

                </div>
                <div className='w-[100%]'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='w-[10px] h-[10px] rounded-full bg-[#212121]'>
                        </div>
                        <div className='text-[1vw] font-[400] '>PREMIUM BLEND
                        </div>
                    </div>
                    <div className='group relative'>
                        <div onMouseEnter={() => setEffect4(true)} onMouseLeave={() => setEffect4(false)} className='product-1 cursor-pointer mt-[20px] w-full rounded-xl overflow-hidden scale-[1.02] transition duration-[0.7s] hover:scale-[0.97]'>
                            <img src={pro4} alt="loading" className='bg-cover bg-center bg-no-repeat scale-[1] transition duration-[0.7s] group-hover:scale-[1.09] w-full' />
                        </div>
                    </div>
                    <div className='flex gap-[14px] font-[Neue-Montreal]  text-[14px] mt-[24px]'>
                        {
                            ["BRANDED TEMPLATE"].map((item, index) => {
                                return (
                                    <p className='px-3 py-1 uppercase border-[.12vw] border-solid border-[#212121]/80 rounded-3xl text-[1vw] transition duration-300 cursor-pointer hover:bg-[#212121]  hover:text-slate-300'>{item}</p>

                                )
                            })
                        }
                    </div>
                </div>
                <div className='absolute h-[16vh] w-[50vw] overflow-hidden text-[10vw] text-[#CDEA68] font-[Founder-Grotesk] font-black top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <p className='flex top-1/2 left-1/2 absolute -translate-x-[50%] -translate-y-[50%]'>{"TRAWA".split("").map((item, index) => (
                        <motion.span initial={{ y: "70%" }}
                            animate={isEffect3 ? { y: "0%" } : { y: "70%" }}
                            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .02 }}
                            className='inline-block '
                        >
                            {item}
                        </motion.span>
                    ))}
                    </p>
                    <p className='flex top-1/2 left-1/2 absolute -translate-x-[50%] -translate-y-[50%]'>{"PREMIUM BLEND".split("").map((item, index) => (
                        <motion.span initial={{ y: "70%" }}
                            animate={isEffect4 ? { y: "0%" } : { y: "70%" }}
                            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .02 }}
                            className='inline-block '
                        >
                            {item}
                        </motion.span>
                    ))}
                    </p>
                </div>
            </div>
            <div className='w-full flex items-center justify-center'>
                <div className='flex flex-col gap-[2vh] mt-[6vw]'>
                    <div className='readme-hover group w-[16vw] h-[8vh] flex justify-between items-center px-[1.4vw] bg-[#212121] rounded-full cursor-pointer transition duration-[0.2s] hover:bg-[#000000]'>
                        <p className='text-[#fff] uppercase text-[1vw]'>view all case studies</p>
                        <div className='bg-[#fff] rounded-full scale-[0.6] transition duration-[0.2s] group-hover:scale-[2.8]'><HiArrowUp className='rotate-45 text-[#fff] scale-[.5] opacity-0 transition duration-[0.2s] group-hover:opacity-100 group-hover:text-[#333]' /></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FeacturePro