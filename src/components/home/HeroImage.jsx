import Image from "next/image"

export default function HeroImage(){
    return(
       <div className="hero border-2 border-dark w-full">
            <Image src={'./img/hero.jpg'} layout="full"/>
       </div>
    )
}