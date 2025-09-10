import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import PostCard from './PostCard';

export default function PostsList() {
  const { posts } = useContext(AppContext);

  return (
    <div className='mt-6 max-w-6xl mx-auto'>
      {posts.length ? (
        <div className='grid grid-cols-2 gap-6 justify-center'>
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-400 mt-6'>
          Aucun post pour le moment. Soyez le premier à partager !
        </p>
      )}
    </div>
  );
}
