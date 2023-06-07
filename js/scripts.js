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

function handleFormSubmission(event) {
  event.preventDefault();
  const size = document.querySelector("input[name='size']:checked").value;
  const toppings = document.querySelectorAll("input[name='toppings']:checked");
  const myPizza = new Pizza(toppings, size);
  document.querySelector("p").innerText = `Price: $${myPizza.calculatePrice()}`;
}

window.addEventListener("load", function () {
  const myOrder = Order(0);
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
});