import React from 'react'
import Userdetails from './details/userdetails';
import Image from 'next/image';
const Profile = () => {
  return (
    <div className='flex flex-col'>
    <div className="flex justify-center ml-64 mt-5"> {/* Center horizontally */}
    <Image
      src={'/pl.svg'}
      width={800}
      height={100}
      alt='dash'
      className='rounded-lg'
    />
  </div>
  <Userdetails/>
  </div>
  )
}

export default Profile;