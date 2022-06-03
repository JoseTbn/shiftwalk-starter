import React from 'react'
import Link from 'next/link'
import FancyLink from '../components2/fancyLink'


export default function Navbar() {
    return (
        <div>
            <>
            <header class=' container '>

<nav class='box-border hidden justify-between m-0 px-0 py-8 lg:flex lg:justify-end lg:ml-auto uppercase'>
  <ul>
    <FancyLink  destination="/work" a11yText="Navigate to the home page" class='lg:inline-block lg:text-xl lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline md:text-xs font-semibold uppercase text-gray-600 tracking-wider'/>
  
   
    <FancyLink destination="/about" a11yText="Navigate to the home page" class='lg:inline-block lg:text-xl lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline md:text-xs font-semibold uppercase text-gray-600 tracking-wider'/>
    
    <FancyLink destination="/contact" a11yText="Navigate to the home page" class='lg:inline-block lg:text-xl lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline md:text-xs font-semibold uppercase text-gray-600 tracking-wider'/>
  </ul>
</nav>

<nav class=' lg:hidden 2xl:hidden  font-semibold flex w-screen mx-auto p-5 justify-between'>
<a href="">
Work
</a>

<button class=' border-black border-2 py-2 px-4'>Menu</button>
</nav>



</header>
            
            </>
        </div>
    )
}
