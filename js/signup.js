auth.onAuthStateChanged(user => {
  if (user) {
    window.location = "home.html";
  }
});

const signup = document.querySelector("#signup");
signup.addEventListener("click", e => {
  e.preventDefault();
  const email = document.querySelector("#signupEmail").value;
  const password = document.querySelector("#signupPassword").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location = "../html/Contact.html";
    })

    .catch(err => {
      alert("Win");
    });
});
