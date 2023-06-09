function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === "large") {
    price = 20;
  }
  else if (this.size === "medium") {
    price = 15;
  }
  else {
    price = 10;
  }
  price += (3 * this.toppings.length);
  return price;
}

function Order(currentPrice, pizzas) {
  this.currentPrice = currentPrice;
  this.pizzas = pizzas;
}

Order.prototype.calculatePrice = function(pizzaPrice) {
  this.currentPrice += pizzaPrice;
  this.pizzas += 1;
  return this.currentPrice;
}

function onPageLoad() {
  const form = document.querySelector("form");
  const myOrder = new Order(0, 0);
  function formSubmission(event) {
    event.preventDefault();
    const size = document.querySelector("input[name='size']:checked").value;
    const toppings = document.querySelectorAll("input[name='toppings']:checked");
    const myPizza = new Pizza(toppings, size);
    const pizzaPrice = myPizza.calculatePrice();
    const brElement = document.createElement("br");
    const brElement2 = document.createElement("br");
    const brElement3 = document.createElement("br");
    document.querySelector("p#price").innerText = `Price: $${myOrder.calculatePrice(pizzaPrice)}`;
    document.querySelector("p#pizzas").append(`Pizza ${myOrder.pizzas}`);
    document.querySelector("p#pizzas").append(brElement);
    myPizza.toppings.forEach(topping => {
      document.querySelector("p#pizzas").append(`${topping.value}, `);
    });
    document.querySelector("p#pizzas").append(`${myPizza.size}, $${pizzaPrice}`);
    document.querySelector("p#pizzas").append(brElement2);
    document.querySelector("p#pizzas").append(brElement3);
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad);