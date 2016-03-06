// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
    white: 2.50,
    wheat: 2.50,
    raisin: 2.75
  };

  // Augment the original object with another method
  maker.addBread = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);