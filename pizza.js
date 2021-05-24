function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);
var pizza3 = pizzaOven("thin crust", "marinara", ["mozzarella", "feta", "cheddar"], ["peppers", "olives", "onions"]);
console.log(pizza3);
var pizza4 = pizzaOven("cauliflower", "marinara", ["vegan gouda"], ["pepper", "olives", "onions", "banana peppers"]);
console.log(pizza4);

function randomPizza() {
    var options = {
        "crustType": function() {
            var crusts = ["deep dish", "handtossed", "thin crust", "caulifloweer"];
            var randomCrust = crusts[Math.floor(Math.random()*crusts.length)];
            return randomCrust;
        },
        "sauceType": function() {
            var sauces = ["marinara", "BBQ", "no sauce"];
            var randomSauce = sauces[Math.floor(Math.random()*sauces.length)];
            return randomSauce;
        },
        "cheeses": function() {
            var cheeses = ["mozzarella", "feta", "cheddar", "vegan gouda"];
            var randomCheese = cheeses[Math.floor(Math.random()*cheeses.length)];
            return randomCheese;
        },
        "toppings": function() {
            var toppings = ["pepper", "olives", "onions", "mushrooms", "banana peppers", "spinach"];
            var randomtopping = toppings[Math.floor(Math.random()*toppings.length)];
            return randomtopping;
        },
    }
    var crust = options.crustType();
    var sauce = options.sauceType();
    var cheese = options.cheeses();
    var toppings = options.toppings();
    console.log(crust, sauce, cheese, toppings);
}
console.log(randomPizza());