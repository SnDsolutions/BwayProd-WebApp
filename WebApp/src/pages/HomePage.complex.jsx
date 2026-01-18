
import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Plans from '@/components/Plans';
import CallToAction from '@/components/CallToAction';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Plans />
      <CallToAction />
    </>
  );
};

export default HomePage;
