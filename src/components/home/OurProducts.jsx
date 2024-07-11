export default function OurProducts(){
    return (
        <section className="mt-[100px]">
            <h1 className="text-[50px] font-bold text-dark tracking-tight mb-2">Our Products</h1>
            <div className="main-products flex flex-col gap-y-10">

            <div className="material w-full flex gap-x-8 items-center">
                <div className="img-material h-[150px] w-[60%] bg-center" style={{backgroundImage: 'url("./img/hero.jpg")', backgroundSize: 'cover'}}></div>
                <div className="text-material w-[40%]">
                    <h1 className="text-[40px] font-bold tracking-tight">Provide Material</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis laborum perspiciatis similique eaque, mollitia aliquid recusandae nihil distinctio optio nostrum.</p>
                </div>
            </div>
            <div className="service w-full flex gap-x-8 items-center">
                <div className="text-service w-[40%]">
                    <h1 className="text-[40px] font-bold tracking-tight text-right">Installation Service</h1>
                    <p className="text-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis laborum perspiciatis similique eaque, mollitia aliquid recusandae nihil dist</p>
                </div>
                <div className="img-material h-[150px] w-[60%] bg-center" style={{backgroundImage: 'url("./img/hero.jpg")', backgroundSize: 'cover'}}></div>
            </div>

            </div>
        </section>
    )
}