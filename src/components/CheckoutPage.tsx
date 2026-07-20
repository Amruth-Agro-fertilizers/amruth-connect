import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Leaf, MapPin, User, Store, Truck, Banknote, ShoppingCart, ArrowRight } from 'lucide-react';
import ProfileSettingsModal from './ProfileSettingsModal';

import product1Image from '../assets/images/regenerated_image_1781068049533.jpg';
import product2Image from '../assets/images/regenerated_image_1781068051813.jpg';

interface CheckoutPageProps {
  onBack: () => void;
}

export default function CheckoutPage({ onBack }: CheckoutPageProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col font-sans">
      {/* Top Navigation */}
      <nav className="bg-[#18593A] px-6 lg:px-8 py-4 flex items-center justify-between text-white sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
          <Leaf className="w-6 h-6 text-emerald-400" />
          <span className="text-xl font-bold tracking-tight">
            AMRUTH <span className="font-medium text-emerald-100">Connect</span>
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <span className="hidden sm:inline-block">EN | ಕನ್ನಡ</span>
          <div 
            onClick={() => setIsProfileOpen(true)}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 border-2 border-white/20 transition-all shadow-sm"
          >
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </nav>

      <ProfileSettingsModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 mb-10">
        <div className="flex items-center gap-3 mb-8 cursor-pointer w-fit group" onClick={onBack}>
          <ArrowLeft className="w-6 h-6 text-gray-900 group-hover:-translate-x-1 transition-transform" />
          <h1 className="text-2xl md:text-[32px] font-extrabold text-gray-900 tracking-tight">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column (Forms) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Dealer Selection */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Store className="w-6 h-6 text-[#18593A]" />
                <h2 className="text-xl font-bold text-gray-900">Select Nearest Dealer</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Active Dealer */}
                <div className="bg-[#18593A] rounded-xl p-5 text-white relative cursor-pointer border-2 border-[#18593A] shadow-md shadow-emerald-900/10 hover:-translate-y-0.5 transition-transform flex flex-col justify-between h-full">
                  <div>
                    <CheckCircle2 className="absolute top-4 right-4 w-6 h-6 text-emerald-300" />
                    <h3 className="font-bold text-lg mb-1 pr-8">Kisan Agro Center</h3>
                    <p className="text-emerald-50 text-sm mb-1 leading-relaxed">#45, APMC Yard, Yeshwanthpur<br/>Bengaluru - 560022</p>
                  </div>
                  <p className="text-emerald-100 text-sm font-bold flex items-center gap-1.5 mt-4 pt-4 border-t border-emerald-800">
                    <Truck className="w-4 h-4"/> Delivery in 1-2 days
                  </p>
                </div>

                {/* Inactive Dealer */}
                <div className="bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-emerald-200 cursor-pointer transition-colors hover:bg-gray-50/50 flex flex-col justify-between h-full relative group">
                  <div>
                    <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-emerald-300 transition-colors"></div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 pr-8">Green Earth Fertilizers</h3>
                    <p className="text-gray-500 text-sm mb-1 leading-relaxed">Main Road, Nelamangala<br/>Bengaluru Rural - 562123</p>
                  </div>
                  <p className="text-gray-600 text-sm font-semibold flex items-center gap-1.5 mt-4 pt-4 border-t border-gray-100">
                    <Truck className="w-4 h-4"/> Delivery in 2-3 days
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-2 text-[#18593A] font-bold text-sm mt-6 hover:text-[#0a3821] transition-colors py-2 px-1">
                <MapPin className="w-4 h-4" /> Use current location to find more dealers
              </button>
            </motion.section>

            {/* Delivery Details */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="w-6 h-6 text-[#18593A]" />
                <h2 className="text-xl font-bold text-gray-900">Delivery Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Full Name</label>
                  <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+91" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all bg-gray-50" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-900 mb-2">Land Survey Number (Optional)</label>
                  <input type="text" placeholder="E.g., Sy. No. 45/2" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all bg-gray-50" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-900 mb-2">Delivery Address</label>
                  <textarea rows={4} placeholder="Enter complete delivery address" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all bg-gray-50 resize-none"></textarea>
                </div>
              </div>
            </motion.section>

            {/* Payment Method */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Banknote className="w-6 h-6 text-[#18593A]" />
                <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5 border-2 border-emerald-200 relative cursor-pointer hover:shadow-md transition-shadow">
                <CheckCircle2 className="absolute top-1/2 -translate-y-1/2 right-5 w-6 h-6 text-[#18593A]" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#18593A] shadow-[0_2px_10px_rgb(0,0,0,0.04)]">
                    <Banknote className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Cash on Delivery</h3>
                    <p className="text-[13px] text-gray-600 font-medium">Pay the dealer when your order arrives.</p>
                  </div>
                </div>
              </div>
            </motion.section>
            
          </div>

          {/* Right Column (Order Summary) */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] sticky top-24">
              <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
                <ShoppingCart className="w-6 h-6 text-[#18593A]" />
                <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-tight">
                  Order Summary
                </h3>
              </div>
              
              <div className="space-y-5 mb-8">
                {/* Item 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-50/50 rounded-xl flex items-center justify-center p-2 shrink-0 border border-gray-100 shadow-sm">
                    <img src={product1Image} className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm" alt="Product" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-[15px] mb-0.5">AMRUTH BioBoost N</h4>
                    <p className="text-xs text-gray-500 font-semibold">Qty: 2 x 1L</p>
                  </div>
                  <div className="font-bold text-gray-900 text-base shrink-0">₹900</div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-50/50 rounded-xl flex items-center justify-center p-2 shrink-0 border border-gray-100 shadow-sm">
                    <img src={product2Image} className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm" alt="Product" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-[15px] mb-0.5">AMRUTH Soil Vital</h4>
                    <p className="text-xs text-gray-500 font-semibold">Qty: 1 x 5Kg</p>
                  </div>
                  <div className="font-bold text-gray-900 text-base shrink-0">₹650</div>
                </div>
              </div>

              <div className="space-y-4 mb-8 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center text-[15px]">
                  <span className="text-gray-500 font-bold">Subtotal</span>
                  <span className="font-bold text-gray-900">₹1,550</span>
                </div>
                <div className="flex justify-between items-center text-[15px]">
                  <span className="text-gray-500 font-bold">Delivery Fee</span>
                  <span className="font-bold text-emerald-600">Free</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8 pt-6 border-t-2 border-gray-100">
                 <span className="text-xl font-extrabold text-gray-900">Total</span>
                 <span className="text-3xl font-extrabold text-[#18593A] tracking-tight">₹1,550</span>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-[#18593A] shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:-translate-y-1 text-white font-bold rounded-xl hover:bg-[#114b30] transition-all text-[15px]">
                Place Order <ArrowRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#eef2f0] border-t border-gray-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-[#18593A]" />
              <span className="text-lg font-bold text-[#18593A] tracking-tight">AMRUTH Connect</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Wisdom of tradition, precision of<br/>modern.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Products</h4>
            <div className="flex flex-col space-y-3 text-sm text-gray-600">
              <a href="#" className="hover:text-[#18593A] hover:font-medium transition-all">Find Dealer</a>
              <a href="#" className="hover:text-[#18593A] hover:font-medium transition-all">Soil Testing</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Company</h4>
            <div className="flex flex-col space-y-3 text-sm text-gray-600">
              <a href="#" className="hover:text-[#18593A] hover:font-medium transition-all">About Us</a>
              <a href="#" className="hover:text-[#18593A] hover:font-medium transition-all">Privacy Policy</a>
              <a href="#" className="hover:text-[#18593A] hover:font-medium transition-all">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-xs text-gray-500 font-medium">
          <div>AMRUTH Connect</div>
          <div>© 2024 AMRUTH Connect. Traditional Wisdom, Modern Precision.</div>
        </div>
      </footer>
    </div>
  );
}
