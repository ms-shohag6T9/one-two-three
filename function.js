// heart buttons are functionate below 
const heartKey = document.getElementsByClassName("heart-button");
const addingHeart = document.getElementById("adding-heart-max");
const addingHeart2 = document.getElementById("adding-heart-mini");

for (let i = 0; i < heartKey.length; i++) {
  heartKey[i].addEventListener('click', function() {
    
    this.classList.toggle("fa-regular");
    this.classList.toggle("fa-solid");

    let currentNumber = parseInt(addingHeart.innerText);
    let currentNumber2 = parseInt(addingHeart2.innerText);

    if (this.classList.contains("fa-solid")) {
      currentNumber = currentNumber + 1;
      currentNumber2 = currentNumber2 + 1;
    } else {
      currentNumber = currentNumber - 1;
      currentNumber2 = currentNumber2 - 1;
    }

    addingHeart.innerText = currentNumber;
    addingHeart2.innerText = currentNumber2;
  });
}

// call buttons are functionate below 
const cardCallBtn = document.getElementsByClassName("callPhone");
const defaultCoin = document.getElementById("Default-coin");
const defaultrCoin = document.getElementById("rDefault-coin");
let toNumber = parseInt(defaultCoin.innerText);
let torNumber = parseInt(defaultrCoin.innerText);

for( let i = 0; i < cardCallBtn.length; i++){
  cardCallBtn[i].addEventListener("click", function(){
  
if (toNumber >= 20) {
  toNumber = toNumber - 20;
  torNumber = torNumber - 20;
  defaultCoin.innerText = toNumber;
  defaultrCoin.innerText = torNumber;

     // info Object below
    const infoHistories = {
    name: this.dataset.name,
    number: this.dataset.number,
    time: new Date().toLocaleTimeString('en-US'),
    };
    const historiesDiv = document.createElement("div");
        historiesDiv.classList.add("histories");

    const innerDiv = document.createElement("div");

    const h4 = document.createElement("h4");
        h4.classList.add("zero");
        h4.innerText = infoHistories.name;

    const pNumber = document.createElement("p");
        pNumber.classList.add("zero");
        pNumber.innerText = infoHistories.number;

      innerDiv.appendChild(h4);
      innerDiv.appendChild(pNumber);
      historiesDiv.appendChild(innerDiv);

    const pTime = document.createElement("p");
        pTime.innerText = infoHistories.time;

      historiesDiv.appendChild(pTime);
      document.querySelector("#rhistory-card").appendChild(historiesDiv);

     alert(this.dataset.alert);
}

else { alert("You don't have enough coin"); }
  })
}
// history button in Responsive page
document.addEventListener("DOMContentLoaded", function() {
  const rhistoryBtn = document.getElementById("rHistory-button");
  const rhistoryCard = document.getElementById("rhistory-card");

  function setupView() {
    if (window.innerWidth > 576) {
      
      rhistoryCard.style.display = "block";
      rhistoryBtn.style.display = "none"; 
    } else {

      rhistoryCard.style.display = "none";
      rhistoryBtn.style.display = "block";
    }
  }


  rhistoryBtn.addEventListener("click", function() {
    if (rhistoryCard.style.display === "none" || rhistoryCard.style.display === "") {
      rhistoryCard.style.display = "block";
      rhistoryBtn.innerText = "Service";
    } else {
      rhistoryCard.style.display = "none";
      rhistoryBtn.innerText = "Call History";
    }
  });

  setupView();
  window.addEventListener("resize", setupView);
});


