auth.onAuthStateChanged(user => {
  if (user) {
    document.querySelector("#login").style.display = "none";
  } else {
    document.querySelector(".logged-out").style.display = "none";
    document.querySelector("#logout").style.display = "none";
  }
});
