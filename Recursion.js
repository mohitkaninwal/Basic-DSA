// Recursion

function apple(x) {
  console.log(x);
  if (x < 10) apple(x + 1);
}
let data = 0;
apple(data);

function factorial(item) {
  if (item == 0 || item == 1) return 1;
  else {
    return item * factorial(item - 1);
  }
}
let x1 = 5;
console.log(factorial(x1));

///////////////////////  Reverse Array using Recursion
let data1 = [1, 2, 3, 4, 5];
function customReverse(data1, start, end) {
    console.log(data1);
  if (start <= end) {
    let temp = data1[start];
    data1[start] = data1[end];
    data1[end] = temp;
    customReverse(data1, start + 1, end - 1);
  }
}
customReverse(data1, 0, data1.length - 1);
