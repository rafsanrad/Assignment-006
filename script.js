console.log("file connected");

//heart icon increasing way.
const heartCount=document.getElementById("heart-count");
const heartIcons = document.getElementsByClassName("heart-icon");
for (let heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function() {
    let currentCount = parseInt(heartCount.innerText);
    heartCount.innerText = currentCount + 1;
  });
}

