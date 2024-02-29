import React from 'react'

function Marquee() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed='.1' className='h-[70vh] w-full rounded-t-3xl bg-[#004D43]  flex overflow-hidden items-center'>
            <div className='marques text-[#fff] text-[24vw] font-[Marqii] font-[600] tracking-normal leading-none uppercase whitespace-nowrap flex gap-8 border-y-2 border-[#fff]/20'>
                <div className='main-marque flex gap-10 '>
                    <p className=''>we are ochi</p>
                    <p className=''>we are ochi</p>
                </div>
                <div className='main-marque flex gap-10 '>
                    <p className=''>we are ochi</p>
                    <p className=''>we are ochi</p>
                </div>
            </div>
        </div>
    )
}

export default Marquee