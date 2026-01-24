import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Dribbble as Behance, Dribbble, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AboutMe = () => {
  const { toast } = useToast();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const showToast = () => {
    toast({
      title: '🚧 ¡Función en desarrollo!',
      description: 'Esta característica aún no está implementada, ¡pero puedes solicitarla en tu próximo mensaje! 🚀',
    });
  };

  const socialIcons = [
    { icon: Instagram, name: 'Instagram' },
    { icon: Behance, name: 'Behance' },
    { icon: Dribbble, name: 'Dribbble' },
    { icon: Twitter, name: 'Twitter' },
  ];

  return (
    <div className="relative section-bg film-grain section-padding overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/5d27930c8333fa62eac3b770de571477.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-grafito opacity-90 z-10"></div>

      <motion.div
        className="container mx-auto px-4 relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold uppercase mb-12">ABOUT ME</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-5xl md:text-6xl font-montserrat font-extrabold text-lime-accent">12</span>
                <span className="text-sm text-text-secondary uppercase tracking-widest mt-2">Years of Experience</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-5xl md:text-6xl font-montserrat font-extrabold text-lime-accent">270</span>
                <span className="text-sm text-text-secondary uppercase tracking-widest mt-2">Completed Projects</span>
              </div>
              <div className="flex flex-col items-center md:items-start col-span-2 md:col-span-1 mt-8 md:mt-0">
                <span className="text-5xl md:text-6xl font-montserrat font-extrabold text-lime-accent">50+</span>
                <span className="text-sm text-text-secondary uppercase tracking-widest mt-2">Clients Worldwide</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-surface-highlight p-8 rounded-lg border border-dark-gray-border">
            <div className="space-y-4 font-poppins">
              <p><span className="text-text-secondary">Call Today:</span> <a href="tel:+50671032432" className="hover:text-lime-accent transition-colors">+506 7103-2432</a></p>
              <p><span className="text-text-secondary">Email:</span> <a href="mailto:info@bwayprod.com" className="hover:text-lime-accent transition-colors">info@bwayprod.com</a></p>
            </div>
            <hr className="border-dark-gray-border my-6" />
            <div className="flex items-center space-x-5 mb-8">
              {socialIcons.map((item, index) => (
                <a key={index} href="#" onClick={(e) => { e.preventDefault(); showToast(); }} className="text-text-secondary hover:text-lime-accent transition-all duration-200 hover:-translate-y-0.5">
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <Button variant="default" size="lg" className="w-full" onClick={showToast}>
              MI HISTORIA
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;