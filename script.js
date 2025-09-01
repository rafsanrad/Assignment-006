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

const callButtons = document.getElementsByClassName("call-btn");

for (const callButton of callButtons) {
  callButton.addEventListener("click", function () {
    // Get the parent card of the clicked button
    const card = callButton.closest(".card");


    // Get the subtitle and number inside this card
    const subTitleText = card.getElementsByClassName("sub-title")[0].innerText;
    const phoneNumberText = card.getElementsByClassName("phn-number")[0].innerText;

    // Show the result
    alert(`📞 Calling ${subTitleText} at ${phoneNumberText}`);
  });
}



