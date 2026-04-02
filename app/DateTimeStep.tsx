'use client';
import { useState } from 'react';
import { Barlow_Condensed, Inter } from 'next/font/google';

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function DateTimeStep({ onNext, onBack }: { onNext: (date: number, time: string) => void; onBack: () => void }) {
  const [selectedDate, setSelectedDate] = useState(19);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  const timeSlots = [
    '08:00 AM', '10:00 AM', '09:00 AM', '10:30 AM',
    '08:30 AM', '11:00 AM', '09:30 AM'
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const calendarDays = [
    { day: 28, current: false }, { day: 29, current: false }, { day: 30, current: false },
    { day: 1, current: true }, { day: 2, current: true }, { day: 3, current: true }, { day: 4, current: true },
    { day: 5, current: true }, { day: 6, current: true }, { day: 7, current: true }, { day: 8, current: true },
    { day: 9, current: true }, { day: 10, current: true }, { day: 11, current: true },
    { day: 12, current: true }, { day: 13, current: false }, { day: 14, current: true }, { day: 15, current: true },
    { day: 16, current: true }, { day: 17, current: true }, { day: 18, current: true }, { day: 19, current: true },
    { day: 20, current: true }, { day: 21, current: false }, { day: 22, current: true }, { day: 23, current: false },
    { day: 24, current: true }, { day: 25, current: true }, { day: 26, current: true }, { day: 27, current: false },
    { day: 28, current: false }, { day: 29, current: true }, { day: 30, current: true }, { day: 31, current: true },
    { day: 1, current: false }
  ];

  return (
    <div className={`${inter.className} w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10`}>
      {/* Header */}
      <div className="mb-8">
        <p className="text-[#A3A3A3] text-lg font-medium mb-1">Step <span className="text-black font-bold">5</span> / 5</p>
        <h1 className={`${barlow.className} text-[56px] font-bold leading-none text-[#2C2C2C] uppercase tracking-tight`}>
          Schedule Your Service
        </h1>
        <p className="text-[#545454] text-lg mt-2">Select your preferred date and time</p>
      </div>

      <div className="space-y-10">
        {/* CALENDAR SECTION */}
        <div className="space-y-4">
          <p className="text-[#2C2C2C] font-bold text-[16px]">Select Date</p>
          <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8 px-4">
              <button className="text-xl hover:text-black transition-colors">‹</button>
              <h3 className="font-bold text-lg text-[#2C2C2C]">March 2026</h3>
              <button className="text-xl hover:text-black transition-colors">›</button>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-4">
              {days.map(d => (
                <div key={d} className="text-center text-[#A3A3A3] text-sm font-medium py-2">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((d, i) => (
                <button
                  key={i}
                  type="button"
                  disabled={!d.current}
                  onClick={() => setSelectedDate(d.day)}
                  className={`h-12 w-full rounded-xl flex items-center justify-center text-sm font-bold transition-all
                    ${!d.current ? 'text-[#D7D7D7] cursor-not-allowed opacity-40' : 
                      selectedDate === d.day ? 'bg-[#2C2C2C] text-white shadow-lg scale-110' : 'text-[#2C2C2C] hover:bg-gray-100'}`}
                >
                  {d.day}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TIME SLOTS SECTION */}
        <div className="space-y-4">
          <p className="text-[#2C2C2C] font-bold text-[16px]">Available Time Slots</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedTime(slot)}
                className={`py-4 px-6 rounded-xl border-2 font-bold text-sm transition-all
                  ${selectedTime === slot ? 'border-[#2C2C2C] bg-white text-[#2C2C2C] shadow-md' : 'border-[#F2F2F2] bg-white text-gray-300 hover:border-gray-200'}`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-8 mt-12">
        <button 
          type="button"
          onClick={onBack} 
          className="text-[#2C2C2C] font-bold flex items-center gap-2 hover:underline transition-all"
        >
          <span className="text-xl">←</span> Back to Location Selection
        </button>
        <button 
          type="button"
          onClick={() => onNext(selectedDate, selectedTime)}
          className={`${barlow.className} bg-[#1A1A1A] text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-black shadow-xl transition-all active:scale-95 uppercase tracking-wider`}
        >
          Submit Appointment
        </button>
      </div>
    </div>
  );
}