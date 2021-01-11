const { count } = require("console");

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

module.exports = countLetters
