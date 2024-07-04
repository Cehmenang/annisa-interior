"use client"
import Image from "next/image"
import { useState } from "react"

export default function Carousel({images}){

    const [curr, setCurr] = useState(0)

    const Slider = ()=>{ return images.map((image, index)=>{ return <Image src={image.url} width={1000} height={1000} key={index+1}/> })}

    return (
        <div className="overflow-hidden relative w-[100%]">
            <div className="overflow-hidden h-[62vh]">

            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr*100}%)` }}>
                <Slider/>
            </div>
            <div className="absolute inset-0 flex items-center justify-between text-light">
               <button onClick={()=>setCurr(curr=>curr == 0 ? images.length - 1 : curr - 1 )}>Kiri</button>
               <button onClick={()=>setCurr(curr=>curr == images.length - 1 ? 0 : curr + 1 )}>Kanan</button>
            </div>

            </div>
        </div>
    )
}