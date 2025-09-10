import React, { useState } from 'react';
import BookCard from '@/components/Catalog/BookCard';
import books from '@/assets/data/books';

export default function CatalogPage() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('');

  const filtered = books
    .filter(
      (b) =>
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.author.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title);
      if (sort === 'author') return a.author.localeCompare(b.author);
      if (sort === 'year') return b.year - a.year;
      return 0;
    });

  return (
    <div className='container mx-auto max-w-7xl pt-6 lg:px-0 px-3'>
      {/* --- Barre de recherche & tri --- */}
      <div className='flex flex-col sm:flex-row gap-4 mb-6 items-center justify-end'>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Rechercher titre ou auteur...'
          className='w-full p-3 border border-cyan-200 lg:w-80 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition'
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className='w-full p-3 border border-cyan-200 lg:w-[200px] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition'
        >
          <option value=''>Trier</option>
          <option value='title'>Titre</option>
          <option value='author'>Auteur</option>
          <option value='year'>Année</option>
        </select>
      </div>

      {/* --- Liste des livres --- */}
      {filtered.length ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 px-3 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-500 mt-12'>
          Aucun livre trouvé pour votre recherche.
        </p>
      )}
    </div>
  );
}
