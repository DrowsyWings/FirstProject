import React, { useRef } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import SubscribeForm from '../Home/SubscribeForm'

function Container() {

  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full bg-[#0F143E] flex flex-col items-center pt-[100px] sm:pt-[120px] relative'>
      <Component1 scrollToForm={scrollToForm} ></Component1>
      <Component2></Component2>
      <div className='w-full flex items-center justify-center bg-gradient-to-r from-blue-50 via-blue-100 to-sky-200 px-6 py-16 lg:py-24'>
        <SubscribeForm ref={formRef}></SubscribeForm>
      </div>
    </div>
  )
}

export default Container
