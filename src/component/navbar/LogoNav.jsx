import Image from "next/image"
import Logo from "../../../public/img/Logo.png"
import Link from "next/link"

export default function LogoNav(){
    return(
        <Link className="logo-nav flex items-center gap-x-2" href={'/'}>
            <Image src={Logo} width={50} height={30} className="relative top-[-3px]"/>
            <h1 className="text-[24px] font-semibold">Annisa Interior</h1>
        </Link>
    )
}