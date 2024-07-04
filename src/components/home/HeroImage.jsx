import Carousel from "./Carousel"
import HeroTitle from "./HeroTitle"

export default function HeroImage(){
    const images = [
        { url: '/img/hero.jpg' },
        { url: '/img/hero2.jpg' },
        { url: '/img/hero3.jpg' },
    ]
    return(
            <div className="hero w-full flex pt-[130px] gap-x-12">
                <HeroTitle/>
                <Carousel images={images}/>
            </div>
    )
}