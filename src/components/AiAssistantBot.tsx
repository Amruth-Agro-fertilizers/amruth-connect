import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send } from 'lucide-react';

export default function AiAssistantBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 sm:w-96 mb-4 overflow-hidden flex flex-col h-[450px]"
          >
            {/* Chat Header */}
            <div className="bg-[#18593A] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-emerald-200" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Amruth Assistance</h3>
                  <p className="text-[10px] text-emerald-200 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online</p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-emerald-200 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 bg-gray-50 p-4 overflow-y-auto flex flex-col gap-4">
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-6 h-6 rounded-full bg-[#18593A] flex-shrink-0 flex items-center justify-center mt-1">
                   <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-sm text-gray-700">
                  Namaskara Raju! 🙏 How can I help you with your agriculture needs today?
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-white border-t border-gray-100">
              <form className="relative flex items-center" onSubmit={(e) => { e.preventDefault(); setChatMessage(''); }}>
                <input 
                  type="text" 
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type a message..." 
                  className="w-full bg-gray-50 border border-gray-200 rounded-full pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:border-[#18593A] focus:ring-1 focus:ring-[#18593A] transition-all"
                />
                <button 
                  type="submit"
                  disabled={!chatMessage.trim()}
                  className="absolute right-1 w-8 h-8 bg-[#18593A] text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:bg-gray-300 hover:bg-[#114b30] transition-colors"
                >
                  <Send className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bot Toggle Button */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`flex items-center gap-3 px-5 py-3.5 rounded-full shadow-lg shadow-[#18593A]/30 transition-all hover:-translate-y-1 ${isChatOpen ? 'bg-red-50 text-red-600 shadow-red-200/50' : 'bg-[#18593A] text-white hover:bg-[#114b30]'}`}
      >
        {isChatOpen ? (
          <>
            <X className="w-5 h-5" />
            <span className="font-bold text-sm hidden sm:block">Close</span>
          </>
        ) : (
          <>
            <Bot className="w-6 h-6 animate-pulse" />
            <span className="font-bold text-sm">Amruth Assistance</span>
          </>
        )}
      </button>
    </div>
  );
}
