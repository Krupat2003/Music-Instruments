'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../app/image/logo.png';
import Link from 'next/link';

const Nevbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className='bg-[#00085A] w-full'>
            {/* Mobile View */}
            <div className='sm:hidden flex items-center justify-between p-4 pt-10'>
                <Image src={logo} alt='logo' className='h-12 ms-5' />
                <button
                    className='text-white text-[21px] pe-14 '
                    onClick={toggleMenu}
                >
                    <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Laptop View */}
            {/* <div className='hidden sm:flex flex items-center justify-evenly bg-[#00085A] w-full pt-20 pb-10'>
                <div className='flex items-center justify-evenly'>
                    <div> <Image src={logo} alt='logo' className='h-12' /></div>
                    <div className='flex items-center font-medium '>
                        <Link href='/home'>
                            <p className='text-white text-[22px] font-serif ps-16'>Home</p>
                        </Link>
                        <Link href='/whoweare'>
                            <p className='text-white text-[22px] font-serif ps-16'>Who we are</p>
                        </Link>
                        <p className='text-white text-[22px] font-serif ps-16'>FAQ</p>
                        <p className='text-white text-[22px] font-serif ps-16'>Shipping</p>
                        <p className='text-white text-[22px] font-serif ps-16'>Feedback</p>
                    </div>
                    <div className='text-white text-[21px] flex'>
                        <i className='fa-solid fa-magnifying-glass pr-2 ps-20'></i>
                        <i className='fa-solid fa-bell pr-2 ps-9'></i>
                        <i className='fa-solid fa-circle-user ps-9'></i>
                    </div>
                </div>
            </div> */}

            <div className='hidden sm:flex flex items-center justify-evenly w-full pt-20 pb-10 '>
                <div className='flex items-center justify-evenly'>
                    <div> <Image src={logo} alt='logo' className='h-12' /></div>
                    <div className='flex items-center font-medium sm:min-h-fit min-h-[60vh] left-0 top-[-100%] sm:w-auto  px-5'>
                        <Link href='/home'>
                            <p className='text-white sm:text-lg xl:text-[23px] font-serif sm:ps-7 xl:ps-16'>Home</p>
                        </Link>
                        <Link href='/whoweare'>
                            <p className='text-white sm:text-lg xl:text-[23px] font-serif sm:ps-7 xl:ps-16'>Who we are</p>
                        </Link>
                        <Link href='/faq'>
                            <p className='text-white sm:text-lg xl:text-[23px] font-serif sm:ps-7 xl:ps-16'>FAQ</p>
                        </Link>
                        <Link href='/shopping' >
                            <p className='text-white sm:text-lg xl:text-[23px] font-serif sm:ps-7 xl:ps-16'>Shopping</p>
                        </Link>
                        <Link href='/paymentsuccessful' >
                            <p className='text-white sm:text-lg xl:text-[23px] font-serif sm:ps-7 xl:ps-16'>Feedback</p>
                        </Link>
                    </div>
                    <div className='hidden sm:flex text-white sm:text-lg xl:text-[21px]  '>
                        <i className='fa-solid fa-magnifying-glass sm:ps-9  xl:ps-20'></i>
                        <i className='fa-solid fa-bell sm:ps-6  xl:ps-9'></i>
                        <i className='fa-solid fa-circle-user sm:ps-6 xl:ps-9'></i>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='sm:hidden flex flex-col items-center text-white font-medium text-[20px] pe-[35px] pt-7 font-serif '>
                    <Link href='/home'>
                        <p className='py-2' onClick={() => setMenuOpen(false)}>
                            Home
                        </p>
                    </Link>
                    <Link href='/whoweare'>
                        <p className='py-2' onClick={() => setMenuOpen(false)}>
                            Who we are
                        </p>
                    </Link>
                    <Link href='/faq'>
                        <p className='py-2' onClick={() => setMenuOpen(false)}>
                            FAQ
                        </p>
                    </Link>
                    <Link href='/shopping' >
                        <p className='py-2' onClick={() => setMenuOpen(false)}>
                            Shopping
                        </p>
                    </Link>
                    <Link href='/paymentsuccessful' >
                        <p className='py-2 pb-10' onClick={() => setMenuOpen(false)}>
                            Feedback
                        </p>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Nevbar;
