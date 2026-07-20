import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, User } from 'lucide-react';
import ProfileSettingsModal from './ProfileSettingsModal';

import product1Image from '../assets/images/regenerated_image_1781068049533.jpg';
import product2Image from '../assets/images/regenerated_image_1781068051813.jpg';
import product3Image from '../assets/images/regenerated_image_1781068052697.jpg';
import product4Image from '../assets/images/regenerated_image_1781068053513.jpg';
import heroImage from '../assets/images/regenerated_image_1781068345753.avif';

const CorporateVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setIsPlaying(true)}
      transition={{ delay: 0.2 }}
      className="w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl relative bg-black border border-white/10"
    >
       <iframe 
         className="w-full h-full" 
         src={`https://www.youtube.com/embed/BhWyh4s1yNw?autoplay=${isPlaying ? 1 : 0}&mute=1&rel=0&modestbranding=1`} 
         title="Amruth Corporate Video" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowFullScreen
       ></iframe>
       {!isPlaying && <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>}
    </motion.div>
  );
};

export default function LandingPage({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Top Navigation */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100/50">
        <div className="flex justify-between items-center w-full px-8 max-w-7xl mx-auto h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Leaf className="w-8 h-8 text-[#18593A] drop-shadow-sm" />
            <span className="text-xl md:text-2xl font-bold text-[#18593A] tracking-tight">AMRUTH <span className="font-medium text-gray-800">Connect</span></span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6"
          >
            <span className="text-gray-500 text-sm hidden md:inline-block font-medium">EN | ಕನ್ನಡ</span>
            
            <div 
              onClick={() => setIsProfileOpen(true)}
              className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-100 border-2 border-emerald-200 transition-all shadow-sm"
            >
              <User className="w-5 h-5 text-[#18593A]" />
            </div>

            <button onClick={() => onNavigate('login')} className="bg-[#18593A] text-white text-sm font-bold px-6 py-2 rounded-md hover:bg-[#114b30] hover:shadow-lg hover:shadow-green-900/20 hover:-translate-y-0.5 transition-all duration-300">
              Login
            </button>
          </motion.div>
        </div>
      </header>

      <ProfileSettingsModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#18593A] via-[#114b30] to-[#0a3821] text-white min-h-[550px] flex items-center">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-3xl mix-blend-screen"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-green-400/10 rounded-full blur-3xl mix-blend-screen"
            />
          </div>

          <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 py-16">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="space-y-8 max-w-lg lg:-ml-[82px] lg:-mt-[8px] lg:-mb-[3px] lg:pl-[3px]"
            >
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.12] tracking-tight drop-shadow-sm"
              >
                Know your soil. Choose the right fertilizer.
              </motion.h1>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="text-[#A7D3BB] text-lg leading-relaxed max-w-md font-medium"
              >
                Trusted by 10,000+ farmers across Karnataka. Get personalized recommendations for optimal crop yield.
              </motion.p>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <button onClick={() => onNavigate('login')} className="bg-[#F59E0B] text-white text-sm font-bold px-8 py-3.5 rounded-md shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:bg-[#D97706] hover:shadow-[0_6px_20px_rgba(245,158,11,0.4)] hover:-translate-y-0.5 transition-all duration-300">
                  Book Free Soil Test
                </button>
                <button onClick={() => onNavigate('products')} className="bg-transparent border-[1.5px] border-white/80 text-white text-sm font-bold px-8 py-3.5 rounded-md hover:bg-white hover:text-[#18593A] transition-all duration-300 backdrop-blur-sm">
                  Browse Products
                </button>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }} 
              animate={{ opacity: 1, scale: 1, x: 0 }} 
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="hidden md:flex justify-end items-center relative h-full group"
            >
              <div className="w-full h-[400px] lg:w-[733px] lg:h-[450px] lg:-ml-[140px] lg:-mr-[140px] lg:-mt-[7px] max-w-none lg:rounded-[22px] rounded-2xl overflow-hidden shadow-2xl relative border-[6px] border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    alt="Farmer in field" 
                    className="absolute inset-0 w-full h-full object-cover" 
                    src={"https://plus.unsplash.com/premium_photo-1682092112837-3dcf3e85ea6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFwcHklMjBpbmRpYW4lMjBmYXJtZXJzfGVufDB8fDB8fHww"} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Bar Section */}
        <section className="bg-gradient-to-b from-white to-[#F4F7F5] py-12 border-b border-gray-100 relative z-20 -mt-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1, duration: 0.6 }
                }
              }}
              className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-x divide-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-white rounded-2xl p-6 lg:p-8 border border-green-50"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center px-2 group">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#18593A] mb-1 leading-tight tracking-tight">10,000+</h3>
                <p className="text-xs lg:text-sm text-gray-500 font-semibold tracking-wide uppercase">Farmers Served</p>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center px-2 group">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#18593A] mb-1 leading-tight tracking-tight">500+</h3>
                <p className="text-xs lg:text-sm text-gray-500 font-semibold tracking-wide uppercase">Dealers in Karnataka</p>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center px-2 group">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#18593A] mb-1 leading-tight tracking-tight">30+ Acres</h3>
                <p className="text-xs lg:text-sm text-gray-500 font-semibold tracking-wide uppercase">Manufacturing Facility</p>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center px-2 group">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#18593A] mb-1 leading-tight tracking-tight">10+ Years</h3>
                <p className="text-xs lg:text-sm text-gray-500 font-semibold tracking-wide uppercase">Of Experience</p>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center px-2 group col-span-2 md:col-span-1 border-t md:border-t-0 pt-4 md:pt-0 pb-2 md:pb-0">
                <h3 className="text-2xl lg:text-3xl font-extrabold text-[#D97706] mb-1 leading-tight tracking-tight">Free</h3>
                <p className="text-xs lg:text-sm text-gray-600 font-bold tracking-wide uppercase">Soil Testing</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About AMRUTH Group Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 lg:w-[424px] lg:h-[267px] lg:-ml-[166px] lg:mr-[14px] lg:mt-0 lg:mb-0 lg:px-0 lg:pb-0 lg:rounded-[18px] space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[#18593A] text-sm font-bold tracking-wide uppercase mb-2">
                  <Leaf className="w-4 h-4" /> The AMRUTH Group
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                  The most preferred name in the organic world.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  AMRUTH operates under three trusted brand names — <strong className="text-gray-900">AMRUTH ORGANIC FERTILIZERS</strong>, <strong className="text-gray-900">VARSHINI FERTILIZERS PVT LTD</strong>, and <strong className="text-gray-900">AGRIONE SHOP</strong>.
                </p>
                <div className="flex items-start gap-4 p-5 bg-[#F2F6F3] rounded-xl border border-green-100 mt-6 lg:pt-[14px] lg:-ml-[1px] lg:mr-[19px]">
                  <div className="text-[#D97706] mt-1 hidden sm:block">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">State-of-the-art Manufacturing</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Our 30-acre sprawling premise is located at Malladihalli, Holalkere Taluk, Chitradurga District — approximately 245 km from Bengaluru.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 relative"
              >
                 <div className="w-full md:w-[110%] md:-ml-6 lg:w-[830px] lg:h-[446px] lg:-ml-[60px] lg:-mt-[14px] lg:-mb-[15px] max-w-none aspect-video lg:aspect-auto rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white bg-black">
                    <img 
                      src="https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-6/482223166_1107609734714496_1506004333694155403_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1088&ctp=s1920x1088&_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=KbFgSMv495cQ7kNvwHAAGuH&_nc_oc=Adqc48gCelHWLQaEt24zyTntbWFgCvVZ8sDMLaQ-BZUCf5OhQwEwvZmgTywEpmMJmfMI8IypjiKy1jDRdZ87vb8m&_nc_zt=23&_nc_ht=scontent.fblr1-7.fna&_nc_gid=Vz867hkAocYwON5pY3DgDA&_nc_ss=7b289&oh=00_Af_N129V6hd9vIuKMu7TiWpKvDXzLwLddLNz6fdQlsDBCw&oe=6A2F25FF"
                      alt="Amruth Factory Facility"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 pointer-events-none">
                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-2">
                           <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                           <span className="font-semibold text-sm">Malladihalli, Chitradurga</span>
                        </div>
                        <p className="text-xs text-gray-300">30-Acre Megafacility</p>
                      </div>
                    </div>
                 </div>
                 <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-100 rounded-full blur-2xl -z-10"></div>
                 <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full blur-2xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision / Mission Strip */}
        <section className="bg-[#18593A] py-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
             <motion.h2 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md text-amber-400"
             >
               ರೈತರ ನಂಬಿಕೆಯ ಬ್ರಾಂಡ್
             </motion.h2>
             <motion.h3
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-xl md:text-2xl font-semibold mb-8 uppercase tracking-widest text-[#A7D3BB]"
             >
               Trusted by Farmers
             </motion.h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 text-left bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                   <div className="flex items-center gap-3 mb-4 text-amber-400">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                     <h4 className="text-xl font-bold uppercase tracking-wide">Our Vision</h4>
                   </div>
                   <p className="text-gray-200 leading-relaxed">
                     Complete organic farming — farmer-friendly, nutrient-rich organic manures, soil amendments, growth promoters, micronutrients, bio-fertilizers, bio-pesticides — with the goal of affordable innovation for farmers and healthy food, soil, water, and environment.
                   </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                   <div className="flex items-center gap-3 mb-4 text-amber-400">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                     <h4 className="text-xl font-bold uppercase tracking-wide">Our Mission</h4>
                   </div>
                   <p className="text-gray-200 leading-relaxed">
                     To be the most trusted brand providing scientific organic manure solutions to the soil, loved by farmers for ethics, values, and commitments to sustainability.
                   </p>
                </motion.div>
             </div>
          </div>
        </section>

        {/* R&D Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">The Science Behind Our Products</h2>
              <p className="text-gray-500 text-lg tracking-wide max-w-2xl mx-auto">State-of-the-art research laboratories ensuring the highest quality organic solutions.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row"
              >
                <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                   <img src="https://s3.ap-south-1.amazonaws.com/amruthgroup.net/images/research/microbial-1.jpg" alt="Soil Testing Lab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-center bg-white/50 backdrop-blur-sm">
                   <div className="w-12 h-12 bg-emerald-50 text-[#18593A] rounded-xl flex items-center justify-center mb-4">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3">Soil Testing Laboratory</h3>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     A state-of-the-art facility providing precise soil health cards to organic farmers, analyzing pH, EC, N, P, K, and essential micronutrients like Zn, B, and Fe.
                   </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row"
              >
                <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                   <img src="https://s3.ap-south-1.amazonaws.com/amruthgroup.net/images/vision/mission.jpg" alt="Microbial R&D" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-center bg-white/50 backdrop-blur-sm">
                   <div className="w-12 h-12 bg-amber-50 text-[#D97706] rounded-xl flex items-center justify-center mb-4">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3">Microbial Fermentation Unit</h3>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     Ultramodern bioreactors with precision control of temperature and pressure for large-scale, high-quality production of bio-agents and biochemistry solutions.
                   </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-[#E8F0EB] relative overflow-hidden">
          {/* Background decorative blob */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D1E2D8] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 opacity-50"></div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">How AMRUTH Connect Works</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto tracking-wide">A simple process to ensure your crops get exactly what they need.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
              className="flex flex-col md:flex-row justify-between items-start relative max-w-5xl mx-auto"
            >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center w-full md:w-1/4 mb-10 md:mb-0 relative z-10 group">
                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-[#18593A] mb-6 shadow-xl shadow-green-900/5 group-hover:-translate-y-2 transition-all duration-300 relative">
                        <div className="absolute inset-0 bg-green-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 z-0"></div>
                        <svg className="w-8 h-8 z-10 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <h4 className="text-[19px] font-bold text-gray-900 mb-3">Book Soil Test</h4>
                    <p className="text-sm text-gray-500 max-w-[180px] leading-relaxed">Schedule a free visit from our expert agronomists.</p>
                </motion.div>
                
                <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} className="hidden md:flex text-[#F59E0B] absolute left-[25%] top-[24px] z-10 bg-transparent px-4 -translate-x-1/2"><ArrowRight strokeWidth={3} className="w-8 h-8 drop-shadow-sm"/></motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center w-full md:w-1/4 mb-10 md:mb-0 relative z-10 group">
                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-[#18593A] mb-6 shadow-xl shadow-green-900/5 group-hover:-translate-y-2 transition-all duration-300 relative">
                        <div className="absolute inset-0 bg-green-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 z-0"></div>
                        <svg className="w-8 h-8 z-10 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <h4 className="text-[19px] font-bold text-gray-900 mb-3">Get Recommendation</h4>
                    <p className="text-sm text-gray-500 max-w-[180px] leading-relaxed">Receive precise advice based on thorough lab results.</p>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} className="hidden md:flex text-[#F59E0B] absolute left-[50%] top-[24px] z-10 bg-transparent px-4 -translate-x-1/2"><ArrowRight strokeWidth={3} className="w-8 h-8 drop-shadow-sm"/></motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center w-full md:w-1/4 mb-10 md:mb-0 relative z-10 group">
                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-[#18593A] mb-6 shadow-xl shadow-green-900/5 group-hover:-translate-y-2 transition-all duration-300 relative">
                        <div className="absolute inset-0 bg-green-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 z-0"></div>
                        <svg className="w-8 h-8 z-10 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <h4 className="text-[19px] font-bold text-gray-900 mb-3">Choose Fertilizer</h4>
                    <p className="text-sm text-gray-500 max-w-[180px] leading-relaxed">Select the specifically tailored organic products.</p>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} className="hidden md:flex text-[#F59E0B] absolute left-[75%] top-[24px] z-10 bg-transparent px-4 -translate-x-1/2"><ArrowRight strokeWidth={3} className="w-8 h-8 drop-shadow-sm"/></motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center text-center w-full md:w-1/4 relative z-10 group">
                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-[#18593A] mb-6 shadow-xl shadow-green-900/5 group-hover:-translate-y-2 transition-all duration-300 relative">
                        <div className="absolute inset-0 bg-emerald-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 z-0"></div>
                        <svg className="w-8 h-8 z-10 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h4 className="text-[19px] font-bold text-gray-900 mb-3">Order Here</h4>
                    <p className="text-sm text-gray-500 max-w-[180px] leading-relaxed">Pick up securely from your nearest authorized dealer.</p>
                </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Crop-Specific Suggestions */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-end mb-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Crop-Specific Suggestions</h2>
                <p className="text-gray-500 text-lg tracking-wide">Tailored guidance and solutions for your specific crops.</p>
              </div>
              <div className="hidden md:flex gap-3">
                <button className="w-12 h-12 rounded-full border-[1.5px] border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#18593A] hover:text-white hover:border-[#18593A] transition-all focus:outline-none focus:ring-4 focus:ring-green-100">
                  <ChevronLeft className="w-6 h-6"/>
                </button>
                <button className="w-12 h-12 rounded-full border-[1.5px] border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#18593A] hover:text-white hover:border-[#18593A] transition-all focus:outline-none focus:ring-4 focus:ring-green-100">
                  <ChevronRight className="w-6 h-6"/>
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Card 1 */}
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }} className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden group transition-all duration-500">
                <div className="h-[240px] overflow-hidden relative">
                  <img alt="Arecanut" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1733743366591-398701d23feb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJlY2ElMjBudXR8ZW58MHx8MHx8fDA%3D" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent flex items-end p-8 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold text-white tracking-wide">Arecanut</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
                    Maintain proper soil moisture and use Amruth Organic Booster for optimal growth and high-quality yield.
                  </p>
                  <a className="inline-flex items-center text-[14px] font-bold text-[#D97706] hover:text-[#B45309] transition-colors uppercase tracking-widest group-hover:gap-2" href="#">
                    <span>Learn More</span> <ArrowRight strokeWidth={2.5} className="w-4 h-4 ml-1 transition-all"/>
                  </a>
                </div>
              </motion.div>
              
              {/* Card 2 */}
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }} className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden group transition-all duration-500">
                <div className="h-[240px] overflow-hidden relative">
                  <img alt="Paddy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1599328580087-15c9dab481f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent flex items-end p-8 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold text-white tracking-wide">Paddy</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
                    Prepare soil correctly before sowing and provide balanced nutrients for a bountiful and healthy harvest.
                  </p>
                  <a className="inline-flex items-center text-[14px] font-bold text-[#D97706] hover:text-[#B45309] transition-colors uppercase tracking-widest group-hover:gap-2" href="#">
                    <span>Learn More</span> <ArrowRight strokeWidth={2.5} className="w-4 h-4 ml-1 transition-all"/>
                  </a>
                </div>
              </motion.div>
              
              {/* Card 3 */}
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } }} className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden group transition-all duration-500">
                <div className="h-[240px] overflow-hidden relative">
                  <img alt="Sugarcane" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://media.istockphoto.com/id/469759853/photo/sugarcane-looking-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=BnKHZwccHdmbWsDcq1Vs9r2cOFT9Cti6kgFKSJZUM08=" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent flex items-end p-8 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold text-white tracking-wide">Sugarcane</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
                    Apply fertilizer strategically and strictly follow water management practices for robust cane development.
                  </p>
                  <a className="inline-flex items-center text-[14px] font-bold text-[#D97706] hover:text-[#B45309] transition-colors uppercase tracking-widest group-hover:gap-2" href="#">
                    <span>Learn More</span> <ArrowRight strokeWidth={2.5} className="w-4 h-4 ml-1 transition-all"/>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-24 bg-[#F2F6F3] border-t border-green-100">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 uppercase tracking-widest font-serif">Our Products</h2>
              <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                Amruth organic fertilizers is manufacturing an array of Bio products like Bio-Fertilizers, Bio pesticides, Organic Manure, Phosphorous Rich Organic Manure, Potash derived from molasses(Bio Potash), Soil Conditioner, Neem Based Organic Manure, Growth Promoters, Micro Nutrients, Coco Pith.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
            >
              {[
                { name: 'BIO FERTILIZERS (NUTRIENT MANAGEMENT)', img: 'https://images.unsplash.com/photo-1757557843856-8f909a9da9cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG51dHJpdGlvbiUyMG1hbmFnZW1lbnQlMjBiaW8lMjBmZXJ0aWxpemVyfGVufDB8fDB8fHww' },
                { name: 'BIO FUNGICIDES (DISEASE MANAGEMENT)', img: 'https://images.unsplash.com/photo-1758614307700-1e8ed56dd032?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnQlMjBESVNFQVNlfGVufDB8fDB8fHww' },
                { name: 'BIO PESTICIDES (PEST MANAGEMENT)', img: 'https://media.istockphoto.com/id/839897520/photo/close-up-black-group-housefly-on-the-green-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=1ssn5DglU6PvdI-jGUTFlC3SWl0YT-q53ebMkAR2bxg=' },
                { name: 'COCOPITH', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfDTb5dKAzc_1qWc-PrYhDhQBcSSy_pay7AWr2PMO5A&s' },
                { name: 'CROP SPECIAL CONSORTIA', img: 'https://media.istockphoto.com/id/1545800730/photo/organic-tomato-greenhouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=KAWAmSHNf2-K70fPoaW64g1-_K-WEH8AIBxfVyGrd84=' },
                { name: 'GARDEN KIT', img: 'https://plus.unsplash.com/premium_photo-1664200630491-5f0bda86db50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fEdBUkRFTiUyMG1hbmFnZW1lbnQlMjBLSVRzfGVufDB8fDB8fHww' },
                { name: 'MICRONUTRIENT LIQUIDS', img: 'data:image/jpeg;base64,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' },
                { name: 'NEEM COATED ORGANIC GRANULES', img: 'https://5.imimg.com/data5/SELLER/Default/2022/4/ML/WU/YH/151209197/humic-acid-granules.jpg' },
              ].map((cat, idx) => (
                <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col group items-center">
                  <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden mb-4 shadow-sm relative group-hover:shadow-md transition-shadow">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <h3 className="text-[13px] font-bold text-gray-900 text-center uppercase tracking-wider mb-4 leading-normal min-h-[40px] px-2 flex items-center justify-center">
                    {cat.name}
                  </h3>
                  <button onClick={() => onNavigate('products')} className="bg-[#111] text-white text-[11px] font-bold tracking-widest uppercase px-8 py-3 hover:bg-[#333] transition-colors mt-auto">
                    Details
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Story & Video Section */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1592982537447-6f23f0eceea4?auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight"
            >
              Watch Our Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Discover how AMRUTH Connect is transforming organic farming across Karnataka with scientific precision and traditional wisdom.
            </motion.p>
            <CorporateVideo />
          </div>
        </section>

        {/* Farmer Testimonials */}
        <section className="py-24 bg-[#E8F0EB] relative">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Voices of Our Farmers</h2>
              <p className="text-gray-600 text-lg tracking-wide max-w-2xl mx-auto">Real experiences from farmers using AMRUTH organic solutions.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  name: "Suresh Gowda", 
                  district: "Chitradurga", 
                  crop: "Arecanut", 
                  quote: "ಅಮೃತ್ ಪ್ರಾಡಕ್ಟ್ಸ್ ಬಳಸಿ ನನ್ನ ಅಡಿಕೆ ತೋಟದ ಇಳುವರಿ ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ. ಮಣ್ಣಿನ ಫಲವತ್ತತೆ ಹೆಚ್ಚಾಗಿದೆ.", 
                  img: "https://images.unsplash.com/photo-1506869640319-fea1a28a1005?w=200&auto=format&fit=crop" 
                },
                { 
                  name: "Ramesh Patil", 
                  district: "Dharwad", 
                  crop: "Sugarcane", 
                  quote: "ಬೆಳೆಗಳಿಗೆ ಸರಿಯಾದ ಪೋಷಕಾಂಶ ಸಿಕ್ಕಿ, ರೋಗಬಾಧೆ ಕಡಿಮೆಯಾಗಿದೆ. ಇದು ರೈತರ ನಿಜವಾದ ನಂಬಿಕೆಯ ಬ್ರಾಂಡ್.", 
                  img: "https://images.unsplash.com/photo-1542458428-17b5f5cc1bdf?w=200&auto=format&fit=crop" 
                },
                { 
                  name: "Linganna", 
                  district: "Shivamogga", 
                  crop: "Paddy", 
                  quote: "ಮಣ್ಣು ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ ಅವರ ಶಿಫಾರಸಿನಂತೆ ಗೊಬ್ಬರ ಬಳಸಿದೆ, ಈ ಬಾರಿ ಬೆಳೆ ತುಂಬಾ ಶಕ್ತಿಯುತವಾಗಿ ಬಂದಿದೆ.", 
                  img: "https://images.unsplash.com/photo-1534080182604-dbb4938a7c29?w=200&auto=format&fit=crop" 
                }
              ].map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative border border-green-50"
                >
                  <div className="absolute top-8 right-8 text-[#18593A]/10">
                     <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <img src={testimonial.img} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover shadow-sm bg-gray-100" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-sm font-medium text-[#18593A]">{testimonial.district} • {testimonial.crop}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium italic">
                    "{testimonial.quote}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-50/50 via-white to-white z-0"></div>
          <div className="max-w-7xl mx-auto px-8 text-center flex justify-center items-center flex-col relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-16 tracking-tight"
            >
              Recognized for Excellence
            </motion.h3>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl"
            >
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="flex flex-col items-center group">
                <div className="text-amber-600 mb-6 bg-amber-50 w-20 h-20 rounded-2xl group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300 shadow-sm flex items-center justify-center">
                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1h1a1 1 0 110 2H8a1 1 0 110-2h1V3a1 1 0 011-1zm-4 7a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm-1 4a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v9z" clipRule="evenodd" /></svg>
                </div>
                <div className="flex flex-col items-center flex-grow text-center">
                   <div className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">2012</div>
                   <h4 className="text-[17px] font-bold text-gray-900 leading-tight">Dr. Shree K. Shivarama Karantha Sabdhavana</h4>
                   <p className="text-sm text-gray-500 mt-2 font-medium">National Award</p>
                </div>
              </motion.div>
              
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="flex flex-col items-center group">
                <div className="text-[#18593A] mb-6 bg-green-50 w-20 h-20 rounded-2xl group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300 shadow-sm relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#18593A]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="w-10 h-10 relative z-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A12.014 12.014 0 0010.5 3h.001c.203.493.425 1.004.664 1.53.513 1.135 1.118 2.455 1.5 3.47H10.5a8.031 8.031 0 00-2.435-1.55l3.235-1.954zM6.5 17c-2.3 0-4-1.7-4-4 0-2.348 2.628-6.177 3-6.6a1 1 0 011.5 0C7.372 6.822 10 10.652 10 13c0 2.3-1.7 4-4 4h.5zm6.5-6c0-1.874-1.777-5.111-2.222-5.889a1 1 0 00-1.556 0c-.287.444-.816 1.488-1.222 2.639h8.25C13.626 10.375 13 10.895 13 11zM2.8 11.53c0 .03.01.07.02.13C2.81 11.57 2.8 11.54 2.8 11.53zm9.054-2.825L10.5 7.18 11.854 8.705z" clipRule="evenodd" /></svg>
                </div>
                <div className="flex flex-col items-center flex-grow text-center">
                   <div className="bg-[#18593A] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">2017</div>
                   <h4 className="text-[17px] font-bold text-gray-900 leading-tight">Shree Visvesvaraya Manufacturing Excellence</h4>
                   <p className="text-sm text-gray-500 mt-2 font-medium">State Award</p>
                </div>
              </motion.div>
              
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="flex flex-col items-center group">
                <div className="text-blue-600 mb-6 bg-blue-50 w-20 h-20 rounded-2xl group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300 shadow-sm flex items-center justify-center">
                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <div className="flex flex-col items-center flex-grow text-center">
                   <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">2019</div>
                   <h4 className="text-[17px] font-bold text-gray-900 leading-tight">South India Business Award</h4>
                   <p className="text-sm text-gray-500 mt-2 font-medium">Business Excellence</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#EBEBEB] pt-16 pb-8 border-t border-[#E5E7EB]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto mb-16">
          <div className="col-span-1 md:col-span-1 md:border-r border-[#DDDDDD] pr-6">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-6 h-6 text-[#18593A]" />
              <span className="text-[22px] font-bold text-[#18593A] tracking-tight">AMRUTH <span className="font-medium text-gray-700">Connect</span></span>
            </div>
            <p className="text-[13px] text-gray-500 mb-8 leading-relaxed opacity-90 hover:opacity-100 transition-opacity">
              Traditional Wisdom, Modern Precision.<br/>
              Empowering farmers with data-driven organic<br/>
              solutions.
            </p>
            <div className="text-[13px] text-gray-500 leading-relaxed">
              <p className="font-bold text-gray-700 mb-1.5">Manufacturing Unit:</p>
              <p className="opacity-90">Malladihalli – 577531, Holalkere Taluk</p>
              <p className="opacity-90">Chitradurga, Karnataka, India</p>
              <p className="opacity-90 mt-2 font-medium">📞 +91 9900066307</p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col md:pl-6">
            <h4 className="text-sm font-bold text-gray-900 mb-6">Explore</h4>
            <a className="text-[15px] text-[#18593A] font-semibold hover:underline mb-4 transition-all" href="#">Products</a>
            <a className="text-[15px] text-gray-600 hover:text-[#18593A] mb-4 transition-colors font-medium" href="#">Find Dealer</a>
            <a className="text-[15px] text-gray-600 hover:text-[#18593A] mb-4 transition-colors font-medium" href="#">Soil Test</a>
          </div>
          <div className="col-span-1 flex flex-col">
            <h4 className="text-sm font-bold text-gray-900 mb-6">Company</h4>
            <a className="text-[15px] text-gray-600 hover:text-[#18593A] mb-4 transition-colors font-medium" href="#">About Us</a>
            <a className="text-[15px] text-gray-600 hover:text-[#18593A] mb-4 transition-colors font-medium" href="#">Privacy Policy</a>
            <a className="text-[15px] text-gray-600 hover:text-[#18593A] transition-colors font-medium" href="#">Terms of Service</a>
          </div>
          <div className="col-span-1 flex flex-col">
            <h4 className="text-sm font-bold text-gray-900 mb-6">Stay Connected</h4>
            <div className="flex gap-4">
              <a className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-[#18593A] shadow-sm transform hover:-translate-y-1 transition-all" href="#">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-[#18593A] shadow-sm transform hover:-translate-y-1 transition-all" href="#">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-[#18593A] shadow-sm transform hover:-translate-y-1 transition-all" href="#">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center w-full px-8">
           <p className="text-[13px] text-gray-400">© 2024 AMRUTH Connect. Traditional Wisdom, Modern Precision.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919900066307" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center pointer-events-auto"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.787 5.768-.007 1.011.261 1.996.776 2.859l-1.023 3.738 3.829-1.004a5.727 5.727 0 002.205.441h.002c3.18 0 5.767-2.585 5.786-5.766.02-1.541-.577-2.99-1.677-4.08A5.733 5.733 0 0012.031 6.17zm0 9.77a4.265 4.265 0 01-2.176-.596l-.156-.093-1.616.424.433-1.576-.1-.157a4.248 4.248 0 01-.65-2.27c.015-2.356 1.936-4.27 4.296-4.27 1.144.01 2.218.455 3.025 1.258a4.279 4.279 0 011.246 3.021c-.015 2.355-1.936 4.269-4.296 4.269l-.006-.01zm2.354-3.218c-.128-.065-.765-.378-.883-.42-.119-.044-.206-.065-.293.065-.088.13-.334.42-.408.506-.076.086-.151.097-.28.032-.128-.065-.544-.201-1.036-.638-.383-.341-.643-.763-.718-.893-.075-.13 0-.2.065-.265.058-.058.128-.151.192-.227.065-.075.088-.13.128-.216.044-.086.022-.162-.011-.227-.033-.065-.293-.706-.401-.967-.105-.255-.213-.22-.293-.224-.076-.004-.162-.005-.25-.005-.088 0-.23.033-.35.162-.119.13-.456.446-.456 1.087 0 .641.467 1.26.533 1.346.065.087.918 1.398 2.222 1.933.31.127.553.203.743.26.31.099.593.085.816.052.249-.038.765-.313.873-.616.108-.303.108-.563.076-.616-.033-.053-.119-.086-.248-.15z" fillRule="evenodd" clipRule="evenodd"/></svg>
      </a>
    </div>
  );
}
