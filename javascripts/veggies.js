// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var vegPrices = {
    lettuce: 0.40,
    tomato: 0.20,
    onion: 0.20
  };

  // Augment the original object with another method
  maker.addVeg = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);