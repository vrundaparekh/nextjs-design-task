'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Barlow_Condensed, Inter } from 'next/font/google';

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

const CAR_DATA = [
  { id: 't2', name: 'Jetour T2', image: '/cars/t2.png', thumb: '/cars/t2.png' },
  { id: 'x70', name: 'Jetour X70 Plus', image: '/cars/x70.png', thumb: '/cars/x70.png' },
  { id: 'x90', name: 'Jetour X90 Plus', image: '/cars/x90.png', thumb: '/cars/x90.png' },
  { id: 't1', name: 'Jetour T1', image: '/cars/t1.png', thumb: '/cars/t1.png' },
  { id: 'x50', name: 'Jetour X50', image: '/cars/x50.png', thumb: '/cars/x50.png' },
  { id: 'x70fl', name: 'Jetour X70FL', image: '/cars/x70fl.png', thumb: '/cars/x70fl.png' },
  { id: 'dashing', name: 'Jetour Dashing', image: '/cars/dashing.png', thumb: '/cars/dashing.png' },
  { id: 'g700', name: 'Jetour G700', image: '/cars/g700.png', thumb: '/cars/g700.png' },
];

export default function VehicleStep({ onNext, onBack }: { onNext: (model: string, trim: string) => void;onBack: () => void }) {
  const [selectedCar, setSelectedCar] = useState(CAR_DATA[1]);
  const [selectedTrim, setSelectedTrim] = useState('Luxury');
  const handleNext = () => {
    const currentIndex = CAR_DATA.findIndex(car => car.id === selectedCar.id);
    const nextIndex = (currentIndex + 1) % CAR_DATA.length;
    setSelectedCar(CAR_DATA[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = CAR_DATA.findIndex(car => car.id === selectedCar.id);
    const prevIndex = (currentIndex - 1 + CAR_DATA.length) % CAR_DATA.length;
    setSelectedCar(CAR_DATA[prevIndex]);
  };

  return (
    <div className={`${inter.className} w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500`}>
      {/* Header Section */}
      <div className="mb-8">
        <p className="text-[#A3A3A3] text-lg font-medium mb-1">Step <span className="text-black font-bold">2</span> / 5</p>
        <h1 className={`${barlow.className} text-[56px] font-bold leading-none text-[#2C2C2C] uppercase tracking-tight`}>
          Select Your Vehicle
        </h1>
        <p className="text-[#545454] text-lg mt-2">Choose your vehicle model and trim</p>
      </div>

      {/* MAIN SELECTION DISPLAY */}
      <div className="bg-[#F9F9F9] rounded-[40px] p-10 mb-8 border border-gray-100 flex flex-col items-center relative">
        <p className="text-[#A3A3A3] font-bold text-xs uppercase tracking-[0.2em] mb-4">Select Vehicle Model</p>
        <h2 className="text-[32px] font-bold text-[#2C2C2C] mb-8">{selectedCar.name}</h2>

        {/* Big Car Image */}
        <div className="relative w-full h-[320px] mb-8 flex justify-center">
          <Image 
            src={selectedCar.image} 
            alt={selectedCar.name} 
            fill 
            className="object-contain transition-all duration-700 ease-in-out" 
            priority 
          />
          
          {/* Navigation Arrows */}
          <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all">‹</button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all">›</button>
        </div>

        {/* THUMBNAIL TRACKER */}
        <div className="flex gap-4 p-2 bg-white/50 rounded-2xl backdrop-blur-sm">
          {CAR_DATA.map((car) => (
            <button
              key={car.id}
              onClick={() => setSelectedCar(car)}
              className={`w-16 h-12 rounded-xl border-2 transition-all overflow-hidden p-1 ${
                selectedCar.id === car.id ? 'border-[#2C2C2C] bg-white shadow-lg' : 'border-transparent opacity-40 hover:opacity-100'
              }`}
            >
              <Image src={car.thumb} width={60} height={40} alt="thumb" className="object-contain w-full h-full" />
            </button>
          ))}
        </div>
      </div>

      {/* TRIM SELECTION GRID */}
      <div className="space-y-4 mb-12">
        <p className="text-[#2C2C2C] font-bold text-[16px] px-2">Select Vehicle Trim</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Luxury', 'Luxury Plus', 'i-DM'].map((trim) => (
            <div 
              key={trim}
              onClick={() => setSelectedTrim(trim)}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                selectedTrim === trim 
                ? 'border-[#2C2C2C] bg-white shadow-md' 
                : 'border-[#F2F2F2] bg-[#F9F9F9] text-gray-400 hover:border-gray-300'
              }`}
            >
              <h4 className={`font-bold text-[18px] mb-1 ${selectedTrim === trim ? 'text-[#2C2C2C]' : 'text-gray-400'}`}>
                {trim}
              </h4>
              <p className="text-[12px] text-[#545454] font-medium opacity-70 hover:text-[#2c2c2c]" >Horsepower | 100 km/h</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER NAVIGATION */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-8 mt-auto">
        <button 
          onClick={onBack} 
          className="text-[#2C2C2C] font-bold text-[16px] flex items-center gap-2 hover:opacity-70 transition-all"
        >
          <span className="text-xl">←</span> Back to Identification
        </button>
        <button 
          onClick={() => onNext(selectedCar.name, selectedTrim)}
          className="bg-[#1A1A1A] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-4 hover:bg-black shadow-xl transition-all active:scale-95"
        >
          Continue to Package Selection <span>→</span>
        </button>
      </div>
    </div>
  );
}