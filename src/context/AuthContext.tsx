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
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userInfo, setUserInfo] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userRef = ref(database, `users/${currentUser.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          setUserInfo(snapshot.val());
        } else {
          setUserInfo(null);
        }
      } else {
        setUserInfo(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;

    const userRef = ref(database, `users/${userId}`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      setUserInfo(snapshot.val());
    } else {
      setUserInfo(null);
    }
  };

  const register = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;

    await set(ref(database, 'users/' + userId), {
      email: email,
      uid: userId,
    });

    const userRef = ref(database, `users/${userId}`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      setUserInfo(snapshot.val());
    } else {
      setUserInfo(null);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ user, userInfo, login, register, logout }}>
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
