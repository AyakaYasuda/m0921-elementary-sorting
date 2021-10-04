'use strict';

const numbers = [66, 44, 77, 99, 33, 11, 22, 333, 0];
const numbers2 = [85, 52, 105, 26];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      if (array[i] < array[i - 1]) {
        for (let j = 0; j < i; j++) {
          if (array[i] < array[j]) {
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);

insertionSort(numbers2);
console.log(numbers2);

// i = 1: [44, 66, 77, 99, 33, 11, 22, 333, 0]
// i = 2: [44, 66, 77, 99, 33, 11, 22, 333, 0]
// i = 3: [44, 66, 77, 99, 33, 11, 22, 333, 0]
// i = 4: [33, 44, 66, 77, 99, 11, 22, 333, 0]
// i = 5: [11, 33, 44, 66, 77, 99, 22, 333, 0]
// i = 6: [11, 22, 33, 44, 66, 77, 99, 333, 0]
// i = 7: [11, 22, 33, 44, 66, 77, 99, 333, 0]
// i = 8: [0, 11, 22, 33, 44, 66, 77, 99, 333]
