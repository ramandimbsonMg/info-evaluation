import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- changer ici
import { Helmet } from 'react-helmet';

import '@/index.css';
import App from '@/App';

// Crée la racine React avec createRoot (React 18)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Helmet
      defaultTitle='Evaluation'
      titleTemplate='%s | Explorez les sections et commencez votre expérience d’apprentissage et de partage.'
    >
      <meta charSet='utf-8' />
      <html lang='id' amp />
    </Helmet>
    <App />
  </React.StrictMode>
);
