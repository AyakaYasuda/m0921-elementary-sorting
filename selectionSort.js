'use strict';

const numbers = [66, 44, 77, 99, 33, 11, 22, 333, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);
