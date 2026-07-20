import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Search, Filter, ShoppingCart, Plus, Minus, CheckCircle, Leaf, Sparkles, User, ShoppingBag } from 'lucide-react';
import ProfileSettingsModal from './ProfileSettingsModal';

import product1Image from '../assets/images/regenerated_image_1781068049533.jpg';
import product2Image from '../assets/images/regenerated_image_1781068051813.jpg';

interface FertilizerProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface FertilizerType {
  id: string;
  name: string;
  products: FertilizerProduct[];
}

const FERTILIZERS_DATA: FertilizerType[] = [
  {
    id: 'bio-fertilizers',
    name: 'BIO FERTILIZERS (NUTRIENT MANAGEMENT)',
    products: [
      {
        id: 1,
        name: 'AMRUTH BioBoost N',
        price: 450,
        description: 'Enhances nitrogen fixation and improves crop yield naturally.',
        image: product1Image
      },
      {
        id: 2,
        name: 'AMRUTH Soil Vital',
        price: 650,
        description: 'Improves soil health and fertility for long-term productivity.',
        image: product2Image
      }
    ]
  },
  {
    id: 'bio-fungicides',
    name: 'BIO FUNGICIDES (DISEASE MANAGEMENT)',
    products: [
      {
        id: 3,
        name: 'ALCARE Bio Fungicide',
        price: 340,
        description: 'Effective neem-oil based bio fungicide for rot diseases.',
        image: product2Image
      }
    ]
  },
  {
    id: 'micronutrients',
    name: 'MICRONUTRIENT LIQUIDS',
    products: [
      {
        id: 4,
        name: 'ALTRA-9 Micronutrients',
        price: 520,
        description: 'Balanced liquid micronutrient formula for essential plant health.',
        image: product1Image
      }
    ]
  },
  {
    id: 'organic-manure',
    name: 'ORGANIC MANURE',
    products: [
      {
        id: 5,
        name: 'AYUSH GOLD +',
        price: 890,
        description: 'Premium organic manure fertilizer for home gardening and farming.',
        image: product1Image
      }
    ]
  }
];

interface ProductsPageProps {
  onBack: () => void;
  onCheckout: () => void;
}

export default function ProductsPage({ onBack, onCheckout }: ProductsPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<Record<number, number>>({});
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const categories = ['All', ...FERTILIZERS_DATA.map(type => type.name)];

  const filteredCategories = FERTILIZERS_DATA.filter(t => activeCategory === 'All' || t.name === activeCategory)
    .map(t => {
      const matchSearchProds = t.products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...t, products: matchSearchProds };
    })
    .filter(t => t.products.length > 0);

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
      <nav className="bg-[#18593A] px-6 lg:px-8 py-4 flex items-center justify-between text-white sticky top-0 z-40 shadow-sm">
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
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 mb-20">
        <div className="flex items-center gap-3 mb-8 cursor-pointer w-fit group" onClick={onBack}>
          <ArrowLeft className="w-6 h-6 text-gray-900 group-hover:-translate-x-1 transition-transform" />
          <h1 className="text-2xl md:text-[32px] font-extrabold text-gray-900 tracking-tight">Products</h1>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products, diseases, or categories..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#18593A]/20 focus:border-[#18593A] transition-all bg-white shadow-sm"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors shadow-sm">
            <Filter className="w-5 h-5" /> Filters
          </button>
        </div>

        {/* Categories Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-3 mb-8 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all border shadow-sm flex items-center justify-center ${
                activeCategory === cat 
                  ? 'bg-[#18593A] text-white border-[#18593A] shadow-emerald-900/10' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 hover:text-[#18593A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Sections */}
        {filteredCategories.length > 0 ? (
          <div className="flex flex-col gap-12 mb-12">
            {filteredCategories.map((categoryGroup) => (
              <div key={categoryGroup.id}>
                <h2 className="text-xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider border-b border-gray-200 pb-2">
                  {categoryGroup.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryGroup.products.map((product) => (
                    <motion.div 
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] overflow-hidden flex flex-col group hover:border-emerald-200 hover:shadow-lg transition-all"
                    >
                      <div className="h-48 bg-gray-50 relative overflow-hidden flex items-center justify-center p-6 border-b border-gray-100">
                        <img src={product.image} alt={product.name} className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                        
                        <div className="mt-auto">
                          <div className="text-xl font-bold text-emerald-600 mb-4 tracking-tight">₹ {product.price}</div>
                          {!cart[product.id] ? (
                            <button 
                              onClick={() => addToCart(product.id)}
                              className="w-full flex items-center justify-center gap-2 bg-[#18593A] hover:bg-[#114b30] text-white font-bold py-3 rounded-xl transition-colors shadow-md active:scale-95"
                            >
                              <ShoppingCart className="w-4 h-4" /> Add to Cart
                            </button>
                          ) : (
                            <div className="flex items-center justify-between bg-emerald-50 rounded-xl p-1.5 border border-emerald-200">
                              <button 
                                onClick={() => removeFromCart(product.id)}
                                className="bg-white p-2 rounded-lg text-[#18593A] shadow-sm hover:bg-emerald-100 transition-colors active:scale-95"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-bold text-[#18593A] px-4">{cart[product.id]} in Cart</span>
                              <button 
                                onClick={() => addToCart(product.id)}
                                className="bg-[#18593A] p-2 rounded-lg text-white shadow-sm hover:bg-[#114b30] transition-colors active:scale-95"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">We couldn't find anything matching "{searchQuery}" in {activeCategory}.</p>
          </div>
        )}
      </main>

      {/* Floating Cart Panel - appears only when items are in cart */}
      <AnimatePresence>
        {cartItemsCount > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 border-t border-gray-200 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center relative">
                  <ShoppingCart className="w-6 h-6 text-[#18593A]" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                    {cartItemsCount}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-0.5 text-lg">Your Cart</h4>
                  <p className="text-xs font-semibold text-[#18593A] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 w-fit">
                    {cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'} added
                  </p>
                </div>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#18593A] text-white font-bold rounded-xl hover:bg-[#114b30] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Go to Cart <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
