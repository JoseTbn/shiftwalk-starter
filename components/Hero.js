import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import roundtxt from '/public/circletext.f0059cc8.svg'
import { useRef, useEffect } from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll';




export default function Hero() {
  
  
  const scrollRef = useRef();
  const current = new Date();

  const { scroll } = useLocomotiveScroll();

  const date = `${current.getHours()}:${current.getUTCMinutes()}   ${current.getUTCDate()}/${current.getUTCMonth() + 1}/${current.getFullYear()} `;
 
  // useEffect(() => {
       
  //   if (typeof window === "undefined") {
  //     return;
  //   }
 
  //   const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
  //     new LocomotiveScroll.default({
  //       el: scrollRef.current,
  //       smooth: true
  //     });
  //   });

  //   return () => scroll.destroy;
  // }, []);


useEffect(() => {
  ;(async () => {
    try {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const dataScrollContainer = document.querySelector(
        '[data-scroll-container]',
      )

      if (!dataScrollContainer) {
        console.warn(
          'locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work.',
        )
      }

      window.locomotive = new LocomotiveScroll({
        el: dataScrollContainer ?? undefined,
        smooth: true,
      })
    } catch (error) {}
  })()

  return () => {
    window.locomotive?.destroy()
  }
}, [])



  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>


      <section class='  bg-texture   h-screen w-full  ' 
      >


        <div 
         class=' box-border  flex flex-col w-4/5 h-4/5 px-4  py-4 md:pt-20 xs:pt-10 
m-auto   '>
          <div class=''>

            <h1 
       
            class='box-border  m-0  pb-10  text-xl   xs:whitespace-normal font-semibold uppercase text-gray-600 tracking-wider '>Devops - Full Stack Web Developer -
              Front end Oriented</h1>
          </div>


          <div  class=" w-full my-auto  lg:h-72 lg:mb-20 2xl:h-60 flex  justify-between ">



            <h1
            data-scroll=""
            data-scroll-direction="horizontal"
            data-scroll-speed="8" class=' 2xl:text-8xl  leading-4 mt-3 w-3/5 lg:text-7xl lg:block font-semibold lg:leading-4 lg:mt-4 lg:tracking-tighter lg:w-3/5 2xl:leading-4 2xl:mt-1 2xl:w-3/5  lg:transform-none md:transform-none  xxs:-rotate-90 xxs:text-5xl uppercase  '>Jose Batumeni</h1>
            <div class="w-48 2xl:w-60  animate-spin ">
              <Image class=''
                src={roundtxt}
                alt='roundanimation'
              />
            </div>
          </div>

          <div class='flex
w-full justify-between '>
            <h1 class='text-xl'>{date}</h1>
            <a class=' text-xl   hover:underline' href="mailto:Btnjose@gmail.com">Btnjose@gmail.com</a>

          </div>

        </div>



      </section>

    </>
  )
}
