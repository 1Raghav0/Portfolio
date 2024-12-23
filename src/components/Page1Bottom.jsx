import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {
    useGSAP(function(){
        gsap.to('#Logos img',{
            rotate:360,
            duration:5,
            repeat:-1,
            ease:'linear',
        })
    })
  return (
    <div className='absolute left-0 p-20 flex items-end justify-between bottom-0 w-full'>
      <div>
        <h2 className='text-xl font-[special]  uppercase'><span className='text-gray-400'>Transforming</span> design into <span className='text-gray-400'>functional</span>,</h2>
        <h2 className='text-xl font-[special] uppercase'><span className='text-gray-400'>flawless</span> websites—this is the work </h2>
        <h2 className='text-xl font-[special] uppercase '>of a <span className='text-gray-400'>skilled</span> frontend developer.</h2>
      </div>
    </div>
  )
}

export default Page1Bottom
