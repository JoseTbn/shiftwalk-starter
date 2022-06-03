import React from 'react'
import Navbar from '../../components/Navbar'
import Link from 'next/link'


export default function index() {
    return (
        <>
            <section className='h-screen w-full flex flex-col   ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }} >
                <Navbar />
             
  <div className="relative max-w-4xl px-4 lg:px-0 mx-auto ">
    <div className="max-w-xl mb-14 lg:mb-28">
      <span className="text-lg text-blue-400 font-semibold"> Works</span>
      <h2 className="mt-8 text-5xl  font-bold font-heading">More than 20 years in the game</h2>
    </div>
    <div className="relative">
      <div className="hidden lg:block absolute top-0 left-0 -ml-80">
        <img className="-ml-24 w-112 h-96 object-cover" src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" alt=""/>
      </div>
      <div className="hidden lg:block absolute top-0 right-0 -mr-80">
        <img className="-mr-52 w-112 h-96 object-cover" src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" alt=""/>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <img className="w-full h-96 mb-12 object-cover" src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1100&amp;q=80" alt=""/>
        <div className="flex flex-wrap -mx-5">
          <div className="w-full lg:w-4/5 px-5 mb-6 lg:mb-0">
            <div className="relative py-12 px-10 lg:px-20 bg-gray-600 rounded-xl">
              <div className="absolute top-0 -mt-6 left-0 ml-16 w-14 h-14 bg-gray-600" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
              <h3 className="mb-6 text-4xl text-white font-bold font-heading">Experience design for your products</h3>
              <p className="text-lg text-gray-300">The brown fox jumps over the lazy dog.</p>
            </div>
          </div>
          <div className="w-auto mx-auto lg:w-1/5 px-5">
            <button className="inline-flex mr-2 items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full">
              <svg className="w-4 h-4" width="7" height="13" viewbox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.84708 12.1077C7.05097 12.3133 7.05097 12.6436 6.84708 12.8476C6.64319 13.0517 6.31377 13.0525 6.10988 12.8476L0.152917 6.8708C-0.0509739 6.66673 -0.0509738 6.33645 0.152917 6.13087L6.10988 0.154027C6.31377 -0.0500387 6.64319 -0.0500386 6.84708 0.154027C7.05098 0.358848 7.05098 0.689887 6.84708 0.893952L1.4143 6.50121L6.84708 12.1077Z" fill="white"></path>
              </svg>
            </button>
            <button className="inline-flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full">
              <svg className="w-4 h-4" width="7" height="13" viewbox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.152917 0.894235C-0.0509742 0.688658 -0.0509742 0.358375 0.152917 0.15431C0.356808 -0.0497557 0.686228 -0.0505119 0.89012 0.15431L6.84708 6.13116C7.05097 6.33522 7.05097 6.6655 6.84708 6.87108L0.890119 12.8479C0.686227 13.052 0.356807 13.052 0.152916 12.8479C-0.0509753 12.6431 -0.0509753 12.3121 0.152916 12.108L5.5857 6.50074L0.152917 0.894235Z" fill="white"></path>
              </svg>
            </button>

            <div className='mx-auto justify-center self-center'>
                        <button className='border-black border-2  p-3 hover:bg-black hover:text-white'>get back
                        </button>
                        </div>

          </div>

        
        </div>
      </div>
    </div>
  </div>

                <Link href='/'>
                    <div className='mx-auto justify-center self-center'>
                        <button className='border-black border-2  p-3 hover:bg-black hover:text-white'>get back
                        </button>
                        </div>
                </Link>       
             </section>
        </>
    )
}
