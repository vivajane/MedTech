import { auth, db } from "../config/firebaseConfig"
import { doc, setDoc } from "firebase/firestore";


import { createUserWithEmailAndPassword } from "firebase/auth";

const signUp = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user

   await setDoc(doc(db, "users, user.uid"), {
    name,
    email,
   })
   return user;
    
    // console.log("User Signed Up:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};    

export default signUp;