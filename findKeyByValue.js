const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🤑🤑🤑Assertion Passed: ${actual} === ${expected}`) :
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
};

// const findKeyByValue = function(obj, value){
//   for(let key in obj){
//     if(obj[key] === value){
//       return key
//     }
//   }
//   return
// }

const findKeyByValue = function(obj, value){
  let keys = Object.keys(obj)

  for(let key of keys){
    if(obj[key] === value){
      return key
    }
  }
  return 
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);