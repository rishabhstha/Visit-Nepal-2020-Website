let randNum = Math.floor(Math.random() * 110) + 1;
let fortunemessage = document.getElementById("message");
let luckyNumbers = document.getElementById("luckynumbers");

db.collection("fortunes")
  .doc(randNum.toString())
  .get()
  .then(querySnapshot => {
    fortunemessage.textContent = querySnapshot.data().quote;
  });

let luckyNum = [];

while (luckyNum.length < 5) {
  let luckyNumber = Math.floor(Math.random() * 69) + 1;
  if (!luckyNum.includes(luckyNumber)) {
    luckyNum.push(luckyNumber);
  }
}
luckyNumbers.textContent = luckyNum.join(" ");
