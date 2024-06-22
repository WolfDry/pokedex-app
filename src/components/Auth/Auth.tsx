// AuthComponent.tsx
import React, { useState, FormEvent } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './style.css';

const AuthComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div className='container'>
      <div className='glass'>
        <h2>{isRegistering ? 'Inscription' : 'Connexion'}</h2>
        {error && <p className='errorMessage'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='formGroup'>
            <label>Email :</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className='formGroup'>
            <label>Mot de passe :</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className='button'>
            {isRegistering ? 'Inscription' : 'Connexion'}
          </button>
        </form>
        <button onClick={() => setIsRegistering(!isRegistering)} className='toggleButton button'>
          {isRegistering ? 'Tu as déjà un compte ? Connexion' : 'Tu n\'as pas de compte ? Inscription'}
        </button>
      </div>
    </div>
  );
};

export default AuthComponent;
