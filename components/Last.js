import React from 'react'
import Image from 'next/image'
import payment from '../app/image/payment.png'
import mainimg from '../app/image/mainimg.png'

const Last = () => {
    return (
        <>
            <div className='bg-[#00085A] w-full font-serif pb-20 '>
                <div className='flex-col lg:flex-row flex justify-between items-center'>
                    <div className='lg:ms-20 pt-9'>
                        <div className='w-[76vw] mx-auto  md:ms-0 md:w-[72vw]  lg:mx-0 lg:w-[33vw] flex justify-between items-center text-white text-xs lg:text-[16px]'>
                            <p>Check Out</p>
                            <p>Shopping Adress</p>
                            <p>Payment</p>
                        </div>
                        <Image src={payment} className='w-[66vw] ms-4 md:w-[70vw] lg:w-[30vw]  lg:ms-4 pt-1' />
                    </div>
                    <div className='lg:me-40 xl:me-64 mt-12'>
                        <p className='flex justify-around items-center bg-white rounded-lg py-1 w-[70vw] mx-auto md:w-[60vw] lg:mx-0 lg:w-[30vw]'>
                            <i className="fa-regular fa-circle-check"></i>
                            Almost there Ashwini!
                            <i className="fa-solid fa-xmark"></i>
                        </p>
                    </div>
                </div>

                <div className='w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-2 pt-16 flex items-center '>
                    <div className='w-[70vw] mx-auto text-center md:w-[65vw] lg:text-left lg:w-[35vw] lg:mx-10 '>
                        <h1 className='text-white text-[22px] md:text-[35px] lg:text-3xl font-semibold'>Payment Successful</h1>
                        <p className='text-white text-[19px] md:text-3xl lg:text-[21px] mt-3'>Your payment was successful. You can continue your shopping</p>
                        <div className='hidden lg:flex justify-evenly items-center mt-10'>
                            <button className='text-black py-3 px-10 text-[10px] md:text-sm rounded-3xl font-semibold ' style={{ backgroundColor: "#7A53FC" }}>
                                New Site
                            </button>
                            <button className=' text-white py-3 px-8 text-[8px] md:text-sm rounded-3xl font-semibold ms-10' style={{ backgroundColor: "#0116F3" }}>
                                Back To Home
                            </button>
                        </div>
                    </div>

                    <div className='w-[70vw] md:w-[55vw] mx-auto lg:mx-0 lg:w-[40vw]'>
                        <Image src={mainimg} />
                        <div className=' flex justify-center items-center mt-12 lg:hidden'>
                            <button className='text-black py-2 px-6 text-[10px] md:text-sm rounded-3xl font-semibold ' style={{ backgroundColor: "#fff" }}>
                                New Site
                            </button>
                            <button className=' text-white py-2 px-5 text-[8px] md:text-sm rounded-3xl font-semibold ms-10' style={{ backgroundColor: "#0116F3" }}>
                                Back To Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Last
