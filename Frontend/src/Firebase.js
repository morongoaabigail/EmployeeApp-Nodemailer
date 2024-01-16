import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDifPOkO2DFT_iQjBxbMIEVYEdwc_l2UWI",
  authDomain: "employee-app-62ec9.firebaseapp.com",
  projectId: "employee-app-62ec9",
  storageBucket: "employee-app-62ec9.appspot.com",
  messagingSenderId: "322965703806",
  appId: "1:322965703806:web:02977f401a56ef2e7b5c2f",
  measurementId: "G-PE2LWNLSNL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };