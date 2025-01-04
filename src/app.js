import { isValid } from "./validator/validator";
import showCard from "./showcard/showcard";

const btn = document.querySelector(".btn");
const input = document.querySelector(".input-field");
const valid = document.querySelector(".valid");
const invalid = document.querySelector(".invalid");

btn.addEventListener("click", checkNumber);

input.addEventListener("input", () => {
  displayCard();

  if (input.value === "") {
    hideMessage();
  }
});

function checkNumber() {
  const number = input.value.replace(/\D/g);

  if (isValid(number)) {
    valid.classList.add("show_message");
    invalid.classList.remove("show_message");
  } else {
    valid.classList.remove("show_message");
    invalid.classList.add("show_message");
  }
}

function displayCard() {
  const cards = document.querySelectorAll(".card");
  const number = input.value;
  const validCard = showCard(number);

  cards.forEach((card) => {
    if (card.classList.contains(validCard)) {
      card.classList.remove("dark_card");
    } else if (number === "") {
      card.classList.remove("dark_card");
    } else {
      card.classList.add("dark_card");
    }
  });
}

function hideMessage() {
  valid.classList.remove("show_message");
  invalid.classList.remove("show_message");
}