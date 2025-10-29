'use client'
import Image from 'next/image';
import React from 'react'
import Tests from './test-del/tests';

const Testdetails = () => {
  return (
    <div className='flex ml-72 flex-col'>
    <div className="flex justify-center  mt-5"> {/* Center horizontally */}
    <Image
      src={'/et.svg'}
      width={800}
      height={100}
      alt='dash'
      className='rounded-lg'
    />
  </div>
<Tests/>

  </div>
  )
}

export default Testdetails;