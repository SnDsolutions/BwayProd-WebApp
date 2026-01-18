import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: 'Próximamente', role: 'Cliente Satisfecho', content: 'Aquí aparecerán las experiencias de nuestros clientes. ¡Sé el primero en compartir tu historia de éxito!', rating: 5 },
    { id: 2, name: 'Próximamente', role: 'Colaborador Creativo', content: 'Aquí aparecerán las experiencias de nuestros clientes. ¡Sé el primero en compartir tu historia de éxito!', rating: 5 },
    { id: 3, name: 'Próximamente', role: 'Marca Impulsada', content: 'Aquí aparecerán las experiencias de nuestros clientes. ¡Sé el primero en compartir tu historia de éxito!', rating: 5 }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } }
  };

  return (
    <section id="testimonios" className="section-padding bg-grafito">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="section-title"><span className="lime-underline">Testimonios</span></h2>
            <p className="section-subtitle">Lo que nuestros clientes y colaboradores dicen de nosotros.</p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-grafito-soft p-8 rounded-lg border border-dark-gray-border flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-lime-accent fill-lime-accent" />
                ))}
              </div>
              <p className="text-text-secondary mb-6 italic flex-grow">"{testimonial.content}"</p>
              <div>
                <p className="font-extrabold text-white">{testimonial.name}</p>
                <p className="text-sm text-text-secondary/70">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;