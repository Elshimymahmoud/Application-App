import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth } from "@firebase/auth";
import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "@firebase/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFY8F5XmoikCkq7-KfHZRPgCr8xAZRLhk",
  authDomain: "application-app-e4bdb.firebaseapp.com",
  projectId: "application-app-e4bdb",
  storageBucket: "application-app-e4bdb.appspot.com",
  messagingSenderId: "434535976099",
  appId: "1:434535976099:web:4a4425e9ca0ce9c47f4316",
  measurementId: "G-Z9YJW5F7QS",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
