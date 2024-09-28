import React from 'react'
import { useGlobalContext } from '../GlobalState/Context'

const Hero = () => {
    const {name} = useGlobalContext()   
  return (
    <div className='relative flex text-center justify-center items-center h-screen  px-20'
    style={{
        backgroundImage : `url("https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,

        backgroundPosition : 'center',
        backgroundSize : 'cover',

    }}
    >
        
        <span className='z-0 absolute bg-gradient-to-tl from-[#060d17] to-[#060d17]/70 w-full h-full top-0 left-0'/>

      <h1 className='z-40 text-[#f1d031] md:text-[6em] text-5xl uppercase font-permanent-marker leading-[1em]'>Amazing  <em>Experience</em> <br/>Are what power us</h1>
    </div>
  )
}

export default Hero
