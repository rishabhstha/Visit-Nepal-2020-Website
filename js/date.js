var today = new Date();

let hour = today.getHours();
let minutes = today.getMinutes();

if (minutes < 10) {
  minutes = "0" + minutes;
}

if (hour < 12) {
  minutes = minutes + " AM";
}

if (hour > 12) {
  hour = hour - 12;
  minutes = minutes + " PM";
}
var date =
  today.getFullYear() +
  "-" +
  (today.getMonth() + 1) +
  "-" +
  today.getDate() +
  "   " +
  hour +
  ":" +
  minutes;

document.querySelector("#date").textContent = date;
