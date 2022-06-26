import { Auth } from "../util/firebaseConfig";

const auth = Auth;

export async function createUser(email, password, cb) {
  
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
       cb(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      cb(errorMessage);
    }
}