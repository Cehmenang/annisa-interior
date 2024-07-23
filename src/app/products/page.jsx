export default function Products(){

    const products = [
        { name: 'Wallpaper' },
        { name: 'Curtain' },
        { name: 'Vinyl' },
        { name: 'Karpet' },
        { name: 'Sandblast' },
        { name: 'Kacafilm' },
        { name: 'Roller Blinds' },
    ]

    const showProductMenus = products.map((product, index)=>{
        return <button key={index} className="px-4 border-[2px] border-dark rounded-2xl md:w-[140px] text-[14px]">{product.name}</button> 
    })

    return (
        <>
        <div className="base pt-20">
            <h1 className="text-[40px] font-bold text-center md:text-left">Products</h1>
        </div>
        <div className="product-menu flex gap-x-3 w-full px-auto flex-wrap justify-center md:justify-normal gap-y-2 md:gap-y-0">
            {showProductMenus}
        </div>
        </>
    )
}