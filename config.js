const firebase = require("firebase/app")
const admin= require("firebase-admin")

 var serviceAccount = require("./newpro-70e9a-firebase-adminsdk-dim5q-e0f0f823c4.json");
const adminData = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://newpro-70e9a.firebaseio.com",
});


const firebaseConfig = {
  apiKey: "AIzaSyB1Lqy8OnRpudkkwnHV6GaNKtU-qO0Dupw",
  authDomain: "testproject-17409.firebaseapp.com",
  projectId: "testproject-17409",
  storageBucket: "testproject-17409.appspot.com",
  messagingSenderId: "396164745549",
  appId: "1:396164745549:web:26c9348e9e18a4631e4f04",
  measurementId: "G-T9LWWPKXDG"
};
 firebase.initializeApp(firebaseConfig);
const db=admin.firestore()
console.log("ok")
module.exports = {db,adminData};