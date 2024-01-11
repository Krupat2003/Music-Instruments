import React from 'react'
import Image from 'next/image'
import img1 from '../app/image/img1.png'
import img2 from '../app/image/img2.png'
import img3 from '../app/image/img3.png'
import price from '../app/image/price.png'


const Instruments = () => {
  return (
    <>
      <div className='w-full bg-[#00085A] font-serif pb-20'>
        <div className='w-[90vw] mx-auto md:mx-0 gap-14 sm:gap-0 flex justify-center pt-2'>
          {/* cart start====== */}
          <div className='grid grid-cols-1 md:mx-auto h-fit md:w-[60vw] md:grid-cols-2 lg:grid-cols-2 gap-10   '>
            {/* 1 */}
            <div className='w-[45vw] sm:w-[55%] md:w-auto lg:w-[26vw] bg-white mx-auto '>
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
                  <p className='text-xs md:text-[12px] lg:text-xl font-semibold'>
                    Rs. 2,7999
                  </p>
                  <p className='text-xs  md:text-[12px]  lg:text-xl font-medium pe-4 lg:pe-14'>
                    Rs. 2,8999
                  </p>
                </div>
                <div className='flex justify-between items-center mt-6'>
                  <i className="fa-solid fa-heart text-xl"></i>
                  <button className='text-black py-2 lg:py-3 px-4 lg:px-5 text-xs md:text-sm lg:text-xl rounded-3xl font-semibold me-4 lg:me-6'
                    style={{ backgroundColor: '#BBADEC' }}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className='hidden sm:block w-[45vw] sm:w-[55%] md:w-auto lg:w-[26vw] bg-white mx-auto '>
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
            {/* 2 */}
            <div className='w-[45vw] sm:w-[55%] md:w-auto lg:w-[26vw] bg-white mx-auto '>
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
                  <p className='text-xs md:text-[12px] lg:text-xl font-semibold'>
                    Rs. 8,399
                  </p>
                  <p className='text-xs  md:text-[12px]  lg:text-xl font-medium pe-4 lg:pe-14'>
                    Rs. 8,999
                  </p>
                </div>
                <div className='flex justify-between items-center mt-6'>
                  <i className="fa-solid fa-heart text-xl"></i>
                  <button className='text-black py-2 lg:py-3 px-4 lg:px-5 text-xs md:text-sm lg:text-xl rounded-3xl font-semibold me-4 lg:me-6'
                    style={{ backgroundColor: '#BBADEC' }}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            {/* 3  */}
            <div className='w-[45vw] sm:w-[55%] md:w-auto lg:w-[26vw] bg-white mx-auto '>
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
                  <p className='text-xs md:text-[12px] lg:text-xl font-semibold'>
                    Rs. 669
                  </p>
                  <p className='text-xs  md:text-[12px]  lg:text-xl font-medium pe-4 lg:pe-14'>
                    Rs. 2,899
                  </p>
                </div>
                <div className='flex justify-between items-center mt-6'>
                  <i className="fa-solid fa-heart text-xl"></i>
                  <button className='text-black py-2 lg:py-3 px-4 lg:px-5 text-xs md:text-sm lg:text-xl rounded-3xl font-semibold me-4 lg:me-6'
                    style={{ backgroundColor: '#BBADEC' }}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* text satrt  ====*/}
          <div className='w-[40vw] sm:w-[20vw] text-left pe-6 text-white'>
            <select
              id="dropdown"
              name="dropdown"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none text-es md:text-lg text-black"
            >
              <option value="option1">Default storing</option>
              <option value="option2">Sort by popularity</option>
              <option value="option3">Sort by average rating</option>
              <option value="option1">Sort bt latest</option>
              <option value="option1">Low to high</option>
              <option value="option1">High to low</option>
            </select>
            <p className='text-xl mt-16 border-b border-gray-400 pb-1'>Filter by price</p>
            <Image src={price} className='mt-8' />
            <p className='text-xl mt-12 border-b border-whit pb-1'>Cart</p>
            <p className='text-xl mt-9'>Brands <i className="fa-solid fa-angle-down text-xs ps-1"></i></p>
            <p className='text-black text-xl w-fit px-4 py-1 mt-3 bg-white rounded-md'>Yamaha</p>
            <p className='text-xl mt-12'>Number of strings</p>
            <form className='mt-2'>
              <div>
                <input
                  type="checkbox"
                  id="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="checkbox" className="ml-2 text-lg text-white">5</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="checkbox" className="ml-2 text-lg text-white">6</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="checkbox" className="ml-2 text-lg text-white">8</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="checkbox" className="ml-2 text-lg text-white">12</label>
              </div>
            </form>

            <p className='text-xl mt-9'>Top wood</p>
            <form className='mt-2'>
              <div>
                <input
                  type="radio"
                  id="radio"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="radio" className="ml-2 text-lg text-white text-center">Spruce</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="radio"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 bg-transparent border-white rounded"
                />
                <label htmlFor="radio" className="ml-2 text-lg text-white">Solid spruce</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="radio"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 bg-transparent border-white rounded"
                />
                <label htmlFor="radio" className="ml-2 text-lg text-white">Mahagony</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="radio"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 bg-transparent border-white rounded"
                />
                <label htmlFor="radio" className="ml-2 text-lg text-white">Solid mahagony</label>
              </div>
            </form>
            <p className='text-xl mt-12 border-b border-whit pb-1'>New arrivals</p>
            <div className='flex justify-between items-center mt-2 '>
              <p className='text-sm'>New arrivals</p>
              <p className='text-sm'>Effect Pedals</p>
            </div>
            <div className='flex justify-between items-center mt-2'>
              <p className='text-sm'>Acoustic Guitars</p>
              <p className='text-sm'>Electronic Drums</p>
            </div>
            <div className='flex justify-between items-center mt-2'>
              <p className='text-sm'>Bass Guitars</p>
              <p className='text-sm'>Acoustic Kit</p>
            </div>

            <select
              id="dropdown"
              name="dropdown"
              className="mt-7 block w-full p-2 border border-gray-300 rounded-md focus:outline-none text-lg text-black"
            >
              <option value="option1">Category</option>
              <option value="option2">Acoustic Connectors</option>
              <option value="option3">Drum Accessories</option>
              <option value="option1">Drum Pedal</option>
              <option value="option1">Reeds</option>
            </select>


          </div>

        </div>
      </div>
    </>
  )
}

export default Instruments
