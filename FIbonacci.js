function printFibonacci (n) {
  var arr = n > 0 ? [1] : [];
  if (n > 1) {
    for (let index = 1; index < n; index++) {
      arr.push(arr[index - 1] + (index >= 2 ? arr[index - 2] : 0))
    }
    return arr;
  }
}
console.log(printFibonacci(20));