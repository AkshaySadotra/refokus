import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import React from 'react'

function Marquee({imagesUrl, direction}) {
  return (
    
   
    <div className='flex w-full overflow-hidden'>
       <motion.div initial={{x:direction==="left"? "0":"-100%"}} animate={{x:direction==="left"? "-100%":"0"}} transition={{ease:"linear", duration:15, repeat:Infinity}}  className=' flex flex-shrink-0 py-8 gap-40 pr-40 ' >
        {imagesUrl.map((url,indx)=> <img key={indx} src={url} className=''/>)}
      
    </motion.div>

    <motion.div initial={{x:direction==="left"? "0":"-100%"}} animate={{x:direction==="left"? "-100%":"0"}} transition={{ease:"linear", duration:15, repeat:Infinity}}  className=' flex flex-shrink-0 py-8 gap-40 pr-40 ' >
        {imagesUrl.map((url,indx)=> <img key={indx} src={url} className=''/>)}
      
    </motion.div>

    

    
    </div>
  )
}

export default Marquee