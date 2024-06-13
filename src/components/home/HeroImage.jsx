import Image from "next/image"
import Hero from "/img/hero.jpg"

export default function HeroImage(){
    return(
       <div className="hero border-2 border-dark w-full">
            <Image src={Hero} layout="full"/>
       </div>
    )
}