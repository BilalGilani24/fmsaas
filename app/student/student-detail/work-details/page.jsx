import Image from 'next/image';
import React from 'react'
import Workexps from './workexp/workexp';
const Workexp = () => {
  return (
    <div className='flex flex-col'>
    <div className="flex justify-center ml-96 mt-5"> {/* Center horizontally */}
    <Image
      src={'/wp.svg'}
      width={800}
      height={100}
      alt='dash'
      className='rounded-lg'
    />
  </div>
 <Workexps/>
  </div>
  )
}

export default Workexp;