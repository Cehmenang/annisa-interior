import Carousel from "./Carousel"

export default function HeroImage(){
    const images = [
        { url: '/img/hero.jpg' },
        { url: '/img/hero2.jpg' },
        { url: '/img/hero3.jpg' },
    ]
    return(
        <div className="outer-hero">
            <div className="hero border-2 border-dark w-full">
                <Carousel images={images}/>
            </div>
        </div>
    )
}