import React from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from "react-icons/io";
 
function Card({width ,start, para , hoverr="false", h1, h3}) {
  return (
    <motion.div whileHover={{backgroundColor:hoverr==="true" && "#7443ff",padding:"25px"}} className={` bg-zinc-800 p-5 rounded-xl ${width} min-h-[20rem] flex flex-col justify-between`}>
        <div className='w-full'>
        <div className='w-full flex justify-between mb-10'>
            <h3>{h3}</h3>
            <IoIosArrowRoundForward className='scale-[190%]'/>
        </div>
        <h1 className='text-3xl font-medium'>{h1}</h1>
        </div>

        <div className='down w-full '>
          {
            start && 
            <>
            <h1 className='text-6xl font-semibold tracking-tight leading-none mt-32'>start a project</h1>
            <button className='rounded-full py-2 px-5 border-[1px] border-zinc-300 mt-5'>Contact Us</button>
            </>
          }
          {
            para && 
            <>
            <p className='text-sm font-medium text-zinc-300 mt-5'>News and Insights on Web Design, <br/>Webflow Development, and <br/>Creative Development. </p>
            </>
          }
            
            
        </div>
    </motion.div>
  )
}

export default Card