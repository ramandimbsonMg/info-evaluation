import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function PostForm() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  // Récupération des posts et de la fonction pour les mettre à jour depuis le contexte global
  const { posts, setPosts } = useContext(AppContext);

  // Fonction exécutée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (!name.trim() || !text.trim())
      // Vérifie que les champs ne sont pas vides
      return alert('Remplissez tous les champs.');

    // Création d'un nouvel objet post
    const newPost = {
      id: 'p_' + Date.now(), // ID unique basé sur le timestamp
      name, 
      text, 
      likes: 0,
      createdAt: Date.now(), // Timestamp de création
    };

    // Mise à jour du tableau de posts : on ajoute le nouveau post au début
    setPosts([newPost, ...posts]);

    // Réinitialisation des champs du formulaire
    setName('');
    setText('');
  };

  return (
    <form
      onSubmit={handleSubmit} // Lien avec la fonction handleSubmit
      className='space-y-4 p-4 bg-white rounded-2xl shadow-lg border border-cyan-100'
    >
      {/* Titre du formulaire */}
      <h2 className='text-xl font-bold text-cyan-700 text-center'>
        Publiez votre citation
      </h2>

      {/* Champ pour le nom de l'utilisateur */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)} // Mise à jour de l'état name
        placeholder='Votre nom'
        className='w-full p-3 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition'
      />

      {/* Champ pour la citation */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)} // Mise à jour de l'état text
        placeholder='Écrivez une citation...'
        rows={4}
        className='w-full p-3 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent resize-none transition'
      />

      {/* Bouton de soumission */}
      <div className='flex justify-end'>
        <button
          type='submit'
          className='px-6 py-2 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-700 transition'
        >
          Publier
        </button>
      </div>
    </form>
  );
}
