import React from 'react'
import backImage from '../../assets/component5backImage.jpg'
import binIcon from '../../assets/bin.svg'
import dropIcon from '../../assets/drop.svg'
import handsIcon from '../../assets/hands.svg'

function Component5() {
  return (
    <div className='relative w-full h-[400px] flex justify-center items-center mt-[120px]'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${backImage})`,
          filter: 'brightness(50%)'
        }}
      ></div>
      <div className='relative flex gap-[40px]'>
        <img src={binIcon} alt="Bin Icon"></img>
        <img src={dropIcon} alt="Drop Icon"></img>
        <img src={handsIcon} alt="Hands Icon"></img>
      </div>
    </div>
  )
}

export default Component5
