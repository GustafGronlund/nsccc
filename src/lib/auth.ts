import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { app, db } from './firebase';

export type AuthStatus = 'out' | 'pending' | 'admin';

const auth = getAuth(app);

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);

// A logged-in user is an admin only if a document admins/{uid} exists.
export const onStatusChange = (callback: (status: AuthStatus) => void) =>
  onAuthStateChanged(auth, async (user) => {
    if (!user) return callback('out');

    const isAdmin = await getDoc(doc(db, 'admins', user.uid)).then(
      (snapshot) => snapshot.exists(),
      () => false
    );
    callback(isAdmin ? 'admin' : 'pending');
  });
