import React, { useContext, useState } from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { AppContext } from '../../context/AppContext';

export default function PostCard({ post }) {
  const { posts, setPosts } = useContext(AppContext);

  // --- État local : savoir si l'utilisateur a liké ce post ---
  const [liked, setLiked] = useState(false);

  /**
   * Fonction toggle du like :
   * - Si pas liké -> +1
   * - Si déjà liké -> -1
   */
  const handleLike = () => {
    setPosts(
      posts.map((p) =>
        p.id === post.id ? { ...p, likes: p.likes + (liked ? -1 : 1) } : p
      )
    );
    setLiked(!liked);
  };

  /**
   * Génère les initiales du nom.
   * Exemple : "John Doe" -> "JD"
   */
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  /**
   * Palette de couleurs dynamiques pour avatars.
   * Style proche de WhatsApp.
   */
  const colors = [
    'bg-cyan-600',
    'bg-green-600',
    'bg-blue-600',
    'bg-purple-600',
    'bg-orange-600',
    'bg-pink-600',
    'bg-teal-600',
  ];

  /**
   * Retourne une couleur d'avatar selon la 1ère lettre du prénom.
   */
  const getAvatarColor = (name) => {
    const char = name.charAt(0).toUpperCase();
    const index = (char.charCodeAt(0) - 65) % colors.length;
    return colors[index];
  };

  return (
    <div
      className='flex flex-col justify-between p-5 w-full 
                 bg-gray-50 rounded-xl shadow-sm border border-gray-200 
                 hover:shadow-md transition'
    >
      {/* --- Header avec avatar + infos utilisateur --- */}
      <div className='flex items-center gap-3 mb-3'>
        {/* Avatar dynamique (initiales + couleur) */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center 
                     text-white font-bold text-lg ${getAvatarColor(post.name)}`}
        >
          {getInitials(post.name)}
        </div>

        <div className='flex flex-col'>
          <strong className='text-gray-800'>{post.name}</strong>
          <small className='text-gray-400 text-xs'>
            {new Date(post.createdAt).toLocaleString()}
          </small>
        </div>
      </div>

      {/* --- Contenu du post --- */}
      <p className='text-gray-700 mb-3'>{post.text}</p>
          <hr />
      {/* --- Bouton Like (toggle) --- */}
      <div className='flex items-center gap-2 mt-1'>
        <button
          onClick={handleLike}
          className={`flex items-center justify-center h-10 w-10 rounded-full transition
                      ${
                        liked
                          ? 'bg-cyan-100 text-cyan-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
        >
          {liked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
        </button>
        <span className='text-sm text-gray-600 font-medium'>{post.likes}</span>
      </div>
    </div>
  );
}
