import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
export const saveMember = (data: Record<string, FormDataEntryValue>) =>
  addDoc(collection(db, 'members'), {
    ...data,
    email: String(data.email).trim().toLowerCase(),
    wasRegistred: serverTimestamp(),
  });
