const buttonElement = document.getElementById("button");

let index = 0;

const colors = [1, 2, 3];

const changeColor = () => {
  if (colors[index] === 1) {
    buttonElement.classList.add("btn-yellow");
  } else if (colors[index] === 2) {
    buttonElement.classList.add("btn-green");
  } else if (colors[index] === 3) {
    buttonElement.classList.remove("btn-yellow");
    buttonElement.classList.remove("btn-green");
  }
  index = index >= colors.length - 1 ? 0 : index + 1;
};

buttonElement.addEventListener("click", changeColor);

// Bonus part: changes colour every 10 minutes
setInterval(changeColor, 10000);
