import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacto | BWAY Productions - Hablemos de tu Proyecto</title>
        <meta name="description" content="Ponte en contacto con BWAY Productions para discutir tu proyecto audiovisual. Estamos en San José, Costa Rica, disponibles vía WhatsApp y Email." />
      </Helmet>
      <div className="pt-24">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;