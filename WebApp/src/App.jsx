
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
import ShootingStars from '@/components/ShootingStars';
import RunwayLights from '@/components/RunwayLights';
import ScrollProgress from '@/components/ScrollProgress';

function App() {
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
          <ScrollProgress />
          <div className="fixed inset-0 z-0">
            <RunwayLights />
            <ShootingStars />
          </div>
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
