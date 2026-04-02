'use client';
import { Barlow_Condensed, Inter } from 'next/font/google';

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

// 1. Fixed the Interface to match your bookingData state
interface SuccessProps {
  data: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    vehicleModel: string;
    vehicleTrim: string;
    servicePackage: string;
    appointmentDate: string | number;
    appointmentTime: string;
    [key: string]: string | number | undefined; 
  };
  onReset: () => void;
}

export default function SuccessStep({ data, onReset }: SuccessProps) {
  return (
    <div className={`${inter.className} flex-1 flex flex-col items-center py-10 animate-in zoom-in-95 duration-700`}>
      
      {/* 1. Success Icon with Pulse Effect */}
      <div className="w-20 h-20 bg-[#E6F9F0] text-[#22C55E] rounded-full flex items-center justify-center text-3xl mb-6 border-[4px] border-white shadow-lg animate-bounce">
        ✓
      </div>

      {/* 2. Main Heading - Barlow for that Bold Look */}
      <h1 className={`${barlow.className} text-[64px] font-bold text-[#2C2C2C] uppercase leading-[0.9] mb-4 tracking-tight text-center`}>
        Booking <br/> Confirmed
      </h1>
      
      <p className="text-[#A3A3A3] text-[16px] font-bold tracking-[0.2em] uppercase mb-12">
        Booking No: <span className="text-[#2C2C2C]">CS-2026-00456</span>
      </p>

      {/* 3. The Grid Layout - Split into 2 Columns */}
      <div className="w-full max-w-2xl grid grid-cols-2 gap-x-12 gap-y-10 border-t border-gray-100 pt-12 pb-12 relative">
        
        {/* Subtle Vertical Divider */}
        <div className="absolute left-1/2 top-12 bottom-12 w-[1px] bg-gray-50 hidden md:block"></div>

        {/* LEFT COLUMN: User & Service */}
        <div className="space-y-10">
          <div>
            <p className="text-[11px] font-bold text-[#2C2C2C] uppercase tracking-[0.2em] mb-4">Customer Information</p>
            <div className="text-[15px] space-y-2">
              <p><span className="font-bold text-[#2C2C2C]">Name:</span> <span className="text-[#545454]">{data.customerName || "N/A"}</span></p>
              <p className="truncate"><span className="font-bold text-[#2C2C2C]">Email:</span> <span className="text-[#545454]">{data.customerEmail || "N/A"}</span></p>
              <p><span className="font-bold text-[#2C2C2C]">Phone:</span> <span className="text-[#545454]">+974 {data.customerPhone || "N/A"}</span></p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold text-[#2C2C2C] uppercase tracking-[0.2em] mb-4">Service Details</p>
            <div className="text-[15px] space-y-2">
              <p><span className="font-bold text-[#2C2C2C]">Package:</span> <span className="text-[#545454]">{data.servicePackage || "5,000 KM"}</span></p>
              <p><span className="font-bold text-[#2C2C2C]">Type:</span> <span className="text-[#545454]">Major Service</span></p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Vehicle & Time */}
        <div className="space-y-10">
          <div>
            <p className="text-[11px] font-bold text-[#2C2C2C] uppercase tracking-[0.2em] mb-4">Vehicle Information</p>
            <div className="bg-[#F9F9F9] p-6 rounded-[24px] space-y-2 border border-gray-50">
              <p><span className="font-bold text-[#2C2C2C]">Model:</span> <span className="text-[#545454]">{data.vehicleModel}</span></p>
              <p><span className="font-bold text-[#2C2C2C]">Trim:</span> <span className="text-[#545454]">{data.vehicleTrim}</span></p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold text-[#2C2C2C] uppercase tracking-[0.2em] mb-4">Appointment Details</p>
            <div className="text-[15px] space-y-2">
              <p><span className="font-bold text-[#2C2C2C]">Center:</span> <span className="text-[#545454]">Al Waha - Doha</span></p>
              <p><span className="font-bold text-[#2C2C2C]">Date:</span> <span className="text-[#545454]">{data.appointmentDate} March 2026</span></p>
              <p><span className="font-bold text-[#2C2C2C]">Time:</span> <span className="text-[#545454]">{data.appointmentTime}</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Action Buttons */}
      <div className="flex gap-4 mt-4">
        <button 
          onClick={onReset} 
          className="px-10 py-4 border-2 border-[#F2F2F2] rounded-xl font-bold text-[#2C2C2C] hover:bg-gray-50 transition-all active:scale-95"
        >
          Back to Home
        </button>
        <button 
          className="bg-[#1A1A1A] text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-black transition-all active:scale-95"
        >
          Add To Calendar
        </button>
      </div>
    </div>
  );
}