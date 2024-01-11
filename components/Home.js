'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import left from '../app/image/left.png'
import right from '../app/image/right.png'
import in1 from '../app/image/in1.png'
import in33 from '../app/image/in33.png'
import in3 from '../app/image/in3.png'
import centerimg from '../app/image/centerimg.png';
import sideimg from '../app/image/sideimg.png';
import backimg from '../app/image/backimg.png';
import a1 from '../app/image/a1.png'
import a2 from '../app/image/a2.png'
import a3 from '../app/image/a3.png'
import Guarantee from '../app/image/Guarantee.png'
import icon from '../app/image/icon.png'
import user1 from '../app/image/user1.png'
import user2 from '../app/image/user2.png'
import user3 from '../app/image/user3.png'
import ch1 from '../app/image/ch1.png'
import ch2 from '../app/image/ch2.png'
import ch3 from '../app/image/ch3.png'
import ch4 from '../app/image/ch4.png'
import ch5 from '../app/image/ch5.png'
import ch6 from '../app/image/ch6.png'
import img1 from '../app/image/img1.png'
import img2 from '../app/image/img2.png'
import img3 from '../app/image/img3.png'
import b1 from '../app/image/b1.png'
import b2 from '../app/image/b3.png'
import b3 from '../app/image/b2.png'
import b4 from '../app/image/b4.png'
import Artists1 from '../app/image/Artists1.png'
import Artists2 from '../app/image/Artists2.png'
import Artists3 from '../app/image/Artists3.png'
import Artists4 from '../app/image/Artists4.png'
import music from '../app/image/music.png'
import sp1 from '../app/image/sp1.png'
import sp2 from '../app/image/sp2.png'
import sp3 from '../app/image/sp3.png'
import sp11 from '../app/image/sp11.png'
import sp22 from '../app/image/sp22.png'
import sp33 from '../app/image/sp33.png'
import bg from '../app/image/bg.png'
import llile from '../app/image/llile.png'
import rline from '../app/image/rline.png'
import bline from '../app/image/bline.png'
import tline from '../app/image/tline.png'
import bay from '../app/image/bay.png'
import cont from '../app/image/cont.png'


const Demo = () => {

    const [images, setImages] = useState({
        center: in33,
        right: in3,
        left: in1,
    });

    const handleButtonClick = (button) => {
        setImages((prevImages) => {
            const newImages = { ...prevImages };

            // Swap images based on the button clicked
            switch (button) {
                case 'a1':
                    newImages.left = centerimg;
                    newImages.center = sideimg;
                    newImages.right = in3;
                    break;
                case 'a2':
                    newImages.left = in1;
                    newImages.center = in33;
                    newImages.right = in3;
                    break;
                case 'a3':
                    newImages.left = in1;
                    newImages.center = backimg;
                    newImages.right = centerimg;
                    break;
                default:
                    break;
            }

            return newImages;
        });
    };

    // Connect 
    const [hoveredImages, setHoveredImages] = useState({
        first: false,
        second: false,
        third: false,
    });

    const handleMouseEnter = (imageKey) => {
        setHoveredImages((prevImages) => {
            let newImages = { ...prevImages };

            // Replace sp2 with sp22 when hovering over the second or third image
            if ((imageKey === 'second' || imageKey === 'third') && !newImages.first) {
                newImages.first = true;
            }

            newImages = { ...newImages, [imageKey]: true };

            return newImages;
        });
    };

    const handleMouseLeave = (imageKey) => {
        setHoveredImages((prevImages) => ({ ...prevImages, [imageKey]: false }));
    };




    return (
        <>
            <div className=' bg-[#00085A] w-full font-serif pb-20'>

                <h1 className='flex items-center text-center justify-center h-16 text-white font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-serif '>
                    Explore Our Diverse Range Of <br /> Musical Instruments
                </h1>

                {/* laptop view  */}
                <div className='hidden lg:flex justify-between text-white pb-14'>
                    {/* Left part */}
                    <div className='mt-60'>
                        <div className='absolute mt-44 ms-7'>
                            <p className='text-white font-medium text-[30px] font-serif'>Mezzo Violin OB1 <br /> Violin Outfit</p>
                            <i className='fa-solid fa-arrow-left-long text-[45px] mt-10'></i>
                        </div>
                        <div className='relative'>
                            <Image src={left} />
                        </div>
                    </div>

                    {/* Center part */}
                    <div className='hidden lg:flex items-center justify-between relative'>
                        <Image src={images.left} className='me-14' />
                        <Image src={images.center} />
                        <Image src={images.right} className='ms-28' />
                    </div>
                    {/* Content */}
                    <div className='lg:absolute lg:ms-[28%] xl:ms-[32%] lg:mt-24 xl:mt-40 hidden lg:block'>
                        {/* <Image src={border} className='w-[520px]' /> */}
                        <p className='border border-white rounded-[50%] w-[520px] h-[500px] mt-8'>
                            <p className='border border-white rounded-[50%] w-[420px] h-[400px] ms-12 mt-12'>
                                <p className='border border-white rounded-[50%] w-[320px] h-[300px] ms-12 mt-12' style={{ border: '1px solid #8C8C8C' }}>
                                    <p className='border border-white rounded-[50%] w-[220px] h-[210px] ms-12 mt-12' style={{ border: '1px solid #8C8C8C' }}>
                                    </p>
                                </p>
                            </p>
                            <p className='ps-44 font-medium text-[23px] font-serif'>Ibanez V50NJP-NT <br /> Acoustic Guitar</p>
                            <p className='ps-52 pt-10'>Rs. 12,800</p>
                        </p>
                    </div>

                    {/* Right part */}
                    <div>
                        <div className='absolute mt-60 ms-14'>
                            <p className='text-white font-medium text-[27px] font-serif'>Fiddlerman BO1 <br /> Violin Outfit</p>
                            <i className='fa-solid fa-arrow-right-long text-[45px] mt-10 ms-32'></i>
                        </div>
                        <Image src={right} className='pt-24' />
                        <p className='pt-12'>
                            <i className='fa-solid fa-star '></i>
                            <i className='fa-solid fa-star ps-2 '></i>
                            <i className='fa-solid fa-star ps-2 '></i>
                            <i className='fa-solid fa-star ps-2 '></i>
                            <i className='fa-solid fa-star ps-2 '></i>
                            <p className='ps-5 pt-1'>48 Reviews</p>
                        </p>
                    </div>
                </div>

                {/* button */}
                <div className='hidden lg:flex  justify-center items-center text-white mb-20 bg-black h-32'>
                    <div className='w-[80vw] flex justify-evenly items-center'>
                        <div onClick={() => handleButtonClick('a1')}>
                            <Image src={a1} className='mt-[-80px] ms-5' />
                            <p className='font-medium text-[17px] font-serif mt-4'>SIDE VIEW</p>
                        </div>
                        <div onClick={() => handleButtonClick('a2')}>
                            <Image src={a2} className='mt-[-80px] ms-8' />
                            <p className='font-medium text-[17px] font-serif mt-4'>FRONT VIEW</p>
                        </div>
                        <div onClick={() => handleButtonClick('a3')}>
                            <Image src={a3} className='mt-[-80px] ms-6' />
                            <p className='font-medium text-[17px] font-serif mt-4'>REAR VIEW</p>
                        </div>
                    </div>
                </div>
                {/* laptop voew end  */}

                {/* mobile view start */}
                <div className='flex justify-between text-white lg:hidden'>
                    {/* left part  */}
                    <div className='mt-10'>
                        <div className='absolute ms-3 mt-20'>
                            <p className='text-white font-medium font-serif
                             text-[12px] sm:text-xl sm:pt-10 md:text-lg md:pt-11  '
                            >
                                Mezzo Violin OB1 <br /> Violin Outfit
                            </p>
                            <i className="fa-solid fa-arrow-left-long text-[20px] mt-4"></i>
                        </div>
                        <div className='relative'>
                            <Image src={left} width={200} />
                        </div>
                    </div>

                    {/* center part  */}
                    <div className='flex items-center justify-between relative mt-20'>
                        <Image src={in33} width={280} />
                    </div>
                    <div className='absolute mt-[130px] ms-14 sm:hidden'>
                        <p className='border border-white rounded-[50%] w-[320px] h-[320px] mt-10'>
                            <p className='border border-white rounded-[50%] w-[230px] h-[230px] ms-11 mt-11'>
                                <p className='border border-white rounded-[50%] w-[140px] h-[140px] ms-11 mt-11' style={{ border: '1px solid #8C8C8C' }}>
                                    <p className='border border-white rounded-[50%] w-[75px] h-[70px] ms-9 mt-8' style={{ border: '1px solid #8C8C8C' }}>
                                    </p>
                                </p>
                            </p>
                            <p className='ps-[100px] font-medium text-[15px] font-serif'>Ibanez V50NJP-NT <br /> Acoustic Guitar</p>
                            <p className='ps-28 pt-2'>Rs. 12,800</p>
                        </p>
                    </div>

                    {/* right part  */}
                    <div className='mt-[-50px]'>
                        <div className='absolute mt-44'>
                            <p className='text-white font-medium font-serif ms-4
                             text-[12px] sm:text-xl sm:pt-10 md:text-lg md:pt-10 md:ps-3'
                            >
                                Fiddlerman BO1 <br /> Violin Outfit
                            </p>
                            <i class="fa-solid fa-arrow-right-long text-[20px] mt-4 ms-14"></i>
                        </div>
                        <div className='relative'>
                            <Image src={right} className='pt-24' width={200} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end items-end px-10 pb-5 mt-10 sm:hidden'>
                    <p className='pt-12 text-white'>
                        <i className="fa-solid fa-star "></i>
                        <i className="fa-solid fa-star ps-2 "></i>
                        <i className="fa-solid fa-star ps-2 "></i>
                        <i className="fa-solid fa-star ps-2 "></i>
                        <i className="fa-solid fa-star ps-2 "></i>
                        <p className='ps-5 pt-1'>48 Reviews</p>
                    </p>
                </div>
                {/* mobile view end  */}

                <div className='flex justify-center items-center text-white mb-20 bg-black h-32 lg:hidden'>
                    <div className='w-[80vw] flex justify-evenly items-center'>
                        <div >
                            <Image src={a1} className='mt-[-80px] ms-5' />
                            <p className='font-medium text-[17px] font-serif mt-4'>SIDE VIEW</p>
                        </div>
                        <div >
                            <Image src={a2} className='mt-[-80px] ms-8' />
                            <p className='font-medium text-[17px] font-serif  mt-4'>FRONT VIEW</p>
                        </div>
                        <div>
                            <Image src={a3} className='mt-[-80px] ms-6' />
                            <p className='font-medium text-[17px] font-serif mt-4'>REAR VIEW</p>
                        </div>
                    </div>
                </div>



                {/*[2] Our Guarantee start  =====*/}
                {/* laptop view start*/}
                <div className=' hidden sm:flex w-full justify-center items-center'>
                    <div className='w-[27vw]'>
                        <Image src={Guarantee} className=' rounded-tl-[65px] rounded-bl-[65px] rounded-br-[200px] rounded-tr-[65px] ' width={700} />
                    </div>
                    <div className='w-[55vw] ms-20 mt-10 text-white font-medium font-serif'>
                        <h1 className='text-[30px] font-semibold text-left'>Our Guarantee</h1>
                        <p className='pt-6 text-[22px]'>Buy Instruments & Equipment Online– 30-Day-Money-Back-Guarantee</p>
                        <p className='pt-4 text-[17px]'>Occasionally it’s love at first sight, but sometimes you may be unhappy with a product’s performance, or you may just change your mind. Have no fear, because we provide our customers with up to 30 days to return the item for either money back or store credit.
                        </p>
                        <button className='bg-blue-700 p-3 text-xl mt-10 rounded-lg'>
                            Know more <i class="fa-solid fa-angle-right"></i>
                        </button>

                    </div>
                </div>
                {/* mobile view start  */}
                <div className='flex-row-reverse  w-full justify-center sm:hidden'>
                    <div className='flex justify-center items-center'>
                        <Image src={Guarantee} className=' rounded-tl-[65px] rounded-bl-[65px] rounded-br-[200px] rounded-tr-[65px] ' width={300} />
                    </div>
                    <div className=' ms-10 mt-10 text-white font-medium font-serif'>
                        <h1 className='text-2xl font-semibold text-left'>Our Guarantee</h1>
                        <p className='pt-6 text-ms'>
                            Buy Instruments & Equipment Online– 30-Day-Money-Back-Guarantee. Your satisfaction is our priority. Start shopping now and discover the difference in quality and service!
                        </p>
                        <button className='bg-blue-700 p-2 text-lg mt-7 rounded-lg'>
                            Know more <i class="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
                {/* Our Guarantee end  */}


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

                {/*[4] Why Choose Us start ===== */}
                <h1 className='text-2xl text-white font-semibold text-center mt-24 md:text-3xl lg:text-4xl xl:text-[38px]'>Why Choose Us</h1>
                <p className='text-sm text-white font-medium text-center mt-5 md:text-lg lg:text-2xl xl:text-[25px]'>"Discover the Symphony of Selection: Explore Our <br /> Diverse Range of Musical Instruments."</p>
                {/* 1 */}
                <div className='mt-12 md:h-fit flex flex-col md:flex-row gap-4 md:gap-0 '>
                    <div className='pe-20 md:pe-0 w-full md:w-[40%] ms-10 flex justify-center items-center'>
                        <div className='w-[90%] md:w-[25vw] text-white font-medium text-start'>
                            <Image src={ch1} className='bg-white rounded-full p-2 md:p-7 w-14 md:w-32' />
                            <p className='text-lg md:text-2xl'>01</p>
                            <p className='text-lg md:text-2xl'>FREE SHIPPING & RETURN</p>
                            <p className='text-sm'>Free Shipping on all orders over ₹1,500</p>
                            <i className="fa-solid fa-arrow-right-long bg-white rounded-full px-4 md:px-6 py-2 mt-6 text-sm md:text-3xl text-black"></i>
                        </div>
                    </div>
                    <div className='pe-20 md:pe-0 w-full md:w-[60%] ms-10 md:ms-12 flex justify-center items-center mt-6 md:mt-0'>
                        <div className='w-[90%] md:w-[50vw] text-white font-medium text-start'>
                            <Image src={ch2} className='bg-white rounded-full p-2 md:p-7 w-14 md:w-32 ' />
                            <p className='text-lg md:text-2xl'>02</p>
                            <p className='text-lg md:text-2xl'>TRUSTED MUSIC STORE</p>
                            <p className='text-sm'>Trusted by over a million customers from India and abroad.</p>
                            <i className="fa-solid fa-arrow-right-long bg-white rounded-full px-4 md:px-6 py-2 mt-6 text-sm md:text-3xl text-black"></i>
                        </div>
                    </div>
                </div>
                {/* 2  */}
                <div className='mt-12 md:h-fit flex flex-col md:flex-row gap-4 md:gap-0'>
                    <div className='pe-20 md:pe-0 w-full md:w-[40%] ms-10 flex justify-center items-center'>
                        <div className='w-[90%] md:w-[25vw] text-white font-medium text-start'>
                            <Image src={ch3} className='bg-white rounded-full p-2 md:p-7 w-14 md:w-32' />
                            <p className='text-lg md:text-2xl'>03</p>
                            <p className='text-lg md:text-2xl'>PROTECTED PAYMENTS</p>
                            <p className='text-sm'>100% Payment Protection. Easy Return Policy</p>
                            <i className="fa-solid fa-arrow-right-long bg-white rounded-full px-4 md:px-6 py-2 mt-6 text-sm md:text-3xl text-black"></i>
                        </div>
                    </div>
                    <div className='pe-20 md:pe-0 w-full md:w-[60%] ms-10 md:ms-12 flex justify-center items-center mt-6 md:mt-0'>
                        <div className='w-[90%] md:w-[50vw] text-white font-medium text-start'>
                            <Image src={ch4} className='bg-white rounded-full p-2 md:p-7 w-14 md:w-32 ' />
                            <p className='text-lg md:text-2xl'>04</p>
                            <p className='text-lg md:text-2xl'>ON-DEMAND SUPPORT</p>
                            <p className='text-sm'>Got a question? Please call us on +91 89777-77151 any time.</p>
                            <i className="fa-solid fa-arrow-right-long bg-white rounded-full px-4 md:px-6 py-2 mt-6 text-sm md:text-3xl text-black"></i>
                        </div>
                    </div>
                </div>
                {/* 3  */}
                <div className='mt-12 md:h-fit flex flex-col md:flex-row gap-4 md:gap-0'>
                    <div className='pe-20 md:pe-0 w-full md:w-[40%] ms-10 flex justify-center items-center'>
                        <div className='w-[90%] md:w-[25vw] text-white font-medium text-start'>
                            <Image src={ch5} className='bg-white rounded-full p-2 md:p-7 w-14 md:w-32' />
                            <p className='text-lg md:text-2xl'>05</p>
                            <p className='text-lg md:text-2xl'>On time delivery</p>
                            <p className='text-sm'>Experience Reliable On-Time Delivery</p>
                            <i className="fa-solid fa-arrow-right-long bg-white rounded-full px-4 md:px-6 py-2 mt-6 text-sm md:text-3xl text-black"></i>
                        </div>
                    </div>
                    <div className='pe-20 md:pe-0 w-full md:w-[60%] ms-10 md:ms-12 flex justify-center items-center mt-6 md:mt-0'>
                        <div className='w-[90%] md:w-[50vw] text-white font-medium text-start'>
                            <Image src={ch6} className='bg-white rounded-full p-2 md:p-7 w-14 md:w-32 ' />
                            <p className='text-lg md:text-2xl'>06</p>
                            <p className='text-lg md:text-2xl'>Read blogs</p>
                            <p className='text-sm'>Find music bloggers offering news, reviews</p>
                            <i className="fa-solid fa-arrow-right-long bg-white rounded-full px-4 md:px-6 py-2 mt-6 text-sm md:text-3xl text-black"></i>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 md:gap-0  justify-center items-center mt-6'>
                    <button className='bg-white text-black py-3 px-6 md:px-16 text-sm md:text-3xl mt-4 md:mt-10 rounded-3xl font-semibold'>
                        Contact us
                    </button>
                    <button className='bg-blue-700 text-white py-3 px-8 md:px-20 text-sm md:text-3xl mt-4 md:mt-10 rounded-3xl font-semibold md:ms-4'>
                        Buy Now
                    </button>
                </div>
                {/* Why Choose Us end  */}

                {/*[5] Best Instrument start  ======*/}
                <h1 className='text-xl text-white font-semibold text-center md:text-3xl lg:text-4xl xl:text-[38px] mt-14'>Find Your Best Instrument</h1>
                <div className='grid grid-cols-1 md:mx-auto md:w-[90vw] md:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-0 mt-12  '>
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

                {/*[6] How To Bay start ===  */}
                <h1 className='text-2xl text-white font-semibold text-center mt-14  md:text-3xl lg:text-4xl xl:text-[38px]'>How To Bay</h1>
                {/* laptop view start  */}
                <div className='w-[80vw] flex justify-around items-center mt-10 hidden sm:flex'>
                    <div className='text:xl lg:text-2xl pb-5'>
                        <h2 style={{ color: '#7A53FC' }}>Determine your budget</h2>
                        <h2 className='mt-2 font-medium text-white'>Decide how much you are willing to <br /> spend on a musical instrument</h2>
                    </div>
                    <div className='text:xl lg:text-2xl pb-5'>
                        <h2 style={{ color: '#7A53FC' }}>Research Brands and Models</h2>
                        <h2 className='mt-2 font-medium text-white'>Conduct research on reputable <br /> brands and specific models</h2>
                    </div>
                </div>
                <div className=' sm:flex justify-evenly items-center w-full mt-7 hidden sm:block'>
                    {/* 1  */}
                    <div>
                        <Image src={tline} className='hidden lg:block absolute mt-[-40px] ms-[-10px]' />
                        <Image src={b1} className='bg-white rounded-full p-3 w-40 lg:w-48 border-4 border-blue-700 mt-[-25px]' />
                        <Image src={llile} className='hidden lg:block absolute mt-[-110px] ms-[-84px] w-20' />
                        <Image src={rline} className='hidden lg:block absolute mt-[-110px] ms-[197px] w-20' />
                    </div>

                    {/* 2  */}
                    <div>
                        <Image src={b3} className='bg-white rounded-full p-3 w-40 lg:w-48 border-4 border-blue-700' />
                        <Image src={llile} className='hidden lg:block absolute mt-[-99px] ms-[-84px] w-20' />
                        <Image src={bline} className='hidden lg:block absolute mt-[-90px] ms-[-10px]' />
                        <Image src={rline} className='hidden lg:block absolute mt-[-99px] ms-[198px] w-20' />
                    </div>
                    {/* 3  */}
                    <div>
                        <Image src={tline} className='hidden lg:block absolute mt-[-40px] ms-[-10px]' />
                        <Image src={b2} className='bg-white rounded-full p-3 w-40 lg:w-48 border-4 border-blue-700 mt-[-25px]' />
                        <Image src={llile} className='hidden lg:block absolute mt-[-110px] ms-[-84px] w-20' />
                        <Image src={rline} className='hidden lg:block absolute mt-[-110px] ms-[197px] w-20' />
                    </div>
                    {/* 4  */}
                    <div>
                        <Image src={b4} className='bg-white rounded-full p-4 w-40 lg:w-48 border-4 border-blue-700' />
                        <Image src={llile} className='hidden lg:block absolute mt-[-99px] ms-[-84px] w-20' />
                        <Image src={bline} className='hidden lg:block absolute mt-[-90px] ms-[-10px]' />
                        <Image src={rline} className='hidden lg:block absolute mt-[-99px] ms-[198px] w-20' />
                    </div>
                </div>
                <div className='w-[80vw] flex justify-around items-center mt-10 ms-auto hidden sm:flex'>
                    <div className='text:xl lg:text-2xl pb-5'>
                        <h2 style={{ color: '#7A53FC' }}>choose the type of instruments</h2>
                        <h2 className='mt-2 font-medium text-white'>Select the type of musical <br /> instrument you want to purchase </h2>
                    </div>
                    <div className='text:xl lg:text-2xl pb-5'>
                        <h2 style={{ color: '#7A53FC' }}>Make the purchase</h2>
                        <h2 className='mt-2 font-medium text-white'>Once you've decided on a specific <br /> instrument, make the purchase</h2>
                    </div>
                </div>

                {/* mobile view  start  */}
                <div className='w-full flex justify-around items-center mt-10'>
                    <Image src={bay} className='w-[60vw] ms-10 sm:hidden' />
                </div>
                {/* How To Bay end  */}

                {/*[7]  Artists start ==== */}
                <h1 className='text-2xl text-white font-semibold text-center mt-14 md:text-3xl lg:text-4xl xl:text-[38px]'>Our Royal Customers</h1>
                <p style={{ color: '#7A53FC' }} className='text-center text-2xl mt-5'>Artists Trust Us</p>
                <div className='flex flex-col  md:flex-row md:w-[93vw] md:mx-auto md:gap-4 lg:gap-0 lg:flex-row justify-around items-center mt-16'>
                    <div className='hidden lg:block'>
                        <i className="fa-solid fa-arrow-left bg-white p-4 text-black rounded-full text-xl"></i>
                    </div>

                    <div className="relative group">
                        <Image src={Artists1} className=' h-80 w-56  mb-4 md:mb-0 md:mr-4' />
                        <div className="absolute inset-0 flex pt-32 md:pt-64 md:ps-8 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-center">Asha Bhosale</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image src={Artists2} className='h-80 w-56 mb-4 md:mb-0 md:mr-4' />
                        <div className="absolute inset-0 flex pt-32 md:pt-64 md:ps-9 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-center">Sonu Nigam</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image src={Artists3} className='h-80 w-56 mb-4 md:mb-0 md:mr-4' />
                        <div className="absolute inset-0 flex pt-32 md:pt-64 md:ps-7 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-center">Shreya Ghoshal</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <Image src={Artists4} className='h-80 w-56 mb-4 md:mb-0 md:mr-4' />
                        <div className="absolute inset-0 flex pt-32 md:pt-64 md:ps-9 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-center">Armaan Malik</p>
                        </div>
                    </div>

                    <div className='hidden lg:block'>
                        <i className="fa-solid fa-arrow-right bg-white p-4 text-black rounded-full text-xl"></i>
                    </div>
                </div>
                {/* Artists end  */}

                {/*[8] Connect start ====*/}
                <h1 className='text-xl text-white font-semibold text-center mt-14 md:text-3xl lg:text-4xl xl:text-[38px]'>Connect To Your Specialist</h1>
                <div className='w-full flex-col lg:flex-row flex justify-around items-center mt-10'>

                    {/* <div className='w-[24vw] border-[22px] border-white p-6 rounded-full '>
                        <Image src={music} className='rounded-full px-2 py-14 w-52 bg-white border-4 border-blue-950 outline outline-offset-0 outline-[19px] outline-blue-700 ' />
                    </div> */}
                    {/* <div className='flex justify-around items-center absolute mt-[310px] me-[790px]'>
                        <div className='bg-white px-4 py-2 rounded-xl border border-gray-600 '>
                            <p className='text-[16px] font-semibold'>31,129,902</p>
                            <p className='font-medium text-[12px] pt-1'>Followers</p>
                        </div>
                        <div className='bg-white px-4 py-2 ms-3 rounded-xl border border-gray-600 '>
                            <p className='text-[16px] font-semibold'>80,839</p>
                            <p className='font-medium text-[12px] pt-1'>Product Sold</p>
                        </div>
                        <div className='bg-white px-4 py-2 ms-3 rounded-xl border border-gray-600 '>
                            <p className='text-[16px] font-semibold'>4,87,986</p>
                            <p className='font-medium text-[12px] pt-1'>Video Views</p>
                        </div>
                    </div> */}
                    <div className='w-[65vw] sm:w-[45vw] md:w-[65vw] lg:w-[27vw]'>
                        <Image src={cont} />
                    </div>

                    <div className='flex-col gap-10 sm:gap-0 sm:flex-row flex justify-around items-center mt-14  '>
                        <Image
                            src={hoveredImages.first ? sp22 : sp2}
                            className='rounded-2xl lg:h-[380px]'
                            onMouseEnter={() => handleMouseEnter('first')}
                            onMouseLeave={() => handleMouseLeave('first')}
                        />
                        <Image
                            src={hoveredImages.second ? sp33 : sp3}
                            className='rounded-2xl lg:h-[380px] ms-7'
                            onMouseEnter={() => handleMouseEnter('second')}
                            onMouseLeave={() => handleMouseLeave('second')}
                        />
                        <Image
                            src={hoveredImages.third ? sp11 : sp1}
                            className='rounded-2xl lg:h-[380px] ms-7'
                            onMouseEnter={() => handleMouseEnter('third')}
                            onMouseLeave={() => handleMouseLeave('third')}
                        />
                    </div>
                </div>
                {/* Connect  end  */}

                {/*[9] Advantages of Rhythmix start  ====*/}
                <h1 className='text-xl text-white font-semibold text-center mt-16 md:text-3xl lg:text-4xl xl:text-[38px]'>Advantages of Rhythmix</h1>
                <div className='w-full flex flex-col md:flex-row justify-center items-center mt-14'>
                    <div className='w-[70vw] lg:w-[25vw] xl:w-[25vw]   pb-5'>
                        <h1 style={{ color: '#7A53FC' }} className='text-center text-2xl md:text-xl'>Reduced Time and Effort</h1>
                        <p className='h-fit  xl:h-[28vh] font-medium text-white w-fit text-lg border border-white mt-5 px-8 py-9 rounded '>Streamline processes such as inventory management, order processing.</p>
                    </div>
                    <div className='w-[70vw] lg:w-[25vw] xl:w-[25vw] pb-5 ms-0 md:ms-8'>
                        <h1 style={{ color: '#7A53FC' }} className='text-center text-2xl md:text-xl'>Secure Transactions</h1>
                        <p className='h-fit  xl:h-[28vh]  font-medium text-white text-lg  border border-white mt-5 px-8 py-5 rounded'>Implement robust security measures to protect customer data and ensure secure  transactions</p>
                    </div>
                    <div className='w-[70vw] lg:w-[27vw] xl:w-[25vw] pb-5 ms-0 md:ms-8'>
                        <h1 style={{ color: '#7A53FC' }} className='text-center text-2xl md:text-xl'>24/7 Availability</h1>
                        <p className='h-fit  xl:h-[28vh] font-medium text-white text-lg border border-white mt-5 px-8 py-8 rounded'>Your online store is open 24/7, allowing customers to shop at their convenience.</p>
                    </div>
                </div>
                {/* Advantages of Rhythmix end  */}

                {/*[10] Return Policy start === */}
                <h1 className='text-2xl text-white font-semibold text-center mt-16 md:text-3xl lg:text-4xl xl:text-[38px]'>Return Policy</h1>
                <h2 className='text-xl text-center mt-3  lg:text-left lg:ps-20 lg:mt-10 text-white font-semibold md:text-3xl lg:text-4xl xl:text-[30px]'>How to Make a Return</h2>
                <div className='w-full grid grid-cols-1 md:w-[80vw] md:mx-auto md:grid-cols-2 gap-5 lg:gap-0 lg:w-[95vw] lg:flex justify-evenly items-center mt-7' >
                    {/* 1  */}
                    <div className='w-[70vw] mx-auto md:w-[33vw] lg:w-[18vw] mt-2 bg-blue-800 rounded-xl opacity-90 rounded-br-none p-6 relative' style={{ backgroundColor: '#0116F366' }}>
                        <div className='absolute top-0 right-0 bottom-0 left-0' style={{ clipPath: 'circle(34.6% at 83% 70%)', backgroundColor: '#fff' }}></div>
                        <h1 className='pt-3 border-b border-white w-fit text-white text-xl font-semibold relative z-10'>Call or chat live</h1>
                        <p className='pt-2 font-medium text-[15px] relative z-10'>A customer support representative or chatbot responds to the customer's inquiry or message within a few seconds.
                        </p>
                    </div>
                    <div className='hidden lg:block'>
                        <i className="fa-solid fa-circle ps-2 text-[12px] text-blue-500"></i>
                        <i className="fa-solid fa-circle ps-2 text-[12px] text-white"></i>
                        <i className="fa-solid fa-circle ps-2 text-[12px] text-white"></i>
                        <i className="fa-solid fa-circle ps-2 text-[12px] text-white"></i>
                    </div>
                    {/* 2  */}
                    <div className='w-[70vw] mx-auto md:w-[33vw] lg:w-[18vw] mt-2 rounded-xl opacity-90 rounded-br-none p-6 relative' style={{ backgroundColor: '#0116F366' }}>
                        <div className='absolute top-0 right-0 bottom-0 left-0' style={{ clipPath: 'circle(34.6% at 83% 70%)', backgroundColor: '#fff' }}></div>
                        <h1 className='pt-3 border-b border-white w-fit text-white text-xl font-semibold relative z-10'>Create a label</h1>
                        <p className='pt-2 font-medium text-[15px]  relative z-10'>A customer support representative or chatbot responds to the customer's inquiry or message within a few seconds.</p>
                    </div>
                    <div className='hidden lg:block'>
                        <i className="fa-solid fa-circle ps-2 text-[12px] text-white"></i>
                        <i className="fa-solid fa-circle ps-2 text-[12px] text-blue-500"></i>
                        <i className="fa-solid fa-circle ps-2 text-[12px] text-white"></i>
                        <i className="fa-solid fa-circle ps-2 text-[12px] text-white"></i>
                    </div>
                    {/* 3  */}
                    <div className='w-[70vw] mx-auto md:w-[33vw] lg:w-[18vw] mt-2 rounded-xl opacity-90 rounded-br-none p-6 relative' style={{ backgroundColor: '#0116F366' }}>
                        <div className='absolute top-0 right-0 bottom-0 left-0' style={{ clipPath: 'circle(34.6% at 83% 70%)', backgroundColor: '#fff' }}></div>
                        <h1 className='pt-3 border-b border-white w-fit   text-white text-xl font-semibold relative z-10'>Create a label</h1>
                        <p className='pt-2 font-medium text-[15px] relative z-10'>Provide clear instructions on how the customer should prepare the return package, including any packaging  guidelines.</p>
                    </div>
                    <div className='hidden lg:block'>
                        <i className="fa-solid fa-circle ps-2 text-[12px] text-white"></i>
                        <i className="fa-solid fa-circle ps-2 text-[12px] text-white"></i>
                        <i className="fa-solid fa-circle ps-2 text-[12px] text-blue-500"></i>
                        <i className="fa-solid fa-circle ps-2 text-[12px] text-white"></i>
                    </div>
                    {/* 4  */}
                    <div className='w-[70vw] mx-auto md:w-[33vw] lg:w-[18vw] mt-2 rounded-xl rounded-br-none p-6 opacity-90 relative' style={{ backgroundColor: '#0116F366' }}>
                        <div className='absolute top-0 right-0 bottom-0 left-0' style={{ clipPath: 'circle(34.6% at 83% 70%)', backgroundColor: '#fff' }}></div>
                        <h1 className='pt-3 border-b border-white w-fit text-white text-xl font-semibold  relative z-10'>Ship it Back</h1>
                        <p className='pt-2 font-medium text-[15px] relative z-10'>A customer support representative or chatbot responds to the customer's inquiry or message within a few seconds.
                        </p>
                    </div>
                </div>
                {/* Return Policy end  */}

            </div>
        </>
    )
}

export default Demo
