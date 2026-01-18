
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import MainLayout from '@/components/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import PortfolioPage from '@/pages/PortfolioPage';
import PlansPage from '@/pages/PlansPage';
import BookingPage from '@/pages/BookingPage';
import ContactPage from '@/pages/ContactPage';
import LoginPage from '@/pages/LoginPage';
import BackgroundVideo from '@/components/BackgroundVideo';
// import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import LoadingScreen from '@/components/LoadingScreen';
import GSAPAnimations from '@/components/GSAPAnimations';
import SmoothScroll from '@/components/SmoothScroll';
import TextAnimations from '@/components/TextAnimations';
import OptimizedBlackHole from '@/components/OptimizedBlackHole';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>BWAY Productions | Productora Audiovisual en Costa Rica</title>
        <meta name="description" content="Creación de contenido cinematográfico profesional: videos, fotografía, branding y asesorías creativas. Descubre el poder del arte visual con propósito." />
        <meta name="keywords" content="bway productions, productora audiovisual, videos costa rica, fotografía profesional, reels, contenido digital, dron 360" />
        <meta property="og:title" content="BWAY Productions | Productora Audiovisual en Costa Rica" />
        <meta property="og:description" content="Transformamos ideas en experiencias visuales. Producción audiovisual profesional para marcas, artistas y emprendedores." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@800&display=swap" />
      </Helmet>
      
      <Router>
        <div className="min-h-screen bg-grafito text-white scroll-smooth relative">
          {/* Loading Screen - Simplified */}
          {isLoading && (
            <div className="fixed inset-0 z-[9999] bg-grafito flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-lime-accent rounded-full flex items-center justify-center mb-4 animate-spin">
                  <div className="w-10 h-10 bg-grafito rounded-full"></div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Cargando...</h2>
                <div className="w-80 h-2 bg-grafito-soft rounded-full overflow-hidden mx-auto">
                  <div className="h-full bg-lime-accent animate-pulse"></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Custom Cursor - Disabled */}
          {/* {showCursor && <CustomCursor />} */}
          
          {/* GSAP Animations - Temporarily disabled */}
          {/* <GSAPAnimations /> */}
          
          {/* Smooth Scroll - Temporarily disabled */}
          {/* <SmoothScroll /> */}
          
          {/* Text Animations - Temporarily disabled */}
          {/* <TextAnimations /> */}
          
          {/* Optimized Black Hole Effect - Temporarily disabled */}
          {/* <OptimizedBlackHole /> */}
          
          {/* Scroll Progress */}
          <ScrollProgress />
          
          {/* Background Video */}
          <BackgroundVideo />
          
          <div className="relative z-10">
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/servicios" element={<ServicesPage />} />
                <Route path="/portafolio" element={<PortfolioPage />} />
                <Route path="/planes" element={<PlansPage />} />
                <Route path="/reservas" element={<BookingPage />} />
                <Route path="/contacto" element={<ContactPage />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Toaster />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
