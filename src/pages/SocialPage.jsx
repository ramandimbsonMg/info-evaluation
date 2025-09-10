import React from 'react';
import PostForm from '../components/Social/PostForm';
import PostsList from '../components/Social/PostsList';

export default function SocialPage() {
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-center mb-6 text-cyan-700'>
        Mini-Réseau Social Littéraire
      </h1>

      <div className='flex flex-col md:flex-row gap-6 max-w-6xl mx-auto'>
        {/* Form sticky sur desktop */}
        <div className='md:w-1/3 sticky top-6 self-start'>
          <PostForm />
        </div>

        {/* Liste des posts scrollable */}
        <div className='md:w-2/3 max-h-[80vh] overflow-y-auto'>
          <PostsList />
        </div>
      </div>
    </div>
  );
}
