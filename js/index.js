// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if(state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    }
    else {
      oneMushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if(state.greenPeppers) {
      onePepper.style.visibility = "visible";
    }
    else {
      onePepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce .sauce-white').forEach((oneSauce) => {
    if(state.whiteSauce) {
      oneSauce.style.visibility = "visible";
    }
    else {
      oneSauce.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust .crust-gluten-free').forEach((one) => {
    if(state.glutenFreeCrust) {
      one.style.visibility = "visible";
    }
    else {
      one.style.visibility = "hidden";
    }
  })
}
function setActive(button, state) {
  if(!state) {
    button.classList.remove("active");
  }
  else {
    if(!button.classList.contains("active")) {
      button.classList.add("active");
    }
  }
}
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pButton = document.querySelector('.btn.btn-pepperoni');
  let mButton = document.querySelector('.btn.btn-mushrooms')
  let gButton = document.querySelector('.btn.btn-green-peppers')
  let sButton = document.querySelector('.btn.btn-sauce')
  let cButton = document.querySelector('.btn.btn-crust')
  setActive(pButton, state.pepperoni);
  setActive(mButton, state.mushrooms);
  setActive(gButton, state.greenPeppers);
  setActive(sButton, state.whiteSauce);
  setActive(cButton, state.glutenFreeCrust);
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pep = state.pepperoni;
  let mushroom = state.mushrooms;
  let peppers = state.greenPeppers;
  let sauce = state.whiteSauce;
  let crust = state.glutenFreeCrust;
  let price = basePrice + ingredients.pepperoni.price*pep + ingredients.mushrooms.price*mushroom + ingredients.greenPeppers.price*peppers + ingredients.whiteSauce.price*sauce + ingredients.glutenFreeCrust.price*crust;
  let total = document.getElementById("total-price");
  total.innerHTML = "$" + String(price);
  let textPep = document.getElementById("pep-price");
  let lis = ['<li id="pep-price">\$1 pepperoni</li>',
        '<li id="mushroom-price">\$1 mushrooms</li>',
        '<li id="pepper-price">\$1 green peppers</li>',
        '<li id="sauce-price">\$3 white sauce</li>',
        '<li id="crust-price">$5 gluten-free crust</li>']
  let prices = document.querySelector("#prices");
  console.log(prices);
  let states = [pep,mushroom,peppers,sauce,crust];
  let text = "";

  for(let i = 0; i < 5; i++) {
    if(states[i]) {
      text += lis[i];
    }
  }
  prices.innerHTML = text;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});