// heart buttons are functionate below 
const heartKey = document.getElementsByClassName("heart-button");
const addingHeart = document.getElementById("adding-heart");
const addingHeart2 = document.getElementById("adding-heart2");

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
const defaultCoin = document.getElementById('default-coin'); /*For Desktop*/
const defaultCoin2 = document.getElementById('default-coin2');/*For Mobile*/
let coinNumber = parseInt(defaultCoin.innerText);
let coinNumber2 = parseInt(defaultCoin2.innerText);
const c1Call = document.getElementById('card1-call');
const c2Call = document.getElementById('card2-call');
const c3Call = document.getElementById('card3-call');
const c4Call = document.getElementById('card4-call');
const c5Call = document.getElementById('card5-call');
const c6Call = document.getElementById('card6-call');
const c7Call = document.getElementById('card7-call');
const c8Call = document.getElementById('card8-call');
const c9Call = document.getElementById('card9-call');
c1Call.addEventListener("click", function(){
  if(coinNumber >= 20 ){
      coinNumber = coinNumber - 20;
      coinNumber2 = coinNumber2 - 20;
      defaultCoin.innerText = coinNumber;
      defaultCoin2.innerText = coinNumber2;
      alert('📞Emergency Service Calling 999...')
      console.log(coinNumber);
      console.log(coinNumber2);
  }
  else{
    alert('Not Enough Balance');
  }
});
c2Call.addEventListener("click", function(){
  if(coinNumber >= 20 ){
      coinNumber = coinNumber - 20;
      coinNumber2 = coinNumber2 - 20;
      defaultCoin.innerText = coinNumber;
      defaultCoin2.innerText = coinNumber2;
      alert('📞Police Helpline Calling 999...')
      console.log(coinNumber);
      console.log(coinNumber2);
  }
  else{
    alert('Not Enough Balance');
  }
});
c3Call.addEventListener("click", function(){
  if(coinNumber >= 20 ){
      coinNumber = coinNumber - 20;
      coinNumber2 = coinNumber2 - 20;
      defaultCoin.innerText = coinNumber;
      defaultCoin2.innerText = coinNumber2;
      alert('📞Fire Service Calling 999...')
      console.log(coinNumber);
      console.log(coinNumber2);
  }
  else{
    alert('Not Enough Balance');
  }
});
c4Call.addEventListener("click", function(){
  if(coinNumber >= 20 ){
      coinNumber = coinNumber - 20;
      coinNumber2 = coinNumber2 - 20;
      defaultCoin.innerText = coinNumber;
      defaultCoin2.innerText = coinNumber2;
      alert('📞Ambulance Service Calling 1994-999999...')
      console.log(coinNumber);
      console.log(coinNumber2);
  }
  else{
    alert('Not Enough Balance');
  }
});
c5Call.addEventListener("click", function(){
  if(coinNumber >= 20 ){
      coinNumber = coinNumber - 20;
      coinNumber2 = coinNumber2 - 20;
      defaultCoin.innerText = coinNumber;
      defaultCoin2.innerText = coinNumber2;
      alert('📞Woman & Child Helpline Calling 109...')
      console.log(coinNumber);
      console.log(coinNumber2);
  }
  else{
    alert('Not Enough Balance');
  }
});
c6Call.addEventListener("click", function(){
  if(coinNumber >= 20 ){
      coinNumber = coinNumber - 20;
      coinNumber2 = coinNumber2 - 20;
      defaultCoin.innerText = coinNumber;
      defaultCoin2.innerText = coinNumber2;
      alert('📞Anti-Corruption Helpline Calling 106...')
      console.log(coinNumber);
      console.log(coinNumber2);
  }
  else{
    alert('Not Enough Balance');
  }
});
c7Call.addEventListener("click", function(){
  if(coinNumber >= 20 ){
      coinNumber = coinNumber - 20;
      coinNumber2 = coinNumber2 - 20;
      defaultCoin.innerText = coinNumber;
      defaultCoin2.innerText = coinNumber2;
      alert('📞Electricity Helpline Calling 16216...')
      console.log(coinNumber);
      console.log(coinNumber2);
  }
  else{
    alert('Not Enough Balance');
  }
});
c8Call.addEventListener("click", function(){
  if(coinNumber >= 20 ){
      coinNumber = coinNumber - 20;
      coinNumber2 = coinNumber2 - 20;
      defaultCoin.innerText = coinNumber;
      defaultCoin2.innerText = coinNumber2;
      alert('📞BRAC Helpline Calling 16445...')
      console.log(coinNumber);
      console.log(coinNumber2);
  }
  else{
    alert('Not Enough Balance');
  }
});
c9Call.addEventListener("click", function(){
  if(coinNumber >= 20 ){
      coinNumber = coinNumber - 20;
      coinNumber2 = coinNumber2 - 20;
      defaultCoin.innerText = coinNumber;
      defaultCoin2.innerText = coinNumber2;
      alert('📞Bangladesh Railway Helpline Calling 163...')
      console.log(coinNumber);
      console.log(coinNumber2);
  }
  else{
    alert('❌Not Enough Balance');
  }
});
