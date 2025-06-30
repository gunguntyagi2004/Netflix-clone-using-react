// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyDazAeVICvh0jYWepTizC4jLVATB05aE9k",
  authDomain: "netflix-clone-183cd.firebaseapp.com",
  projectId: "netflix-clone-183cd",
  storageBucket: "netflix-clone-183cd.firebasestorage.app",
  messagingSenderId: "458315568533",
  appId: "1:458315568533:web:2acda251cbf0a63d27529c",
  measurementId: "G-GLKK45D0RE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db =getFirestore(app);


const signUp = async(name,email,password)=>{
try {
  const res=   await createUserWithEmailAndPassword(auth,email,password);
  const user= res.user;
  await addDoc(collection(db,'user'),{
    uid: user.uid,
    name,
    authProvider:'local',email,
  })
} catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
}
}

const login=async(email,password)=>{

    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout=()=>{
    signOut(auth);

}

export {auth,db,login,signUp,logout}