'use client'

import { type LinksType } from "@/config/navConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({link}:{link: LinksType}) => {
    const pathName = usePathname()
    const isActive = pathName === link.url

    return (
        <Link 
            href={link.url} 
            className={`
                px-3 py-2 rounded text-sm font-medium transition-all duration-300 uppercase
                ${isActive 
                    ? "bg-white text-black font-semibold" 
                    : "text-white hover:text-gray-300 border-b-2 border-transparent hover:border-white"
                }
            `}
            style={{fontFamily: 'Open Sans'}}
        >
            {link.title}
        </Link>
    )
}

export default NavLink;