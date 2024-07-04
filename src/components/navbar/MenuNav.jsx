import Link from "next/link"

const menus = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/products', label: 'Products' },
    { link: '/projects', label: 'Projects' },
    { link: '/contact', label: 'Contact' },
]

export default function MenuNav(){
    const showMenu = menus.map((menu, index)=>{
        return <Link href={menu.link} key={index+1} className="">{menu.label}</Link>
    })

    return(
        <div className="list-menu flex gap-x-6">{showMenu}</div>
    )
}