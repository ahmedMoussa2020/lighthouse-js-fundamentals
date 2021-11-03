function isOdd(n) {
  return Boolean(n % 2);
}

function findSum(no) {
  let sum = 0;

  for (var i = 0; i < no; i++) {
    if (isOdd(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log("3 is odd: " + (3));
console.log("8 is odd: " + (8));