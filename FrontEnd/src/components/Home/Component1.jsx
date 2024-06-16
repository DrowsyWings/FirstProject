import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Component1() {
  return (
    <div className='bg-[#0B102C] py-24 px-5 flex justify-between space-x-4'>
      <div className='px-10'>
        <div className='text-[100px] w-[600px] text-white leading-none'>PUT YOUR<br></br> BRAND<br></br>IN EVERY<br></br>HAND</div>
        <p className='text-white mb-8 mt-6 text-xl'>Comitment to Quality and Dedication to Deliver</p>
        <Link to="/advertise">
        <button className="inline-flex items-center bg-[#FC581C] text-white py-2  px-5 focus:outline-none hover:bg-orange-300 rounded-full text-xl mt-4 md:mt-0">Advertise with us</button>
        </Link>        
      </div>
    <div className='px-14'>
        <img src="" className='w-[498px] h-[498px]'/>
    </div>
    </div>
  )
}

export default Component1
