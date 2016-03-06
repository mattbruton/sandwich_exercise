// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condiPrices = {
    mayo: 0.25,
    mustard: 0.25,
    special: 0.40
  };

  // Augment the original object with another method
  maker.addCondi = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);