import { Inter } from 'next/font/google';
import Image from 'next/image';     
import React, { useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'], 
});
export default function Footer() {
  return (
    <footer className="w-full bg-[#E6E6E6] pt-16 pb-8 px-10 mt-20">
      <div className={`${inter.className} max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12`}>
        
        <div className="flex flex-col gap-4">
          <div className="relative w-48 h-12">
            <Image 
              src="/footer_logo.png"
              alt="Jetour Logo" 
              fill 
              className="object-contain object-left" 
            />
          </div>
        </div>
        {/*QUICK LINKS */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-gray-900 text-[16px]">Quick Links</h4>
          <ul className="space-y-2 text-gray-600 text-[15px]">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="#" className="hover:text-black">Modules</a></li>
            <li><a href="#" className="hover:text-black">Test Drive</a></li>
            <li><a href="#" className="hover:text-black">Pre-Order</a></li>
            <li><a href="#" className="hover:text-black">Service</a></li>
            <li><a href="#" className="hover:text-black">Jetour Club</a></li>
          </ul>
        </div>

        {/* OPEN TIMES */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-gray-900 text-[16px]">Open Times</h4>
          <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
            <p>Saturday to Thursday from<br/><span className="font-semibold">09:00 AM to 09:00 PM</span></p>
            <p>Fridays from<br/><span className="font-semibold">04:00 PM to 09:00 PM</span></p>
          </div>
        </div>

        {/* ABOUT / CONTACT */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-gray-900 text-lg">About</h4>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center gap-3">
              <span className="text-xl"><Image src="/icons/call.png" width={14} height={14} alt="mail" className="" /></span> 
              <span className="font-medium">+974 40413636</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl"><Image src="/icons/sms.png" width={14} height={14} alt="mail" className="" /></span> 
              <span className="font-medium">info@jetourqatar.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR: COPYRIGHT & SOCIALS */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">
          © 2026 Jetour, Inc. All rights reserved.
        </p>
        
        {/* SOCIAL ICONS - Replace src with your exported filenames */}
        <div className="flex items-center gap-6 opacity-80">
          <a href='https://www.youtube.com/'><Image src="/icons/youtube.png" width={24} height={24} alt="Youtube" className="cursor-pointer hover:opacity-100" /></a>
          <a href='https://www.facebook.com/'><Image src="/icons/facebook.png" width={20} height={20} alt="Facebook" className="cursor-pointer hover:opacity-100" /></a>
          <a href='https://www.instagram.com/'><Image src="/icons/instagram.png" width={22} height={22} alt="Instagram" className="cursor-pointer hover:opacity-100" /></a>
          <a href='https://www.linkedin.com/'><Image src="/icons/linkedin.png" width={22} height={22} alt="Linkedin" className="cursor-pointer hover:opacity-100" /></a>
          <a href='https://www.tiktok.com/'><Image src="/icons/tiktok.png" width={22} height={22} alt="Tiktok" className="cursor-pointer hover:opacity-100" /></a>
        </div>
      </div>
    </footer>
  );
}