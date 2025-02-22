// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrjEV2q5yWISs7I1JRQqHSbU8U_cVLScc",
  authDomain: "task-management-client-e886b.firebaseapp.com",
  projectId: "task-management-client-e886b",
  storageBucket: "task-management-client-e886b.firebasestorage.app",
  messagingSenderId: "486014594919",
  appId: "1:486014594919:web:1804b45b8ac75587b689c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
