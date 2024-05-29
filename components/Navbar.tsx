import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Button from "./Button"
import { FaUserPlus } from "react-icons/fa6"
import { IoIosHome } from "react-icons/io"
import { IoMenu } from "react-icons/io5"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1920px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5 bg-[#d27e41] ">
        <Link href="/">
            <IoIosHome size={50} color="black"/>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="text-xl flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:text-teal-500">
                    {link.label}
                </Link>
            ))}
        </ul>
        <div className="lg:flex items-center justify-center hidden">
            <Button 
            type="button"
            title="Agendar"
            icon={<FaUserPlus size={20} color="black"/>}
            />
        </div>

        <IoMenu size={50} color="black" className="inline-block cursor-pointer lg:hidden"/> 
        {/*add menu button logic*/}

    </nav>
  )
}

export default Navbar