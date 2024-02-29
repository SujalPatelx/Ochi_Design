import React from 'react'
import { HiArrowUp } from "react-icons/hi2";
import personImg from '../assets/Homepage-Photo-663x469.jpg';

const About = () => {
    return (
        <>
            <div data-scroll data-scroll-section data-scroll-speed='-.2' className='w-full h-[180vh] bg-[#cdea68] pt-24'>
                <div className='w-full pl-16 pr-24 text-[3.8vw] text-[#212121] font-[400] leading-[1.1]  font-[Neue-Montreal]'>
                    <h1>Ochi is a strategic partner for fast-growing tech<br />businesses that need to <span className='relative span-under'>raise funds</span>, <span className='relative span-under'>sell products</span>,<br /><span className='relative span-under'>explain complex ideas</span>, and <span className='relative span-under'>hire great people</span>.</h1>
                </div>
                <div className='w-full h-[1px] mt-[10vh] bg-[#212121]/50'></div>
                <div className='font-[Neue-Montreal] flex justify-between pl-[4vw] pr-[12vw] pt-[4.1vh] text-[1.2vw]'>
                    <p>
                        What you can expect:
                    </p>
                    <div className='flex flex-col gap-[8vh] w-[22vw] ml-[20vw]'>
                        <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                        <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>
                    <div className='mt-[10vh] flex flex-col gap-[2vh]'>
                        <p>S:</p>
                        <div>
                            <p className='relative link-under w-fit'>Instagram</p>
                            <p className='relative link-under w-fit'>Behance</p>
                            <p className='relative link-under w-fit'>Facebook</p>
                            <p className='relative link-under w-fit'>Linkedin</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#212121]/50 mt-[15vh]'></div>
                <div className='pl-[5vw]  flex justify-between font-[Neue-Montreal]'>
                    <div className='flex flex-col gap-[2vh]'>
                        <p className='text-[4vw] tracking-tight text-[#212121]'>Our approach:</p>
                        <div className='readme-hover group w-[12vw] h-[8vh] flex justify-between items-center px-[1.4vw] pt-[2px] bg-[#212121] rounded-full cursor-pointer transition duration-[0.2s] hover:bg-[#000000]'>
                            <p className='text-[#fff] uppercase text-[1vw]'>read more</p>
                            <div className='bg-[#fff] rounded-full scale-[0.6] transition duration-[0.2s] group-hover:scale-[2.8]'><HiArrowUp className='rotate-45 text-[#fff] scale-[.5] opacity-0 transition duration-[0.2s] group-hover:opacity-100 group-hover:text-[#333]' /></div>
                        </div>
                    </div>
                    <div className='img-over m-[30px] w-[45vw] overflow-hidden rounded-2xl'>
                        <img src={personImg} alt="loading" className='personImgg w-full scale-[1.2]' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default About