/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const Cartoon = () => {
    return(
        <div className="absolute h-full w-full">
            <Image 
            src="https://res.cloudinary.com/dosbg5xdd/image/upload/v1741802998/ilustracion-al-estilo-anime-rosa_oagddx.png"
            alt=""
            fill
            className="object-cover"
            />
        </div>
    )
}


export default Cartoon;