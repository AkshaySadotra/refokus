import React from 'react'
import Button from './Button'

function Product({val, mover, count}) {
    
  return (
    <div className='w-full py-20 h-[23rem] text-white-100 '>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex justify-between items-center'>
         <h1 className='text-6xl capitalize font-medium'>{val.title}</h1>
         <div className=' dets w-1/3 '>
            <p className='mb-5'>{val.description}</p>
          <div className='flex items-center gap-5'>
          {val.live && <Button/>}
          {val.case && <Button title="Case Study" />}
          </div>
         </div>
        </div>
    </div>

  )
}

export default Product