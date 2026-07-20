import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, MapPin, Sprout, CheckCircle2, Clock, Map, FileText, Hourglass, Download, Phone, ShoppingBag, Headphones, MessageSquare, Send, X, Bot, Eye, User, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import ProfileSettingsModal from './ProfileSettingsModal';

const EXPERT_CONTACTS = [
  { id: 1, name: 'Dr. Suresh Patil', role: 'Agronomist', phone: '+91 98765 11111' },
  { id: 2, name: 'Amit Desai', role: 'Fertiliser Recommendation Rep.', phone: '+91 98765 22222' },
  { id: 3, name: 'Dr. Anjali Sharma', role: 'Crop Nutrition Specialist', phone: '+91 98765 33333' },
  { id: 4, name: 'Vikram Singh', role: 'Soil Health Expert', phone: '+91 98765 44444' },
  { id: 5, name: 'Amruth Support', role: 'General Inquiries', phone: '1800-123-4567' }
];

export default function DashboardPage({ onViewReport, onNavigate }: { onViewReport?: () => void, onNavigate?: (view: string) => void }) {
  const [selectedDealer, setSelectedDealer] = useState<any>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [selectedParcelId, setSelectedParcelId] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const parcels = [
    { id: 1, name: 'Survey No. 42/B (Dharwad)', crop: 'Paddy', area: '5.5 Acres' },
    { id: 2, name: 'Survey No. 10/A (Hubballi)', crop: 'Sugarcane', area: '3.2 Acres' },
  ];

  const testData: any = {
    1: {
      progressStep: 2,
      hasReadyReport: false,
      past: [
        { month: "October 2024", type: "Post-Monsoon", status: 'bad' },
        { month: "May 2024", type: "Kharif Prep", status: 'good' }
      ]
    },
    2: {
      progressStep: 6, 
      hasReadyReport: true,
      past: [
        { month: "January 2024", type: "Pre-Sowing", status: 'good' }
      ]
    }
  };
  const currentTest = testData[selectedParcelId];
  const activeParcel = parcels.find(p => p.id === selectedParcelId) || parcels[0];

  const progressSteps = [
    { title: 'Request Submitted', icon: <CheckCircle2 className="w-5 h-5 text-white" /> },
    { title: 'Agent Assigned', icon: <CheckCircle2 className="w-5 h-5 text-white" /> },
    { title: 'Visit Scheduled', icon: <Map className="w-5 h-5 text-[#18593A]" /> },
    { title: 'Sample Received', icon: <MapPin className="w-5 h-5 text-gray-400" /> },
    { title: 'Test Completed', icon: <Hourglass className="w-5 h-5 text-gray-400" /> },
    { title: 'Report Ready', icon: <FileText className="w-5 h-5 text-gray-400" /> },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col font-sans">
      {/* Top Navigation */}
      <nav className="bg-[#18593A] px-6 lg:px-8 py-4 flex items-center justify-between text-white sticky top-0 z-40">
        <div className="flex items-center gap-2 cursor-pointer">
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
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-8"
        >
          Namaste, Raju! <span className="text-yellow-500">🙏</span>
        </motion.h1>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Main) */}
          <div className="lg:col-span-2">
            
            {/* Main Land Parcel Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden mb-8">
               
               {/* Header Section */}
               <div className="bg-[#f8fcf9] p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 border-l-4 border-[#18593A] pl-4 mb-2">Land Parcel Data</h3>
                    <div className="flex items-center gap-2 text-gray-500 ml-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{activeParcel.name.split(' (')[1].replace(')', '')}, Karnataka • {activeParcel.area}</span>
                    </div>
                  </div>
                  <select 
                    className="bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm font-bold text-gray-700 outline-none focus:border-[#18593A] focus:ring-2 focus:ring-[#18593A]/20 cursor-pointer shadow-sm min-w-[200px]"
                    value={selectedParcelId}
                    onChange={(e) => setSelectedParcelId(Number(e.target.value))}
                  >
                    {parcels.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
               </div>

               <div className="p-6 sm:p-8 space-y-8">
                 
                 {/* Top Stats: Crops */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Primary Yield */}
                    <div className="bg-[#e8fdee] p-5 rounded-2xl border border-gray-100 flex items-center justify-between">
                       <div>
                         <div className="flex items-center gap-2 text-gray-500 mb-1">
                          <Sprout className="w-4 h-4 text-green-600" />
                          <span className="text-xs font-bold uppercase tracking-wider">Primary Crop</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{activeParcel.crop}</h3>
                       </div>
                       <div className="text-right">
                          <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">Expected Yield</p>
                          <p className="text-sm font-bold text-[#18593A]">{activeParcel.crop === 'Sugarcane' ? '40 Tons' : '25 Quintals'}/Acre</p>
                       </div>
                    </div>

                    {/* Secondary Yield */}
                    <div className="bg-[#ede4e4] p-5 rounded-2xl border border-gray-100 flex items-center justify-between">
                       <div>
                         <div className="flex items-center gap-2 text-gray-500 mb-1">
                          <Leaf className="w-4 h-4 text-orange-500" />
                          <span className="text-xs font-bold uppercase tracking-wider">Secondary Crop</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{activeParcel.crop === 'Sugarcane' ? 'Moong Dal' : 'Sugarcane'}</h3>
                       </div>
                       <div className="text-right">
                          <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">Expected Yield</p>
                          <p className="text-sm font-bold text-[#18593A]">{activeParcel.crop === 'Sugarcane' ? '5 Quintals' : '40 Tons'}/Acre</p>
                       </div>
                    </div>
                 </div>

                 {/* Progress Tracker */}
                 <div className="border border-gray-100 rounded-2xl p-6 relative overflow-hidden bg-white shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-8">Soil Test Progress</h3>
                    <div className="relative">
                      {/* Connecting Line */}
                      <div className="absolute top-5 left-8 right-8 h-[2px] bg-gray-200">
                        <div className={`h-full bg-[#18593A] transition-all duration-1000 w-[${Math.min(100, Math.max(0, currentTest.progressStep * 20))}%]`}></div>
                      </div>

                      <div className="flex justify-between relative z-10">
                        {progressSteps.map((step, idx) => {
                          const isCompleted = currentTest.progressStep > idx;
                          const isCurrent = currentTest.progressStep === idx;
                          
                          return (
                            <div key={idx} className={`flex flex-col items-center text-center w-24 ${idx > 3 ? 'hidden sm:flex' : ''}`}>
                               <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${isCompleted ? 'bg-[#18593A]' : isCurrent ? 'bg-white border-[3px] border-[#18593A] shadow-[0_0_0_4px_rgba(24,89,58,0.1)]' : 'bg-gray-100'}`}>
                                  <div className={`${isCompleted ? 'text-white' : isCurrent ? 'text-[#18593A]' : 'text-gray-400'}`}>
                                     {step.icon}
                                  </div>
                               </div>
                               <span className={`text-xs ${isCompleted || isCurrent ? 'font-bold text-[#18593A]' : 'font-semibold text-gray-400'}`}>
                                 {step.title.replace(' Request Submitted', ' Request\nSubmitted')}
                               </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                 </div>

                 {/* Current Report or Agent Details */}
                 {currentTest.hasReadyReport ? (
                   <div className="bg-gradient-to-br from-[#18593A] to-[#0e3b25] p-8 sm:p-10 rounded-2xl shadow-md text-center text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
                      
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                           <Hourglass className="w-8 h-8 text-emerald-300" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3 max-w-sm">Soil test report completed successfully</h2>
                        <p className="text-emerald-100/80 text-sm max-w-md mx-auto mb-8">Your soil sample has been processed by our experts and the results are ready.</p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-2">
                          <button onClick={onViewReport} className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-emerald-50 text-[#18593A] font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(255,255,255,0.2)] hover:scale-105">
                            <Eye className="w-5 h-5" /> View Report
                          </button>
                          <button className="w-full sm:w-auto px-8 py-3 bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-900/20 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                            <Download className="w-5 h-5" /> Download PDF
                          </button>
                        </div>
                      </div>
                   </div>
                 ) : currentTest.progressStep >= 1 && currentTest.progressStep <= 2 ? (
                   <div className="bg-[#f8fcf9] border border-[#18593A]/20 p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-6 text-left shadow-sm">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                      
                      <div className="relative z-10 flex-shrink-0">
                         <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-emerald-100 flex items-center justify-center">
                           <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" alt="Agent Ramesh Kumar" className="w-full h-full object-cover" />
                         </div>
                      </div>
                      <div className="relative z-10 flex-1 w-full text-center md:text-left">
                         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                           <div>
                             <h2 className="text-xl font-bold text-gray-900 mb-1">Ramesh Kumar</h2>
                             <p className="text-sm font-semibold text-[#18593A] flex items-center justify-center md:justify-start gap-1">
                               <MapPin className="w-4 h-4" /> Assigned Field Agent
                             </p>
                           </div>
                           <div className="bg-white px-4 py-2 rounded-xl border border-emerald-100 shadow-sm text-center md:text-right flex-shrink-0">
                             <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center justify-center md:justify-end gap-1"><Clock className="w-3 h-3"/> Expected Visit</p>
                             <p className="text-sm font-bold text-gray-900 whitespace-nowrap">Tomorrow, 10:00 AM</p>
                           </div>
                         </div>
                         <div className="flex flex-col sm:flex-row items-center gap-3 mt-5">
                           <a href="mailto:ramesh.k@amruth.com" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:border-[#18593A] hover:bg-emerald-50 rounded-xl text-sm font-semibold text-gray-700 w-full sm:w-auto transition-colors flex-1 md:flex-none">
                             <Mail className="w-4 h-4 text-gray-400" />
                             ramesh.k@amruth.com
                           </a>
                           <a href="tel:+919876543210" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#18593A] hover:bg-[#0e3b25] text-white rounded-xl text-sm font-bold w-full sm:w-auto transition-colors shadow-sm shadow-emerald-900/20 flex-1 md:flex-none">
                             <Phone className="w-4 h-4" />
                             Call Agent
                           </a>
                         </div>
                      </div>
                   </div>
                 ) : (
                   <div className="bg-gray-50 border border-gray-100 p-8 sm:p-10 rounded-2xl text-center text-gray-500 relative overflow-hidden">
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                           <FileText className="w-8 h-8 text-gray-300" />
                        </div>
                        <h2 className="text-xl font-bold mb-2">Report Not Ready Yet</h2>
                        <p className="text-sm max-w-sm mx-auto">Your soil sample is currently being processed. You will be notified once the report is available.</p>
                      </div>
                   </div>
                 )}

                 {/* Past Reports */}
                 <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
                   <div className="flex items-center justify-between mb-6">
                     <h3 className="text-lg font-bold text-gray-900">Past Reports</h3>
                     <a href="#" className="text-sm font-bold text-[#18593A] hover:underline">See All</a>
                   </div>

                   {currentTest.past.length > 0 ? (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {currentTest.past.map((report: any, idx: number) => (
                         <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-200 transition-colors group cursor-pointer">
                           <div className="flex items-center gap-4">
                             <div className={`p-3 rounded-lg ${report.status === 'bad' ? 'bg-red-100/50 text-red-500' : 'bg-emerald-100/50 text-emerald-600'}`}>
                               <FileText className="w-5 h-5" />
                             </div>
                             <div>
                               <h4 className="font-bold text-gray-900 text-sm">{report.month} {report.month.includes('2024') ? '' : 'Report'}</h4>
                               <p className="text-xs text-gray-500">{report.type}</p>
                             </div>
                           </div>
                           <button className="text-gray-400 hover:text-[#18593A] transition-colors"><Download className="w-5 h-5" /></button>
                         </div>
                       ))}
                     </div>
                   ) : (
                     <div className="text-center py-8">
                       <p className="text-gray-400 italic">No past reports available for this parcel.</p>
                     </div>
                   )}
                 </div>
               </div>
            </motion.div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => onNavigate && onNavigate('products')} className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-xl hover:border-[#18593A] hover:bg-emerald-50/30 transition-colors group bg-[#e5f3cf]">
                  <ShoppingBag className="w-6 h-6 text-[#18593A] mb-2 group-hover:-translate-y-1 transition-transform" />
                  <span className="text-xs font-semibold text-gray-700">Find Products</span>
                </button>
                <button onClick={() => setIsExpertModalOpen(true)} className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-xl hover:border-[#18593A] hover:bg-emerald-50/30 transition-colors group bg-[#e5f3cf]">
                  <Headphones className="w-6 h-6 text-[#18593A] mb-2 group-hover:-translate-y-1 transition-transform" />
                  <span className="text-xs font-semibold text-gray-700">Talk to Expert</span>
                </button>
              </div>
            </motion.div>

            {/* Nearby Dealers */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Nearby Dealers</h3>
              
              <div className="space-y-3">
                {[
                  { name: 'Basavaraj Agri-Services', owner: 'Basavaraj Patil', address: 'Hubballi Main Road, Karnataka 580020', loc: '2.4 km', phone: '+91 98765 43210', email: 'basavaraj.agri@gmail.com' },
                  { name: 'Annapurna Fertilizers', owner: 'Ramesh Kumbar', address: 'Hebli Village, Karnataka 580112', loc: '5.1 km', phone: '+91 98765 43211', email: 'annapurna.fert@gmail.com' },
                  { name: 'Kisan Seva Kendra', owner: 'Suresh Desai', address: 'Dharwad Market, Karnataka 580001', loc: '6.8 km', phone: '+91 98765 43212', email: 'kisan.seva@gmail.com' },
                  { name: 'Malnad Agri World', owner: 'Abdul Khader', address: 'Alnavar Road, Karnataka 580002', loc: '8.2 km', phone: '+91 98765 43213', email: 'malnad.agri@gmail.com' },
                ].map((dealer, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{dealer.name}</h4>
                      <p className="text-[11px] text-gray-500 font-medium">{dealer.loc} away</p>
                    </div>
                    <button 
                      onClick={() => setSelectedDealer(dealer)}
                      className="px-3 py-1.5 bg-emerald-50 text-[#18593A] text-xs font-bold rounded-lg hover:bg-emerald-100 transition-colors whitespace-nowrap"
                    >
                      Get Info
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
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
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Important Links</h4>
            <div className="flex flex-col space-y-3 text-sm text-gray-600">
              <button onClick={() => onNavigate && onNavigate('products')} className="hover:text-[#18593A] text-left">Products</button>
              <a href="#" className="hover:text-[#18593A]">Find Dealer</a>
              <a href="#" className="hover:text-[#18593A]">Soil Test</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Company</h4>
            <div className="flex flex-col space-y-3 text-sm text-gray-600">
              <a href="#" className="hover:text-[#18593A]">About</a>
              <a href="#" className="hover:text-[#18593A]">Privacy Policy</a>
              <a href="#" className="hover:text-[#18593A]">Terms of Service</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Help</h4>
            <p className="text-sm text-gray-600 mb-3">Contact us if you need help.</p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-[#18593A]"><MessageSquare className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-[#18593A]"><Phone className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-200/60 text-center text-xs text-gray-500 font-medium">
          © 2024 AMRUTH Connect. Empowering Bharat's Agriculture.
        </div>
      </footer>



      {/* Dealer Info Modal */}
      <AnimatePresence>
        {selectedDealer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md overflow-visible relative mt-12"
            >
              <div className="h-24 bg-[#0a5c36] rounded-t-2xl relative flex items-center px-6">
                <h3 className="text-white font-bold text-lg tracking-wide hidden sm:block">Dealer Details</h3>
                <button 
                  onClick={() => setSelectedDealer(null)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 rounded-full p-1.5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-6 pb-6 relative w-full">
                <div className="absolute -top-10 left-6 w-20 h-20 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-[#0a5c36]" />
                </div>
                
                <div className="pt-14">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">{selectedDealer.name}</h2>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eafaf1] text-[#0a5c36] text-xs font-bold mb-6">
                    <MapPin className="w-3.5 h-3.5" />
                    {selectedDealer.loc} away
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Dealer Owner</p>
                        <p className="font-bold text-gray-900 text-sm">{selectedDealer.owner}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Address</p>
                        <p className="font-bold text-gray-900 text-sm">{selectedDealer.address}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between items-center bg-gray-50/50 p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Phone Number</p>
                        <p className="font-extrabold text-gray-900 text-sm">{selectedDealer.phone}</p>
                      </div>
                      <a href={`tel:${selectedDealer.phone}`} className="w-10 h-10 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center hover:bg-green-200 transition-colors shadow-sm">
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <div className="mt-3 flex justify-between items-center bg-gray-50/50 p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Email Address</p>
                        <p className="font-extrabold text-gray-900 text-sm">{selectedDealer.email}</p>
                      </div>
                      <a href={`mailto:${selectedDealer.email}`} className="w-10 h-10 rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center hover:bg-blue-200 transition-colors shadow-sm ms-2">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Expert Contacts Modal */}
      <AnimatePresence>
        {isExpertModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsExpertModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }} 
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="bg-[#18593A] p-6 text-white pb-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Headphones className="w-6 h-6" /> Talk to an Expert
                  </h3>
                  <button onClick={() => setIsExpertModalOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors hidden sm:block">
                    <X className="w-5 h-5" />
                  </button>
                    <button onClick={() => setIsExpertModalOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors sm:hidden">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-emerald-100/90 text-sm">Select an expert to contact directly for immediate assistance.</p>
              </div>

              <div className="p-6 -mt-4 bg-white rounded-t-3xl relative z-10 max-h-[60vh] overflow-y-auto hide-scrollbar">
                <div className="space-y-4">
                  {EXPERT_CONTACTS.map((expert) => (
                    <div key={expert.id} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:border-emerald-200 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#18593A] flex items-center justify-center flex-shrink-0">
                          {expert.role.includes('Support') ? <Headphones className="w-5 h-5" /> : <User className="w-5 h-5" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">{expert.name}</h4>
                          <p className="text-xs text-[#18593A] font-semibold">{expert.role}</p>
                        </div>
                      </div>
                      <a href={`tel:${expert.phone.replace(/[^0-9+]/g, '')}`} className="w-10 h-10 rounded-full bg-[#18593A] text-white flex items-center justify-center hover:bg-[#0e3b25] transition-colors shadow-sm flex-shrink-0 ml-2">
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

