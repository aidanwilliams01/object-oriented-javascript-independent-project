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

function Order(currentPrice) {
  this.currentPrice = currentPrice;
}

Order.prototype.calculatePrice = function(pizzaPrice) {
  this.currentPrice += pizzaPrice;
  return this.currentPrice;
}

function onPageLoad() {
  const form = document.querySelector("form");
  const myOrder = new Order(0);
  function formSubmission(event) {
    event.preventDefault();
    const size = document.querySelector("input[name='size']:checked").value;
    const toppings = document.querySelectorAll("input[name='toppings']:checked");
    const myPizza = new Pizza(toppings, size);
    const pizzaPrice = myPizza.calculatePrice();
    document.querySelector("p").innerText = `Price: $${myOrder.calculatePrice(pizzaPrice)}`;
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad);