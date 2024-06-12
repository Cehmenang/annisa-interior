import Link from "next/link"

const menus = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
]

export default function MenuNav(){
    const showMenu = menus.map((menu, index)=>{
        return <Link href={menu.link} key={index+1}>{menu.label}</Link>
    })

    return(
        <div className="list-menu">{showMenu}</div>
    )
}