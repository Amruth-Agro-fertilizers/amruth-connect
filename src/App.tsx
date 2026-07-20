import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import OnboardingPage from './components/OnboardingPage';
import DashboardPage from './components/DashboardPage';
import ReportPage from './components/ReportPage';
import CheckoutPage from './components/CheckoutPage';
import ProductsPage from './components/ProductsPage';
import AiAssistantBot from './components/AiAssistantBot';

type ViewState = 'splash' | 'landing' | 'login' | 'onboarding' | 'dashboard' | 'report' | 'checkout' | 'products';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('splash');
  const [checkoutSource, setCheckoutSource] = useState<'report' | 'products'>('report');

  useEffect(() => {
    // We removed the localStorage check so the user can see the splash screen every time.
    setCurrentView('splash');
  }, []);

  return (
    <div className="relative font-sans antialiased text-gray-900 bg-white min-h-screen">
      <AnimatePresence mode="wait">
        {currentView === 'splash' && (
          // @ts-expect-error key prop is standard
          <SplashScreen key="splash" onComplete={() => setCurrentView('landing')} />
        )}
        {currentView === 'landing' && (
          // @ts-expect-error key prop is standard
          <LandingPage key="landing" onNavigate={(view: string) => setCurrentView(view as ViewState)} />
        )}
        {currentView === 'login' && (
          // @ts-expect-error key prop is standard
          <LoginPage key="login" onBack={() => setCurrentView('landing')} onSuccess={() => setCurrentView('onboarding')} />
        )}
        {currentView === 'onboarding' && (
          // @ts-expect-error key prop is standard
          <OnboardingPage key="onboarding" onComplete={() => setCurrentView('dashboard')} />
        )}
        {currentView === 'dashboard' && (
          // @ts-expect-error key prop is standard
          <DashboardPage key="dashboard" onViewReport={() => setCurrentView('report')} onNavigate={(view: string) => setCurrentView(view as ViewState)} />
        )}
        {currentView === 'products' && (
          // @ts-expect-error key prop is standard
          <ProductsPage key="products" onBack={() => setCurrentView('dashboard')} onCheckout={() => {
            setCheckoutSource('products');
            setCurrentView('checkout');
          }} />
        )}
        {currentView === 'report' && (
          // @ts-expect-error key prop is standard
          <ReportPage key="report" onBack={() => setCurrentView('dashboard')} onCheckout={() => {
            setCheckoutSource('report');
            setCurrentView('checkout');
          }} />
        )}
        {currentView === 'checkout' && (
          // @ts-expect-error key prop is standard
          <CheckoutPage key="checkout" onBack={() => setCurrentView(checkoutSource)} />
        )}
      </AnimatePresence>
      {(currentView !== 'splash' && currentView !== 'login') && <AiAssistantBot />}
    </div>
  );
}
