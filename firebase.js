import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyA5a44sJjGGinB9KtMxiQ8Wd4UA4T8SDuM',
  authDomain: 'ecommerce-resume-app.firebaseapp.com',
  projectId: 'ecommerce-resume-app',
  storageBucket: 'ecommerce-resume-app.appspot.com',
  messagingSenderId: '974725495010',
  appId: '1:974725495010:web:c5298acef1923bacf846bb',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const database = getDatabase(app);
export { db, auth, database };
