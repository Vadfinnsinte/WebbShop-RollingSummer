
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyC1VZnenaKsFA1oj6R2_B6LoC1yMWQrB5Q",
  authDomain: "summerwebbshop.firebaseapp.com",
  projectId: "summerwebbshop",
  storageBucket: "summerwebbshop.appspot.com",
  messagingSenderId: "698893177401",
  appId: "1:698893177401:web:27cd6b307f19e6a20ef3e8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}