import React from 'react';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Plans from '@/components/Plans';
import Workflow from '@/components/Workflow';
import Faq from '@/components/Faq';
import CallToAction from '@/components/CallToAction';
import ValueProposition from '@/components/ValueProposition';
import VideoCarousel from '@/components/VideoCarousel';

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* ValueProposition component removed as per user request */}
      <VideoCarousel />
      {/* Portfolio component removed as per user request */}
      <Plans />
      <Workflow />
      <Faq />
      <CallToAction />
    </>
  );
};

export default HomePage;