import React from 'react'
import Image from 'next/image'
import shop from '../app/image/shop.png'
import shop2 from '../app/image/shop2.png'
import cart1 from '../app/image/cart1.png'


const Shopping = () => {
  return (
    <>
      <div className='bg-[#00085A] w-full font-serif pb-20 '>
        <div className=' lg:ms-20 pt-9'>
          <div className='w-[76vw] mx-auto  md:ms-14 md:w-[69vw]  lg:mx-0 lg:w-[33vw] flex justify-between items-center text-white text-xs lg:text-[16px]'>
            <p>Check Out</p>
            <p>Shopping Adress</p>
            <p>Payment</p>
          </div>
          <Image src={shop} className='w-[66vw] ms-[72px] lg:w-[30vw] lg:ms-4 pt-1' />
        </div>

        <div className='w-[80vw]  mx-auto lg:w-full lg:mx-0 flex-col gap-10 lg:gap-0 lg:flex-row flex justify-center mt-9'>
          {/* form start  */}
          <div className='w-[80vw] h-fit lg:w-[50vw] bg-white rounded-lg lg:ms-16'>
            <h2 className='text-black text-lg ms-6 md:text-2xl md:ms-10 font-semibold pt-3 md:pt-6'>Shopping Adress</h2>
            <p className='border-b border-dotted border-gray-500 pt-2 '></p>
            <form className=' md:px-10 md:py-4 mb-1'>
              <input
                class="border border-gray-600 text-[9px] md:text-sm w-[44%] rounded-md py-[6px] ms-3 md:rounded  md:w-[45%] lg:w-[41%] md:py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name"
              />
              <input
                class="border border-gray-600 text-[9px] md:text-sm w-[44%] rounded-md py-[6px] ms-3  md:rounded mt-3 md:mt-0 md:w-[45%] lg:w-[41%] md:py-2 px-4 md:ms-7  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name"
              />
              <input
                class="border border-gray-600 text-[9px] md:text-sm w-[44%] rounded-md py-[6px] ms-3 md:rounded mt-3  md:w-[45%] lg:w-[41%] md:py-2 px-4  md:mt-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Address 1"
              />
              <input
                class="border border-gray-600 text-[9px] md:text-sm w-[44%] rounded-md py-[6px] ms-3 md:rounded mt-3  md:w-[45%] lg:w-[41%] md:py-2 px-4 md:mt-4 md:ms-7  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Address 2"
              />
              <input
                class="border border-gray-600 text-[9px] md:text-sm w-[44%] rounded-md py-[6px] ms-3 md:rounded mt-3  md:w-[45%] lg:w-[41%] md:py-2 px-4  md:mt-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="City"
              />
              <input
                class="border border-gray-600 text-[9px] md:text-sm w-[44%] rounded-md py-[6px] ms-3 md:rounded mt-3  md:w-[45%] lg:w-[41%] md:py-2 px-4 md:mt-4 md:ms-7  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="State"
              />
              <input
                class="border border-gray-600 text-[9px] md:text-sm w-[44%] rounded-md py-[6px] ms-3 md:rounded mt-3  md:w-[45%] lg:w-[41%] md:py-2 px-4  md:mt-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Zip Code"
              />
              <input
                class="border border-gray-600 text-[9px] md:text-sm w-[44%] rounded-md py-[6px] ms-3 md:rounded mt-3  md:w-[45%] lg:w-[41%] md:py-2 px-4 md:mt-4 md:ms-7  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Country"
              />
              <input
                class="border border-gray-600 text-[9px] md:text-sm w-[44%] rounded-md py-[6px] ms-3 md:rounded mt-3  md:w-[45%] lg:w-[41%] md:py-2 px-4  md:mt-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="PIN Code"
              />
              <input
                class="border border-gray-600 text-[9px] md:text-sm w-[44%] rounded-md py-[6px] ms-3 md:rounded mt-3  md:w-[45%] lg:w-[41%] md:py-2 px-4 md:mt-4 md:ms-7  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone No"
              />
              <div className='mt-5 ms-3 flex items-center'>
                <input
                  type="checkbox"
                  id="checkbox"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                />
                <label htmlFor="checkbox" className="ml-2 text-[11px] text-center sm:text-sm text-black">Save this information for next time</label>
              </div>
              <div className='mt-6 ps-4 text-[10px] md:text-sm'>
                <p><i className="fa-solid fa-angle-right pe-3 md:pe-7"></i> Return to cart</p>
              </div>
              <div className='flex justify-end items-center me-8 mt-[-9px] mb-2'>
                <button className=' text-white py-2 px-4 text-[10px] md:text-sm rounded-3xl font-semibold ' style={{ backgroundColor: "#0116F3" }}>
                  Continue To Payment
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

export default Shopping
