import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCtkbi70pKL5bkJhxm8LOTbvUS8Ib36kf0",
    authDomain: "bodybook-4ef51.firebaseapp.com",
    databaseURL: "https://bodybook-4ef51-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bodybook-4ef51",
    storageBucket: "bodybook-4ef51.appspot.com",
    messagingSenderId: "544237344369",
    appId: "1:544237344369:web:c4bfd44e9df59a991fadd0"
};



export const app = initializeApp(firebaseConfig);

// Realtime Posts
export const database = getDatabase(app);
export const allPostsRef = ref(database, "AllPosts");


// Sotrage
export const storage = getStorage(app)



