import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Works() {
    return (
        <>  
        <section class='  h-max w-full bg-texture  '>
            <div class="box-border  flex flex-col w-4/5 h-3/5 px-4  pt-40 
  m-auto p-0">
                <h2 class=' text-3xl font-semibold lg:mt-0 '>Works</h2>
                <div class="  pt-20">
                    <h2 class=' pb-6 uppercase  border-b-2' >
                        <span class='  font-bold'> N01:</span> Anticip
                    </h2>
                    <div class="box-border m-0  lg:py-24 p-0 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between  lg:mx-auto">
                        <div data-aos="zoom-in-up" data-aos-duration="1500" class='transition duration-500 ease-in-out transform  hover:scale-110 cursor-pointer'>
                            <Image class=' rounded-xl'
                                src="/anticip.png"
                                alt='anticip team staffing agency'
                                width={800}
                                height={450} />
                        </div>
                        <div data-aos="fade-down-right" data-aos-duration="1500" >
                            <h2 class='2xl:text-5xl 2xl:mb-2  font-semibold'>
                                Anticip Team
                            </h2>
                            <h3 class=' py-6'>
                                Professional Work · 2021 · Development
                            </h3>
                            <Link  href='/work' >
                                <a class=' border-black border-2  p-3 hover:bg-black hover:text-white' href="">
                                    View more
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



        </section>

        <section class='  h-max w-full bg-texture  '>
            <div class="box-border  flex flex-col w-4/5 h-3/5 px-4  py-4 
  m-auto p-0">
                
                <div class=" pt-10  ">
                    <h2 class=' pb-6 uppercase  border-b-2' >
                        <span class='  font-bold'> N02:</span>  Gif search app
                    </h2>
                    <div class="box-border m-0  lg:py-24 p-0 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between  lg:mx-auto">
                        <div data-aos="fade-up-left" data-aos-duration="1500" class=' transition duration-500 ease-in-out transform  hover:scale-110 cursor-pointer'>
                            <Image class=' rounded-xl'
                                src="/gifsearcherapp.png"
                                alt='anticip team staffing agency'
                                width={800}
                                height={450} />
                        </div>
                        <div data-aos="zoom-in-up" data-aos-duration="1500" >
                            <h2 class='2xl:text-5xl 2xl:mb-2  font-semibold'>
                               Gif search app
                            </h2>
                            <h3 class=' py-6'>
                            Personal project · 2020 · Development
                            </h3>
                            <a class=' border-black border-2  p-3 hover:bg-black hover:text-white' href="">
                                View more
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </section>
        <section class='  h-max w-full  bg-texture ' >
            <div class="box-border  flex flex-col w-4/5 h-3/5 px-4  py-4 
  m-auto p-0">
                
                <div class=" pt-10 ">
                    <h2 class=' pb-6 uppercase  border-b-2' >
                        <span class='  font-bold'> N03:</span> Dashbord app
                    </h2>
                    <div class="box-border m-0  lg:py-24 p-0 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between  lg:mx-auto">
                        <div data-aos="zoom-in-up" data-aos-duration="1500" class='transition duration-500 ease-in-out transform  hover:scale-110 cursor-pointer'>
                            <Image class=' rounded-xl'
                                src="/dashbordapp.png"
                                alt='anticip team staffing agency'
                                width={800}
                                height={450} />
                        </div>
                        <div data-aos="fade-down-right" data-aos-duration="1500" >
                            <h2 class='2xl:text-5xl 2xl:mb-2  font-semibold'>
                            Dashbord app
                            </h2>
                            <h3 class=' py-6'>
                                Personal project · 2020 · Development
                            </h3>
                            <a class=' border-black border-2  p-3 hover:bg-black hover:text-white' href="">
                                View more
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </section>
        </>
    )
}
