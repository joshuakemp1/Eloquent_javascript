function power(base, exponent) {
  if (exponent === 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 10));


function power(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power(2, 10));

These 2 functions do the EXACT SAME THING....just made that connection and it blew my mind.