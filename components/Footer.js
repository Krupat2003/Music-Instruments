import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='w-full h-[60vh] font-serif font-medium bg-white flex justify-evenly pt-14 hidden sm:flex'>
                <div>
                    <h1 className='text-[27px] text-black'>RHYTHMIX</h1>
                    <div className='text-black text-2xl text-center pt-2'>
                        <i className="fa-brands fa-twitter "></i>
                        <i className="fa-brands fa-square-instagram ps-2"></i>
                        <i className="fa-brands fa-facebook ps-2"></i>
                        <i className="fa-brands fa-linkedin ps-2"></i>
                    </div>
                </div>
                <div className='text-xl leading-9'>
                    <p>Contacts</p>
                    <p>About us</p>
                    <p>Shipping & payment</p>
                    <p>News</p>
                    <p>Brands</p>
                </div>
                <div className='text-xl leading-9'>
                    <p>Info</p>
                    <p>FAQ</p>
                    <p>Terms & privacy</p>
                </div>
                <div className='text-xl leading-9'>
                    <p>Email <br /> <span className='text-lg border-b border-black w-fit'>ash@gmail.com</span></p>
                    <p className='pt-4'>Phone <br /> <span className='text-lg border-b border-black w-fit'>866-937-4030</span></p>
                    <button className='text-white bg-blue-800 px-9 rounded-2xl mt-9'>Contact us</button>
                </div>
            </div>

            {/* mobile view  start */}
            <div className=' bg-[#00085A] font-serif sm:hidden'>
                <div className=' w-full h-[28vh] font-serif font-medium text-white flex-col text-center'>
                    <p className='text-3xl'>RHYTHMIX</p>
                    <p className='xl pt-7'>Privacy Policy</p>
                    <p className='xl pt-3'>Terms and Conditions</p>
                </div>
            </div>
        </>
    )
}

export default Footer
