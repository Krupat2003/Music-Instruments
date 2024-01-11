import React from 'react'
import Image from 'next/image'
import style from '../app/style.modul.css'
import background from '../app/image/background.png'
import banjo2 from '../app/image/banjo2.png'
import follow2 from '../app/image/follow2.png'
import Gr2 from '../app/image/Gr2.png'
import guitar2 from '../app/image/guitar2.png'
import p21 from '../app/image/p21.png'
import sold2 from '../app/image/sold2.png'
import transverse2 from '../app/image/transverse2.png'
import trumpet2 from '../app/image/trumpet2.png'
import view2 from '../app/image/view2.png'
import play2 from '../app/image/play2.png'
import Group21 from '../app/image/Group21.png'
import Group22 from '../app/image/Group22.png'
import Group23 from '../app/image/Group23.png'
import giphy2 from '../app/image/giphy2.png'
import category from '../app/image/category.png'
import category1 from '../app/image/category1.png'
import category3 from '../app/image/category3.png'
import category4 from '../app/image/category4.png'
import Vector from '../app/image/Vector.png'
import s1 from '../app/image/s1.png'
import musicp2 from '../app/image/musicp2.png'
import mainp2 from '../app/image/mainp2.png'

const Whoweare = () => {
    return (
        <>
            <div className=' bg-[#00085A] w-full font-serif pb-20'>

                {/*[1]Know Us start ===  */}
                <h1 className=' text-2xl text-white font-semibold text-center md:text-3xl lg:text-4xl xl:text-[38px] pt-16'>Get To Know Us</h1>
                <div className='w-full flex-col gap-10 md:gap-0 md:flex-row flex justify-center items-center pt-20 pb-20'>
                    {/* 1 */}
                    <div className='w-full md:w-[40vw] lg:w-[30vw]'>
                        <Image src={musicp2} className=' w-[65vw] mx-auto md:mx-0 md:w-[35vw] md:mt-[-100px] lg:w-[28vw] lg:mt-[-70px]' />
                    </div>

                    <div className='w-full md:w-[50vw] lg:ms-32 px-7'>
                        <div className='flex '>
                            <Image src={Group23} />
                            <p className=' text-white text-xl ms-[-25px]'>Welcome to Rhythmix, where music is our passion and purpose</p>
                        </div>
                        <p className='text-white text:lg  lg:text-xl'>
                            Since 1975, Rhymix has been trusted as a brand that offers best quality musical instruments. Our firm works on the principle of building goodwill by serving our customers to the highest possible level.
                        </p>
                        <button className='text-white py-3 px-3 text-2xl mt-10 rounded-2xl font-medium '
                            style={{ backgroundColor: '#0116F3' }}>
                            Knoe more <i className="fa-solid fa-angle-right"></i>
                        </button>
                        {/* laptop view start */}
                        <div className='hidden lg:flex justify-evenly mt-12'>
                            <div>
                                <Image src={giphy2} className='relative' />
                                <Image src={follow2} className='absolute ms-[62px] mt-[-139px]' width={50} />
                                <p className='absolute text-2xl mt-[-80px] ps-7 font-semibold'>31,129,902</p>
                            </div>

                            <div>
                                <Image src={giphy2} className='relative' />
                                <Image src={sold2} className='absolute ms-[62px] mt-[-139px]' width={50} />
                                <p className='absolute text-2xl mt-[-80px] ps-7 font-semibold'>31,129,902</p>
                            </div>

                            <div>
                                <Image src={giphy2} className='relative' />
                                <Image src={view2} className='absolute ms-[62px] mt-[-139px]' width={50} />
                                <p className='absolute text-2xl mt-[-80px] ps-7 font-semibold'>31,129,902</p>
                            </div>
                        </div>
                        {/* mobile view  start*/}
                        <div className='md:hidden'>
                            <Image src={mainp2} className='mx-auto w-[50vw] mt-10' />
                        </div>

                    </div>
                </div>
                {/*Know Us end  */}

                {/*[2] Categories start  ====*/}
                <h1 className='text-2xl text-white font-semibold text-center md:text-3xl lg:text-5xl xl:text-[38px] mt-9'>Categories</h1>
                <p className='text-center text-sm  md:text-xl lg:text-2xl  xl:text-2xl text-white pt-5'>Where Musicians Thrive: Discover Your Sound at  <br /> The Musician's Haven</p>
                <div className='w-full grid grid-cols-1 md:w-[85vw] md:mx-auto md:grid-cols-2 gap-6 lg:w-[75vw] lg:mx-auto lg:gap-10 xl:w-[90vw] xl:mx-auto  xl:gap-0 xl:flex justify-evenly  items-center mt-16'>
                    <div className='w-[70vw] mx-auto md:w-[40vw] lg:w-[33vw]  xl:w-[20vw] rounded-2xl border-t-0 bg-white' style={{ border: ' border: 3px solid #0116f3' }}>
                        <p className='h-[5vh] xl:h-[8vh]' style={{ borderRadius: '17px 17px 0px 0px', backgroundColor: 'var(--second-color, #7A53FC)' }}></p>
                        <Image src={category} className='rounded-full mx-auto mt-7 ' width={150} />
                        <p className=' text-[15px] px-5 pt-7 lg:text-xl xl:text-[15px] xl:pb-4 '>Embrace the Rhythm - Unleash Your Inner Drummer with Our Percussion Instruments.</p>
                        <p className='w-[30vw] md:w-44 xl:w-[12vw] mb-[40px] mt-[40px] mx-auto' style={{ border: '2px solid #0116F3' }}></p>
                    </div>

                    <div className='w-[70vw] mx-auto md:w-[40vw] lg:w-[33vw]  xl:w-[20vw] rounded-2xl border-t-0 bg-white' style={{ border: ' border: 3px solid #0116f3' }}>
                        <p className='h-[5vh] xl:h-[8vh]' style={{ borderRadius: '17px 17px 0px 0px', backgroundColor: 'var(--second-color, #7A53FC)' }}></p>
                        <Image src={category1} className='rounded-full mx-auto mt-7 ' width={150} />
                        <p className='text-[15px] px-5 pt-7 lg:text-xl xl:text-[15px] xl:pb-4 '>Embrace the Rhythm - Unleash Your Inner Drummer with Our Percussion Instruments.</p>
                        <p className='w-[30vw] md:w-44 xl:w-[12vw] mb-[40px] mt-[40px] mx-auto' style={{ border: '2px solid #0116F3' }}></p>
                    </div>

                    <div className='w-[70vw] mx-auto md:w-[40vw] lg:w-[33vw]  xl:w-[20vw] rounded-2xl border-t-0 bg-white' style={{ border: ' border: 3px solid #0116f3' }}>
                        <p className='h-[5vh] xl:h-[8vh]' style={{ borderRadius: '17px 17px 0px 0px', backgroundColor: 'var(--second-color, #7A53FC)' }}></p>
                        <Image src={category3} className='rounded-full mx-auto mt-7 ' width={150} />
                        <p className='text-[15px] px-5 pt-7 lg:text-xl xl:text-[15px] xl:pb-4 '>Embrace the Rhythm - Unleash Your Inner Drummer with Our Percussion Instruments.</p>
                        <p className='w-[30vw] md:w-44 xl:w-[12vw] mb-[40px] mt-[40px] mx-auto' style={{ border: '2px solid #0116F3' }}></p>
                    </div>

                    <div className='w-[70vw] mx-auto md:w-[40vw] lg:w-[33vw]  xl:w-[20vw] rounded-2xl border-t-0 bg-white' style={{ border: ' border: 3px solid #0116f3' }}>
                        <p className='h-[5vh] xl:h-[8vh]' style={{ borderRadius: '17px 17px 0px 0px', backgroundColor: 'var(--second-color, #7A53FC)' }}></p>
                        <Image src={category4} className='rounded-full mx-auto mt-7 ' width={150} />
                        <p className='text-[15px] px-5 pt-7 lg:text-xl xl:text-[15px] xl:pb-4 '>Embrace the Rhythm - Unleash Your Inner Drummer with Our Percussion Instruments.</p>
                        <p className='w-[30vw] md:w-44 xl:w-[12vw] mb-[40px] mt-[40px] mx-auto' style={{ border: '2px solid #0116F3' }}></p>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-14 sm:mt-20'>
                    <button className='bg-white text-black py-3 px-6 sm:px-12 text-xs sm:text-xl  rounded-3xl font-semibold'>
                        All Categories
                    </button>
                    <button className='bg-blue-700 text-white py-3 px-7 sm:px-12 text-xs sm:text-xl  rounded-3xl font-semibold ms-4 sm:ms-11'>
                        Search Now
                    </button>
                </div>
                {/* Categories end  */}

                {/*[3] How We Made It start ====  */}
                <h1 className='text-2xl text-white font-semibold text-center md:text-3xl lg:text-4xl xl:text-[38px] mt-16'>How We Made It</h1>
                <div className='w-full flex justify-evenly  items-cente mt-10'>
                    <img src='https://s3-alpha-sig.figma.com/img/195b/dac3/08512c007d7dbf4d6feefa7573a174cc?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qCpaY-oQQDn42JbSOaqsVSTFUTGSW1QV6ieCyc~t9epdZUlT8m9dTuMpxQeUgrZzrCkDLG78F2g4Z71tXgv9vqAO5RHo22Feh-YZlAfrkfH0bxnRxYhlGijl~YeNBsJe~QaxtVst0H4h6NLr6ib4B0YYKY86TevVj53yOEw7YzoYtdNLWhX3L-hZub-8g4tnrsgYFlKwUdQt8d~nFkBL~mPlS3sngSpRdf7Min~xo3CY5XmM3-WKSSzKsjSN2StqTYMnXpf5cYpmmDi24Nr2-ageNF0av~vN3yHZNulfQCFp2T~mgWLbLUg3DHh2wdaOI6Uuc19l4sMC95GLKx9ArQ__'
                        alt='gif'
                        className='w-[75vw] lg:h-[35vh] xl:h-[80vh]'
                    />
                </div>

                {/* 2 */}
                <Image src={Vector} width={900} className=' absolute ms-[122px] mt-7 hidden lg:block' />
                <div className='w-full flex-col gap-5  lg:gap-0 mx-auto lg:mx-0 lg:flex-row lg:w-[80vw] flex justify-around items-center mt-20 lg:ms-32'>
                    <div className='w-[70vw] md:w-[50vw] lg:w-[30vw] text-sm md:text-xl lg:text-xl pb-5 flex justify-around'>
                        <div>
                            <p className='text-white text-[18px] md:text-xl md:px-5 lg:text-[40px] px-3 py-2 lg:px-5 lg:py-4 rounded-full' style={{ backgroundColor: '#0116F35E' }}>1</p>
                        </div>
                        <div className='ms-4'>
                            <h2 style={{ color: '#fff' }}>Design and Planning</h2>
                            <h2 className='mt-2 font-medium' style={{ color: "#C7C7C7" }}>The process begins with including its shape, size, materials, and specifications.</h2>
                        </div>
                    </div>
                    <div className='w-[70vw] md:w-[50vw] lg:w-[30vw] text-sm md:text-xl lg:text-xl pb-5 flex justify-around'>
                        <div>
                            <p className='text-white text-[18px] md:text-xl md:px-5 lg:text-[40px] px-3 py-2 lg:px-5 lg:py-4 rounded-full' style={{ backgroundColor: '#0116F35E' }}>3</p>
                        </div>
                        <div className='ms-4'>
                            <h2 style={{ color: '#fff' }}> Material Selection</h2>
                            <h2 className='mt-2 font-medium' style={{ color: "#C7C7C7" }}>High-quality wood is often preferred for acoustic instruments like guitars and violins.</h2>
                        </div>
                    </div>
                </div>

                <div className='w-full flex-col mx-auto gap-5 lg:gap-0 mt-10 lg:mt-16 lg:mx-0 lg:flex-row lg:w-[80vw] flex justify-around items-center lg:ms-auto'>
                    <div className='w-[70vw] md:w-[50vw] lg:w-[30vw] text-sm md:text-xl lg:text-xl pb-5 flex justify-around'>
                        <div>
                            <p className='text-white text-[18px] md:text-xl md:px-5 lg:text-[40px] px-3 py-2 lg:px-5 lg:py-4 rounded-full' style={{ backgroundColor: '#0116F35E' }}>2</p>
                        </div>
                        <div className='ms-4'>
                            <h2 style={{ color: '#fff' }}>Wood Preparation</h2>
                            <h2 className='mt-2 font-medium' style={{ color: "#C7C7C7" }}>The wood may be cut, shaped, and joined to form the instrument's body and components. </h2>
                        </div>
                    </div>
                    <div className='w-[70vw] md:w-[50vw] lg:w-[30vw] text-sm md:text-xl lg:text-xl pb-5 flex justify-around'>
                        <div>
                            <p className='text-white text-[18px] md:text-xl md:px-5 lg:text-[40px] px-3 py-2 lg:px-5 lg:py-4 rounded-full' style={{ backgroundColor: '#0116F35E' }}>4</p>
                        </div>
                        <div className='ms-4'>
                            <h2 style={{ color: '#fff' }}>Stringing and Tuning</h2>
                            <h2 className='mt-2 font-medium' style={{ color: "#C7C7C7" }}>Adjustments are made to ensure proper intonation and playability</h2>
                        </div>
                    </div>
                </div>
                {/* How We Made It end  */}

                {/* [4]Our Mission and Vision start  */}
                <h1 className='text-2xl text-white font-semibold text-center md:text-3xl lg:text-4xl xl:text-[38px] mt-20'>Our Mission and Vision</h1>
                <div className='mt-14'>
                    <Image src={s1} style={{ width: '100%' }} />
                </div>
                {/* Our Mission and Vision end  */}

                {/*[5] Contact Us start  */}
                <h1 className='text-2xl text-white font-semibold text-center md:text-3xl lg:text-4xl xl:text-[38px] mt-14'>Contact Us</h1>
                <div className='w-full flex-col gap-10 lg:gap-0 lg:flex-row flex justify-center items-center mt-12'>
                    <div className='w-[70vw] md:w-[65vw] mx-auto lg:mx-0 lg:w-[20vw]  text-white '>
                        <p className='leading-10 lg:leading-10 md:pb-5 md:text-2xl lg:text-lg '><i className="fa-solid fa-envelope pe-2"></i> rhytmix@crypto.com</p>
                        <p className='leading-10 lg:leading-10 md:pb-5 md:text-2xl lg:text-lg'><i className="fa-solid fa-phone pe-2"></i> +91 8494439931</p>
                        <p className='md:text-2xl lg:text-lg'><i className="fa-solid fa-location-dot pe-2"></i> Shop B2, Bakare Heights, Ground Floor, Sr 1/1A, Chaitanya Nagar Opp. Shivaji Statue,</p>
                        <button className='bg-blue-700 text-white py-2 px-10 text-lg mt-10 rounded-3xl font-semibold '>
                            View Map
                        </button>
                        <p className='mt-8 md:text-xl font-medium' style={{ color: "#C7C7C7" }}>Follow Us:
                            <i class="fa-brands fa-instagram text-white ps-3 "></i>
                            <i class="fa-brands fa-google ps-3 text-white"></i>
                            <i class="fa-brands fa-twitter ps-3 text-white"></i>
                        </p>
                    </div>
                    <div className='w-[74vw] xl:w-[50vw] bg-white rounded-lg lg:ms-16'>
                        <h2 className='text-black text-2xl text-center font-semibold pt-7'>Leave Us a Message</h2>
                        <form className='p-10'>
                            <input
                                class="border border-black sm-w-[80%] rounded-2xl md:rounded  md:w-[45%] lg:w-[47%] py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"
                                placeholder="First Name"
                            />
                            <input
                                class="border border-black sm-w-[80%] rounded-2xl md:rounded mt-6 md:mt-0 md:w-[45%] lg:w-[47%] py-4 px-4 md:ms-7  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"
                                placeholder="Last Name"
                            />
                            <input
                                class="border border-black sm-w-[80%] rounded-2xl md:rounded mt-6  md:w-[45%] lg:w-[47%] py-4 px-4  md:mt-8  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number"
                                placeholder="Phone"
                            />
                            <input
                                class="border border-black sm-w-[80%] rounded-2xl md:rounded mt-6  md:w-[45%] lg:w-[47%] py-4 px-4 md:mt-8 md:ms-7  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email"
                                placeholder="Email"
                            />
                            <textarea
                                class="border border-black rounded-2xl md:rounded w-[99%] pt-4 px-4 mt-8  text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                placeholder='Message' rows={5}
                            />
                            <div className='flex justify-around items-center'>
                                <button className=' text-black py-2 px-10 text-lg mt-4 rounded-3xl font-semibold ' style={{ backgroundColor: "#7A53FC" }}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Contact Us end  */}



            </div>
        </>
    )
}

export default Whoweare
