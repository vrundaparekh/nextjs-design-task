'use client';
import { useState } from 'react';
import IdentificationStep from './IdentificationStep'; 
import { Inter, Barlow_Condensed } from 'next/font/google';
import VehicleStep from './VehicleStep';
import PackageStep from './PackageStep';
import LocationStep from './LocationStep';
import DateTimeStep from './DateTimeStep';
import SuccessStep from './SuccessStep';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['500'] });

export default function Main() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    vehicleModel: "Jetour T2",
    vehicleTrim: "Luxury",
    servicePackage: "",
    location: "",
    appointmentDate: "",
    appointmentTime: ""
  });

 const updateBooking = (newData: Partial<typeof bookingData>) => {
  setBookingData((prev) => ({ ...prev, ...newData }));
};

  return (
    <div className="mx-6 mb-10 bg-white flex flex-col md:flex-row min-h-[850px] overflow-hidden rounded-b-[40px] shadow-2xl">
      
      {/* SIDEBAR SECTION */}
      <aside className="w-full md:w-[30%] bg-[#F7F7F7] p-12 border-r border-gray-100">
        <div className="relative space-y-12">
          <div className="absolute left-[19px] top-2 bottom-2 w-[1.5px] bg-[#D1D5DB]"></div>
          
          {/* Step Indicators */}
          {[
            { id: 1, title: 'Identification', desc: 'Customer information capture.' },
            { id: 2, title: 'Vehicle', desc: 'Select your preferred car model.' },
            { id: 3, title: 'Package', desc: 'Select suitable service package.' },
            { id: 4, title: 'Location', desc: 'Select your preferred center.' },
            { id: 5, title: 'Date & Time', desc: 'Select your preferred slot.' }
          ].map((s) => (
            <div key={s.id} className={`flex gap-6 relative z-10 ${step >= s.id ? 'opacity-100' : 'opacity-40'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors
                ${step === s.id ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]' : step > s.id ? 'bg-white text-black border-black' : 'bg-white text-gray-400'}`}>
                {step > s.id ? '✓' : s.id}
              </div>
              <div className={inter.className}>
                <h3 className={`font-bold text-[18px] ${step === s.id ? 'text-[#2C2C2C]' : 'text-gray-400'}`}>{s.title}</h3>
                <p className="text-[14px] text-[#545454] leading-tight mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* CONTENT SECTION */}
      <section className="flex-1 p-16 bg-white overflow-y-auto">
        {step === 1 && (
          <IdentificationStep onNext={(data) => { updateBooking(data); setStep(2); }} />
        )}

        {step === 2 && (
          <VehicleStep 
            onNext={(model, trim) => { updateBooking({ vehicleModel: model, vehicleTrim: trim }); setStep(3); }} 
            onBack={() => setStep(1)} 
          />
        )}

        {step === 3 && (
          <PackageStep 
            onNext={(pkg) => { updateBooking({ servicePackage: pkg }); setStep(4); }} 
            onBack={() => setStep(2)} 
          />
        )}

        {step === 4 && (
          <LocationStep 
            onNext={(loc) => { updateBooking({ location: loc }); setStep(5); }} 
            onBack={() => setStep(3)} 
          />
        )}

        {step === 5 && (
          <DateTimeStep 
            onNext={(date, time) => { updateBooking({ appointmentDate: `${date}`, appointmentTime: time }); setStep(6); }}
            onBack={() => setStep(4)} 
          />
        )}

        {step === 6 && (
          <SuccessStep 
            data={bookingData} 
            onReset={() => {
              setStep(1);
              setBookingData({
                customerName: "", customerEmail: "", customerPhone: "",
                vehicleModel: "Jetour T2", vehicleTrim: "Luxury",
                servicePackage: "", location: "",
                appointmentDate: "", appointmentTime: ""
              });
            }} 
          />
        )}
      </section>
    </div>
  );
}