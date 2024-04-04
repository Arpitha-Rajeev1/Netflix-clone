import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "netflix-clone-2857c.firebaseapp.com",
  projectId: "netflix-clone-2857c",
  storageBucket: "netflix-clone-2857c.appspot.com",
  messagingSenderId: "169415057393",
  appId: "1:169415057393:web:a001ff37fe39bffc0a6e50"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth };
export default db;
