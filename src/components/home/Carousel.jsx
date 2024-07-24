"use client"
import Image from "next/image"
import { useState } from "react"

export default function Carousel({images}){

    const [curr, setCurr] = useState(0)

    const Slider = ()=>{ return images.map((image, index)=>{ return <Image src={image.url} width={1000} height={1000} key={index+1}/> })}

    return (
        <div className="overflow-hidden absolute left-0 md:relative w-[100%] mx-auto row-start-1 row-end-2">
            <div className="overflow-hidden h-[30vh] md:h-[62vh]">

            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr*100}%)` }}>
                <Slider/>
            </div>
            <div className="absolute inset-0 flex items-center justify-between text-light">
               <button onClick={()=>setCurr(curr=>curr == 0 ? images.length - 1 : curr - 1 )} className="ml-2"><Image src={'/icon/left-arrow.png'} width={36} height={36} /></button>
               <button onClick={()=>setCurr(curr=>curr == images.length - 1 ? 0 : curr + 1 )} className="mr-2"><Image src={'/icon/right-arrow.png'} width={36} height={36} /></button>
            </div>

            </div>
        </div>
    )
}