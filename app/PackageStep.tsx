'use client';
import { useState } from 'react';
import { Inter, Barlow_Condensed } from 'next/font/google';
import { title } from 'process';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['700'] });

const PACKAGES = [
  {
    id: 1,
    km: '5,000 KM',
    type: 'Minor',
    duration: '1.5 Hours',
    title:'Basic maintenance and inspection',
    features: ['Oil and filter change', 'Basic fluid check', 'Visual inspection'],
  },
  {
    id: 2,
    km: '10,000 KM',
    type: 'Major',
    duration: '3 Hours',
    title:'Comprehensive maintenance and service',
    features: ['Complete oil service', 'Filter replacements', 'Brake inspection', 'Battery check'],
  },
  {
    id: 3,
    km: '15,000 KM',
    type: 'Major',
    duration: '4.5 Hours',
    title:'Huge Comprehensive service',
    features: ['Complete maintenance package', 'Air filter replacement', 'Transmission service', 'Comprehensive diagnostics'],
  },
  {
    id: 4,
    km: '20,000 KM',
    type: 'Major',
    duration: '6 Hours',
    title:'Full comprehensive service',
    features: ['Full comprehensive service', 'All filter replacements', 'Spark plug check', 'System software update'],
  },
];

export default function PackageStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selectedPkg, setSelectedPkg] = useState(PACKAGES[0].id);

  return (
    <div className={`${inter.className} w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500`}>
      {/* Header */}
      <div className="mb-10">
        <p className="text-[#A3A3A3] text-lg font-medium mb-1">Step <span className="text-black font-bold">3</span> / 5</p>
        <h1 className={`${barlow.className} text-[56px] font-bold leading-none text-[#2C2C2C] uppercase tracking-tight`}>
          Select Service Package
        </h1>
        <p className="text-[#545454] text-lg mt-2">Select the service package that fits your needs</p>
      </div>

      {/* PACKAGE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => setSelectedPkg(pkg.id)}
            className={`relative p-8 rounded-[32px] border-2 cursor-pointer transition-all duration-300 flex flex-col h-full ${
              selectedPkg === pkg.id 
              ? 'border-[#2C2C2C] bg-white shadow-xl scale-[1.02]' 
              : 'border-[#F2F2F2] bg-[#F9F9F9] hover:border-gray-300'
            }`}
          >
            {/* Package Header */}
            <div className="flex justify-between items-start mb-6">
              <h3 className={`text-[24px] font-bold ${selectedPkg === pkg.id ? 'text-[#2C2C2C]' : 'text-gray-400'}`}>
                {pkg.km} Service
              </h3>
              <span className={`px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider ${
                pkg.type === 'Minor' 
                ? 'bg-[#FFF1F1] text-[#FF4D4D]' 
                : 'bg-[#F0FFF4] text-[#22C55E]'
              }`}>
                {pkg.type}
              </span>
            </div>
              <h5 className="text-[#2C2C2C] font-bold text-sm mb-4">{pkg.title}</h5>

            {/* Duration */}
            <p className="text-[#2C2C2C] font-bold text-sm mb-4">
              Estimated Duration: <span className="text-[#545454] font-medium">{pkg.duration}</span>
            </p>
            {/* Feature List */}
            <ul className="space-y-2 mb-6 flex-grow">
              {pkg.features.map((feat, i) => (
                <li key={i} className="text-[#545454] text-sm flex items-start gap-2">
                  <span className="text-gray-300">•</span> {feat}
                </li>
              ))}
            </ul>

            {/* Selection Indicator (Bottom Right) */}
            {selectedPkg === pkg.id && (
              <div className="absolute bottom-6 right-8 w-6 h-6 bg-[#2C2C2C] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FOOTER NAVIGATION */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-8">
        <button 
          onClick={onBack} 
          className="text-[#2C2C2C] font-bold text-[16px] flex items-center gap-2 hover:opacity-70 transition-all"
        >
          <span className="text-xl">←</span> Back to Vehicle Selection
        </button>
        <button 
          onClick={onNext}
          className="bg-[#1A1A1A] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-4 hover:bg-black shadow-xl transition-all active:scale-95"
        >
          Continue to Location Selection <span>→</span>
        </button>
      </div>
    </div>
  );
}