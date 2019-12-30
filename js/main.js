var newimage = document.getElementById("image1");
var newimage2 = document.getElementById("image2");
var newimage3 = document.getElementById("image3");
var newimage4 = document.getElementById("image4");
newimage.addEventListener("click", changeImage);
newimage2.addEventListener("click", changeImage2);
newimage3.addEventListener("click", changeImage3);
newimage4.addEventListener("click", changeImage4);

function changeImage(e) {
  console.log(e.type);
  newimage.setAttribute("src", "../img/img25.jpg");
  newimage.setAttribute("alt", "changed image");
}
function changeImage2(e) {
  newimage2.setAttribute("src", "../img/img5.jpg");
  newimage2.setAttribute("alt", "changed image");
}
function changeImage3(e) {
  newimage3.setAttribute("src", "../img/img32.jpg");
  newimage3.setAttribute("alt", "changed image");
}
function changeImage4(e) {
  newimage4.setAttribute("src", "../img/img9.jpg");
  newimage4.setAttribute("alt", "changed image");
}

//funfact

function here1() {
  const learn = document.querySelector("#learn");

  if (learn.innerHTML === "") {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "container");
    //1
    // var newDivA = document.createElement("div");
    // newDiv.setAttribute("class", "container");

    var newDiv1 = document.createElement("div");
    newDiv1.setAttribute("class", "row");

    var newDiv11 = document.createElement("div");
    newDiv11.setAttribute("class", "col-md-7");

    // var newDiv13 = document.createElement("div");
    // newDiv13.setAttribute("class", "col-md-4");

    var newDiv12 = document.createElement("div");
    newDiv12.setAttribute("class", "col-md-5 textat");

    var fun1 = document.createElement("h3");
    fun1.textContent = "The highest altitude lake in the world";
    newDiv.appendChild(fun1);

    var fun1image = document.createElement("img");
    fun1image.setAttribute("src", "../img/img33.jpg");
    fun1image.setAttribute("alt", "alt text");
    fun1image.setAttribute("class", "sano");

    newDiv11.appendChild(fun1image);

    var fun1desc = document.createElement("p");
    fun1desc.setAttribute("class", "thulo");
    fun1desc.textContent =
      "Adventurous hike towards the highest lake in the world.Tilicho Lake at an altitude of (4,949m) is a well-known place for pilgrimages. Hence, as we go to the high altitude to triumph over the view of the lake is not an easy task, but this trip is truly exciting, thrilling and more or less rewarding. Though trekking Tilicho Lake is a challenging trekking route it is one of the finest trekking routes in the Annapurna region. This trek displays scenic view of much of eastern side of the epic world-famous Annapurna circuit with sublime natural beauty, cultural and traditional values, stunning waterfalls and running clean water streams, and attractive floras and faunas.";
    newDiv12.appendChild(fun1desc);

    newDiv1.appendChild(newDiv11);
    // newDiv1.appendChild(newDiv13);
    newDiv1.appendChild(newDiv12);

    newDiv.appendChild(newDiv1);

    // newDivA.appendChild(newDiv1);

    //2
    // var newDivB = document.createElement("div");
    // newDivB.setAttribute("class", "container");

    var newbr = document.createElement("br");
    newDiv.appendChild(newbr);
    newDiv.appendChild(newbr);
    newDiv.appendChild(newbr);

    var newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class", "row");

    newDiv.appendChild(newbr);
    newDiv.appendChild(newbr);
    newDiv.appendChild(newbr);

    var fun2 = document.createElement("h3");
    fun2.textContent = "Top highest mountains in the world";
    newDiv.appendChild(fun2);

    var newDiv21 = document.createElement("div");
    newDiv21.setAttribute("class", "col-md-7");

    // var newDiv23 = document.createElement("div");
    // newDiv23.setAttribute("class", "col-md-4");

    var newDiv22 = document.createElement("div");
    newDiv22.setAttribute("class", "col-md-5 textat");

    var fun2image = document.createElement("img");
    fun2image.setAttribute("src", "../img/img9.jpg");
    fun2image.setAttribute("alt", "alt text");
    fun2image.setAttribute("class", "sano");
    newDiv21.appendChild(fun2image);

    var fun2desc = document.createElement("p");
    fun2desc.setAttribute("class", "thulo");
    fun2desc.textContent =
      "Most people already know that the highest mountain in the world is Mount Everest. It’s common knowledge, it’s mainstream, it’s not much of a secret. But, and let’s get real for a second, how many people do you think know what the world’s sixth highest mountain is? Or, for that matter, what the third, fourth, fifth, sixth, seventh, eighth, and ninth highest mountains in the world are. Exactly. That’s the sort of trivia only real mountaineering hipsters have. Nepal got all of that.";

    newDiv22.appendChild(fun2desc);

    newDiv2.appendChild(newDiv21);
    // newDiv1.appendChild(newDiv23);
    newDiv2.appendChild(newDiv22);

    newDiv.appendChild(newDiv2);
    newDiv.appendChild(newbr);
    newDiv.appendChild(newbr);
    newDiv.appendChild(newbr);

    learn.appendChild(newDiv);
  } else {
    learn.innerHTML = "";
  }

  // fun.appendChild(newDivB);
}

fun = document.querySelector("#funfact1");
fun.addEventListener("click", here1);
