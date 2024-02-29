import React, { useEffect, useState } from 'react'

const EyeEffect = () => {

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
        <div className='w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed='-.6' className='relative w-full h-full bg-[url(".\assets\eye-ball-bg.jpg")] bg-cover bg-center' >
                <div className='absolute flex gap-[4vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative black-eye w-2/3 h-2/3 bg-zinc-800 rounded-full'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='absolute  w-full h-10 top-1/2 left-1/2 translate-x-[50%] translate-y-[50%]'>
                                <div className='w-6 h-6 bg-slate-200 rounded-full'>

                                </div>
                            </div>
                            <p className='absolute text-zinc-100 font-[400] text-xl top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>PLAY</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative black-eye w-2/3 h-2/3 bg-zinc-800 rounded-full'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='absolute w-full h-10 top-1/2 left-1/2 translate-x-[50%] translate-y-[50%] '>
                                <div className='w-6 h-6 bg-slate-200 rounded-full'>
                                </div>
                            </div>
                            <p className='absolute text-zinc-100 font-[400] text-xl top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>PLAY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EyeEffect