import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import PostCard from './PostCard';

export default function PostsList() {
  const { posts } = useContext(AppContext);

  // pagination locale
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className='mt-2 max-w-6xl mx-auto px-4'>
      {posts.length ? (
        <>
          {/* Liste des posts */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {currentPosts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className='flex justify-center items-center gap-2 mt-8'>
              {/* Bouton précédent */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === 1
                    ? 'text-gray-400 border-gray-200 cursor-not-allowed'
                    : 'text-cyan-600 border-cyan-300 hover:bg-cyan-50'
                }`}
              >
                Précédent
              </button>

              {/* Numéros de page */}
              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-1 rounded-md border transition ${
                      currentPage === page
                        ? 'bg-cyan-600 text-white border-cyan-600'
                        : 'text-cyan-600 border-cyan-300 hover:bg-cyan-50'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Bouton suivant */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === totalPages
                    ? 'text-gray-400 border-gray-200 cursor-not-allowed'
                    : 'text-cyan-600 border-cyan-300 hover:bg-cyan-50'
                }`}
              >
                Suivant
              </button>
            </div>
          )}
        </>
      ) : (
        <p className='text-center text-gray-400 mt-6'>
          Aucun post pour le moment. Soyez le premier à partager !
        </p>
      )}
    </div>
  );
}
