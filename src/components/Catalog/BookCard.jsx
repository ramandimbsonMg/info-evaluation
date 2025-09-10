import React from 'react';

export default function BookCard({ book }) {
  return (
    <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2'>
      {/* Image couverture */}
      <div className='overflow-hidden'>
        <img
          src={book.cover}
          alt={book.title}
          className='w-full h-52 object-cover transition-transform duration-300 hover:scale-105'
        />
      </div>

      {/* Infos du livre */}
      <div className='p-4 space-y-1'>
        <h3 className='text-lg font-bold text-cyan-700'>{book.title}</h3>
        <p className='text-gray-600'>{book.author}</p>
        <small className='text-gray-400'>{book.year}</small>
      </div>
    </div>
  );
}
