# _Pizza Parlor_

#### By _**Aidan Williams**_

#### _An online ordering page for a pizza parlor._

## Technologies Used

* _HTML_
* _Javascript_

## Description

_A page where users can add pizzas to an online order after selecting size and toppings, view each item in their order, and see the total price._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser._

## Known Bugs

* _No known bugs._

## License

_[GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License)_

Copyright (c) _2023_ _Aidan Williams_

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.prototype.calculatePrice()

Test: It should return the price of a given pizza object.
Code: myPizza.calculatePrice()
Expected output: 21

Test: It should return the price of a given pizza object using an updated price formula.
Code: myPizza.calculatePrice()
Expected output: 19

Describe: Order()

Test: "It should return an Order object with one property for the current price"
Code: const myOrder = new Order(0);
Expected Output: Order { currentPrice: 0 }

Describe: Order.prototype.calculatePrice()

Test: It should return the price of the order.
Code: myOrder.calculatePrice(21)
Expected output: 21