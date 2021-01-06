// const flatten = (arr) => {
//   return arr.reduce((accumulator, value) => accumulator.concat(value), [])
  
// }

const flatten = function(arr){
  let newArr = []

  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      for(let j = 0; j < arr[i].length; j++){
        newArr.push(arr[i][j])
      }
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(flatten([1, [2], [3, 3, 3, [3, 2, 5]]]))