import { initializeApp, getApps } from 'firebase/app'
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth'
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    doc,
    onSnapshot,
    serverTimestamp,
    query,
    orderBy,
    collectionGroup,
    arrayUnion,
    arrayRemove,
    updateDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB1JcILKFXKoncaTPjixwehlc4fHOE3Z2c",
  authDomain: "reap-20153.firebaseapp.com",
  projectId: "reap-20153",
  storageBucket: "reap-20153.appspot.com",
  messagingSenderId: "218581178784",
  appId: "1:218581178784:web:d21c874d4c007e6b196cc5",
};

if (!getApps().length) initializeApp(firebaseConfig)

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  collection,
  collectionGroup,
  addDoc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  getDoc,
  getDocs,
  setDoc,
  doc,
  arrayUnion,
  arrayRemove,
  updateDoc,
}