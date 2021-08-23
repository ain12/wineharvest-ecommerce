import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth"
import dotenv from 'dotenv'
dotenv.config()

if (firebase.apps.length === 0) {
    firebase.initializeApp({
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,

    }).firestore();
}
//settings({ experimentalForceLongPolling: true })
export const firestore = firebase.firestore();
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {

        console.log(res.user)

    }).catch((error) => {
        console.log(error.message)
    })
}

/*export const createAccount = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
}*/

export const logInWithEmail = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
}

export const logOut = () => {
    auth.signOut().then(() => {
        console.log('logged out')
    }).catch((error) => {
        console.log(error.message)
    })
}

export const handleUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) {
        console.warn("No userAuth provided!");
        return;
    }

    const { email } = userAuth;
    const timestamp = new Date();

    console.log(email, timestamp, additionalData)

    try {
        return await firestore.collection("users").add({
            email,
            timestamp,
            ...additionalData
        })

    } catch (err) {
        console.log(err);
    }

    return null;
};

/*export const auth = firebase.auth();
export const firestore = firebase.firestore();

const ProviderOfGoogle = new firebase.auth.GoogleAuthProvider();
ProviderOfGoogle.setCustomParameters({ prompt: "select_account" });

export const logInWithGoogle = () => auth.signInWithPopup(ProviderOfGoogle); */