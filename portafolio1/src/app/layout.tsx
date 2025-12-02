import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat', 
});

export const metadata: Metadata = {
  title: "Igna Makes — Desarrolladora Frontend & Diseñadora Web",
  description:
    "Portafolio de Ignacia Fernández, desarrolladora frontend y diseñadora web. Creo experiencias digitales con Next.js, React, TypeScript y Tailwind. Interfaces modernas, accesibles y centradas en el usuario.",
  keywords: [
    "Ignacia Fernández",
    "Igna Makes",
    "desarrolladora frontend",
    "frontend developer",
    "web developer",
    "diseño web",
    "react",
    "nextjs",
    "typescript",
    "portafolio"
  ],
  openGraph: {
  images: [
    {
      url: "https://res.cloudinary.com/dosbg5xdd/image/upload/v1764436008/WhatsApp_Image_2025-11-29_at_11.40.42_AM_guqqu2.jpg",
      width: 1200,
      height: 630,
      alt: "Portafolio de Ignacia Fernández",
    },
  ],
},

  alternates: {
    canonical: "https://ignacia-fernandez.vercel.app",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
