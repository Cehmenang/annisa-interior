import LogoNav from "./LogoNav"
import MenuNav from "./MenuNav"

export default function Nav(){
    return (
        <nav className="w-full">
            <div className="navbar w-[90%] mx-auto flex justify-between">
                <LogoNav/>
                <MenuNav/>
            </div>
        </nav>
    )
}