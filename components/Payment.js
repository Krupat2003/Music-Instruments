import React from 'react'
import Image from 'next/image'
import payment from '../app/image/payment.png'
import shop2 from '../app/image/shop2.png'
import cart1 from '../app/image/cart1.png'

const Payment = () => {
    return (
        <>
            <div className='bg-[#00085A] w-full font-serif pb-20 '>
                <div className=' lg:ms-20 pt-9'>
                    <div className='w-[76vw] mx-auto  md:ms-14 md:w-[69vw]  lg:mx-0 lg:w-[33vw] flex justify-between items-center text-white text-xs lg:text-[16px]'>
                        <p>Check Out</p>
                        <p>Shopping Adress</p>
                        <p>Payment</p>
                    </div>
                    <Image src={payment} className='w-[66vw] ms-[72px] lg:w-[30vw] lg:ms-4 pt-1' />
                </div>

                <div className='w-[80vw]  mx-auto lg:w-full lg:mx-0 flex-col gap-10 lg:gap-0 lg:flex-row flex justify-center mt-9'>
                    {/* form start  */}
                    <div className='w-[85vw] h-fit  xl:w-[50vw] bg-white rounded-lg lg:ms-16'>
                        <h2 className='text-black text-lg ms-6 md:text-2xl md:ms-10 font-semibold pt-3 md:pt-6'>Payment</h2>
                        <p className=' text-xs ms-6 md:text-sm md:ms-10' style={{ color: '#848484' }}>Select the payment method for your order</p>
                        <p className='border-b border-dotted border-gray-500 pt-2 '></p>
                        <form className=' md:px-10 md:py-4 mb-1'>
                            <div className=' ms-3 flex items-center justify-between'>
                                <div>
                                    <input
                                        type="radio"
                                        id="radio"
                                        className="h-3 w-3 text-black "
                                    />
                                    <label htmlFor="radio" className="ml-2 text-[11px] text-center sm:text-sm text-black">
                                        Credit Or Debit Card
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="radio"
                                        className="h-3 w-3 text-black "
                                    />
                                    <label htmlFor="radio" className="ml-2 text-[11px] text-center sm:text-sm text-black">
                                        Amazon Pay
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="radio"
                                        className="h-3 w-3 text-black "
                                    />
                                    <label htmlFor="radio" className="ml-2 text-[11px] text-center sm:text-sm text-black">
                                        Visa
                                    </label>
                                </div>
                            </div>
                            <div className='ms-3 mt-5'>
                                <input
                                    type="radio"
                                    id="radio"
                                    className="h-3 w-3 text-black "
                                />
                                <label htmlFor="radio" className="ml-2 text-[11px] text-center sm:text-sm text-black">
                                    Net Banking
                                </label>
                            </div>
                            <div className='ms-3 mt-5'>
                                <input
                                    type="radio"
                                    id="radio"
                                    className="h-3 w-3 text-black "
                                />
                                <label htmlFor="radio" className="ml-2 text-[11px] text-center sm:text-sm text-black">
                                    EMI
                                </label>
                            </div>
                            <div className='ms-3 mt-5'>
                                <input
                                    type="radio"
                                    id="radio"
                                    className="h-3 w-3 text-black "
                                />
                                <label htmlFor="radio" className="ml-2 text-[11px] text-center sm:text-sm text-black">
                                    Cash on Delivery/Pay on Delivery
                                </label>
                                <p className='text-xs text-gray-600 ms-5'>Cash, UPI , and Cards accepted. Know more.</p>
                            </div>
                            <div className='mt-10 ms-3 flex items-center'>
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    className="h-4 w-4 sm:h-5 sm:w-5"
                                />
                                <label htmlFor="checkbox" className="ml-2 text-[11px] text-center sm:text-sm text-black">I agree to the Terms of Service & Private Policy</label>
                            </div>
                            <div className='flex justify-center mt-7 items-center  mb-2'>
                                <button className=' text-white py-2 px-4 text-[10px] md:text-sm rounded-3xl font-semibold ' style={{ backgroundColor: "#0116F3" }}>
                                Use This Payment Method
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* end  */}

                    <div className='w-[70vw] xl:w-[47vw] lg:px-16' >
                        <p className='text-white text-lg md:text-2xl font-semibold pt-3'>Shopping Cart</p>
                        <div className='w-full ms-auto flex justify-end'>
                            <p className='text-white text-xs md:text-sm md:ms-10 border-b border-white w-fit '>Add more items</p>
                        </div>
                        <div className='flex justify-evenly text-white text-lg mt-8'>
                            <Image src={shop2} />
                            <div className='text-xs w-[40vw]  lg:w-[20vw]'>
                                <p>Cort AF500CE Standard Series Open Pore Electro Acoustic Guitar</p>
                                <p className='pt-2'>Color: Black</p>
                                <p className='pt-2 font-semibold'>Rs. 1299</p>
                            </div>
                        </div>
                        <div className='flex justify-evenly text-white text-lg mt-8'>
                            <Image src={cart1} />
                            <div className='text-xs w-[43vw]  lg:w-[20vw]'>
                                <p>Cort AF500CE Standard Series Open Pore Electro Acoustic Guitarr</p>
                                <p className='pt-2'>Color: White</p>
                                <p className='pt-2 font-semibold'>Rs. 1499</p>
                            </div>
                        </div>

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

export default Payment
