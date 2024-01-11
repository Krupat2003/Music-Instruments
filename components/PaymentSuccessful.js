import React from 'react'
import Image from 'next/image'
import payment from '../app/image/payment.png'
import checkp10 from '../app/image/checkp10.png'
import email from '../app/image/email.png'
import print from '../app/image/print.png'
import picture from '../app/image/picture.png'
import icon from '../app/image/icon.png'
import user1 from '../app/image/user1.png'
import user2 from '../app/image/user2.png'
import user3 from '../app/image/user3.png'


const PaymentSuccessful = () => {
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

                <div>
                    <div className='w-[5vw] mx-auto pt-28'>
                        <Image src={checkp10} />
                    </div>
                    <h1 className='text-white text-center text-xl sm:text-3xl font-semibold pt-2'>Payment Successful</h1>
                    <p className='text-white text-center text-lg sm:text-2xl pt-2'>
                        Your payment was successful <br /> You can continue your shopping
                    </p>
                </div>
                <div className=' mx-auto w-[90vw] sm:w-[85vw] lg:w-[40vw] mt-6 bg-white rounded-md text-sm sm:text-xl'>
                    <div className='flex items-center justify-between px-5 border-b border-gray-300 py-2 pt-4'>
                        <p style={{ color: '#979797' }}>Transaction ID</p> <span className='font-medium'>PHEXK4523</span>
                    </div>
                    <div className='flex items-center justify-between px-5 border-b border-gray-300 py-2 pt-2'>
                        <p style={{ color: '#979797' }}>Date</p> <span className='font-medium'>06-Nov-2023</span>
                    </div>
                    <div className='flex items-center justify-between px-5 border-b border-gray-300 py-2 pt-2'>
                        <p style={{ color: '#979797' }}>Mode of payment</p> <span className='font-medium'>Credit card</span>
                    </div>
                    <div className='flex items-center justify-between px-5 border-b border-gray-300 py-2 pt-2'>
                        <p style={{ color: '#979797' }}>Transaction status</p> <span className='font-medium'>Success</span>
                    </div>
                    <div className='flex items-center justify-between border-b border-gray-300 px-5 py-2 pb-3'>
                        <p style={{ color: '#979797' }}>Customer name</p> <span className='font-medium'>Ashwini chougale</span>
                    </div>
                    <div className='flex items-center justify-between px-5 border-b border-gray-300 py-2 pt-2'>
                        <p style={{ color: '#979797' }}>Mob no.</p> <span className='font-medium'>+(91) 9767202749</span>
                    </div>
                    <div className='flex items-center justify-between px-5 py-2 pb-3'>
                        <p style={{ color: '#979797' }}>Payment amount</p> <span className='font-medium'>Rs. 1570</span>
                    </div>

                </div>
                <div className='flex justify-between items-center w-[87vw] sm:w-[78vw] lg:w-[38vw] mx-auto text-white mt-4'>
                    <div className='flex items-center '>
                        <Image src={picture} />
                        <p className='ps-2 text-xs md:text-[14px] '> Save as PDF</p>
                    </div>
                    <div className='flex items-center '>
                        <Image src={print} />
                        <p className='ps-2 text-xs md:text-[14px]'>Print receipt</p>
                    </div>
                    <div className='flex items-center '>
                        <Image src={email} />
                        <p className='ps-2 text-xs md:text-[14px]'>Email receipt</p>
                    </div>
                </div>
                <div className='w-[34vw] sm:w-[15vw] lg:w-[10vw] mx-auto'>
                    <button className='text-white py-2 px-12 rounded-3xl me-20 mt-9 ' style={{ backgroundColor: '#0116F3' }}>Done</button>
                </div>

                {/*[3] Real people, real results start ==== */}
                {/* laptop view  start */}
                <h1 className='hidden sm:block text-3xl text-white font-semibold text-center mt-12 md:text-3xl lg:text-4xl'>Real people, real results  </h1>
                <div className='w-[90vw] mx-auto hidden md:flex justify-evenly mt-16'>
                    {/* 1 */}
                    <div className='w-[27vw]'>
                        <div className='bg-white p-7 rounded-tl-3xl rounded-tr-3xl '>
                            <Image className='pt-4' src={icon} />
                            <p className='text-sm md:text-[16px] lg:text-xl  pt-10 pb-12 lg:pb-20 '>Very user friendly. I found it very
                                to navigate and find the things. I
                                needed. Will use it frequently, I am
                                sure about it.</p>
                        </div>
                        <div className='text-center rounded-br-3xl rounded-bl-3xl pb-4' style={{ backgroundColor: '#7A53FC' }}>
                            <Image src={user1} className='rounded-full ms-32 absolute mt-[-45px] sm:ms-[63px] lg:ms-[110px] xl:ms-[150px]' />
                            <h1 className='text:lg md:text-xl lg:text-2xl pt-14 pb-7'>Aniket</h1>
                            <i className="fa-brands fa-instagram text-white text:lg md:text-xl lg:text-2xl"></i>
                            <i className="fa-brands fa-facebook text-white text:lg md:text-xl lg:text-2xl ps-4"></i>
                            <i className="fa-brands fa-twitter text-white text:lg md:text-xl lg:text-2xl ps-4"></i>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='w-[27vw]'>
                        <div className='bg-white p-7 rounded-tl-3xl rounded-tr-3xl '>
                            <Image className='pt-4' src={icon} />
                            <p className='text-sm md:text-[16px] lg:text-xl  pt-10 pb-12 lg:pb-20'>Very user friendly. I found it very
                                to navigate and find the things. I
                                needed. Will use it frequently, I am
                                sure about it.</p>
                        </div>
                        <div className='text-center rounded-br-3xl rounded-bl-3xl pb-4' style={{ backgroundColor: '#7A53FC' }}>
                            <Image src={user2} className='rounded-full ms-32 absolute mt-[-45px] sm:ms-[63px] lg:ms-[110px] xl:ms-[150px]' />
                            <h1 className='text:lg md:text-xl lg:text-2xl pt-14 pb-7'>Reshma</h1>
                            <i className="fa-brands fa-instagram text-white text:lg md:text-xl lg:text-2xl"></i>
                            <i className="fa-brands fa-facebook text-white text:lg md:text-xl lg:text-2xl ps-4"></i>
                            <i className="fa-brands fa-twitter text-white text:lg md:text-xl lg:text-2xl ps-4"></i>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='w-[27vw]'>
                        <div className='bg-white p-7 rounded-tl-3xl rounded-tr-3xl '>
                            <Image className='pt-4' src={icon} />
                            <p className='text-sm md:text-[16px] lg:text-xl  pt-10 pb-12 lg:pb-20'>Very user friendly. I found it very
                                to navigate and find the things. I
                                needed. Will use it frequently, I am
                                sure about it.</p>
                        </div>
                        <div className='text-center rounded-br-3xl rounded-bl-3xl pb-4' style={{ backgroundColor: '#7A53FC' }}>
                            <Image src={user3} className='rounded-full ms-32 absolute mt-[-45px] sm:ms-[63px] lg:ms-[110px] xl:ms-[150px]' />
                            <h1 className='text:lg md:text-xl lg:text-2xl pt-14 pb-7'>Dhiraj</h1>
                            <i className="fa-brands fa-instagram text-white text:lg md:text-xl lg:text-2xl"></i>
                            <i className="fa-brands fa-facebook text-white text:lg md:text-xl lg:text-2xl ps-4"></i>
                            <i className="fa-brands fa-twitter text-white text:lg md:text-xl lg:text-2xl ps-4"></i>
                        </div>
                    </div>
                </div>
                <div className='hidden sm:flex justify-center items-center mt-6'>
                    <button className='bg-blue-700 text-white p-3 text-2xl mt-10 rounded-lg'>
                        Read All Reviews
                    </button>
                </div>

                {/* mobile view start */}
                <h1 className='text-2xl text-white font-semibold text-center mt-12 sm:hidden'>Real people, real results  </h1>
                <div className='w-full flex-col flex items-center mt-16 md:hidden'>
                    {/* 1 */}
                    <div className='w-[80vw] sm:w-[50vw]'>
                        <div className='bg-white p-7 rounded-tl-3xl rounded-tr-3xl '>
                            <Image className='pt-4' src={icon} />
                            <p className='text-xl pt-10 pb-20 '>Very user friendly. I found it very
                                to navigate and find the things. I
                                needed. Will use it frequently, I am
                                sure about it.</p>
                        </div>
                        <div className='text-center rounded-br-3xl rounded-bl-3xl pb-4' style={{ backgroundColor: '#000' }}>
                            <Image src={user1} className='rounded-full ms-32 absolute mt-[-45px]' />
                            <h1 className='text-2xl text-white pt-14 pb-7'>Aniket</h1>
                            <i className="fa-brands fa-instagram text-white text-2xl"></i>
                            <i className="fa-brands fa-facebook text-white text-2xl ps-4"></i>
                            <i className="fa-brands fa-twitter text-white text-2xl ps-4"></i>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='w-[80vw] sm:w-[50vw] mt-12'>
                        <div className='bg-white p-7 rounded-tl-3xl rounded-tr-3xl '>
                            <Image className='pt-4' src={icon} />
                            <p className='text-xl pt-10 pb-20'>Very user friendly. I found it very
                                to navigate and find the things. I
                                needed. Will use it frequently, I am
                                sure about it.</p>
                        </div>
                        <div className='text-center rounded-br-3xl rounded-bl-3xl pb-4' style={{ backgroundColor: '#000' }}>
                            <Image src={user2} className='rounded-full ms-32 absolute mt-[-45px]' />
                            <h1 className='text-2xl text-white pt-14 pb-7'>Reshma</h1>
                            <i className="fa-brands fa-instagram text-white text-2xl"></i>
                            <i className="fa-brands fa-facebook text-white text-2xl ps-4"></i>
                            <i className="fa-brands fa-twitter text-white text-2xl ps-4"></i>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='w-[80vw] sm:w-[50vw] mt-12'>
                        <div className='bg-white p-7 rounded-tl-3xl rounded-tr-3xl '>
                            <Image className='pt-4' src={icon} />
                            <p className='text-xl pt-10 pb-20'>Very user friendly. I found it very
                                to navigate and find the things. I
                                needed. Will use it frequently, I am
                                sure about it.</p>
                        </div>
                        <div className='text-center rounded-br-3xl rounded-bl-3xl pb-4' style={{ backgroundColor: '#000' }}>
                            <Image src={user3} className='rounded-full ms-32 absolute mt-[-45px]' />
                            <h1 className='text-2xl text-white pt-14 pb-7'>Dhiraj</h1>
                            <i className="fa-brands fa-instagram text-white text-2xl"></i>
                            <i className="fa-brands fa-facebook text-white text-2xl ps-4"></i>
                            <i className="fa-brands fa-twitter text-white text-2xl ps-4"></i>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center sm:hidden'>
                    <button className='bg-blue-700 text-white p-3 text-xl mt-10 rounded-xl'>
                        Read All Reviews
                    </button>
                </div>
                {/* Real people, real results end  */}
            </div>
        </>
    )
}

export default PaymentSuccessful
