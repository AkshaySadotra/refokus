import React from 'react'
import Button from './Button';

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto p-3 py-6 flex items-center justify-between border-b-[0.1px] border-zinc-600' >
        <div className='nleft flex items-center'>
        <img className='w-20 h-20 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tqUXF4UHYtMVtHk5cELnj3H2CK49-OtAbJZPpDRbcTfV3jxFbfwBwB84Ohkr9sR0PGs&usqp=CAU" alt="" />
        <div className='links flex gap-14 ml-32' >
            {["Home", "Work", "Culture","", "News"].map((elem, indx)=>
                (
              elem.length === 0? <span key={indx} className="w-[2px] h-7 bg-zinc-700"></span>:(  <a key={{indx}} className='font-regular text-sm flex items-center gap-1' href="#">
                {indx==1 && (<span  style={{boxShadow:"0 0 0.25em #00FF19"}} className='inline-block w-1.5 h-1.5 rounded-full bg-green-500'></span>)}
                      {elem}
                      </a>)
                ))}
             </div>
        </div>
        <Button/>
    </div>
  )  
}

export default Navbar;