import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../firebase';
import { User } from '../interface/User';

// Fonction pour mettre à jour un utilisateur dans la base de données Firebase
export function updateUserCatch(userUpdated: User, id: number): Promise<void> {
  const db = getDatabase(app);
  const userRef = ref(db, `users/${id}`);

  // Utilisation de set() pour mettre à jour l'utilisateur avec les nouvelles données
  return set(userRef, userUpdated);
}
