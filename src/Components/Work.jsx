import React, { useState } from 'react'
import {motion, useMotionValueEvent, useScroll} from "framer-motion"

function  Work() {

   const[images, setImages]= useState( [
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d0e9b533c6af922a7e13_Lavendar-4%203.webp", top:"50%", left:"50%",isActive:false},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d429dd783017a5e1b10e_BCGP%20-%204%203.webp", top:"56%", left:"44%",isActive:false},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d405786d15acd0e22a91_Kablamo%20-%204%203.webp", top:"45%", left:"55%",isActive:false},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b164d6371ae1de17e6edbd_651c796fcc43bbae9ae1c137_og-default-p-500.webp", top:"60%", left:"53%",isActive:false}
])
   const{scrollYProgress}= useScroll();

   scrollYProgress.on("change",(data)=>{
    function imagesShow(arr){
        setImages(prev=>(
            prev.map((item, index)=>(
                //agr arr mei iss bnde ka index mil jata hai
                arr.indexOf(index)=== -1? (
                    {...item, isActive:false}
                )
                :{...item, isActive:true}
            ))
        ))
    }
    switch(Math.floor(data*100)){
        case 0:
            imagesShow([]);// means koi image show nahi hogi
            break;
        case 2:
            imagesShow([0]);// 1 img show hogi
            break;
        case 4:
            imagesShow([0,1]);// 1 2 img show hogi
            break;
        case 6:
            imagesShow([0,1,2]);// 1 2 3 img show hogi
            break;
        case 8:
            imagesShow([0,1,2,3]);// 1 2 3 4 img show hogi
            break;
    }
   })



  return (
    <div className='w-full '>
        <div className='max-w-screen-xl mx-auto text-center relative'>
            <h1 className='text-[30vw] font-medium tracking-tight select-none leading-none '> work</h1>
            <div className='w-full h-full absolute top-0'>
                {images.map((elem, indx)=>(elem.isActive && (<img 
                key={indx}
                className='w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top:elem.top, left:elem.left}} alt="" />)) 
                     
                )}
            </div>
        </div>
    </div>
  )
}

export default Work