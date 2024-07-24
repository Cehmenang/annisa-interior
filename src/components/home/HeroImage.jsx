import Carousel from "./Carousel"
import HeroTitle from "./HeroTitle"

export default function HeroImage(){
    const images = [
        { url: '/img/hero.jpg' },
        { url: '/img/hero2.jpg' },
        { url: '/img/hero3.jpg' },
    ]
    return(
            <div className="hero w-full md:flex pt-[130px] gap-x-12 grid grid-rows-2">
                <HeroTitle className="row-start-2 row-end-[-1]"/>
                <Carousel images={images} className="row-start-1 row-end-2"/>
            </div>
    )
}