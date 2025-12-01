"use client"

import navConfig, { LinksType } from "@/config/navConfig";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import NavLink from "./navLink";
import { listItemVariants, listVariants,  } from "@/data/variants";
import { CVIcon, GithubIcon, LinkedinIcon, MenuIcon, XIcon } from "@/components/Accordion/icons";



export const Navbar: React.FC = () => {

    const [open, setOpen] = useState(false);

    const handleNavClick = () => {
        setOpen(false)
    };


    return (
        <nav className="h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-black text-white border-b border-gray-800">
            {/* LOGO */}
            <Link 
                href="/" 
                className="flex-shrink-0 flex items-center gap-2 group hover:opacity-80 transition-opacity"
            >
                <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                    <span className="text-black font-bold text-base">Igna Makes</span>
                </div>
                <span className="font-serif text-lg hidden sm:inline" style={{fontFamily: 'Javanese Text'}}>
                    Thinks
                </span>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-8">
                {navConfig.links.map((link: LinksType) => (
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>

            {/* DESKTOP SOCIAL LINKS */}
            <div className="hidden md:flex items-center gap-4">
                <Link
                href="https://github.com/Ignacia22"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors p-2"
                aria-label="Github"
                >
                    <GithubIcon />
                </Link>

                <Link
                href="https://www.linkedin.com/in/maria-ignacia-fernandez-p/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors p-2"
                aria-label="Linkedin"
                >
                    <LinkedinIcon />
                </Link>

                <Link
                href="https://docs.google.com/document/d/1wQ0L2itT11LmYLANaPI6r10DeKK4hWmD/edit?usp=sharing&ouid=110807804075749061967&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors p-2"
                aria-label="CV"
                >
                    <CVIcon />
                </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button 
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden z-50 p-2 hover:bg-gray-900 rounded transition-colors text-white"
            >
                {open ? <XIcon /> : <MenuIcon/>}
            </button>

            {/* MOBILE MENU */}
            {open && (
                <motion.div
                variants={listVariants}
                initial="closed"
                animate="opened"
                className="absolute top-24 left-0 w-full bg-black border-b border-gray-800 flex flex-col items-center justify-start gap-0 z-40 md:hidden"
                >
                    {navConfig.links.map((link) => (
                        <motion.div
                        className="w-full border-b border-gray-800 last:border-b-0"
                        variants={listItemVariants}
                        key={link.title}
                        >
                            <Link
                            href={link.url}
                            className="block px-4 py-4 text-center hover:bg-gray-900 transition-colors text-white"
                            >
                                {link.title}
                            </Link>
                        </motion.div>
                    ))}

                    <div className="w-full flex items-center justify-center gap-6 py-4 border-t border-gray-800">
                        <Link
                        href="https://github.com/Ignacia22"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleNavClick}
                        className="text-white hover:text-gray-400 transition-colors"
                        >
                            <GithubIcon/>
                        </Link>

                        <Link
                        href="https://www.linkedin.com/in/maria-ignacia-fernandez-p/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleNavClick}
                        className="text-white hover:text-gray-400 transition-colors"
                        >
                            <LinkedinIcon/>
                        </Link>

                        <Link
                        href="https://docs.google.com/document/d/1wQ0L2itT11LmYLANaPI6r10DeKK4hWmD/edit?usp=sharing&ouid=110807804075749061967&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleNavClick}
                        className="text-white hover:text-gray-400 transition-colors"
                        >
                            <CVIcon/>
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}
