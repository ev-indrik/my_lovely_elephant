function prompts() {
  let name = prompt("Hi! What is your name?");
  let color = prompt("What is your favourite color?");
  let treatment = prompt("Are you hungry? Y/N");

  let colorLower = color.toLowerCase();
  let treatmentLower = treatment.toLocaleLowerCase();

  if (treatmentLower === "yes" || treatmentLower === "y") {
    alert(
      `${name}! Your hug is sent to the cuttiest ${colorLower} Elephant we've found!🐘 While treat yourself 🍩🍩🍩!`
    );
  } else {
    alert(
      `${name}! Your hug is sent to the cuttiest ${colorLower} Elephant we've found!🐘 While you're not hungry, we hope you'll share a smile with us 🥰`
    );
  }
}

function chooseElephantButton() {
  cover.classList.remove("active");
  setTimeout(prompts, 200);
}

let elephantButton = document.querySelector(".positive-answer");
elephantButton.addEventListener("click", chooseElephantButton);

let whaleButton = document.querySelector(".negative-answer");
let cover = document.querySelector(".cover");
let modal = document.querySelector(".modal");

whaleButton.addEventListener("click", function () {
  cover.classList.add("active");
});
cover.addEventListener("click", (event) => {
  event.stopPropagation();
  cover.classList.remove("active");
});
modal.addEventListener("click", function (event) {
  event.stopPropagation();
});

let elephantChoice = document.querySelector(".elephant-answer");
let whaleChoice = document.querySelector(".whale-answer");

elephantChoice.addEventListener("click", function () {
  chooseElephantButton();
});

let jumper = document.querySelector(".jumper");
whaleChoice.addEventListener("click", function () {
  cover.classList.remove("active");
  jumper.classList.add("active");
});

jumper.addEventListener("click", function () {
  jumper.classList.remove("active");
});
