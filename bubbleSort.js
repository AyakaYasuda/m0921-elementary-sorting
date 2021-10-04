'use strict';

const numbers = [66, 44, 77, 99, 33, 11, 22, 333, 0];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        // swap the numbers
        const temp = array[j]; // temp: 66
        array[j] = array[j + 1]; // 0: 44
        array[j + 1] = temp; // 1: 66
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
