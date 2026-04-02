'use client';
import { useState } from 'react';
import IdentificationStep from './IdentificationStep'; 
import { Inter, Barlow_Condensed } from 'next/font/google';
import VehicleStep from './VehicleStep';
import PackageStep from './PackageStep';
import LocationStep from './LocationStep';
import DateTimeStep from './DateTimeStep';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['500'] });

export default function Main() {
  const [step, setStep] = useState(1);

  return (
    <div className="mx-6 mb-10 bg-white flex flex-col md:flex-row min-h-[850px] overflow-hidden rounded-b-[40px] shadow-2xl">
      
      {/* SIDEBAR SECTION */}
      <aside className="w-full md:w-[30%] bg-[#F7F7F7] p-12 border-r border-gray-100">
        <div className="relative space-y-12">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[1.5px] bg-[#D1D5DB]"></div>
          
          {/* Step 1: Identification */}
          <div className={`flex gap-6 relative z-10 ${step >= 1 ? 'opacity-100' : 'opacity-40'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 
              ${step === 1 ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]' : step > 1 ? 'bg-white text-black border-black' : 'bg-white text-gray-400'}`}>
              {step > 1 ? '✓' : '1'}
            </div>
            <div className={inter.className}>
              <h3 className={`font-bold text-[18px] ${step === 1 ? 'text-[#2C2C2C]' : 'text-gray-400'}`}>Identification</h3>
              <p className="text-[14px] text-[#545454] leading-tight mt-1">Customer information capture.</p>
            </div>
          </div>

          {/* Step 2: Vehicle */}
          <div className={`flex gap-6 relative z-10 ${step >= 2 ? 'opacity-100' : 'opacity-40'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 
              ${step === 2 ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]' : step > 2 ? 'bg-white text-black border-black' : 'bg-white text-gray-400'}`}>
              {step > 2 ? '✓' : '2'}
            </div>
            <div className={inter.className}>
              <h3 className={`font-bold text-[18px] ${step === 2 ? 'text-[#2C2C2C]' : 'text-gray-400'}`}>Vehicle</h3>
              <p className="text-[14px] text-[#545454] leading-tight mt-1">Select your preferred car model.</p>
            </div>
          </div>

          {/* Step 3: Package */}
          <div className={`flex gap-6 relative z-10 ${step >= 3 ? 'opacity-100' : 'opacity-40'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 
              ${step === 3 ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]' : step > 3 ? 'bg-white text-black border-black' : 'bg-white text-gray-400'}`}>
              {step > 3 ? '✓' : '3'}
            </div>
            <div className={inter.className}>
              <h3 className={`font-bold text-[18px] ${step === 3 ? 'text-[#2C2C2C]' : 'text-gray-400'}`}>Package</h3>
              <p className="text-[14px] text-[#545454] leading-tight mt-1">Select suitable service package.</p>
            </div>
          </div>

          {/* Step 4: Location */}
          <div className={`flex gap-6 relative z-10 ${step >= 4 ? 'opacity-100' : 'opacity-40'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 
              ${step === 4 ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]' : step > 4 ? 'bg-white text-black border-black' : 'bg-white text-gray-400'}`}>
              {step > 4 ? '✓' : '4'}
            </div>
            <div className={inter.className}>
              <h3 className={`font-bold text-[18px] ${step === 4 ? 'text-[#2C2C2C]' : 'text-gray-400'}`}>Location</h3>
              <p className="text-[14px] text-[#545454] leading-tight mt-1">Select your preferred Service Center Location.</p>
            </div>
          </div>

          {/* Step 5: Date & Time */}
          <div className={`flex gap-6 relative z-10 ${step >= 5 ? 'opacity-100' : 'opacity-40'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 
              ${step === 5 ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]' : 'bg-white text-gray-400'}`}>
              5
            </div>
            <div className={inter.className}>
              <h3 className={`font-bold text-[18px] ${step === 5 ? 'text-[#2C2C2C]' : 'text-gray-400'}`}>Date & Time</h3>
              <p className="text-[14px] text-[#545454] leading-tight mt-1">Select your preferred Date & Time.</p>
            </div>
          </div>
        </div>
      </aside>

      {/* CONTENT SECTION */}
      <section className="flex-1 p-16 bg-white overflow-y-auto">
        {step === 1 && <IdentificationStep onNext={() => setStep(2)} />}
        {step === 2 && <VehicleStep onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <PackageStep onNext={() => setStep(4)} onBack={() => setStep(2)} />}
        {step === 4 && <LocationStep onNext={() => setStep(5)} onBack={() => setStep(3)} />}
        {step === 5 && <DateTimeStep onNext={() => setStep(6)} onBack={() => setStep(4)} />}
      </section>
    </div>
  );
}