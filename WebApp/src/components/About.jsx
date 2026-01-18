import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="sobre" className="section-padding bg-grafito">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2 variants={cardVariants} className="section-title">
            <span className="lime-underline">Nuestro Enfoque</span>
          </motion.h2>
          <motion.p variants={cardVariants} className="section-subtitle">
            BWAY PROD nació en Costa Rica como la visión de un productor visual apasionado por convertir ideas en arte. Desde 2020, combinamos técnica, emoción y propósito para crear experiencias que inspiran.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="bg-grafito-soft border border-dark-gray-border p-8 rounded-lg"
          >
            <Target className="w-10 h-10 text-lime-accent mb-4" />
            <h3 className="text-2xl font-extrabold mb-4">Misión</h3>
            <p className="text-text-secondary leading-relaxed">
              Crear contenido visual auténtico y profesional que conecte emocionalmente con las personas, transformando ideas en experiencias memorables.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="bg-grafito-soft border border-dark-gray-border p-8 rounded-lg"
          >
            <Eye className="w-10 h-10 text-lime-accent mb-4" />
            <h3 className="text-2xl font-extrabold mb-4">Visión</h3>
            <p className="text-text-secondary leading-relaxed">
              Ser la productora audiovisual líder en Costa Rica, Latinoamérica y el mundo, fusionando arte, innovación y conciencia en cada proyecto.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;