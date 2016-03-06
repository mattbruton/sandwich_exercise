// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
    cheddar: 0.75,
    swiss: 0.80,
    havarti: 0.75
  };

  // Augment the original object with another method
  maker.addCheese = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);