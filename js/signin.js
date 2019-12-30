//login
function login(name) {
  name.addEventListener("click", e => {
    e.preventDefault();

    //get user info
    const email = document.querySelector("#loginEmail").value;

    const password = document.querySelector("#loginPassword").value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
      window.location = "../html/Contact.html";
    });
  });
}

const loginForm = document.querySelector("#signin");
login(loginForm);
