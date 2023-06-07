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