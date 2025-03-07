import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 relative">
       <Image src="/anime.png" alt="" fill className="object-contain"/>
    </div>
    {/* TEXT CONTAINER */}
    <div className="h-1/2 flex flex-col gap-8 items-center justify-center">
    {/* TITLE */}
       <h1 className="text-4xl md:text-6xl font-bold">Vive tu la experiencia digital. Diseña conmigo</h1>
       {/* DESC */}
       <p className="md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod inventore vero quo ea cum et, in harum magnam, saepe fugit ipsam eveniet odit nihil beatae est at aperiam minima.
       </p>
       {/* BUTTONS */}
       <div className="flex gap-4">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Ve mis trabajos</button>
        <button className="p-4 rounded-lg ring-1 ring-black">Contactame</button>
       </div>
    </div>
    </div>
  );
}
