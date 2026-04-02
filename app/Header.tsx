import Image from "next/image";
import React, { useState } from 'react';

export default function Header() {
  return (
    <header className="w-full">
        <nav className="relative w-full">
        <div className="min-h-[70px] md:h-18 bg-[#BDBDBD] flex items-center justify-between px-4 md:px-12 text-white">      
        <div className="relative w-40 h-8 md:w-64 md:h-12">
            <Image 
            src="/logo.png" 
            alt="Jetour and Al Waha Logo"
            fill
            className="object-contain object-left"
            priority
            />
        </div>

        <div className="hidden lg:flex gap-6 xl:gap-10 text-[16px] xl:text-[18px] font-medium leading-none  tracking-normal">
            <a href="#" className="hover:opacity-70 transition-opacity">Home</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Models</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Test Drive</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Pre-Order</a>
            <a href="#" className="border-b-2 border-white pb-1">Service</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>

        <div className="flex items-center gap-2 cursor-pointer bg-white/10 px-3 py-1 rounded-full md:bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span className="text-[18px] font-medium">Ar</span>
        </div>
        </div>
    </nav> 
  </header>
 );
}