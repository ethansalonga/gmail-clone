import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCGoY1Lho8Nr4ZEBGI4TbFiigpQul5LUmo",
  authDomain: "clone-63576.firebaseapp.com",
  projectId: "clone-63576",
  storageBucket: "clone-63576.appspot.com",
  messagingSenderId: "593215875827",
  appId: "1:593215875827:web:9511e476a1a03ce09da586"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }