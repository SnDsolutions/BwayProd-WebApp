import React from 'react';
import { Helmet } from 'react-helmet';
import Booking from '@/components/Booking';

const BookingPage = () => {
  return (
    <>
      <Helmet>
        <title>Reservas | BWAY Productions - Agenda tu Sesión Creativa</title>
        <meta name="description" content="Reserva tu sesión de producción audiovisual profesional. Completa el formulario y recibe una propuesta personalizada en menos de 24 horas." />
      </Helmet>
      <div className="pt-24">
        <Booking />
      </div>
    </>
  );
};

export default BookingPage;