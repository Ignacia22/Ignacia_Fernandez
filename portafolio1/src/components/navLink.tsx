'use client'

import { type LinksType } from "@/config/navConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";



const NavLink = ({link}:{link: LinksType}) => {
    const pathName = usePathname()

    return (
        <Link 
        href={link.url} 
        className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`}
        >
            {link.title}
        </Link>
    )
}

export default NavLink;