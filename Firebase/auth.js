import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app, db } from "./config";
import { doc, setDoc } from "firebase/firestore";

export const auth = getAuth(app);
async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const docRef = doc(db, "users", userCredential.user.uid);

    await setDoc(docRef, {
      email,
      cart: [],
    });
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }

  // createUserWithEmailAndPassword(auth, email, password)
  //     .then(userCredential => console.log(userCredential))
  //     .catch(err => console.log(err))
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredential);
  } catch (err) {
    console.error(err);
  }
};

export const signOutAsync = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};
export {login}; 