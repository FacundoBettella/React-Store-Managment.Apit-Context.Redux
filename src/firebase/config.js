import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

////////
//colocar config de su proyecto creado en firebase para realizar pruebas
////////

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
