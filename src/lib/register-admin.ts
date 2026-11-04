import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from './firebase';

export const registerAdmin = (email: string, password: string) =>
  createUserWithEmailAndPassword(getAuth(app), email, password);
