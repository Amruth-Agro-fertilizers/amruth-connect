import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Leaf, Phone } from 'lucide-react';

import heroImage from '../assets/images/regenerated_image_1781068345753.avif';

interface LoginPageProps {
  onBack: () => void;
  onSuccess: () => void;
}

export default function LoginPage({ onBack, onSuccess }: LoginPageProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setStep('otp');
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length > 3) {
      // Dummy success: navigate to onboarding
      onSuccess();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white flex"
    >
      {/* Left side: Banner */}
      <div className="hidden lg:flex w-1/2 relative bg-[#18593A] flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Farming landscape"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a3821] via-[#18593A]/80 to-[#18593A]/40"></div>
        </div>

        <div className="relative z-10 p-12 flex justify-between items-start w-full">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
            <Leaf className="w-8 h-8 text-emerald-400 drop-shadow-sm" />
            <span className="text-2xl font-bold text-white tracking-tight">
              AMRUTH <span className="font-medium text-emerald-100">Connect</span>
            </span>
          </div>
          {/* Custom SVG Logo matching Amruth Innovations */}
          <div className="bg-white px-5 py-2.5 rounded-[100%] shadow-lg relative flex flex-col items-center justify-center min-w-[140px] border-[3px] border-[#009A44]">
            <div className="flex items-end">
              <span className="text-red-600 font-serif italic text-2xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                <span className="text-3xl relative">
                   <Leaf className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#009A44]" />
                   A
                </span>
                mruth
              </span>
            </div>
            <span className="text-[#009A44] font-medium text-[9px] uppercase tracking-wider mt-0.5">Innovations for Agriculture</span>
          </div>
        </div>

        <div className="relative z-10 p-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.2] tracking-tight">
              Bridging the gap<br />
              between <span className="text-emerald-400">tradition</span> and <span className="text-emerald-400">technology</span>.
            </h1>
            <p className="text-emerald-50 text-lg leading-relaxed max-w-md">
              Join thousands of farmers across India experiencing better yields, deeper soil insights, and a greener tomorrow with AMRUTH Connect.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right side: Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 md:p-24 relative bg-gray-50/50">
        <button
          onClick={onBack}
          className="absolute top-8 left-8 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-[#18593A] hover:border-[#18593A] transition-all shadow-sm focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Welcome Back</h2>
            <p className="text-gray-500">Sign in to your AMRUTH Connect account</p>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8">
            {step === 'phone' ? (
              <motion.form
                key="phone-form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleSendOtp}
              >
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="absolute inset-y-0 left-12 flex items-center pointer-events-none text-gray-900 font-medium">
                      +91
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                      className="block w-full pl-24 pr-4 py-3.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] sm:text-sm transition-all"
                      placeholder="Enter your 10-digit number"
                      maxLength={10}
                      autoFocus
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={phoneNumber.length < 10}
                  className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#18593A] hover:bg-[#114b30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#18593A] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send OTP
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="otp-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleVerify}
              >
                <div className="mb-6 text-center">
                  <p className="text-sm text-gray-600">
                    Enter the 4-digit OTP sent to <span className="font-semibold text-gray-900">+91 {phoneNumber}</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => setStep('phone')}
                    className="text-xs font-semibold text-[#D97706] hover:text-[#B45309] mt-2 transition-colors"
                  >
                    Change Number
                  </button>
                </div>

                <div className="mb-8">
                  <label htmlFor="otp" className="sr-only">
                    One Time Password
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    className="block w-full px-4 py-4 border border-gray-200 rounded-xl leading-5 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] text-center text-2xl font-bold tracking-[0.5em] transition-all"
                    placeholder="••••"
                    maxLength={4}
                    autoFocus
                  />
                </div>

                <button
                  type="submit"
                  disabled={otp.length < 4}
                  className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] text-sm font-bold text-white bg-[#F59E0B] hover:bg-[#D97706] hover:shadow-[0_6px_20px_rgba(245,158,11,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F59E0B] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Verify & Proceed
                </button>
                
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500">
                    Didn't receive code? <button type="button" className="font-semibold text-[#18593A] hover:underline">Resend OTP</button>
                  </p>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
