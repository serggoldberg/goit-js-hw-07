function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const colorBody = document.querySelector("body");

changeColorButton.addEventListener("click", handleClick);

function handleClick (event){
    const randomColor = getRandomHexColor();
    colorBody.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
}

