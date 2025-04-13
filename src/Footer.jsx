import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-10 '>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32  items-center'>
            <div className='basis-1/2'>
            <h1 className='text-[7vw] leading-none tracking-tight'>refokus.</h1> </div>
            <div className='basis-1/2 flex'>
            <div className='basis-1/3'>
                <h4 className='text-zinc-400 catpitalize mb-5 '>socials</h4>
                {["facebook", "twitter (x?)", "Instagram"].map((item, key1)=> <a key={key1} className='block mt-2  capitalize text-zinc-600'>{item}</a>)}
            </div>

            <div className='basis-1/3'>
                <h4 className='text-zinc-400 catpitalize mb-5 '>Privacy</h4>
                {["Privacy Policy", "Cookie Policy", "Cookie Preference"].map((item, key2)=> <a key={key2} className='block mt-2  capitalize text-zinc-600'>{item}</a>)}
            </div>

            <div className='basis-1/2 flex flex-col items-end '>
                <p className='text-right' >Refokus is a pioneering agency driven by design and empowered by techlonogy. </p>
                <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" className='mt-5 w-32 h-6'  alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer