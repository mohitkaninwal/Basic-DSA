// Linear Searching
// complexity -> O(n)

let arr = [1, 2, 4, 5, 6, 41, 311, 12];
let find = 6;

function linearSearching() {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == find) {
      return i;
    }
  }
  return false;
}

console.log(linearSearching());

// Binary Search
// complexity -> O(log n)

let arr2 = [1, 2, 3, 4, 5, 6];
let low = 0;
let high = arr2.length - 1;
let desiredEl = 4;
let pos = undefined;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  if (arr2[mid] === desiredEl) {
    pos = mid;
    break;
  } else if (desiredEl < arr2[mid]) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}

if (pos !== undefined) {
  console.log(`Element found at index ${pos}`);
} else {
  console.log("Element not found");
}
