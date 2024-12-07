import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCGY9YEciU5xd9u8luI9c4j5iAw8uqjHIE",
    authDomain: "project-3-2-a6da7.firebaseapp.com",
    projectId: "project-3-2-a6da7",
    storageBucket: "project-3-2-a6da7.firebasestorage.app",
    messagingSenderId: "783707848841",
    appId: "1:783707848841:web:3a7efcdcbd9a8ad6ed0658"
};

const app = initializeApp(firebaseConfig)


const projectFirestore = getFirestore(app)
const projectStorage = getStorage(app)
const timestamp = serverTimestamp


export {projectFirestore, projectStorage, timestamp}