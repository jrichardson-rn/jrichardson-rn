// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  // CODE HERE
  // declare output variable for odd numbers
  const result = [];
  // iterate through array
  for (let i = 0; i < array.length; i++) {
    // if number odd push to output variable
    if (array[i] % 2 !== 0) {
      result.push(array[i]);
    }
  }
  //return output array
  return result;
}
//console.log(returnOdds([1,2,3,4,5,6,7]))

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  // CODE HERE
  // filter array to produce  new array with evens
  return array.filter((x) => x % 2 === 0);
}
//console.log(returnEvens([1,2,3,4,5,6,7]))

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  // CODE HERE
  // sort to return array of lowest to highest
  const result = array.sort((a, b) => a - b);
  // return highest value in the array
  return result[result.length - 1];
}

//console.log(findMax([1,25,6,3, -100]))
/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  // CODE HERE
  // create output variable for modified string
  // 1.turn string into array
  // 2.Cond Statement - to produce new array without spaces
  // 3.turn array back into string
  let result = string.split("");
  if (result[0] === " " || result[result.length - 1] === " ") {
    result.pop();
    result.shift();
  }
  result = result.join("");
  // return output variable
  return result;
}

// console.log(trim(' hello '))
// console.log(trim(' hello from the '))

// under the hood, a JavaScript array is a specific type of object in which values are paired with sequentially numbered keys.
// the "Array" object also contains a number of methods that give arrays their functionality.
// the below function should return an empty object that has the behavior and functionality of an array. this object should have the following methods:
// push(val) adds val to the end
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and create an object that has those methods

// CODE HERE
function createArray() {
  const arrObj = {};
  let countArr = [];
  let pCount = countArr.length - 1;

  Object.prototype.unshift = function (num) {
    if (countArr[0] !== undefined) {
      countArr.unshift(countArr[0] - 1);
      return (this[countArr[0]] = num);
    } else {
      countArr.unshift(0);
      return (this[0] = num);
    }
  };

  Object.prototype.shift = function () {
    const shift1 = this[countArr[0]];
    delete this[countArr[0]];
    countArr.shift();
    return shift1;
  };

  Object.prototype.push = function (num) {
    countArr.push((pCount += 1));
    return (this[pCount] = num);
  };

  Object.prototype.pop = function () {
    const pop1 = countArr[countArr.length - 1];
    delete this[pCount];
    countArr.pop();
    return pop1;
  };

  return countArr;
}
