import React, { useState } from 'react';
import './Login.css';
// Importez le composant que vous souhaitez afficher après la connexion
import FormationCloud from './formation-cloud'; 

const Login = () => {
  // --- NOUVEL ÉTAT POUR GÉRER L'AFFICHAGE CONDITIONNEL ---
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  // --------------------------------------------------------

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const params = new URLSearchParams({
        email: email,
        password: password 
      });

      const response = await fetch(`http://fastapi:8000/user?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Erreur lors de la connexion');
      }

      // --- LOGIQUE DE SUCCÈS MISE À JOUR ---
      console.log('Connexion réussie:', data);
      alert(`Bienvenue ${data.prenom || 'Utilisateur'} !`);
      
      // Mettez l'état de connexion à true
      setIsLoggedIn(true); 
      // ------------------------------------

    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || 'Impossible de contacter le serveur');
    } finally {
      setLoading(false);
    }
  };

  // --- LOGIQUE DE RENDU CONDITIONNEL ---
  if (isLoggedIn) {
    // Si l'utilisateur est connecté, affichez le composant FormationCloud
    return <FormationCloud />;
  }
  // ------------------------------------

  // Sinon (si isLoggedIn est false), affichez le formulaire de connexion
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Connexion</h2>
          <p>Accédez à votre espace Data Engine</p>
        </div>

        {error && <div className="error-message">⚠️ {error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Adresse Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Votre mot de passe"
              required
            />
          </div>

          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
