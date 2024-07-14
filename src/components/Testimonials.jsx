import { testimonials } from '../constants'

import React from 'react'

function Testimonials() {
  return (
    <div className='mt-20 tracking-wide'>
      <div className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 '>
        What People Are Saying</div>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((testimonial, index)=>(
          <div className=' sm:w-1/2 lg:w-1/3 px-4 py-2' key={index}>
             <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin '>
              <p className=''>{testimonial.text}</p>
              <div className='flex mt-8 items-start'>
                <img src={testimonial.image} alt={testimonial.user} className='h-20 w-20 rounded-full mr-6 border border-neutral-500'/>
                <div className='flex flex-col text-center items-center space-x-4'>
                <span className=' '>{testimonial.user}</span>
                <span className='text-sm font-normal italic text-neutral-600 '>{testimonial.company}</span>
                </div>
              </div>
             </div>
          </div>
        ))}
      </div>
    </div>
     
  )
}

export default Testimonials
