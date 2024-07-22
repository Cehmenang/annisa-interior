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
        return <button key={index} className="px-3 border-[1px] border-dark rounded-2xl">{product.name}</button> 
    })

    return (
        <>
        <div className="base pt-20">
            <h1 className="text-[40px] font-bold">Products</h1>
        </div>
        <div className="product-menu flex gap-x-3">
            {showProductMenus}
        </div>
        </>
    )
}