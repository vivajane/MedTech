import { auth, db } from "../config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

import { createUserWithEmailAndPassword } from "firebase/auth";

const signUp = async (email, password, userName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Writing to Firestore with:", { email: user.email, userName });

  
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      userName: userName,
    });

    return user;

    // console.log("User Signed Up:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw error;
  }
};

export default signUp;
