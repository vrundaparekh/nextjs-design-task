'use client'; 

import Image from 'next/image';
import { Inter,Barlow_Condensed } from 'next/font/google';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'; 


const inter = Inter({
  subsets: ['latin'],
  weight: ['400'], 
});
const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500'],
});
export default function BookingPage() {
  return (
<div className={`${barlow.className} w-full min-h-screen bg-[#F5F5F5] flex flex-col`}> 
    <Header/>
    <Main/>
    <Footer/> 
</div>
  );
}