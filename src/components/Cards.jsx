import React from 'react'

const Cards = () => {
    return (
        <div data-scroll data-scroll-section className='h-[100vh] w-full flex items-center'>
            <div className='flex  w-full px-[4vw] gap-[20px]'>
                <div className="bg-[#004d43] w-[50%] h-[50vh] relative rounded-lg p-[40px] flex">
                    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <picture className=''>
                            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="loading" loading='lazy' />
                        </picture>
                    </div>
                    <div className='absolute bottom-8 left-8'>
                        <div className='btn-outline text-[#cdea68] font-[Neue-Montreal] px-[10px] border-1 rounded-3xl'>
                            <p>&copy;2019-2022</p>
                        </div>
                    </div>
                </div>
                <div className="w-[25%] h-[50vh] relative bg-[#212121] rounded-lg">
                    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <picture>
                            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                        </picture>
                    </div>
                    <div className='absolute bottom-8 left-8'>
                        <div className='text-[#fff]/90 font-[Neue-Montreal] px-[10px] border-[1px] border-[#fff]/50 rounded-3xl'>
                            <p>RATING 5.0 ON CLUTCH</p>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] h-[50vh] relative bg-[#212121] rounded-lg">
                    <picture className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" height={"104"} width={"102"} />
                    </picture>
                    <div className='absolute bottom-8 left-8'>
                        <div className='text-[#fff]/90 font-[Neue-Montreal] px-[10px] border-[1px] border-[#fff]/50 rounded-3xl'>
                            <p>BUSINESS BOOTCAMP ALUMNI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards