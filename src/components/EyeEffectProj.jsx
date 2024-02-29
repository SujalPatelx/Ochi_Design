import React, { useEffect, useState } from 'react'
import { HiArrowUp } from "react-icons/hi2";


const EyeEffectProj = () => {

    const [rotate, setRotate] = useState(0);
    const blackEye = document.querySelector('.black-eye');

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;


            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    })


    return (
        <div className='w-full h-[130vh] bg-[#CDEA68] font-[Founder-Grotesk] overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full h-full relative'>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='text-center text-[15vw] text-[#212121]'>
                        <p className='leading-[24vh]'>READY</p>
                        <p className='leading-[24vh]'>TO START</p>
                        <p className='leading-[24vh] text-nowrap'>THE PROJECT?</p>
                    </div>
                    <div className='w-full flex items-center justify-center font-[Neue-Montreal]'>
                        <div className='flex flex-col gap-[2vh] mt-[6vw]'>
                            <div className='readme-hover group w-[16vw] h-[8vh] flex justify-between items-center px-[1.4vw] bg-[#212121] rounded-full cursor-pointer transition duration-[0.2s] hover:bg-[#000000]'>
                                <p className='text-[#fff]/80 uppercase text-[1vw] text-nowrap'>start the project</p>
                                <div className='bg-[#fff] rounded-full scale-[0.6] transition duration-[0.2s] group-hover:scale-[2.8]'><HiArrowUp className='rotate-45 text-[#fff] scale-[.5] opacity-0 transition duration-[0.2s] group-hover:opacity-100 group-hover:text-[#333]' /></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='mt-[20px] font-[Neue-Montreal] text-[1.2vw] text-center uppercase font-[100] text-[#212121]'>or</p>
                    </div>
                    <div className='w-full flex items-center justify-center font-[Neue-Montreal]'>
                        <div className='flex flex-col gap-[2vh] mt-[20px]'>
                            <div className='readme-hover group w-[18vw] h-[8vh] flex justify-between items-center px-[1.4vw] bg-transparent border-[1px] border-[#212121] rounded-full cursor-pointer transition duration-[0.2s] hover:bg-[#212121]'>
                                <p className='text-[#212121]/80 text-[1vw] text-nowrap group-hover:text-[#fff]/80'>sujalpatelyo1042@gmail.com</p>
                                <div className='bg-[#212121] rounded-full scale-[0.6] transition duration-[0.2s] group-hover:scale-[2.8] group-hover:bg-[#fff]'><HiArrowUp className='rotate-45 text-[#fff] scale-[.5] opacity-0 transition duration-[0.2s] group-hover:opacity-100 group-hover:text-[#212121]' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute flex gap-[4vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[150%]'>
                        <div data-scroll data-scroll-section data-scroll-speed='.2' className='flex gap-[4vw]'>
                            <div className='flex justify-center items-center w-[12vw] h-[12vw] bg-zinc-100 rounded-full'>
                                <div className='relative black-eye w-2/3 h-2/3 bg-zinc-800 rounded-full'>
                                    <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='absolute  w-full h-10 top-1/2 left-1/2 translate-x-[50%] translate-y-[50%]'>
                                        <div className='w-6 h-6 bg-slate-200 rounded-full'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center w-[12vw] h-[12vw] bg-zinc-100 rounded-full'>
                                <div className='relative black-eye w-2/3 h-2/3 bg-zinc-800 rounded-full'>
                                    <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='absolute w-full h-10 top-1/2 left-1/2 translate-x-[50%] translate-y-[50%] '>
                                        <div className='w-6 h-6 bg-slate-200 rounded-full'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EyeEffectProj