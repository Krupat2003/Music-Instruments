import React from 'react'
import Image from 'next/image'
import plus1 from '../app/image/plus1.png'
import cart1 from '../app/image/cart1.png'
import cart2 from '../app/image/cart2.png'
import text from '../app/image/text.png'
import img1 from '../app/image/img1.png'
import img2 from '../app/image/img2.png'
import img3 from '../app/image/img3.png'


const ViewCart = () => {
    return (
        <>
            <div className='bg-[#00085A] w-full font-serif pb-20 '>

                <h1 className='text-xl text-white font-medium w-[85vw] mx-auto md:text-2xl xl:text-[29px] pt-9'>Shopping Cart(2)</h1>
                {/* laptop view  */}
                <div className="hidden xl:flex bg-white rounded-lg flex-col w-[85vw] mt-5 mx-auto">
                    <div class=" rounded-md">
                        <div class="inline-block min-w-full py-2 ">
                            <div class="overflow-hidden">
                                <table class="min-w-full text-left text-sm font-light">
                                    <thead class="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" class="px-6  py-4 flex justify-between items-center">
                                                <p className='border border-black w-4 me-2 h-4'></p>
                                                Select All
                                            </th>
                                            <th scope="col" class="px-6 text-[16px] py-4">Product</th>
                                            <th scope="col" class="px-6 text-[16px] py-4">Price</th>
                                            <th scope="col" class="px-6 text-[16px] py-4">Quantity</th>
                                            <th scope="col" class="px-6 text-[16px] py-4">Total Price</th>
                                            <th scope="col" class="px-6 text-[16px] py-4"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium flex justify-between items-center">
                                                <p className='border border-black w-4 h-4'></p>
                                                <Image src={cart2} className='w-[4vw]' />
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">Cort AF500CE Standard Series Open Pore Electro Acoustic Guitar</td>
                                            <td class="whitespace-nowrap text-lg px-6 py-4">Rs. 1200
                                                <Image src={text} className='w-12' />
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4 text-black">
                                                <Image src={plus1} className='w-[4vw]' />
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">Rs. 1200</td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                                <i className="fa-solid fa-heart"></i>
                                                <i className="fa-solid fa-trash ps-8"></i>
                                            </td>
                                        </tr>
                                        <tr >
                                            <td class="whitespace-nowrap px-6 py-4 font-medium flex justify-between items-center">
                                                <p className='border border-black w-4 h-4'></p>
                                                <Image src={cart1} className='w-[3vw]' />
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">Cort AF500CE Standard Series Open Pore Electro Acoustic Guitar</td>
                                            <td class="whitespace-nowrap px-6 text-lg py-4">
                                                Rs. 1299
                                                <Image src={text} className='w-12' />
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4 text-black">
                                                <Image src={plus1} className='w-[4vw]' />
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">Rs. 1299</td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                                <i className="fa-solid fa-heart"></i>
                                                <i className="fa-solid fa-trash ps-8"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile view  */}
                <div className="overflow-x-auto sm:block xl:hidden">
                    <table className="w-[90vw] mx-auto mt-6 bg-white rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-8 px-4 border-b flex  items-center justify-center text-xs">
                                    <p className='border border-black w-4 me-2 h-4'></p>
                                    Select All
                                </th>
                                <td className="py-6 px-4 border-b  items-center">
                                    <p className='border border-black w-4  h-4'></p>
                                    <Image src={cart2} className='w-[4vw] ms-6 mt-[-20px]' />
                                </td>
                                <td className="py-6 px-4 border-b items-center justify-center">
                                    <p className='border border-black w-4  h-4'></p>
                                    <Image src={cart1}  className='w-[4vw] ms-10 mt-[-20px]' />
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="py-6 px-4 border-b">Product</th>
                                <td className="py-6 px-4 border-b text-[10px] sm:text-sm">Cort AF500CE Standard Series Open Pore Electro Acoustic Guitar</td>
                                <td className="py-6 px-4 border-b text-[10px] sm:text-sm">Cort AF500CE Standard Series Open Pore Electro Acoustic Guitar</td>
                            </tr>
                            <tr>
                                <th className="py-6 px-4 border-b">Price</th>
                                <td className="py-6 px-4 border-b text-lg">
                                    Rs. 1200
                                    <Image src={text} className='w-12' />
                                </td>
                                <td className="py-6 px-4 border-b text-lg">
                                    Rs. 1299
                                    <Image src={text} className='w-12' />
                                </td>
                            </tr>
                            <tr>
                                <th className="py-6 px-4 border-b">Quantity</th>
                                <td className="py-6 px-4 border-b">
                                    <Image src={plus1} className='w-[8vw]' />
                                </td>
                                <td className="py-6 px-4 border-b">
                                    <Image src={plus1} className='w-[8vw]' />
                                </td>
                            </tr>
                            <tr>
                                <th className="py-6 px-4 border-b">Total Price</th>
                                <td className="py-6 px-4 border-b text-lg">Rs. 1200 </td>
                                <td className="py-6 px-4 border-b text-lg">Rs. 1299 </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>

                <div className='flex justify-end mx-auto'>
                    <button className='text-white py-2 px-9 rounded-2xl me-20 mt-9 ' style={{ backgroundColor: '#0116F3' }}>Contact us</button>
                </div>

                {/* Recommended for You start  */}
                <h1 className='text-lg text-white font-medium w-[85vw] mx-auto md:text-xl xl:text-[25px] pt-9'>Recommended for You</h1>
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
                {/* end  */}


            </div>
        </>
    )
}

export default ViewCart
