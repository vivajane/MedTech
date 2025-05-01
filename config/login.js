// // src/login.js (or wherever your login.js is located)
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../config/firebaseConfig"; // Adjust path if needed
// import { doc, setDoc } from "firebase/firestore";

// const login = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     const getDoc = await setDoc(doc(db, "users", user.uid))
//     if(getDoc.exists()){
//       const getName = getDoc.data();
//       console.log("userName:", getName.name)
//       return {
//         user, name : getName.name
//       }
//     }
//     // console.log("User Logged In:", userCredential.user);
//     // return userCredential.user;
//   } catch (error) {
//     console.error("Error logging in:", error.message);
//     console.error("Error Code:", error.code);
//     console.error("Error Message:", error.message);
//   }
// };

// export default login;

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Optional: fetch user data from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.exists() ? userDoc.data() : {};

    return { ...user, ...userData };
  } catch (error) {
    console.error("Login failed:", error.message);
    return null;
  }
};

export default login;
