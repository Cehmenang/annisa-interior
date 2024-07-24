import Carousel from "./Carousel"
import HeroTitle from "./HeroTitle"

export default function HeroImage(){
    const images = [
        { url: '/img/hero.jpg' },
        { url: '/img/hero2.jpg' },
        { url: '/img/hero3.jpg' },
    ]
    return(
            <div className="hero w-full md:flex md:pt-[130px] pt-[60px] gap-x-12 grid grid-rows-2">
                <HeroTitle />
                <Carousel images={images}/>
            </div>
    )
}