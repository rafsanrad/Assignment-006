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
// calling system 
const callButtons = document.getElementsByClassName("call-btn");
const historyList = [];

for (const callButton of callButtons) {
  callButton.addEventListener("click", function () {
    // showing coin count and alert message 
    const coinCount=document.getElementById("coin-count");
    let coinCountUpdated=parseInt(coinCount.innerText);
    if(coinCountUpdated<20){
      alert("❌ you have no sufficient coin");
      return
    }
    // Get the parent card of the clicked button
    coinCount.innerText=coinCountUpdated-20;
    const card = callButton.closest(".card");

    const titleText=card.getElementsByClassName("card-title")[0].innerText;
    const subTitleText = card.getElementsByClassName("sub-title")[0].innerText;
    const phoneNumberText = card.getElementsByClassName("phn-number")[0].innerText;

    alert(`📞 Calling ${subTitleText} at ${phoneNumberText} ...`);


    historyList.push({ title: titleText, number: phoneNumberText });

  
    const historyContainer= document.getElementById('history-container');
    historyContainer.innerText="";
    for (const list of historyList){
      const div=document.createElement("div")
      div.innerHTML=`
      <div class="flex items-center justify-between p-3 font-semibold text-lg my-2">
                        <div>
                            <h2>${list.title}</h2>
                            <p>${list.number}</p>
                        </div>
                        <div>
                            <p>${new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
      `
      historyContainer.appendChild(div);
    }
  });
}

// clear button functionality
const historyContainer = document.getElementById('history-container');
const clearButton = document.getElementById('clear-history-btn');

clearButton.addEventListener("click", function () {
  historyList.length = 0;
  historyContainer.innerText="";
});

// copy button functionality 
const copyButtons = document.getElementsByClassName("copy-btn");
const copyCount=document.getElementById("copy-count");
for(const button of copyButtons){
  button.addEventListener("click", function() {
    const card = button.closest(".card");

    const phoneNumberText = card.getElementsByClassName("phn-number")[0].innerText;

    

    
})
}
