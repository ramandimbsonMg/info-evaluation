import React, { useState, useEffect } from 'react';

export default function EventSignup({ event }) {
  // ⚡ État pour les participants, initialisé depuis le localStorage si disponible
  const [participants, setParticipants] = useState(() => {
    const stored = localStorage.getItem('participants');
    return stored ? JSON.parse(stored) : [];
  });

  // ⚡ États locaux pour le formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState(null); 

  // Sauvegarde automatique des participants dans le localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('participants', JSON.stringify(participants));
  }, [participants]);

  // Fonction appelée lors de la soumission du formulaire
  const join = (e) => {
    e.preventDefault();

    // Vérification des champs
    if (!name || !email) {
      setToast({ type: 'error', message: 'Remplissez nom et email.' });
      // Masquer le toast après 3 secondes
      setTimeout(() => setToast(null), 3000);
      return;
    }

    // ✅ Création d'un nouvel objet participant
    const newParticipant = {
      id: 'pt_' + Date.now(), // ID unique basé sur le timestamp
      name,
      email,
      timestamp: Date.now(),
    };

    // Ajout du participant en début de liste
    setParticipants([newParticipant, ...participants]);
    setName('');
    setEmail(''); 
    setToast({ type: 'success', message: 'Inscription enregistrée. Merci !' });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className='space-y-4 p-4 bg-white rounded-2xl shadow-lg border border-cyan-100 max-w-md mx-auto'>
      {/* Titre de l'événement */}
      <h3 className='font-bold text-lg text-cyan-600 mb-1'>{event.title}</h3>
      <p className='text-sm text-gray-500 mb-4'>
        {event.date} — {event.place}
      </p>

      {/* Affichage du toast */}
      {toast && (
        <div
          className={`mb-4 px-4 py-2 rounded transition-all ${
            toast.type === 'success'
              ? 'bg-cyan-100 text-cyan-800'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* Formulaire d'inscription */}
      <form onSubmit={join} className='space-y-3'>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Votre nom'
          className='w-full p-3 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent resize-none transition'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Votre email'
          className='w-full p-3 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent resize-none transition'
        />
        <button
          type='submit'
          className='w-full bg-cyan-600 text-white font-semibold px-4 py-3 rounded-xl transition'
        >
          Je participe
        </button>
      </form>

      {/* Liste des participants */}
      {participants.length > 0 && (
        <div className='mt-6'>
          <h4 className='font-semibold text-cyan-600 mb-2'>Participants :</h4>
          <ul className='text-sm text-gray-700 max-h-40 overflow-y-auto'>
            {participants.map((p) => (
              <li key={p.id} className='border-b border-gray-200 py-1'>
                {p.name} — {p.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
