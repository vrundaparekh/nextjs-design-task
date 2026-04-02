'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter, Barlow_Condensed } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '700'],
});

export default function IdentificationStep({ onNext }: { onNext: () => void }) {
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const canContinue = fullName.length > 2 && isVerified && file !== null;
    const handleOpenModal = () => {
        if (phone.length >= 8) { // Minimum Qatar phone length
        setIsModalOpen(true);
        } else {
        alert("Please enter a valid phone number first.");
        }
    };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className={`${inter.className} w-full max-w-2xl mx-auto`}>
      {/* Header Info */}
      <div className="mb-10">
        <p className="text-[#A3A3A3] text-lg mb-1">Step <span className="text-black font-bold">1</span> / 5</p>
        <h1 className={`${barlow.className} text-[56px] font-bold leading-none mb-3 tracking-tight text-[#2C2C2C]`}>
          Secure Start
        </h1>
        <p className="text-[#545454] text-lg">Verify your identity to begin your service booking</p>
      </div>

      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        {/* Input: Full Name */}
        <div className="space-y-3">
          <label className="block text-[16px] font-bold text-[#2C2C2C]">Full Name</label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full p-4 bg-white border border-[#E6E6E6] rounded-xl outline-none focus:border-[#2C2C2C] text-[#2C2C2C] placeholder:text-[#D7D7D7] transition-all"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Input: Email */}
        <div className="space-y-3">
          <label className="block text-[16px] font-bold text-[#2C2C2C]">Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-white border border-[#E6E6E6] rounded-xl outline-none focus:border-[#2C2C2C] text-[#2C2C2C] placeholder:text-[#D7D7D7] transition-all"
          />
        </div>

        {/* Input: Phone */}
        <div className="space-y-3">
          <label className="block text-[16px] font-bold text-[#2C2C2C]">Phone Number</label>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 px-5 border border-[#E6E6E6] rounded-xl bg-white text-[#D7D7D7] placeholder:text-[#D7D7D7]">+974</div>
            <input placeholder="55557514" type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}  className="flex-1 p-4 border border-[#E6E6E6] focus:border-[#2C2C2C] text-[#2C2C2C] placeholder:text-[#D7D7D7] rounded-xl outline-none" />
            
            {isVerified ? (
              <div className="bg-[#E6F9F0] text-[#22C55E] px-6 rounded-xl font-bold flex items-center gap-2 border border-[#DCF7E9] text-[14px]">
                ✓ Verified
              </div>
            ) : (
              <button 
                onClick={handleOpenModal}
                className={`bg-[#D9D9D9] text-[#A3A3A3] px-8 rounded-xl font-bold hover:bg-gray-300 transition-colors ${phone.length >= 8 ? 'bg-[#1A1A1A] text-white' : 'bg-[#D9D9D9] text-[#A3A3A3] cursor-not-allowed'}`}
              >
                Verify
              </button>
            )}
          </div>
        </div>

        {/* Upload Section */}
        <div className="space-y-4">
          <label className="block text-[16px] font-bold text-[#2C2C2C]">Upload Vehicle Registration</label>
          <div className="flex flex-col lg:flex-row gap-4">
            <label className="flex-[2] border-2 border-dashed border-[#E6E6E6] rounded-2xl p-10 bg-[#FAFAFA] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all">
              <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,.pdf" />
              <div className="w-12 h-12 bg-[#EEEEEE] rounded-full flex items-center justify-center mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" />
                </svg>
              </div>
              <p className="font-bold text-[16px] text-[#2C2C2C] text-center">Drop your Estimara here or click to upload</p>
              <p className="text-[14px] text-[#D7D7D7] mt-1">Supports JPG, PNG, PDF files up to 10MB</p>
            </label>

            <div className="flex-1 bg-[#F1F6FD] rounded-2xl p-4 flex flex-col items-center border border-[#E1EAF7]">
              <div className="flex items-center gap-2 self-start mb-3">
                <div className="w-5 h-5 rounded-full border border-[#545454] flex items-center justify-center text-[#545454] font-bold">!</div>
                <span className="text-[12px] font-bold text-[#545454] uppercase">Estimara Example</span>
              </div>
              <div className="relative w-full h-32 bg-white rounded-lg overflow-hidden shadow-sm">
                <Image src="/example.png" alt="Example" fill className="object-contain p-2" />
              </div>
            </div>
          </div>
        </div>

        {/* UPLOADED FILE PREVIEW */}
        {file && (
          <div className="mt-4 p-4 bg-white border border-[#E6E6E6] rounded-xl flex items-center justify-between shadow-sm animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-xl">📄</div>
              <div>
                <p className="text-sm font-bold text-[#2C2C2C]">{file.name}</p>
                <p className="text-[12px] text-[#22C55E] font-medium">Uploaded ✓</p>
              </div>
            </div>
            <button onClick={() => setFile(null)} className="text-[#D7D7D7] hover:text-red-500 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </button>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-10 flex justify-end">
          <button 
            disabled={!canContinue}
            onClick={onNext}
            className={`${barlow.className} px-10 py-4 rounded-xl font-bold flex items-center gap-4 transition-all
              ${canContinue ? 'bg-[#1A1A1A] text-white hover:bg-black' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
          >
            Continue to Vehicle Selection <span>→</span>
          </button>
        </div>
      </form>

      <OtpModal 
        isOpen={isModalOpen} 
        phoneNumber={phone} 
        
        onClose={() => setIsModalOpen(false)} 
        onVerify={() => {
          setIsVerified(true);
          setIsModalOpen(false);
          
        
        }} 
      />
    </div>
  );
}
function OtpModal({ isOpen, onClose, onVerify, phoneNumber }: { isOpen: boolean; onClose: () => void; onVerify: (code: string) => void; phoneNumber: string }) {
  const [code, setCode] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const [timeLeft, setTimeLeft] = useState(119);

  // TIMER LOGIC
  useEffect(() => {
    if (!isOpen || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [isOpen, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `0${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!isOpen) return null;

  const handleVerify = () => {
    const fullCode = code.join('');
    if (fullCode === '5103') { // OUR FIXED OTP
      onVerify(fullCode);
      setError(false);
    } else {
      setError(true);
    }
  };

 return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[40px] p-12 max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute right-10 top-10 text-gray-400 hover:text-black">✕</button>
        
        <div className="text-center">
          <h2 className="text-[32px] font-bold text-[#2C2C2C] mb-4">Verification</h2>
          <p className="text-[#545454] text-[16px] leading-relaxed px-4">
            We’ve sent a message with an activation code to this phone number <span className="font-bold text-black">+974 {phoneNumber}</span>
          </p>

          <div className="flex justify-center gap-4 py-8">
            {code.map((digit, i) => (
              <input
                key={i} 
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '');
                  const newCode = [...code];
                  newCode[i] = val;
                  setCode(newCode);
                  if (val && e.target.nextSibling) (e.target.nextSibling as HTMLInputElement).focus();
                }}
                className={`w-16 h-20 text-center text-2xl font-bold border-2 rounded-2xl outline-none transition-all
                  ${error ? 'border-red-500 text-red-500 bg-red-50' : 'border-[#E6E6E6] bg-[#FAFAFA] focus:border-black focus:bg-white text-[#2C2C2C]'}`}
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm font-bold mb-4 animate-bounce">Incorrect code. Please try again</p>}
          
          <p className="text-[14px] text-gray-400 mb-8">
            If you didn’t receive the verification code in <span className="font-bold text-black">{formatTime(timeLeft)}</span> 
            <button className="ml-2 font-bold text-black underline hover:text-gray-600">Resend it</button>
          </p>

          <button 
            onClick={handleVerify}
            className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold text-[18px] hover:bg-black transition-all shadow-lg active:scale-[0.98]"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}