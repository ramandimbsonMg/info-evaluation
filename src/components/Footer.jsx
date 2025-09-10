import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-cyan-600 text-white mt-12'>
      {/* Copyright */}
      <div className='bg-cyan-700 text-center text-sm py-3 mt-4 flex justify-center items-center gap-10'>
        &copy; {new Date().getFullYear()} TIA Evaluation. Tous droits réservés.
        {/* Réseaux sociaux */}
        <div className='flex gap-4 items-center'>
          <a
            href='https://www.facebook.com/teresperant'
            className='hover:text-yellow-300 transition'
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}
