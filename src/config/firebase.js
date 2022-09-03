import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsrnM4Wu7PMl0RbfnLahbQLxRKpb5RKPI",
  authDomain: "dropbox-by-xan.firebaseapp.com",
  projectId: "dropbox-by-xan",
  storageBucket: "dropbox-by-xan.appspot.com",
  messagingSenderId: "586799894488",
  appId: "1:586799894488:web:ae0b7ba7453be608542cad"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;