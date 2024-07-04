import LogoNav from "./LogoNav"
import MenuNav from "./MenuNav"

export default function Nav(){
    return (
        <nav className="w-full bg-third text-light absolute z-10 t-0 l-0">
            <div className="navbar w-[90%] mx-auto flex justify-between py-3 items-center">
                <LogoNav/>
                <MenuNav/>
            </div>
        </nav>
    )
}