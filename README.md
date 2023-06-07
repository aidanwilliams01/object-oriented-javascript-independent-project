Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.prototype.calculatePrice()

Test: It should return the price of a given pizza object.
Code: myPizza.calculatePrice()
Expected output: 21

Describe: Order()

Test: "It should return an Order object with one property for the current price"
Code: const myOrder = new Order(0);
Expected Output: Order { currentPrice: 0 }