import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaBook, FaCalendarAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='relative bg-gray-50 min-h-screen flex flex-col'>
      {/* Hero Section */}
      <div className='relative lg:h-full h-screen bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-white overflow-hidden'>
        <div className='container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between px-6 py-16 md:py-24'>
          {/* Texte Hero */}
          <div className='md:w-1/2 space-y-6 z-20 lg:pt-0 pt-20 lg:text-start text-center'>
            <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight animate-fadeIn'>
              Bienvenue sur{' '}
              <span className='text-yellow-300'>TIA Evaluation</span>
            </h1>
            <p className='text-lg md:text-xl text-white/90 animate-fadeIn delay-200'>
              Explorez les sections et commencez votre expérience
              d’apprentissage et de partage.
            </p>
            <div className='flex flex-col lg:justify-start justify-center items-center sm:flex-row gap-4 mt-6 animate-fadeIn delay-400'>
              <Link
                to='/social'
                className='px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-white/90 transition'
              >
                Réseau Social
              </Link>
              <Link
                to='/catalog'
                className='px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow hover:bg-white/90 transition'
              >
                Catalogue de livres
              </Link>
              <Link
                to='/event'
                className='px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-white/90 transition'
              >
                Événements
              </Link>
            </div>
          </div>
          {/* Image Hero */}
          <div className='md:w-1/2 lg:opacity-100 opacity-20 z-10 mt-10 md:mt-0 lg:relative absolute animate-float'>
            <img
              src='/assets/images/adolescent-male-bulle-dialogue.png'
              alt='Livres et éducation'
              className='rounded-xl max-w-full h-auto'
            />
          </div>
        </div>

        {/* Ondes décoratives flottantes */}
        <div className='absolute bottom-10 right-10 w-32 h-32 bg-cyan-600 rounded-full animate-float'></div>
      </div>

      {/* Section Blocs */}
      <div className='container mx-auto max-w-7xl pt-12 pb-16 px-6 grid grid-cols-2 md:grid-cols-3 gap-8'>
        {/* Bloc Réseau Social */}
        <div className='p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 animate-slideUp'>
          <div className='flex justify-center mb-4'>
            <div className='w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center animate-bounce'>
              <FaUsers className='text-cyan-600 text-3xl' />
            </div>
          </div>
          <h3 className='text-xl font-bold mb-2 text-cyan-700 text-center'>
            Réseau Social
          </h3>
          <p className='text-gray-600 text-center'>
            Partagez vos idées, posts et suivez vos amis.
          </p>
        </div>

        {/* Bloc Catalogue de livres */}
        <div className='p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 animate-slideUp delay-100'>
          <div className='flex justify-center mb-4'>
            <div className='w-16 h-16 rounded-full bg-green-100 flex items-center justify-center animate-bounce'>
              <FaBook className='text-green-600 text-3xl' />
            </div>
          </div>
          <h3 className='text-xl font-bold mb-2 text-green-700 text-center'>
            Catalogue de livres
          </h3>
          <p className='text-gray-600 text-center'>
            Explorez notre collection de livres et trouvez votre lecture idéale.
          </p>
        </div>

        {/* Bloc Événements */}
        <div className='p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 animate-slideUp delay-200'>
          <div className='flex justify-center mb-4'>
            <div className='w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center animate-bounce'>
              <FaCalendarAlt className='text-purple-600 text-3xl' />
            </div>
          </div>
          <h3 className='text-xl font-bold mb-2 text-purple-700 text-center'>
            Événements
          </h3>
          <p className='text-gray-600 text-center'>
            Inscrivez-vous à des événements et participez activement.
          </p>
        </div>
      </div>

    </div>
  );
}
