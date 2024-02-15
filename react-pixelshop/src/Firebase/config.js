// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
  };
// const firebaseConfig = {
//   apiKey: "AIzaSyAc4B82L0nPzmosHH16oH_A8vUVk8w5FKE",
//   authDomain: "pixelshop-comicway.firebaseapp.com",
//   projectId: "pixelshop-comicway",
//   storageBucket: "pixelshop-comicway.appspot.com",
//   messagingSenderId: "1013268051751",
//   appId: "1:1013268051751:web:44cfa676e670c7b4675b02"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)