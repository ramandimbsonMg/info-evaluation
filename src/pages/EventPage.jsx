import React from 'react';
import EventSignup from '../components/Event/EventSignup';

export default function EventPage() {
  const fakeEvent = {
    title: 'Atelier React',
    date: '10 Septembre 2025',
    place: 'Salle 101',
  };

  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-3xl font-bold text-center mb-6 text-cyan-700'>
        Événements
      </h1>
      <EventSignup event={fakeEvent} />
    </div>
  );
}
