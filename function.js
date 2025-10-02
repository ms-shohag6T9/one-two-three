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