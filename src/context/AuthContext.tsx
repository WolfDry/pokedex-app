import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth, database } from '../firebase';
import { User, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set, get } from 'firebase/database';

interface AuthContextProps {
  user: User | null;
  userInfo: any | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUserInfo: () => Promise<void>;  // Nouvelle méthode
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userInfo, setUserInfo] = useState<any | null>(null);

  const fetchUserInfo = async (userId: string) => {
    const userRef = ref(database, `users/${userId}`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      setUserInfo(snapshot.val());
    } else {
      setUserInfo(null);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await fetchUserInfo(currentUser.uid);
      } else {
        setUserInfo(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    await fetchUserInfo(userCredential.user.uid);
  };

  const register = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await set(ref(database, 'users/' + userCredential.user.uid), {
      email: email,
      uid: userCredential.user.uid,
    });
    await fetchUserInfo(userCredential.user.uid);
  };

  const logout = async () => {
    await signOut(auth);
    setUserInfo(null);
  };

  const refreshUserInfo = async () => {
    if (user) {
      await fetchUserInfo(user.uid);
    }
  };

  return (
    <AuthContext.Provider value={{ user, userInfo, login, register, logout, refreshUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
