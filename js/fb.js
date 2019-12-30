var firebaseConfig = {
  apiKey: "AIzaSyBzvy1WBkg8rGVye2FKwvonniwNQGHaxrY",
  authDomain: "cs354-200cd.firebaseapp.com",
  databaseURL: "https://cs354-200cd.firebaseio.com",
  projectId: "cs354-200cd",
  storageBucket: "cs354-200cd.appspot.com",
  messagingSenderId: "464971554756",
  appId: "1:464971554756:web:a7c964467473cdeb95ce91",
  measurementId: "G-5B9GGCQXK5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

document.querySelector("#googlesignin").addEventListener("click", e => {
  e.preventDefault();
  base_provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(base_provider)
    .then(function(result) {
      console.log("Success");
      window.alert(`Welcome ${result.user.displayName}! Sign In successful!`);
      window.location = "home.html";
    })
    .catch(function(err) {
      console.log(err);
      console.log("Failed");
    });
});

// firebase
//   .auth()
//   .signOut()
//   .then(function() {
//     console.log("Sign-out successful");
//   })
//   .catch(function(error) {
//     console.log("error");
//   });
