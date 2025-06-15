// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. 
// При обиранніна будь якого колір фону боді змінюється відповідно

const formElement = document.querySelector("form")


const onColorChange = (event) => {
  if(event.target.value === "red") {
    document.body.style.backgroundColor = "red";
  } 
    else if(event.target.value === "white") {
    document.body.style.backgroundColor = "white";
  } 
    else if(event.target.value === "green") {
    document.body.style.backgroundColor = "green";
  } 
}

formElement.addEventListener("change", onColorChange)

// 2

const inputText = document.querySelector("#name-input")
const span = document.querySelector("#name-output")

const onInputText = (event) => {
   span.textContent = event.currentTarget.value
}

inputText.addEventListener("input", onInputText)


// Напиши скрипт, який би при втраті фокуса на інпут, 
// перевіряв його вміст на правильну кількість символів.

const inputLength = document.querySelector("#validation-input")

const onChangeInput = (event) =>{
  if(event.target.value.length < Number(inputLength.dataset.length)) {  
    event.target.classList.add("invalid")
    event.target.classList.remove("valid")
  } else {
    event.target.classList.add("valid")
    event.target.classList.remove("invalid")
  }
}

inputLength.addEventListener("change", onChangeInput)

// 3
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text оновлюючи властивість font-size. 
// В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const inputFontSizeControl = document.querySelector("#font-size-control")
const spanText = document.querySelector("#text")

const onInputRange = (event) => {
  spanText.style.fontSize = `${event.target.value}px`;
}

inputFontSizeControl.addEventListener("input", onInputRange)