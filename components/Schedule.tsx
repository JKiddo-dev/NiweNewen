'use client';

import React from 'react';

const Schedule = () => {
  return (
    <section id="schedule" className='relative flex flex-col justify-center items-center min-w-screen min-h-screen bg-[#F3EDDD]'>
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 mt-12 text-[#002315]">AGENDA UNA CITA</h2>
        <p className="mb-4 text-center text-[#002315]">Utiliza el siguiente formulario para agendar una cita con nosotros.</p>
        
        <div className="flex justify-center bg-white p-6 rounded-lg shadow-lg" style={{ width: '100%', height: '900px' }}>
          <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3881XKpEZRn1MVI1dClwLQK6bqVgJWix6dsbxyKQKj60SgSLN-xOUfiNLF7PI-qWB_j943ko9i?gv=true" style={{ border: 0, width: '100%', height: '100%' }} frameBorder="0"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
