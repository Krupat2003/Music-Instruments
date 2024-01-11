import React from 'react'
import Image from 'next/image'
import colors from '../app/image/colors.png'
import p31 from '../app/image/p31.png'
import p32 from '../app/image/p32.png'
import p33 from '../app/image/p33.png'
import p34 from '../app/image/p34.png'
import plus from '../app/image/plus.png'
import img1 from '../app/image/img1.png'
import img2 from '../app/image/img2.png'
import img3 from '../app/image/img3.png'
import questions from '../app/image/questions.png'



const Instruments2 = () => {
    return (
        <>
            <div className='w-full bg-[#00085A] font-serif pb-32'>
                <div className='w-[80vw] mx-auto gap-5 md:gap-12 flex-col lg:gap-0 lg:flex-row flex justify-between pt-10'>
                    <div className='w-[60vw] mx-auto lg:mx-0 lg:w-[30vw]'>
                        <Image src={p34} />
                        <div className='flex justify-between items-center gap-3 mt-7 w-[19vw] sm:w-auto'>
                            <Image src={p33} />
                            <Image src={p32} />
                            <Image src={p31} />
                        </div>
                    </div>
                    {/* 2 */}
                    <div className=' w-full mx:w-[70vw] mx-auto lg:mx-0 lg:w-[45vw] text-white pt-5'>
                        {/* mobile view start p*/}
                        <p className=' text-black text-xs ms-auto bg-white rounded-3xl h-fit w-fit py-1 px-3 sm:hidden'>New Product</p>
                        {/* end  */}
                        <div className='flex'>
                            <h2 className='text-xl sm:text-3xl'>Gibson 2016 T Les Paul Studio <br /> 50’s Tribute</h2>
                            {/* laptop view p */}
                            <p className='hidden sm:flex text-black text-sm bg-white rounded-3xl h-fit py-2 px-3 ms-4 mt-[-15px]'>New Product</p>
                        </div>
                        <p className='text-xl pt-5'>Rs. 123,990</p>
                        <div className='flex lg:justify-between mt-5 lg:w-[39vw]'>
                            <p className='text-black text-xs md:text-sm lg:text-xl bg-white rounded-2xl h-fit py-2 px-4'>Reviews <span className='ps-6'>4.1k</span></p>
                            <p className='text-black text-xs ms-4 md:text-sm md:ms-16 lg:ms-0 lg:text-xl bg-white rounded-2xl h-fit py-2 px-4'>Category <span className='ps-6'>Guitar Pro 8</span></p>
                        </div>
                        <p className='text:xs text-gray-300 sm:tex-lg mt-6'>
                            The Gibson les paul studio 50's tribute electric guitar with humbuckers packed the
                            stripped-down appeal of the long-running studio line in 50's-themed model with p-90
                            pickups that was a major hit with players everywhere.
                        </p>
                        <div className='flex items-center mt-5'>
                            <Image src={plus} className='w-[28vw] md:w-[10vw]' />
                            <p className='text-xs ps-10' style={{ color: '#6D6D6D' }}>Only 12 items left! <br /> Don’t miss it</p>
                        </div>
                        <div className='flex items-end mt-6'>
                            <p>Color</p>
                            <Image src={colors} className='w-[10vw] ms-7' />
                        </div>
                        <div className='flex mt-5'>
                            <button className='text-white text-lg rounded-2xl h-fit py-1 px-4' style={{ backgroundColor: '#0116F3' }}>Buy Now</button>
                            <button className='text-black text-lg  rounded-2xl h-fit py-1 px-4 ms-16' style={{ backgroundColor: '#7A53FC' }}>Add to cart</button>
                        </div>
                    </div>
                </div>

                {/* Description start  */}
                <div className='text-white mt-11 w-[80vw] lg:w-[69vw] mx-auto'>
                    <div className='flex justify-between lg:gap-40 items-center '>
                        <h2 className='text-sm sm:text-xl border-b border-gray-400 pb-1'>Description</h2>
                        <h2 className='text-sm sm:text-xl '>Specification</h2>
                        <h2 className='text-sm sm:text-xl '>Reviews</h2>
                    </div>
                    <div>
                        <p className=' text-gray-300 text-sm sm:text-lg lg:ms-11 mt-6'>
                            It packs the prefect combination of a traditional mahogany body with modern weight
                            relief and a grain textured satin finish maple top. These time-tested tonewoods with
                            a set mahogany neck produce legendary Les Paul sound and resonance. The neck sports
                            a rounded '50s neck profile that traditionalists love <span className='border-b border-gray-400 pb-1'>Read more</span>
                        </p>
                    </div>
                </div>
                {/* end  */}

                {/* Best Instrument start  ======*/}
                <h1 className='text-lg text-white font-semibold ms-20 lg:ms-32 md:text-xl lg:text-2xl xl:text-[28px] mt-16'>You might also</h1>
                <div className='grid grid-cols-1 md:mx-auto md:w-[90vw] md:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-0 mt-9  '>
                    {/* 1 */}
                    <div className='w-[70vw] sm:w-[55%] md:w-auto lg:w-[26vw] bg-white mx-auto '>
                        <Image src={img1} className='w-full' />
                        <div className='p-4'>
                            <div className='bg-white text-xl'>
                                <i className="fa-solid fa-star "></i>
                                <i className="fa-solid fa-star ps-2"></i>
                                <i className="fa-solid fa-star ps-2"></i>
                                <i className="fa-solid fa-star ps-2"></i>
                                <i className="fa-regular fa-star-half-stroke ps-2"></i>
                            </div>
                            <h1 className='text-xl sm:text-3xl md:text-xl lg:text-[35px] mt-2 font-semibold'>
                                Guitar Pro 8
                            </h1>
                            <p className='text-base sm:text-xl md:text-sm lg:text-xl mt-3 font-medium'>
                                The guitar is a fretted musical instrument that typically has six strings
                            </p>
                            <div className='flex sm:flex-row justify-between mt-5'>
                                <p className='text-lg md:text-[12px] lg:text-xl font-semibold'>
                                    Rs. 2,7999
                                </p>
                                <p className='text-lg  md:text-[12px]  lg:text-xl font-medium pe-4 lg:pe-14'>
                                    Rs. 2,8999
                                </p>
                            </div>
                            <div className='flex justify-between items-center mt-6'>
                                <i className="fa-solid fa-heart text-xl"></i>
                                <button className='text-black py-2 lg:py-3 px-4 lg:px-5 text-base md:text-sm lg:text-xl rounded-3xl font-semibold me-4 lg:me-6'
                                    style={{ backgroundColor: '#BBADEC' }}>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='w-[70vw] sm:w-[55%] md:w-auto lg:w-[26vw] bg-white mx-auto '>
                        <Image src={img2} className='w-full' />
                        <div className='p-4'>
                            <div className='bg-white text-xl'>
                                <i className="fa-solid fa-star "></i>
                                <i className="fa-solid fa-star ps-2"></i>
                                <i className="fa-solid fa-star ps-2"></i>
                                <i className="fa-solid fa-star ps-2"></i>
                                <i className="fa-regular fa-star-half-stroke ps-2"></i>
                            </div>
                            <h1 className='text-xl sm:text-3xl md:text-xl lg:text-[35px] mt-2 font-semibold'>
                                Casio CT-S300
                            </h1>
                            <p className='text-base sm:text-xl md:text-sm lg:text-xl mt-3 font-medium'>
                                Piano, also called pianoforte, French piano or pianoforte, German Klavier
                            </p>
                            <div className='flex sm:flex-row justify-between mt-5'>
                                <p className='text-lg md:text-[12px] lg:text-xl font-semibold'>
                                    Rs. 8,399
                                </p>
                                <p className='text-lg  md:text-[12px]  lg:text-xl font-medium pe-4 lg:pe-14'>
                                    Rs. 8,999
                                </p>
                            </div>
                            <div className='flex justify-between items-center mt-6'>
                                <i className="fa-solid fa-heart text-xl"></i>
                                <button className='text-black py-2 lg:py-3 px-4 lg:px-5 text-base md:text-sm lg:text-xl rounded-3xl font-semibold me-4 lg:me-6'
                                    style={{ backgroundColor: '#BBADEC' }}>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* 3  */}
                    <div className='w-[70vw] sm:w-[55%] md:w-auto lg:w-[26vw] bg-white mx-auto '>
                        <Image src={img3} className='w-full' />
                        <div className='p-4'>
                            <div className='bg-white text-xl'>
                                <i className="fa-solid fa-star "></i>
                                <i className="fa-solid fa-star ps-2"></i>
                                <i className="fa-solid fa-star ps-2"></i>
                                <i className="fa-solid fa-star ps-2"></i>
                                <i className="fa-regular fa-star-half-stroke ps-2"></i>
                            </div>
                            <h1 className='text-xl sm:text-3xl md:text-xl lg:text-[35px] mt-2 font-semibold'>
                                ARISTA
                            </h1>
                            <p className='text-base sm:text-xl md:text-sm lg:text-xl mt-3 font-medium'>
                                There are various names for a flute player, such as a flutist, a flautist, a fluter, or a flutenist.
                            </p>
                            <div className='flex sm:flex-row justify-between mt-5'>
                                <p className='text-lg md:text-[12px] lg:text-xl font-semibold'>
                                    Rs. 669
                                </p>
                                <p className='text-lg  md:text-[12px]  lg:text-xl font-medium pe-4 lg:pe-14'>
                                    Rs. 2,899
                                </p>
                            </div>
                            <div className='flex justify-between items-center mt-6'>
                                <i className="fa-solid fa-heart text-xl"></i>
                                <button className='text-black py-2 lg:py-3 px-4 lg:px-5 text-base md:text-sm lg:text-xl rounded-3xl font-semibold me-4 lg:me-6'
                                    style={{ backgroundColor: '#BBADEC' }}>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Best Instrument end  */}

                {/* search  start */}
                <Image src={questions} className='w-[68vw] mt-24 ms-24' />
                {/* end   */}

            </div>
        </>
    )
}

export default Instruments2
