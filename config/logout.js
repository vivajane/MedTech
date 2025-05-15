import { signOut } from "firebase/auth"; 
import { auth } from "../config/firebaseConfig";

const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully!");
  } catch (error) {
    console.error("Error logging out:", error.message);
  }
};

export default logout;

