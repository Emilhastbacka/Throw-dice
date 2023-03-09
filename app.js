function rollDice() {
    var dice = document.getElementById("dice");
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    //dice.innerHTML = randomNumber;
    if (randomNumber == 1) dice.src = "img/dobbelsteen1_0.png"
    if (randomNumber == 2) dice.src = "img/dobbelsteen2_0.png"
    if (randomNumber == 3) dice.src = "img/dobbelsteen3_0.png"
    if (randomNumber == 4) dice.src = "img/dobbelsteen4_0.png"
    if (randomNumber == 5) dice.src = "img/dobbelsteen5_0.png"
    if (randomNumber == 6) dice.src = "img/dobbelsteen6_0.png"
}