

//  1
let currentIndex = 0
const imagesList = document.querySelectorAll(".gallery .image")


function scrollToImage(index) {
  imagesList[index].scrollIntoView({
    behavior: "smooth",
    inline: "center"
  });
}

function onKeydownScroll(event) {
  if (event.code === "ArrowRight") {
    if (currentIndex < imagesList.length - 1) {
      currentIndex += 1;
      scrollToImage(currentIndex);
    }
  } else if (event.code === "ArrowLeft") {
    if (currentIndex > 0) {
      currentIndex -= 1;
      scrollToImage(currentIndex);
    }
  }
}

document.addEventListener("keydown", onKeydownScroll)

// 2

const boxes = document.querySelector("#boxes")
const input = document.querySelector("input[type = 'number']")
const controls = document.querySelector("#controls")
// const renderBtn = document.querySelector('button[data-action = "render"]')
// const destroyBtn = document.querySelector('button[data-action = "destroy"]')
let sizeValue = 30;


const getRandomRGBColor = function() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  console.log(r, g, b);
  return `rgb(${r}, ${g}, ${b})`;
};

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    console.log(box);
    const size = sizeValue + i * 10;
    console.log(size);
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomRGBColor();
    box.style.margin = "5px";
    boxes.append(box);
  }
};

const boxHandler = (event) => {
  const action = event.target.dataset.action;

  const amount = Number(input.value); 

  if (action === "render") {
    createBoxes(amount);
  } else if (action === "destroy") {
    boxes.innerHTML = ""; 
  }
}

controls.addEventListener("click", boxHandler)
