"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const menus = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/products', label: 'Products' },
    { link: '/projects', label: 'Projects' },
    { link: '/contact', label: 'Contact' },
]

export default function MenuNav(){
    const [click, isClicked] = useState(false)

    const showMenu = menus.map((menu, index)=>{
        if(click === true){ 
            return <Link href={menu.link} key={index+1} className="px-3 py-2 bg-third border-b-2 border-b-dark hover:bg-dark transition-all">{menu.label}</Link>
        } else{
            return <Link href={menu.link} key={index+1}>{menu.label}</Link>
        }
    })

    function menuList(){
        click === false ? isClicked(true) : true
        click === true ? isClicked(false) : true
        return true
    }

    return(
        <>
        <div className="list-menu gap-x-6 hidden md:flex">{showMenu}</div>
        <div className="flex md:hidden"><button onClick={menuList}><Image src={"/icon/ham.png"} width={24} height={20}/></button></div>
        { click === true ? <div className="list-menu md:hidden absolute top-[60px] left-0 flex flex-col w-full">
            {showMenu}
        </div> : true }
        
        </>
    )
}