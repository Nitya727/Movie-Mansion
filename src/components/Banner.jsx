import React from 'react'
import bannerImg from './movibanner.jpg'

function Banner() {
  return (
    <div className='h-[110vh] bg-cover bg-center flex items-end' style={{backgroundImage : `url(${bannerImg})`}}>
      <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4'>Oppenheimer</div>
    </div>
  )
}

export default Banner
