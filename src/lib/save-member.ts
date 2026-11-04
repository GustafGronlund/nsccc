import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from './firebase';

// The email is the document ID. Saving it a second time counts as an update,
// which the Firestore rules deny, so the same email can only register once.
export const saveMember = (data: Record<string, FormDataEntryValue>) => {
  const email = String(data.email).trim().toLowerCase();

  return setDoc(doc(db, 'members', email), {
    ...data,
    email,
    wasRegistred: serverTimestamp(),
  });
};
