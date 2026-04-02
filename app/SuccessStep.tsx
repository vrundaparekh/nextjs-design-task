'use client';
import { Barlow_Condensed, Inter } from 'next/font/google';
import Image from 'next/image';

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function SuccessStep({ onReset }: { onReset: () => void }) {
  return (
    <div className={`${inter.className} flex-1 flex flex-col items-center justify-center py-10 animate-in zoom-in-95 duration-700`}>
      
      {/* Success Icon */}
      <div className="w-24 h-24 bg-[#E6F9F0] text-[#22C55E] rounded-full flex items-center justify-center text-4xl mb-8 border-[6px] border-white shadow-xl">
        ✓
      </div>

      {/* Main Title */}
      <h1 className={`${barlow.className} text-[64px] font-bold text-[#2C2C2C] uppercase leading-none mb-3 tracking-tight`}>
        Booking Confirmed
      </h1>
      <p className="text-[#A3A3A3] text-[18px] font-bold tracking-widest uppercase mb-12">
        Booking No: <span className="text-[#2C2C2C]">CS-2026-00456</span>
      </p>

      {/* SUMMARY GRID - PIXEL PERFECT DETAILS */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16 border-t border-b border-gray-100 py-12 mb-12 relative">
        {/* Vertical Divider for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-[1px] bg-gray-100"></div>

        {/* LEFT COLUMN */}
        <div className="space-y-8">
          <div>
            <p className="text-[12px] font-bold text-[#2C2C2C] uppercase tracking-[0.2em] mb-3">Customer Information</p>
            <div className="text-[15px] text-[#545454] space-y-1">
              <p><span className="font-bold text-[#2C2C2C]">Name:</span> Abdullah Mohamed</p>
              <p><span className="font-bold text-[#2C2C2C]">Email Address:</span> Abdullah.Mohamed@gmail.com</p>
              <p><span className="font-bold text-[#2C2C2C]">Phone Number:</span> +974 5XXX XXX4</p>
            </div>
          </div>
          <div>
            <p className="text-[12px] font-bold text-[#2C2C2C] uppercase tracking-[0.2em] mb-3">Service Details</p>
            <div className="text-[15px] text-[#545454] space-y-1">
              <p><span className="font-bold text-[#2C2C2C]">Service Package:</span> 5,000 KM</p>
              <p><span className="font-bold text-[#2C2C2C]">Estimated Duration:</span> 1.5 Hours</p>
              <p><span className="font-bold text-[#2C2C2C]">Type:</span> Major Service</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          <div>
            <p className="text-[12px] font-bold text-[#2C2C2C] uppercase tracking-[0.2em] mb-3">Vehicle Information</p>
            <div className="flex items-center gap-4 bg-[#F9F9F9] p-3 rounded-2xl border border-gray-50">
              <div className="relative w-16 h-10">
                <Image src="/cars/t2-thumb.png" alt="Car" fill className="object-contain" />
              </div>
              <div className="text-[14px]">
                <p><span className="font-bold text-[#2C2C2C]">Model:</span> Jetour T2</p>
                <p><span className="font-bold text-[#2C2C2C]">Trim:</span> i-DM</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[12px] font-bold text-[#2C2C2C] uppercase tracking-[0.2em] mb-3">Appointment Details</p>
            <div className="text-[15px] text-[#545454] space-y-1">
              <p><span className="font-bold text-[#2C2C2C]">Service Center:</span> Al Waha - Doha</p>
              <p><span className="font-bold text-[#2C2C2C]">Date:</span>