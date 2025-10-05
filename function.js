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
  alert(this.dataset.name);
} else {
  alert("You don't have enough coin");
}
  })
}
// history button in Responsive page
const rhistoryBtn = document.getElementById("rHistory-button");
const rhistoryCard = document.getElementById("rhistory-card");
const clickHistory = rhistoryBtn.addEventListener("click", function(){
  
  if(rhistoryBtn.innerText === "Call History"){
     rhistoryBtn.innerText = "Service";
     rhistoryCard.style.display = "block";
     
  }
  else{
    rhistoryBtn.innerText = "Call History";
    rhistoryCard.style.display = "none";
  }

})
