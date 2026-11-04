import {
  collection,
  getDocs,
  orderBy,
  query,
  type Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';

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

export const fetchMembers = async () => {
  const snapshot = await getDocs(
    query(collection(db, 'members'), orderBy('wasRegistred', 'desc'))
  );
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Member);
};
