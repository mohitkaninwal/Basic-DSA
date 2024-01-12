let arr1 = [1, 2, 5, 7];
let arr2 = [2, 4, 6, 8, 10];
let mergedArray = [];

let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    mergedArray.push(arr1[i]);
    i++;
  } else if (arr1[i] > arr2[j]) {
    mergedArray.push(arr2[j]);
    j++;
  } else {
    // Handles the case when arr1[i] is equal to arr2[j]
    mergedArray.push(arr1[i]);
    i++;
    j++;
  }
}

// If there are remaining elements in arr1, append them to mergedArray
while (i < arr1.length) {
  mergedArray.push(arr1[i]);
  i++;
}

// If there are remaining elements in arr2, append them to mergedArray
while (j < arr2.length) {
  mergedArray.push(arr2[j]);
  j++;
}

console.log(mergedArray);
