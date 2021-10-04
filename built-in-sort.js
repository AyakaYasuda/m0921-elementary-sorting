'use strict';

const letters = ['f', 'u', 'e', 'm', 'a', 'w'];
const numbers = [1, 11, 74, 23, 45, 87, 30, 99, 7];
const spanish = ['máquina', 'único', 'árbol', 'lápiz'];

console.log(letters);
letters.sort();
console.log(letters);

// console.log(numbers);
// numbers.sort();
// console.log(numbers); // not accurate

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

spanish.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(spanish);