import * as firebase from "firebase";

    const firebaseConfig = {
        apiKey: "AIzaSyB9uPLxL13kXuwsWwQD7PFm-Rc48s1c4lI",
        authDomain: "netflix-clone-868e8.firebaseapp.com",
        databaseURL: "https://netflix-clone-868e8.firebaseio.com",
        projectId: "netflix-clone-868e8",
        storageBucket: "netflix-clone-868e8.appspot.com",
        messagingSenderId: "487474371846",
        appId: "1:487474371846:web:31b280fe60654d239ed287",
        measurementId: "G-ZHGTSG5Y8M"
      };
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
