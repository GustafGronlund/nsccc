import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import {
  collection,
  getDocs,
  orderBy,
  query,
  type Timestamp,
} from 'firebase/firestore';
import { app, db } from './firebase';

const auth = getAuth(app);

export type Member = {
  id: string;
  firstName: string;
  lastName: string;
  street: string;
  zipCode: string;
  city: string;
  mobile: string;
  email: string;
  veteranVehicle?: string;
  comment?: string;
  wasRegistred: Timestamp;
};

export const signIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);

export const onUserChange = (callback: (user: User | null) => void) =>
  onAuthStateChanged(auth, callback);

export const fetchMembers = async (): Promise<Member[]> => {
  const snapshot = await getDocs(
    query(collection(db, 'members'), orderBy('wasRegistred', 'desc'))
  );
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Member);
};
