// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJmAHXCGTQEr_AjTn1vw_hdfbxgpuiPH4",
  authDomain: "chef-recipe-client-b3cb7.firebaseapp.com",
  projectId: "chef-recipe-client-b3cb7",
  storageBucket: "chef-recipe-client-b3cb7.appspot.com",
  messagingSenderId: "890445051078",
  appId: "1:890445051078:web:2bacb2dc2fd966109113c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;