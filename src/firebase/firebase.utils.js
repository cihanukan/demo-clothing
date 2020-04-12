import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBoh4DqszYBF9wk4HZUf7IuAvvlvkudJ1E",
  authDomain: "fir-db-2b6e7.firebaseapp.com",
  databaseURL: "https://fir-db-2b6e7.firebaseio.com",
  projectId: "fir-db-2b6e7",
  storageBucket: "fir-db-2b6e7.appspot.com",
  messagingSenderId: "1044909842751",
  appId: "1:1044909842751:web:2b4eda96695a82e12d338a",
  measurementId: "G-ZG26074YGR",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //firebase auth 'da tutulan user id'yi alır.
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // if the user does not exist then create user

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set(
        {
          // set the new user account to the users collection.
          //This process is async, so we have wait to finish user creation process
          displayName,
          email,
          createdAt,
          ...additionalData,
        },
        () => {}
      );
    } catch (error) {
      console.log("Cannot create the user : " + error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
