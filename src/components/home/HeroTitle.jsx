export default function HeroTitle(){
    return (
        <div className="w-[100%] flex flex-col justify-center">
            <h1 className="text-[72px] font-bold tracking-tight">Interior</h1>
            <h1 className="text-[30px] font-semibold mt-[-20px]">Home Design</h1>
            <p className="text-[16px] text-justify mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore, saepe ducimus, est libero perferendis corporis rerum, ab provident modi fugit dignissimos quo ad! Quos aliquam eos alias, quas earum recusandae dolore sint accusantium, in deserunt quibusdam blanditiis.</p>
            <div className="but flex gap-x-3 mt-5">
                <button className="bg-dark text-light px-8 py-2 rounded-full">Explore</button>
                <button className="bg-dark text-light px-8 py-2 rounded-full">Shop Now</button>
            </div>
        </div>
    )
}