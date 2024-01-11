import React from 'react'
import Image from 'next/image'
import payment from '../app/image/payment.png'
import shop2 from '../app/image/shop2.png'
import cart1 from '../app/image/cart1.png'
import credit1 from '../app/image/credit1.png'
import credit2 from '../app/image/credit2.png'
import credit3 from '../app/image/credit3.png'


const CreditCard = () => {
    return (
        <>
            <div className='bg-[#00085A] w-full font-serif pb-20 '>
                <div className='lg:ms-20 pt-9'>
                    <div className='w-[76vw] mx-auto  md:ms-14 md:w-[69vw]  lg:mx-0 lg:w-[33vw] flex justify-between items-center text-white text-xs lg:text-[16px]'>
                        <p>Check Out</p>
                        <p>Shopping Adress</p>
                        <p>Payment</p>
                    </div>
                    <Image src={payment} className='w-[66vw] ms-[72px] lg:w-[30vw] lg:ms-4 pt-1' />
                </div>

                <div className='w-[80vw] mx-auto  lg:w-[90vw] flex-col gap-10  lg:flex-row flex justify-center mt-9'>
                    {/* card  */}
                    <div className='w-[85vw] h-fit  lg:w-[55vw] text-white lg:ms-10'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-xl sm:text-2xl'>Credit Or Debit Card</p>
                                <p className='text-[10px] sm:text-xs' style={{ color: '#848484' }}>Rhythmix accepts all major credit or debit card</p>
                            </div>
                            <div>
                                <p className='text-xs sm:text-base' style={{ color: '#7A53FC' }}><i className="fa-solid fa-lock me-1 text-white"></i> Secure Server</p>
                            </div>
                        </div>
                        <div className='ms-5'>
                            <input
                                type='radio'
                                className=' sm:w-4 sm:h-4 mt-8'
                            />
                            <label className='text-sm sm:text-lg ms-3'>Credit Or Debit Card  <i className="fa-solid fa-pencil ms-32 sm:ms-80"></i></label>
                            <p className='text-[10px] sm:text-xs' style={{ color: '#848484' }}>Safe money transfer using your bank account.</p>
                        </div>
                        <div className='flex justify-between items-center mt-5 gap-5 '>
                        <Image src={credit1}  className='w-[70vw] mx-auto sm:hidden'/>
                            <Image src={credit1}  className='hidden sm:flex'/>
                            <Image src={credit2} className='hidden sm:flex'/>
                            <Image src={credit3} className='hidden sm:flex'/>
                        </div>
                        <form className=' mt-7 w-[80vw]  lg:w-[43vw] mx-auto' style={{ borderTop: '1px solid #7A53FC', width: 'fit' }}>
                            <div className=' xl:flex justify-between items-center mt-5'>
                                <div>
                                    <label className='text-base ms-3 '>First Name</label> <br />
                                    <input type='text' className='rounded-md w-[90%] xl:w-[19vw] py-1' />
                                </div>
                                <div className='mt-5 xl:mt-0'>
                                    <label className='text-base ms-3'>Last Name</label> <br />
                                    <input type='text' className='rounded-md  w-[90%] xl:w-[19vw] py-1' />
                                </div>
                            </div>
                            <div className=' xl:flex justify-between items-center mt-5'>
                                <div>
                                    <label className='text-base ms-3 '>Card Number</label> <br />
                                    <input type='text' className='rounded-md w-[90%] xl:w-[19vw] py-1' />
                                </div>
                                <div className='mt-5 xl:mt-0 flex items-center gap-10'>
                                    <div>
                                        <label className='text-base ms-3'>Expiration</label> <br />
                                        <input type='text' className='rounded-md w-[80%]  xl:w-[8vw] py-1' />
                                    </div>
                                    <div>
                                        <label className='text-base ms-3'>CVV</label> <br />
                                        <input type='text' className='rounded-md w-[80%] xl:w-[8vw] py-1' />
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-center mt-7 items-center  mb-2'>
                                <button className='text-black py-2 px-6 text-[10px] md:text-sm rounded-3xl font-semibold ' style={{ backgroundColor: "#7A53FC" }}>
                                    Cancel
                                </button>
                                <button className=' text-white py-2 px-4 text-[8px] md:text-sm rounded-3xl font-semibold ms-10' style={{ backgroundColor: "#0116F3" }}>
                                    Enter card details
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* end  */}

                    <div className='w-[70vw] xl:w-[40vw] mt-5 xl:ms-20' >
                        {/* order summary  */}
                        <div className='w-[80vw] lg:w-[31vw] mt-6 bg-white rounded-md '>
                            <h2 className='text-black text-lg md:text-xl ms-8 font-medium pt-3 '>Order Summary</h2>
                            <p className='border-b border-dotted border-gray-400 pt-1 '></p>
                            <div className='flex items-center justify-between px-10 pt-3'>
                                <p>Sub total:</p> <span className='w-[15vw] lg:w-[7vw] xl:w-[5vw]'>Rs. 1200</span>
                            </div>
                            <div className='flex items-center justify-between px-10 pt-2'>
                                <p>Gift Wrapping:</p> <span className='w-[15vw] lg:w-[7vw] xl:w-[5vw]'>Rs. 120</span>
                            </div>
                            <div className='flex items-center justify-between px-10 pt-2'>
                                <p>Shipping</p> <span className='w-[15vw] lg:w-[7vw] xl:w-[5vw]'>Rs. 60</span>
                            </div>
                            <div className='flex items-center justify-between px-10 pt-2'>
                                <p>Your Saving:</p> <span className='w-[15vw] lg:w-[7vw] xl:w-[5vw]'>Rs. 190</span>
                            </div>
                            <div className='flex items-center justify-between px-10 pt-4 pb-3'>
                                <p className='font-semibold'>Grand total:</p> <span className='w-[15vw] lg:w-[7vw] xl:w-[5vw]'>Rs. 1570</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CreditCard
