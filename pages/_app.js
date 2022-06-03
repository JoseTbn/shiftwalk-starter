import { AnimatePresence } from 'framer-motion'
import '@/styles/main.css'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';
import { useRef } from 'react';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';

import 'locomotive-scroll/dist/locomotive-scroll.css';


export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <>
      <DefaultSeo {...SEO} /> 
      <RLSProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      location={asPath}
      onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
      containerRef={containerRef}
    >
      <AnimatePresence exitBeforeEnter>
      <div data-scroll-container>
         <Component {...pageProps} key={router.asPath} />
      </div>  
      </AnimatePresence>
      </RLSProvider>
    </>
  )
}