export default function HeroTitle(){
    return (
        <div className="w-[100%] flex flex-col justify-center row-start-2 row-end-[-1] pt-[20px] md:pt-[0px]">
            <h1 className="text-[48px] text-center md:text-left md:text-[68px] font-bold tracking-tight text-dark">Interior Design</h1>
            <h1 className="text-[20px] text-center md:text-left md:text-[26px] font-semibold mt-[-10px] md:mt-[-20px] text-third">We design for your space.</h1>
            <p className="text-[14px] text-justify mt-2 text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore, saepe ducimus, est libero perferendis corporis rerum, ab provident modi fugit dignissimos quo ad! Quos aliquam eos alias, quas earum recusandae dolore sint accusantium, in deserunt quibusdam blanditiis.</p>
            <div className="but hidden md:flex gap-x-3 mt-5">
                <button className="bg-third text-light px-8 py-2 rounded-full">Explore</button>
                <button className="bg-third text-light px-8 py-2 rounded-full">Shop Now</button>
            </div>
        </div>
    )
}