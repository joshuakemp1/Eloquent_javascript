function makeAddFunction(amount) {
  function add(number) {
    console.log(number);
    console.log(amount);
    return number + amount;
  }
  return add;
}

var addTwo = makeAddFunction(2);
// var addFive = makeAddFunction(5);
console.log(addTwo(9));
 // + addFive(1));