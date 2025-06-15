// 1
const categories = document.querySelectorAll("#categories .item")
console.log(`кількість категорій: ${categories.length}`);
const headersList = document.querySelectorAll("#categories .item > h2")

categories.forEach(category => {
  const title = category.querySelector("h2").textContent; // взяв категорію, тобто лі айтем, але краще катрегорію, бо завдання сформулюванно трішки заплутано
  const itemsAmount = category.querySelectorAll('.item li').length

  console.log(`Amount of titles: ${title}`);
  console.log(`Amount of itemsAmount ${itemsAmount}`);
})

// 2
const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];
console.log(ingredients[1]);

const ingredientsList = document.querySelector("#ingredients")

for(let i = 0; i < ingredients.length; i+=1) {
  ingredientsList.insertAdjacentHTML("beforeend", `<li>${ingredients[i]}</li>`);
}

// 3 

const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

const gallery = document.querySelector("#gallery")

for(const {url , alt} of images){
  const image = document.createElement("img");
  image.url = url;
  image.alt = alt;
  gallery.append(image)
}

// 4

const counter = document.querySelector("#counter") 
const span = document.querySelector("#value")
let value = 0;

const onBtnClick = (event) => {
  const action = event.target.dataset.action;
  if(action === "increment") {
    value += 1;
  } else if(action === "decrement"){
    value -= 1;
  }
  span.textContent = value;
}

counter.addEventListener("click", onBtnClick)


