import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'


function Products() {
    var products = [
        {title:"arqitel", description:"With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.", live:true, case:true},
        {title:"Bcg platinion", description:"An interactive website that blends playful design with smart functionality to highlight Thymbs’ innovative platform.", live:true, case:true},
        {title:"sevdesk", description:"A new site for Singularity that supports their growth and showcases their true identity as industry innovators.", live:true, case:true},
        {title:"keystone", description:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", live:true, case:true},
    ]
    const[pos,setPos]=useState(0);
    // ye val hai 0th index 1st index... 0*23 = 0 1*23 = 23 ...
    const mover = (val)=>{
      setPos(val*23);
    }


  return (
    <div className='mt-20 relative'>
        {products.map((elem, indx)=> <Product key={indx} val={elem} mover={mover} count={indx} />)}
         {/* center window */}
     <div className='w-full h-full absolute top-0 pointer-events-none'>
     
      {/* single window hai jo aage kishke gi */}
      <motion.div  initial={{y:pos, x:"-50%"}} animate={{y:pos+`rem`}} transition={{ease:[0.76 ,0,0.24, 1], duration:0.5}} className=' window w-[25rem] h-[23rem] bg-white-100 absolute left-[46%] overflow-hidden translate-y-[23rem]'>

       <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.76 ,0,0.24, 1], duration:0.5}} className=' w-full h-full '>
        <img className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d819c9bd39dfd6dfbaeb_Silvr%20-%2016%209%20(A).webp" alt="" />
       </motion.div>
       <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.76 ,0,0.24, 1], duration:0.5}} className=' w-full h-full '>
        <img className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d669e8dd55fff91862e4_Weglot%20Like%20Magic%20-%2016%209%20(A).webp" alt="" /></motion.div>      
       <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.76 ,0,0.24, 1], duration:0.5}} className=' w-full h-full '>
        <img className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d6a0ea9cf11c61fb84f1_Yahoo%20-%2016%209%20(A).webp" alt="" />
       </motion.div>
       <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.76 ,0,0.24, 1], duration:0.5}} className=' w-full h-full '>
        <img className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d153c4caa422959a2717_Analog%20Way%20-%2016%209%20(A).webp" alt="" />
       </motion.div>
      </motion.div>

     </div>
    </div>
  )
}

export default Products