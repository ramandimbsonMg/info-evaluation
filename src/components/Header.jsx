import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const activeClass = 'text-cyan-600 font-bold';

  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo / Nom du site */}
        <NavLink to='/' className='text-black font-bold text-3xl'>
          Evalution.<span className='text-yellow-300'>mg</span>  
        </NavLink>

        {/* Menu desktop */}
        <ul className='hidden md:flex space-x-8 text-gray-700 font-medium'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : 'hover:text-cyan-600 transition duration-300'
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/social'
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : 'hover:text-cyan-600 transition duration-300'
              }
            >
              Réseau Social
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/catalog'
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : 'hover:text-cyan-600 transition duration-300'
              }
            >
              Catalogue
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/event'
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : 'hover:text-cyan-600 transition duration-300'
              }
            >
              Événements
            </NavLink>
          </li>
        </ul>

        {/* Hamburger menu mobile */}
        <div className='md:hidden flex items-center p-2'>
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className='text-gray-700 text-2xl' />
            ) : (
              <FaBars className='text-gray-700 text-2xl' />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className='md:hidden bg-white px-6 py-4 space-y-4 shadow-lg'>
          {['/', '/social', '/catalog', '/event'].map((path, idx) => {
            const names = [
              'Accueil',
              'Réseau Social',
              'Catalogue',
              'Événements',
            ];
            return (
              <li key={idx}>
                <NavLink
                  to={path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : 'block text-gray-700 hover:text-cyan-600 transition duration-300'
                  }
                >
                  {names[idx]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
