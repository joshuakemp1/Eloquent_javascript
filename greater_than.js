// function greaterThan(input) {
//   return function(number)
//   if (number < input) {
//     return false;
//   }
//     return true;
// }

// console.log(45);


function greaterThan(input) {
  return function(number) {
    return number > input;
  };
}

var greaterThanTen = greaterThan(10);
console.log(greaterThanTen(9));