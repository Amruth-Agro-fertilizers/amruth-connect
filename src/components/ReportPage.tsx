import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Leaf, User, MapPin, Phone, ShoppingCart, Info, TrendingUp, Beaker, Map, FileText, ChevronRight, Sprout, ShoppingBag, Plus, Minus } from 'lucide-react';
import ProfileSettingsModal from './ProfileSettingsModal';

import product1Image from '../assets/images/regenerated_image_1781068049533.jpg';
import product2Image from '../assets/images/regenerated_image_1781068051813.jpg';
import product3Image from '../assets/images/regenerated_image_1781068052697.jpg';

interface ReportPageProps {
  onBack: () => void;
  onCheckout: () => void;
}

export default function ReportPage({ onBack, onCheckout }: ReportPageProps) {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const addToCart = (id: number) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  const cartItemsCount = ((Object.values(cart) as number[]).reduce((a, b) => a + b, 0)) as number;

  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col font-sans">
      {/* Top Navigation */}
      <nav className="bg-[#18593A] px-6 lg:px-8 py-4 flex items-center justify-between text-white sticky top-0 z-40">
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
        <div className="mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-[40px] font-bold text-gray-900 mb-3 tracking-tight"
          >
            Soil & Crop Health Guide – Paddy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg md:text-xl font-medium tracking-wide"
          >
            Comprehensive soil analysis and expert recommendations for paddy cultivation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Soil Health Analysis */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-6">
                <Beaker className="w-6 h-6 text-[#18593A]" />
                <h2 className="text-2xl font-bold text-[#18593A] tracking-tight">Soil Health Analysis</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* pH */}
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                  <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-2">Soil pH</p>
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-3xl font-extrabold text-gray-900 leading-none">6.8</span>
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full inline-block">Healthy</div>
                </div>

                {/* Nitrogen (Low) */}
                <div className="bg-white p-5 rounded-xl border border-red-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500"></div>
                  <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-2">Nitrogen (N)</p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-3xl font-extrabold text-gray-900 leading-none">120</span>
                    <span className="text-sm font-semibold text-gray-500 mb-1">kg/ha</span>
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-600 px-2.5 py-1 rounded-full inline-block">Low</div>
                </div>

                {/* Phosphorus (Medium) */}
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-400"></div>
                  <div>
                    <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-2">Phosphorus (P)</p>
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-3xl font-extrabold text-gray-900 leading-none">22</span>
                      <span className="text-sm font-semibold text-gray-500 mb-1">kg/ha</span>
                    </div>
                  </div>
                  <div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full inline-block">Medium</div>
                  </div>
                </div>

                {/* Potassium */}
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] sm:col-span-1 md:col-span-1">
                  <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-2">Potassium (K)</p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-3xl font-extrabold text-gray-900 leading-none">180</span>
                    <span className="text-sm font-semibold text-gray-500 mb-1">kg/ha</span>
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full inline-block">Healthy</div>
                </div>

                {/* Organic Carbon (Low) */}
                <div className="bg-white p-5 rounded-xl border border-red-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] relative overflow-hidden sm:col-span-1 md:col-span-2">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500"></div>
                  <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-2">Organic Carbon</p>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-3xl font-extrabold text-gray-900 leading-none">0.4%</span>
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-600 px-2.5 py-1 rounded-full inline-block">Low</div>
                </div>
              </div>
            </motion.section>

            {/* Agronomist Summary */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <div className="flex items-center gap-3 mb-6">
                <Sprout className="w-6 h-6 text-[#18593A]" />
                <h2 className="text-2xl font-bold text-[#18593A] tracking-tight">Agronomist Summary</h2>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] text-gray-700 leading-relaxed text-[15px] md:text-base">
                <p className="mb-6">
                  The soil analysis indicates a slightly acidic pH (6.8) which is generally favorable for paddy cultivation. 
                  However, the critical macronutrient <span className="font-bold text-red-600">Nitrogen (N)</span> and <span className="font-bold text-red-600">Organic Carbon</span> levels are significantly lower 
                  than the recommended baseline for optimal yield in this region.
                </p>
                <p>
                  To address this deficiency without risking chemical burn or long-term soil degradation, we strongly recommend a 
                  targeted application of a nitrogen-fixing bio-fertilizer. Incorporating <span className="font-bold text-[#18593A]">AMRUTH BioBoost N</span> will 
                  help stabilize the nitrogen cycle and improve overall organic content in the topsoil before the 
                  tillering stage.
                </p>
              </div>
            </motion.section>

            {/* Recommended Products */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <div className="flex items-end justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#18593A] text-white p-1.5 rounded-full"><TrendingUp className="w-4 h-4" /></div>
                  <h2 className="text-2xl font-bold text-[#0a3821] tracking-tight">Recommended Products</h2>
                </div>
                <a href="#" className="hidden sm:flex items-center text-sm font-bold text-[#18593A] hover:text-[#0a3821] transition-colors">
                  View All <ChevronRight className="w-4 h-4 ml-0.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Product 1 */}
                 <div className="bg-white rounded-2xl border-2 border-emerald-500 shadow-xl shadow-emerald-900/5 overflow-hidden flex flex-col relative group">
                  <div className="absolute top-0 right-0 bg-[#18593A] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-bl-xl z-20">
                    Recommended
                  </div>
                  <div className="h-48 bg-gray-100/50 p-6 flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[#18593A]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <img src={product1Image} alt="Booster" className="h-[140px] w-auto object-contain mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-700 ease-out relative z-10" />
                  </div>
                  <div className="p-5 flex flex-col flex-1 border-t border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-1">AMRUTH BioBoost N</h3>
                    <p className="text-xs text-gray-500 mb-4 line-clamp-2">Enhances nitrogen fixation and improves crop yield.</p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xl font-bold text-emerald-600 tracking-tight">₹ 450</div>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">Rec. Qty: 3</span>
                      </div>
                      {!cart[1] ? (
                        <button 
                          onClick={() => addToCart(1)}
                          className="w-full flex items-center justify-center gap-2 bg-[#18593A] hover:bg-[#114b30] text-white font-bold py-3 rounded-xl transition-colors shadow-md active:scale-95"
                        >
                          <ShoppingCart className="w-4 h-4" /> Add to Cart
                        </button>
                      ) : (
                        <div className="flex items-center justify-between bg-emerald-50 rounded-xl p-1.5 border border-emerald-200">
                          <button 
                            onClick={() => removeFromCart(1)}
                            className="bg-white p-2 rounded-lg text-[#18593A] shadow-sm hover:bg-emerald-100 transition-colors active:scale-95"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold text-[#18593A] px-4">{cart[1]} in Cart</span>
                          <button 
                            onClick={() => addToCart(1)}
                            className="bg-[#18593A] p-2 rounded-lg text-white shadow-sm hover:bg-[#114b30] transition-colors active:scale-95"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden flex flex-col group hover:shadow-lg hover:border-emerald-200 transition-all">
                  <div className="h-48 bg-gray-100/50 p-6 flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[#18593A]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <img src={product2Image} alt="Soil Vital" className="h-[140px] w-auto object-contain mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-700 ease-out relative z-10" />
                  </div>
                  <div className="p-5 flex flex-col flex-1 border-t border-gray-50">
                    <h3 className="font-bold text-gray-900 mb-1">AMRUTH Soil Vital</h3>
                    <p className="text-xs text-gray-500 mb-4 line-clamp-2">Improves soil health and fertility for long-term productivity.</p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xl font-bold text-emerald-600 tracking-tight">₹ 650</div>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">Rec. Qty: 2</span>
                      </div>
                      {!cart[2] ? (
                        <button 
                          onClick={() => addToCart(2)}
                          className="w-full flex items-center justify-center gap-2 bg-[#18593A] hover:bg-[#114b30] text-white font-bold py-3 rounded-xl transition-colors shadow-md active:scale-95"
                        >
                          <ShoppingCart className="w-4 h-4" /> Add to Cart
                        </button>
                      ) : (
                        <div className="flex items-center justify-between bg-emerald-50 rounded-xl p-1.5 border border-emerald-200">
                          <button 
                            onClick={() => removeFromCart(2)}
                            className="bg-white p-2 rounded-lg text-[#18593A] shadow-sm hover:bg-emerald-100 transition-colors active:scale-95"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold text-[#18593A] px-4">{cart[2]} in Cart</span>
                          <button 
                            onClick={() => addToCart(2)}
                            className="bg-[#18593A] p-2 rounded-lg text-white shadow-sm hover:bg-[#114b30] transition-colors active:scale-95"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                 {/* Product 3 */}
                 <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden flex flex-col group hover:shadow-lg hover:border-emerald-200 transition-all">
                  <div className="h-48 bg-gray-100/50 p-6 flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[#18593A]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <img src={product3Image} alt="Root Growth" className="h-[140px] w-auto object-contain mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-700 ease-out relative z-10" />
                  </div>
                  <div className="p-5 flex flex-col flex-1 border-t border-gray-50">
                    <h3 className="font-bold text-gray-900 mb-1">AMRUTH Root Growth</h3>
                    <p className="text-xs text-gray-500 mb-4 line-clamp-2">Strengthens root systems and nutrient absorption.</p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xl font-bold text-emerald-600 tracking-tight">₹ 380</div>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">Rec. Qty: 1</span>
                      </div>
                      {!cart[3] ? (
                        <button 
                          onClick={() => addToCart(3)}
                          className="w-full flex items-center justify-center gap-2 bg-[#18593A] hover:bg-[#114b30] text-white font-bold py-3 rounded-xl transition-colors shadow-md active:scale-95"
                        >
                          <ShoppingCart className="w-4 h-4" /> Add to Cart
                        </button>
                      ) : (
                        <div className="flex items-center justify-between bg-emerald-50 rounded-xl p-1.5 border border-emerald-200">
                          <button 
                            onClick={() => removeFromCart(3)}
                            className="bg-white p-2 rounded-lg text-[#18593A] shadow-sm hover:bg-emerald-100 transition-colors active:scale-95"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold text-[#18593A] px-4">{cart[3]} in Cart</span>
                          <button 
                            onClick={() => addToCart(3)}
                            className="bg-[#18593A] p-2 rounded-lg text-white shadow-sm hover:bg-[#114b30] transition-colors active:scale-95"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {cartItemsCount > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 bg-white border-2 border-[#18593A] rounded-2xl p-5 md:p-6 shadow-xl shadow-emerald-900/10 flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-[#18593A] border border-emerald-100 relative">
                      <ShoppingBag className="w-7 h-7" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#18593A] text-white rounded-full flex items-center justify-center text-xs font-bold ring-2 ring-white shadow-sm">
                        {cartItemsCount}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-lg md:text-xl">Your Cart</h4>
                      <p className="text-emerald-700 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full mt-1 inline-block">
                        {cartItemsCount} {cartItemsCount === 1 ? 'Product' : 'Products'} added
                      </p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={onCheckout} 
                    className="w-full sm:w-auto px-8 py-4 bg-[#18593A] text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20 hover:-translate-y-0.5 hover:bg-[#114b30] hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    Go to Cart <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )}
            </motion.section>
          </div>

          {/* Right Column (Sidebar) */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-[#18593A]" />
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">Nearby Dealers</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                {[
                  { name: 'Sri Rytha Agro Center', address: '#45, APMC Yard, Yeshwanthpur, Bengaluru - 560022', loc: '2.4 km' },
                  { name: 'Kisan Fertilizers', address: 'Main Road, Nelamangala, Bengaluru Rural - 562123', loc: '5.1 km' },
                  { name: 'Green Earth Fertilizers', address: 'Survey No. 88, Hesaraghatta Main Rd, Bengaluru - 560088', loc: '7.2 km' },
                  { name: 'Krishi Kendra', address: '#12, Old Madras Road, K.R. Puram, Bengaluru - 560036', loc: '8.5 km' },
                  { name: 'Annapurna Agri-Services', address: '1st Cross, Gandhi Nagar, Bengaluru - 560009', loc: '10.2 km' },
                ].map((dealer, i) => (
                  <div key={i} className="flex items-start justify-between p-4 border border-gray-100 rounded-xl hover:border-emerald-200 hover:bg-gray-50/50 transition-all group">
                    <div className="pr-3">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{dealer.name}</h4>
                      <p className="text-[11px] text-gray-500 mb-2 leading-relaxed">{dealer.address}</p>
                      <div className="inline-flex items-center text-[10px] font-bold text-gray-400">
                        <MapPin className="w-3 h-3 mr-1" /> {dealer.loc} away
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      <button className="w-8 h-8 rounded-full border border-gray-200 text-gray-600 flex items-center justify-center hover:text-green-600 hover:border-green-600 hover:bg-green-50 transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-8 h-8 rounded-full border border-gray-200 text-gray-600 flex items-center justify-center hover:text-[#18593A] hover:border-[#18593A] hover:bg-emerald-50 transition-colors">
                        <Map className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full py-3.5 bg-white border-2 border-[#18593A] text-[#18593A] font-bold rounded-xl hover:bg-[#18593A] hover:text-white transition-colors">
                View All Dealers
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
              <a href="#" className="hover:text-[#18593A]">Find Dealer</a>
              <a href="#" className="hover:text-[#18593A]">Soil Testing</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Company</h4>
            <div className="flex flex-col space-y-3 text-sm text-gray-600">
              <a href="#" className="hover:text-[#18593A]">About Us</a>
              <a href="#" className="hover:text-[#18593A]">Privacy Policy</a>
              <a href="#" className="hover:text-[#18593A]">Terms of Service</a>
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
