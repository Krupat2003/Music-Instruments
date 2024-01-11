import React from 'react'
import Image from 'next/image'
import guitarp3 from '../app/image/guitarp3.png'
import materialp33 from '../app/image/materialp33.png'
import materialp3 from '../app/image/materialp3.png'
import fasolid from '../app/image/fasolid.png'
import users1 from '../app/image/users1.png'
import users2 from '../app/image/users2.png'
import imgp3 from '../app/image/imgp3.png'
import imagep1 from '../app/image/imagep1.png'
import faq from '../app/image/faq.png'



const Faq = () => {
    return (
        <>
            <div className=' bg-[#00085A] w-full font-serif pb-20'>
                {/*[1] laptop view  */}
                <div className='hidden lg:flex mx-auto sm:w-[80vw] flex justify-evenly pt-16'>
                    <Image src={users1} className='w-[25vw]' />
                    <div className='w-[40vw] ps-5'>
                        <h2 className='text-lg md:text-lg lg:text-[22px] lg:mt-[-30px] text-white'>Having Questions About Us? We Have Just The Right Answer For You</h2>
                        <div className='mt-8'>
                            <Image src={imagep1} className='absolute mt-14 ms-8' />
                            <Image src={imgp3} className='absolute mt-3 ms-[220px]' />
                            <input type='text' className=' bg-white rounded-xl ps-5 h-[9vh] w-[39vw] text-lg relative mt-20'
                                style={{ border: '2px solid var(--Dark-blue, #0116F3)' }}
                                placeholder='Search' />
                        </div>
                    </div>
                    <Image src={users2} className='w-[25vw]' />
                </div>
                {/* mobile view  */}
                <div className=' mx-auto w-[70vw]  pt-16 lg:hidden'>
                    <div className='flex justify-evenly'>
                        <Image src={users1} className='w-[24vw]' />
                        <h2 className='text-xs sm:text-xl md:text-2xl w-[60vw] sm:w-[40vw] mt-7 sm:mt-16 text-white'>Having Questions About Us? We Have Just The Right Answer For You</h2>
                    </div>
                    <Image src={faq}  className='mt-12 '/>
                </div>

                {/*[2] Browe By Category start  */}
                <h1 className='text-lg text-white font-semibold text-left ps-20 pt-24 md:text-xl lg:text-[28px] '>Browe By Category</h1>
                <div className='w-full grid grid-cols-1 md:w-[85vw] md:mx-auto md:grid-cols-2 gap-5 lg:gap-0 lg:w-[90vw] lg:mx-auto lg:flex justify-center items-center pt-10 '>
                    <div className='px-7 w-[70vw] mx-auto md:w-[40vw]  lg:w-[20vw] rounded-2xl border-b border-gray-500 bg-white pb-5'>
                        <div className='flex mt-2'>
                            <Image src={materialp3} />
                            <p className='text-[16px] border-b border-gray-400 '> Production Information</p>
                        </div>
                        <div className='mt-4 border-b border-gray-400 pb-3 '>
                            <p className='border border-gray-600 rounded-xl ps-3'>Choose the instrument</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Used material</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Custom-made</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Details of material</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Details of material</p>
                        </div>
                        <p className='border-b border-gray-800 w-fit mt-3'>View All</p>
                    </div>
                    <div className='px-7 w-[70vw] mx-auto md:w-[40vw]  lg:w-[20vw] rounded-2xl border-b border-gray-500 bg-white pb-5'>
                        <div className='flex mt-2'>
                            <Image src={fasolid} />
                            <p className='text-[16px] border-b border-gray-400 '> Order and Shipping</p>
                        </div>
                        <div className='mt-4 border-b border-gray-400 pb-3 '>
                            <p className='border border-gray-600 rounded-xl ps-3'>Shipping & billing</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Payment method</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Order's status</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Delivery time</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Delayed or missing</p>
                        </div>
                        <p className='border-b border-gray-800 w-fit mt-3'>View All</p>
                    </div>
                    <div className='px-7 w-[70vw] mx-auto md:w-[40vw]  lg:w-[20vw] rounded-2xl border-b border-gray-500 bg-white pb-5'>
                        <div className='flex mt-2'>
                            <Image src={materialp33} />
                            <p className='text-[16px] border-b border-gray-400 '> Returns and Warranty</p>
                        </div>
                        <div className='mt-4 border-b border-gray-400 pb-3 '>
                            <p className='border border-gray-600 rounded-xl ps-3'>Request for exchange</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Warranty policy</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Warranty process</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Process time</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Warranty claims</p>
                        </div>
                        <p className='border-b border-gray-800 w-fit mt-3'>View All</p>
                    </div>
                    <div className='px-7 w-[70vw] mx-auto md:w-[40vw]  lg:w-[20vw] rounded-2xl border-b border-gray-500 bg-white pb-5'>
                        <div className='flex mt-2'>
                            <Image src={materialp33} />
                            <p className='text-[16px] border-b border-gray-400 '> Instrument Care</p>
                        </div>
                        <div className='mt-4 border-b border-gray-400 pb-3 '>
                            <p className='border border-gray-600 rounded-xl ps-3'>Offer repair service</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Tips</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Resources</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Maintenance</p>
                            <p className='border border-gray-600 rounded-xl ps-3 mt-2'>Blog</p>
                        </div>
                        <p className='border-b border-gray-800 w-fit mt-3'>View All</p>
                    </div>
                </div>
                {/* end  */}
            </div>
        </>
    )
}

export default Faq
