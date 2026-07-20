import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Mail, Phone, Map, Plus, Trash2, CheckCircle2 } from 'lucide-react';

interface LandDetail {
  id: string;
  surveyNumber: string;
  area: string;
  crop: string;
}

interface ProfileSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileSettingsModal({ isOpen, onClose }: ProfileSettingsModalProps) {
  const [email, setEmail] = useState('farmer@example.com');
  const [primaryPhone, setPrimaryPhone] = useState('+91 9876543210');
  const [secondaryPhone, setSecondaryPhone] = useState('');
  const [lands, setLands] = useState<LandDetail[]>([
    { id: '1', surveyNumber: 'Sy. No. 45/2', area: '2.5 Acres', crop: 'Sugarcane' }
  ]);
  const [isSaved, setIsSaved] = useState(false);

  const handleAddLand = () => {
    setLands([...lands, { id: Date.now().toString(), surveyNumber: '', area: '', crop: '' }]);
  };

  const handleRemoveLand = (id: string) => {
    setLands(lands.filter(land => land.id !== id));
  };

  const handleUpdateLand = (id: string, field: keyof LandDetail, value: string) => {
    setLands(lands.map(land => land.id === id ? { ...land, [field]: value } : land));
  };

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-[#18593A] px-6 py-5 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Profile Settings</h2>
                  <p className="text-emerald-100 text-sm">Update your information</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
              
              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#18593A]" /> Email ID
                    </label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#18593A]" /> Primary Phone
                    </label>
                    <input 
                      type="tel" 
                      value={primaryPhone}
                      onChange={(e) => setPrimaryPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" /> Secondary Phone (Optional)
                    </label>
                    <input 
                      type="tel" 
                      value={secondaryPhone}
                      onChange={(e) => setSecondaryPhone(e.target.value)}
                      placeholder="+91"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all bg-gray-50"
                    />
                  </div>
                </div>
              </div>

              {/* Land Details */}
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Map className="w-5 h-5 text-[#18593A]" /> Land Details
                  </h3>
                  <button 
                    onClick={handleAddLand}
                    className="flex items-center gap-1.5 text-sm font-bold text-[#18593A] bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Add Land
                  </button>
                </div>
                
                <div className="space-y-4">
                  {lands.map((land, index) => (
                    <div key={land.id} className="bg-gray-50 p-5 rounded-xl border border-gray-200 relative group">
                      {lands.length > 1 && (
                        <button 
                          onClick={() => handleRemoveLand(land.id)}
                          className="absolute -top-3 -right-3 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-red-500 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all shadow-sm opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-600 mb-1.5">Survey Number</label>
                          <input 
                            type="text" 
                            value={land.surveyNumber}
                            onChange={(e) => handleUpdateLand(land.id, 'surveyNumber', e.target.value)}
                            placeholder="E.g. 45/2"
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] text-sm bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-600 mb-1.5">Area</label>
                          <input 
                            type="text" 
                            value={land.area}
                            onChange={(e) => handleUpdateLand(land.id, 'area', e.target.value)}
                            placeholder="E.g. 2 Acres"
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] text-sm bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-600 mb-1.5">Crop</label>
                          <input 
                            type="text" 
                            value={land.crop}
                            onChange={(e) => handleUpdateLand(land.id, 'crop', e.target.value)}
                            placeholder="E.g. Sugarcane"
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] text-sm bg-white"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  {lands.length === 0 && (
                    <div className="text-center py-6 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                      <p className="text-gray-500 text-sm font-medium">No land details added. Click "Add Land" to add.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 shrink-0 flex items-center justify-end gap-3 rounded-b-2xl">
              <button 
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
                disabled={isSaved}
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                disabled={isSaved}
                className="px-6 py-2.5 rounded-xl font-bold text-white bg-[#18593A] hover:bg-[#114b30] shadow-md hover:shadow-lg transition-all flex items-center gap-2 w-32 justify-center"
              >
                {isSaved ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" /> Saved
                  </>
                ) : (
                  'Save Profile'
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
