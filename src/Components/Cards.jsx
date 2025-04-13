import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full mt-10'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-2'>
            <Card width={"basis-1/3"} start = {false} para={true} h3={"BLOG"} h1={"News & Insights"} />
            <Card width={"basis-2/3"} start={true} para={false}  hoverr={"true"} h3={"GET IN TOUCH"} h1={"Let's get to it, together."} />

        </div>
    </div>
  )
}

export default Cards