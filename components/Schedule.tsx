'use client';

import React, { useState, useEffect } from 'react';

const Schedule = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="schedule" className={`relative flex flex-col justify-center items-center min-w-screen ${isMobile ? 'min-h-[50vh]' : 'min-h-screen'} bg-[#F3EDDD]`}>
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 mt-12 text-[#002315]">AGENDA UNA CITA</h2>
        <p className="text-2xl mb-4 text-center text-[#002315]">
          {isMobile ? 'Haz clic en el botón de abajo para agendar una cita con nosotros.' : 'Utiliza el siguiente formulario para agendar una cita con nosotros.'}
        </p>

        {isMobile ? (
          <div className="flex justify-center items-center bg-[#F3EDDD] p-6 rounded-lg w-full">
            <a href="https://calendar.app.google/Z9S65dh4k9qP5VCE6" target="_blank" rel="noopener noreferrer" className="bg-[#274001] text-white py-2 px-4 rounded-lg">
              AGENDAR
            </a>
          </div>
        ) : (
          <div className="flex justify-center bg-white p-6 rounded-lg shadow-lg w-full h-[80vh] max-h-[850px] md:h-[80vh]">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3881XKpEZRn1MVI1dClwLQK6bqVgJWix6dsbxyKQKj60SgSLN-xOUfiNLF7PI-qWB_j943ko9i?gv=true" 
              className="border-0 w-full h-full" 
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default Schedule;
