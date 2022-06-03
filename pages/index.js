import Layout from 'components2/layout'
import Header from 'components2/header'
import Footer from 'components2/footer'
import Container from 'components2/container'
import FancyLink from 'components2/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import roundtxt from '../public/circletext.f0059cc8.svg'
import noise from '../public/noise.d095195e.png'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from 'react';

import About from '../components/About'
import Slidetext from '../components/Slidetext'
import Works from '../components/Works'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import { section } from 'tailwindcss/defaultTheme'
import Hero from '../Components/Hero'
// import Loader from '../components/Jfaloader'



export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          
            <m.article variants={fade}>
            <div className="min-h-screen">
  
  <Head>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
      rel="stylesheet"
    />

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <title>Jojo Front End Adventures</title>
  </Head>


  <section className=' scroll-smooth  h-screen w-full flex flex-col  bg-texture relative   '  >
   
  

   
    {/* <Image

src={noise}
alt='roundanimation'
/> */}
    <Navbar/>
<Hero/>
    {/* <div data-aos="fade-right" data-aos-duration="2500" className=' box-border  flex flex-col w-4/5 h-4/5 px-4  py-4 md:pt-20 xs:pt-10
m-auto   '>
      <div className=''>

        <h1 className='box-border font-light m-0  pb-10 uppercase text-xl whitespace-nowrap  sm:whitespace-normal   xs:whitespace-normal '>Full Stack Web Developer -
         Front end Oriented -
         Logo Creator </h1>
      </div>


      <div data-aos="fade-down" data-aos-duration="3000" className=" w-full my-auto  lg:h-72 lg:mb-20 2xl:h-60 flex  justify-between ">



        <h1 className=' 2xl:text-8xl  leading-4 mt-3 w-3/5 lg:text-7xl lg:block font-semibold lg:leading-4 lg:mt-4 lg:tracking-tighter lg:w-3/5 2xl:leading-4 2xl:mt-1 2xl:w-3/5  lg:transform-none md:transform-none xs:-rotate-90 xs:text-5xl uppercase '>Jose Batumeni</h1>
        <div className="w-48 2xl:w-60">
          <Image className='   animate-spin-slow'
            src={roundtxt}
            alt='roundanimation'
          />
        </div>
      </div>

      <div className='flex
w-full justify-between '>
        <h1 className='text-xl'>{date}</h1>
        <a className=' text-xl   hover:underline' href="mailto:Btnjose@gmail.com">Btnjose@gmail.com</a>

      </div>

    </div> */}



  </section>
  <Slidetext/>
<Works/>
<section className=' h-max w-full pt-1  ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }}>
<Slidetext/>
<About/>
<Slidetext/>
<Contact/>
</section>
</div>
              <FancyLink destination="/about" a11yText="Navigate to the about page" label="About Page" />
            </m.article>
         
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
