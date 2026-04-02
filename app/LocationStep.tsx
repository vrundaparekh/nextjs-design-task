'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Barlow_Condensed, Inter } from 'next/font/google';

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

const LOCATIONS = [
  { 
    id: 1, 
    name: 'Doha Main Service Center', 
    address: 'Doha Main Service Center', 
    subAddress: 'Qatar National Convention Center',
    coords: { top: '40%', left: '45%' }
  },
  { 
    id: 2, 
    name: 'West Bay Service Center', 
    address: 'West Bay Area, Doha, Qatar', 
    subAddress: 'Qatar National Convention Center',
    coords: { top: '30%', left: '70%' }
  },
  { 
    id: 3, 
    name: 'Al Rayyan Service Center', 
    address: 'Al Rayyan Road, Al Rayyan, Qatar', 
    subAddress: 'Qatar National Convention Center',
    coords: { top: '60%', left: '65%' }
  },
];

export default function LocationStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selectedLoc, setSelectedLoc] = useState(1);

  return (
    <div className={`${inter.className} w-full max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500`}>
      {/* Header */}
      <div className="mb-8">
        <p className="text-[#A3A3A3] text-lg font-medium mb-1">Step <span className="text-black font-bold">4</span> / 5</p>
        <h1 className={`${barlow.className} text-[56px] font-bold leading-none text-[#2C2C2C] uppercase tracking-tight`}>
          Select Service Center Location
        </h1>
        <p className="text-[#545454] text-lg mt-2">Select your preferred service location</p>
      </div>

      {/* INTERACTIVE MAP AREA */}
      <div className="relative w-full h-[400px] bg-[#F2F2F2] rounded-[40px] overflow-hidden mb-10 border border-gray-100 shadow-inner">
        {/* Replace with your map image */}
        <div className="absolute inset-0 opacity-60">
           <Image src="/map-bg.png" alt="Map" fill className="object-cover grayscale" />
        </div>

        {/* CUSTOM PINS */}
        {LOCATIONS.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setSelectedLoc(loc.id)}
            style={{ top: loc.coords.top, left: loc.coords.left }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              selectedLoc === loc.id ? 'scale-125 z-30' : 'scale-100 z-10'
            }`}
          >
            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-lg transition-colors ${
              selectedLoc === loc.id ? 'bg-[#2C2C2C] border-white text-white' : 'bg-white border-gray-200 text-black'
            }`}>
              <span className="text-lg">📍</span>
            </div>
            {selectedLoc === loc.id && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded whitespace-nowrap font-bold uppercase tracking-wider">
                {loc.name}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* LOCATION CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {LOCATIONS.map((loc) => (
          <div 
            key={loc.id}
            onClick={() => setSelectedLoc(loc.id)}
            className={`p-7 rounded-[32px] border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
              selectedLoc === loc.id 
              ? 'border-[#2C2C2C] bg-white shadow-xl translate-y-[-4px]' 
              : 'border-[#F2F2F2] bg-white hover:border-gray-300 text-gray-400'
            }`}
          >
            <div>
              <h4 className={`font-bold text-[18px] mb-4 leading-tight ${selectedLoc === loc.id ? 'text-[#2C2C2C]' : 'text-gray-400'}`}>
                {loc.name}
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-lg">📍</span>
                  <div className="text-[13px] leading-snug">
                    <p className={selectedLoc === loc.id ? 'text-[#545454]' : 'text-gray-300'}>{loc.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">🕒</span>
                  <div className="text-[13px] leading-snug">
                    <p className={selectedLoc === loc.id ? 'text-[#545454]' : 'text-gray-300'}>{loc.subAddress}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-8">
        <button 
          onClick={onBack} 
          className="text-[#2C2C2C] font-bold text-[16px] flex items-center gap-2 hover:opacity-70 transition-all"
        >
          <span className="text-xl">←</span> Back to Package Selection
        </button>
        <button 
          onClick={onNext}
          className="bg-[#1A1A1A] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-4 hover:bg-black shadow-xl transition-all active:scale-95"
        >
          Continue to Date & Time Selection <span>→</span>
        </button>
      </div>
    </div>
  );
}