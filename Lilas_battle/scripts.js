let player1Rat = document.querySelector("#player1Rat");


player1Rat.addEventListener("click", choiceRecord);

function choiceRecord() {
  document.querySelector("#battleZone").innerHTML = "Hello World";
}