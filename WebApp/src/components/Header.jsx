
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SignUpModal } from '@/components/auth/SignUpModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [initialAuthTab, setInitialAuthTab] = useState('signup');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top cuando cambia la ruta
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  const openAuthModal = (tab) => {
    setInitialAuthTab(tab);
    setIsAuthModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { name: 'INICIO', href: '/' },
    { name: 'PORTAFOLIO', href: '/portafolio' }, // Added Portfolio link
    { name: 'PLANES', href: '/planes' },
    { name: 'RESERVAS', href: '/reservas' },
    { name: 'CONTACTO', href: '/contacto' }
  ];

  // Split menu items for left and right placement
  const leftMenuItems = menuItems.slice(0, Math.ceil(menuItems.length / 2));
  const rightMenuItems = menuItems.slice(Math.ceil(menuItems.length / 2));

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen || location.pathname !== '/' 
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4' // Increased vertical padding
            : 'bg-transparent py-6' // Increased vertical padding for initial state
        }`}
      >
        <nav className="container mx-auto px-6 relative flex items-center justify-between h-14">
          
          {/* Desktop Navigation - Grid Layout for Perfect Symmetry */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center w-full">
            
            {/* Left Side: Navigation Links */}
            <div className="flex items-center justify-end gap-12"> {/* Increased gap-10 to gap-12 */}
              {leftMenuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-sm tracking-widest font-medium transition-all duration-300 hover:text-white relative group ${
                    location.pathname === item.href ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.href ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center px-12"> {/* Increased px-10 to px-12 for more breathing room around logo */}
              <Link to="/" className="group block">
                <img 
                  src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/b370402ce6ff35b060faa7aac79643d0.png" 
                  alt="BWAY Productions Logo" 
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Right Side: Navigation Links + Auth */}
            <div className="flex items-center justify-start gap-12"> {/* Increased gap-10 to gap-12 */}
              {/* Right Menu Links */}
              <div className="flex items-center gap-12"> {/* Increased gap-10 to gap-12 */}
                {rightMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`text-sm tracking-widest font-medium transition-all duration-300 hover:text-white relative group ${
                      location.pathname === item.href ? 'text-white' : 'text-white/60'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full ${
                      location.pathname === item.href ? 'w-full' : ''
                    }`}></span>
                  </Link>
                ))}
              </div>

              {/* Vertical Divider */}
              <div className="h-5 w-[1px] bg-white/20 mx-6"></div> {/* Adjusted ml-4 mr-4 to mx-6 for more space */}

              {/* Auth Buttons - Using new header variants */}
              <div className="flex items-center gap-4"> {/* Increased gap-3 to gap-4 */}
                <Button 
                  variant="header-login" 
                  size="sm" 
                  onClick={() => openAuthModal('login')}
                >
                  Log In
                </Button>
                <Button 
                  variant="header-signup" 
                  size="sm" 
                  onClick={() => openAuthModal('signup')}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile View Layout (Logo Left, Hamburger Right) */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <Link to="/" className="group z-50">
              <img 
                src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/b370402ce6ff35b060faa7aac79643d0.png" 
                alt="BWAY Productions Logo" 
                className="h-10 w-auto"
              />
            </Link>
            
            <button 
              className="text-white relative z-50 p-2 hover:bg-white/10 rounded-full transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 lg:hidden shadow-2xl z-40"
              >
                <div className="container mx-auto px-6 py-8 flex flex-col gap-6 items-center">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-lg tracking-widest font-medium transition-colors duration-300 ${
                        location.pathname === item.href ? 'text-white' : 'text-white/60 hover:text-white'
                      }`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="w-12 h-[1px] bg-white/10 my-2"></div>
                  <div className="flex flex-col gap-4 w-full max-w-xs">
                    <Button 
                      variant="header-login" 
                      className="w-full justify-center gap-2" 
                      onClick={() => openAuthModal('login')}
                    >
                      <LogIn className="w-4 h-4" />
                      Log In
                    </Button>
                    <Button 
                      variant="header-signup" 
                      className="w-full" 
                      onClick={() => openAuthModal('signup')}
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
      
      {/* Sign Up / Login Modal */}
      <SignUpModal 
        open={isAuthModalOpen} 
        onOpenChange={setIsAuthModalOpen} 
        defaultTab={initialAuthTab}
      />
    </>
  );
};

export default Header;
