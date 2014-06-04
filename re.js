function recursion (base, power_of) {
  if (power_of === 0) {
    return 1;
  }
  else {
    return base * recursion(base, power_of - 1);
  }
}

console.log(recursion(2, 10));

