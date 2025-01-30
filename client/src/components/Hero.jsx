import Spline from '@splinetool/react-spline'
import React from 'react'
import SplineBall from './SplineBall'

const Hero = () => {
  return (
    <>
    <div className='bg-black h-full w-full absolute top-0 left-0'>
      <SplineBall />
    </div>
    <div className='HeroContent flex flex-col justify-between z-10 relative h-screen items-center'>
      <h2 className='greeting text-white text-[106px] font-extrabold text-left uppercase mt-20 w-6/10'>Hello</h2>
      <h1 className='greeting text-[#FC7901] text-[106px] font-extrabold text-center'>MARKETING EXL</h1>
    </div>
    </>
  )
}

export default Hero
