// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBZr9E98fOueMQEclOm9knN4Rmzwi-h9Gs",
	authDomain: "e-com-7a782.firebaseapp.com",
	projectId: "e-com-7a782",
	storageBucket: "e-com-7a782.appspot.com",
	messagingSenderId: "200860029346",
	appId: "1:200860029346:web:67acf1a58c2a13d6c222fb",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore();
