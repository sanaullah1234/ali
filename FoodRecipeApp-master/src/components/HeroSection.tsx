import React from 'react'
import croppedpistaciafood from '../assets/images/cropped-pistaciafood.png'

const HeroSection:React.FC = () => {
  return (
    <>
      <div className='max-w-[430px] md:max-w-[100%] md:h-[370px] h-[240px] text-white text-6xl flex justify-center items-center
       lg:items-center'
     style={{
        backgroundImage: `url(${croppedpistaciafood})`,
        backgroundSize: 'cover',
      }}
      >
        <p className='w-[90%]'>Food  Diary</p>
      </div>
    </>
  )
}

export default HeroSection
