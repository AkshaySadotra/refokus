import React from 'react'

function Stripe({val}) {
  
  return (
    <div className='w-[16.66%] px-4 py-3 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center'>
   <img className='' src={val.url} alt="" />
    <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe