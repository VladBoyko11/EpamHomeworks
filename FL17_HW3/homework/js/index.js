'use strict';

/**
 * Class
 * @constructor
 * @param size - size of pizza
 * @param type - type of pizza
 * @throws {PizzaException} - in case of improper use
 */
const priceSmallPizza = 50;
const priceMediumPizza = 50;
const priceLargePizza = 50;
const priceVeggiePizza = 50;
const priceMargheritaPizza = 60;
const pricePepperoniPizza = 70;
const priceCheese = 7;
const priceTomatoes = 5;
const priceMeat = 9;

function Pizza(size, type) {
  this.size = null;
  this.type = null;
  this.extraIngredient = [];
  this.price = 0;
  try {
    this.size = size;
    this.type = type;
    if (this.size === undefined && this.type === undefined) {
      throw new PizzaException('Required two arguments, given: 0');
    }
    if (this.size !== undefined && this.type === undefined) {
      throw new PizzaException('Required two arguments, given: 1');
    }
    if (this.size === undefined && this.type !== undefined) {
      throw new PizzaException('Required two arguments, given: 1');
    }
    if(!Pizza.allowedSizes.includes(this.size)){
      throw new PizzaException('Invalid type');
    }
    if(!Pizza.allowedTypes.includes(this.type)){
      throw new PizzaException('Invalid type');
    }
    this.price = this.size.price
    this.price = this.price + this.type.price
  } catch (error) {
    console.log(error.log);
  }
  this.addExtraIngredient = function (ingredient) {
    try {
      if (arguments.length !== 1) {
        throw new PizzaException(
          `Required one argument, given: ${arguments.length}`
        );
      }
      if (!Pizza.allowedExtraIngredients.includes(ingredient)) {
        throw new PizzaException('Invalid ingredient');
      }
      if (this.extraIngredient.includes(ingredient.name)) {
        throw new PizzaException('Duplicate ingredient');
      }
    } catch (error) {
      console.log(error.log);
    }
    this.extraIngredient[this.extraIngredient.length] = ingredient.name;
    this.price = this.price + ingredient.price
  };
  this.getPrice = function () {
    return this.price;
  };
  this.getSize = function () {
    return this.size;
  };
  this.removeExtraIngredient = function (ingredient) {
    try {
      if (arguments.length !== 1) {
        throw new PizzaException(
          `Required one argument, given: ${arguments.length}`
        );
      }
      if (!Pizza.allowedExtraIngredients.includes(ingredient)) {
        throw new PizzaException('Duplicate ingredient');
      }
    } catch (error) {
      console.log(error.log);
    }
    for (let i = 0; i < this.extraIngredient.length; i++) {
      if (ingredient.name === this.extraIngredient[i]) {
        this.price = this.price - ingredient.price
        this.extraIngredient.splice(i, 1);
      }
    }
  };
  this.getExtraIngredients = function () {
    return this.extraIngredient;
  };
  this.getPizzaInfo = function () {
    return `Size: ${this.size.name}, type: ${this.type.name}; extra ingredients: ${this.extraIngredient}; 
price: ${this.price}UAH.`;
  };
}
/* Sizes, types and extra ingredients */
Pizza.SIZE_S = {name: 'SMALL', price: priceSmallPizza};
Pizza.SIZE_M = {name: 'MEDIUM', price: priceMediumPizza};
Pizza.SIZE_L = {name: 'LARGE', price: priceLargePizza};
Pizza.TYPE_VEGGIE = {name: 'VEGGIE', price: priceVeggiePizza};
Pizza.TYPE_MARGHERITA = {name: 'MARGHERITA', price: priceMargheritaPizza};
Pizza.TYPE_PEPPERONI = {name: 'PEPPERONI', price: pricePepperoniPizza};
Pizza.EXTRA_TOMATOES = {name: 'TOMATOES', price: priceTomatoes};
Pizza.EXTRA_CHEESE = {name: 'CHEESE', price: priceCheese};
Pizza.EXTRA_MEAT = {name: 'MEAT', price: priceMeat};
/* Allowed properties */
Pizza.allowedSizes = [Pizza.SIZE_S, Pizza.SIZE_M, Pizza.SIZE_L];
Pizza.allowedTypes = [Pizza.TYPE_VEGGIE, Pizza.TYPE_MARGHERITA, Pizza.TYPE_PEPPERONI];
Pizza.allowedExtraIngredients = [Pizza.EXTRA_TOMATOES, Pizza.EXTRA_CHEESE, Pizza.EXTRA_MEAT];
/**
 * Provides information about an error while working with a pizza.
 * details are stored in the log property.
 * @constructor
 */
function PizzaException(errorMessage) {
  this.log = errorMessage;
}

/* It should work */
// small pizza, type: veggie
let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// add extra meat
pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
// check price
console.log(`Price: ${pizza.getPrice()} UAH`); //=> Price: 109 UAH
// add extra corn
pizza.addExtraIngredient(Pizza.EXTRA_CHEESE);
// add extra corn
pizza.addExtraIngredient(Pizza.EXTRA_TOMATOES);
// check price
console.log(`Price with extra ingredients: ${pizza.getPrice()} UAH`); // Price: 121 UAH
// check pizza size
console.log(`Is pizza large: ${pizza.getSize() === Pizza.SIZE_L}`); //=> Is pizza large: false
// remove extra ingredient
pizza.removeExtraIngredient(Pizza.EXTRA_CHEESE);
console.log(`Extra ingredients: ${pizza.getExtraIngredients().length}`); //=> Extra ingredients: 2
console.log(pizza.getPizzaInfo()); //=> Size: SMALL, type: VEGGIE; extra ingredients: MEAT,TOMATOES; price: 114UAH.

// examples of errors
let pizza2 = new Pizza(Pizza.SIZE_S); // => Required two arguments, given: 1
let pizza3 = new Pizza(Pizza.SIZE_S, Pizza.SIZE_S); // => Invalid type
let pizza4 = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
pizza4.addExtraIngredient(Pizza.EXTRA_MEAT);
pizza4.addExtraIngredient(Pizza.EXTRA_MEAT); // => Duplicate ingredient

let pizza5 = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
pizza5.addExtraIngredient('MEATS'); // => Invalid ingredient
