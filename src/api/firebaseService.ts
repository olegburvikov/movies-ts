import firebase from 'firebase'
export const firebaseConfig = {
  apiKey: 'AIzaSyACVyQVltN-J1heycOQtA6kYPr5r9ERCiM',
  authDomain: 'fmovie-aa577.firebaseapp.com',
  databaseURL: 'https://fmovie-aa577-default-rtdb.firebaseio.com',
  projectId: 'fmovie-aa577',
  storageBucket: 'fmovie-aa577.appspot.com',
  messagingSenderId: '431046786610',
  appId: '1:431046786610:web:d968852c9942b161f9c62b',
}

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
