'use client'
import Image from 'next/image';
import React from 'react'
import Academicdetails from './academicdtl/academicdetails';

const Academic = () => {
  return (
    <div className='flex ml-96 flex-col'>
    <div className="flex justify-center  mt-5"> {/* Center horizontally */}
    <Image
      src={'/Ad.svg'}
      width={800}
      height={100}
      alt='dash'
      className='rounded-lg'
    />
  </div>
 <Academicdetails/>
  </div>
  )
}

export default Academic;