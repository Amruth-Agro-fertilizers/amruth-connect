import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, MapPin, Map, Sprout, ChevronLeft, ChevronRight, Check, Leaf, Plus, Trash2, Mail, Phone, Home } from 'lucide-react';
import ProfileSettingsModal from './ProfileSettingsModal';

interface OnboardingPageProps {
  onComplete: () => void;
}

export default function OnboardingPage({ onComplete }: OnboardingPageProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 2;

  const [personalDetails, setPersonalDetails] = useState({
    fullName: '',
    fatherName: '',
    email: '',
    secondaryPhone: '',
    state: '',
    district: '',
    taluk: '',
    hobli: '',
    village: '',
    pincode: '',
    address: '',
  });

  const [landDetails, setLandDetails] = useState([
    {
      id: Date.now().toString(),
      surveyNumber: '',
      landArea: '',
      primaryCrop: '',
      secondaryCrop: '',
      irrigationSystem: '',
      soilType: '',
      boreWells: '',
    }
  ]);

  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  const handleLandChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newLandDetails = [...landDetails];
    newLandDetails[index] = { ...newLandDetails[index], [e.target.name]: e.target.value };
    setLandDetails(newLandDetails);
  };

  const addLand = () => {
    setLandDetails([
      ...landDetails,
      {
        id: Date.now().toString(),
        surveyNumber: '',
        landArea: '',
        primaryCrop: '',
        secondaryCrop: '',
        irrigationSystem: '',
        soilType: '',
        boreWells: '',
      }
    ]);
  };

  const removeLand = (index: number) => {
    const newLandDetails = landDetails.filter((_, i) => i !== index);
    setLandDetails(newLandDetails);
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
    else onComplete();
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <nav className="bg-[#18593A] px-6 py-4 flex items-center justify-between shadow-md z-10 relative">
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-emerald-400" />
          <span className="text-xl font-bold text-white tracking-tight">
            AMRUTH <span className="font-medium text-emerald-100">Connect</span>
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <span className="hidden sm:inline-block text-white">EN | ಕನ್ನಡ</span>
          <div 
            onClick={() => setIsProfileOpen(true)}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 border-2 border-white/20 transition-all shadow-sm"
          >
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </nav>

      <ProfileSettingsModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center py-10 px-4 sm:px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#18593A]/5 to-transparent -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#18593A]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-48 -left-24 w-72 h-72 bg-[#F59E0B]/5 rounded-full blur-3xl -z-10"></div>

        <div className="w-full max-w-3xl">
          {/* Progress Indicator */}
          <div className="mb-8 px-12 md:px-24">
            <div className="flex items-start justify-between relative">
              <div className="absolute left-[1.25rem] right-[1.25rem] top-5 -translate-y-1/2 h-[3px] bg-gray-200 rounded-full z-0 overflow-hidden">
                <div 
                  className="absolute left-0 top-0 h-full bg-[#18593A] transition-all duration-500 ease-in-out"
                  style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                ></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  step >= 1 ? 'bg-[#18593A] text-white shadow-lg shadow-[#18593A]/20' : 'bg-white text-gray-400 border-2 border-gray-200'
                }`}>
                  {step > 1 ? <Check className="w-5 h-5" /> : '1'}
                </div>
                <span className={`text-xs mt-2 font-bold ${step >= 1 ? 'text-[#18593A]' : 'text-gray-400'}`}>Personal Info</span>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  step >= 2 ? 'bg-[#18593A] text-white shadow-lg shadow-[#18593A]/20' : 'bg-white text-gray-400 border-2 border-gray-200'
                }`}>
                  {step > 2 ? <Check className="w-5 h-5" /> : '2'}
                </div>
                <span className={`text-xs mt-2 font-bold ${step >= 2 ? 'text-[#18593A]' : 'text-gray-400'}`}>Land & Crops</span>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 sm:p-10 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Details</h2>
                      <p className="text-gray-500">Tell us a bit about yourself so we can personalize your experience.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                              <User className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              name="fullName"
                              value={personalDetails.fullName}
                              onChange={handlePersonalChange}
                              className="block w-full pl-11 pr-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                              placeholder="E.g., Raju Patil"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Father's Name <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                              <User className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              name="fatherName"
                              value={personalDetails.fatherName}
                              onChange={handlePersonalChange}
                              className="block w-full pl-11 pr-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                              placeholder="E.g., Ramappa Patil"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email (Optional)</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                              <Mail className="w-4 h-4" />
                            </div>
                            <input
                              type="email"
                              name="email"
                              value={personalDetails.email}
                              onChange={handlePersonalChange}
                              className="block w-full pl-11 pr-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                              placeholder="you@example.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Secondary Phone (Optional)</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                              <Phone className="w-4 h-4" />
                            </div>
                            <input
                              type="tel"
                              name="secondaryPhone"
                              value={personalDetails.secondaryPhone}
                              onChange={handlePersonalChange}
                              className="block w-full pl-11 pr-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                              placeholder="Alternative mobile number"
                            />
                          </div>
                        </div>
                      </div>

                      <hr className="border-gray-100" />

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">State <span className="text-red-500">*</span></label>
                          <select
                            name="state"
                            value={personalDetails.state}
                            onChange={handlePersonalChange}
                            className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all appearance-none"
                          >
                            <option value="">Select State</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Telangana">Telangana</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">District <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            name="district"
                            value={personalDetails.district}
                            onChange={handlePersonalChange}
                            className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                            placeholder="E.g., Dharwad"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Taluk <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            name="taluk"
                            value={personalDetails.taluk}
                            onChange={handlePersonalChange}
                            className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                            placeholder="E.g., Hubballi"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Hobli <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            name="hobli"
                            value={personalDetails.hobli}
                            onChange={handlePersonalChange}
                            className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                            placeholder="Hobli HQ"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Village / City <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            name="village"
                            value={personalDetails.village}
                            onChange={handlePersonalChange}
                            className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                            placeholder="Your village"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            name="pincode"
                            value={personalDetails.pincode}
                            onChange={handlePersonalChange}
                            className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                            placeholder="E.g., 580001"
                            maxLength={6}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Detailed Address <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <div className="absolute top-3 left-4 flex items-start pointer-events-none text-gray-400">
                            <Home className="w-4 h-4" />
                          </div>
                          <textarea
                            name="address"
                            value={personalDetails.address}
                            onChange={handlePersonalChange}
                            rows={3}
                            className="block w-full pl-11 pr-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                            placeholder="House number, Street, Landmark"
                          ></textarea>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 flex justify-between items-end">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Land & Crop Information</h2>
                        <p className="text-gray-500 text-sm">Add details for all your agricultural land holdings.</p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {landDetails.map((land, index) => (
                        <motion.div
                          key={land.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-6 bg-gray-50 rounded-2xl border border-gray-200 relative group"
                        >
                          <div className="flex justify-between items-center mb-6">
                            <h3 className="text-base font-bold text-[#18593A] flex items-center gap-2">
                              <Map className="w-5 h-5" /> Land Parcel {index + 1}
                            </h3>
                            {landDetails.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeLand(index)}
                                className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Survey Number <span className="text-red-500">*</span></label>
                              <input
                                type="text"
                                name="surveyNumber"
                                value={land.surveyNumber}
                                onChange={(e) => handleLandChange(index, e)}
                                className="block w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                                placeholder="E.g., 42/B"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Total Area (Acres) <span className="text-red-500">*</span></label>
                              <input
                                type="number"
                                name="landArea"
                                value={land.landArea}
                                onChange={(e) => handleLandChange(index, e)}
                                className="block w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                                placeholder="E.g., 5.5"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Primary Crop <span className="text-red-500">*</span></label>
                              <input
                                type="text"
                                name="primaryCrop"
                                value={land.primaryCrop}
                                onChange={(e) => handleLandChange(index, e)}
                                className="block w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                                placeholder="E.g., Paddy"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Secondary Crop (Optional)</label>
                              <input
                                type="text"
                                name="secondaryCrop"
                                value={land.secondaryCrop}
                                onChange={(e) => handleLandChange(index, e)}
                                className="block w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                                placeholder="E.g., Sugarcane"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Irrigation System <span className="text-red-500">*</span></label>
                              <select
                                name="irrigationSystem"
                                value={land.irrigationSystem}
                                onChange={(e) => handleLandChange(index, e)}
                                className="block w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all appearance-none"
                              >
                                <option value="">Select</option>
                                <option value="Rainfed">Rainfed</option>
                                <option value="Drip">Drip</option>
                                <option value="Sprinkler">Sprinkler</option>
                                <option value="Canal">Canal</option>
                                <option value="Tube Well">Tube Well</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Soil Type <span className="text-red-500">*</span></label>
                              <select
                                name="soilType"
                                value={land.soilType}
                                onChange={(e) => handleLandChange(index, e)}
                                className="block w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all appearance-none"
                              >
                                <option value="">Select</option>
                                <option value="Red">Red Soil</option>
                                <option value="Black">Black Soil</option>
                                <option value="Alluvial">Alluvial Soil</option>
                                <option value="Laterite">Laterite Soil</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Bore Wells (Optional)</label>
                              <input
                                type="number"
                                name="boreWells"
                                value={land.boreWells}
                                onChange={(e) => handleLandChange(index, e)}
                                className="block w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all"
                                placeholder="Count"
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      <button
                        type="button"
                        onClick={addLand}
                        className="w-full py-4 border-2 border-dashed border-[#18593A]/30 rounded-2xl flex items-center justify-center text-[#18593A] font-semibold hover:bg-[#18593A]/5 transition-colors gap-2"
                      >
                        <Plus className="w-5 h-5" /> Add Another Land Parcel
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Form Controls */}
            <div className="bg-white px-8 py-5 border-t border-gray-100 flex items-center justify-between shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] relative z-10">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center text-gray-600 hover:text-gray-900 font-semibold transition-colors px-4 py-2"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </button>
              ) : (
                <div></div> // Empty div to keep 'Next' button alignment correct
              )}
              
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center px-8 py-3.5 bg-[#18593A] text-white font-bold rounded-xl shadow-lg shadow-[#18593A]/30 hover:bg-[#114b30] hover:shadow-xl hover:-translate-y-0.5 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#18593A]"
              >
                {step === totalSteps ? 'Complete Profile' : 'Continue'}
                {step < totalSteps && <ChevronRight className="w-5 h-5 ml-1" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
