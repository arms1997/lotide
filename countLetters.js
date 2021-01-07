const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🤑🤑🤑Assertion Passed: ${actual} === ${expected}`) :
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string){
  let noSpaces = string.split(' ').join('')

  let obj = {};

  for(let value of noSpaces){
    if(value === ' '){

    }
    else if(obj[value]){
      obj[value] += 1;
    }else{
      obj[value] = 1
    };
  };
  
  return obj
};

console.log(countLetters('lighthouse in the house'))
let results = countLetters('lighthouse in the house')
console.log(assertEqual(results['h'], 4))